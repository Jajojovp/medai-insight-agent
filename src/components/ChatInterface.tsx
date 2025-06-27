import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Brain, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Message, PatientData, ChatStep, DiseaseType } from "@/types/chat";
import MessageComponent from "@/components/chat/MessageComponent";
import ProgressIndicator from "@/components/chat/ProgressIndicator";
import WebhookConfig from "@/components/chat/WebhookConfig";
import DiseaseSelector from "@/components/chat/DiseaseSelector";
import { generateMockAnalysis, generateEmailReport, parseDemographics } from "@/utils/analysisUtils";

const ChatInterface = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: language === 'es' ? 'Bienvenido al Sistema de Análisis Predictivo MedAI. Selecciona el tipo de análisis que deseas realizar.' :
               language === 'fr' ? 'Bienvenue dans le Système d\'Analyse Prédictive MedAI. Sélectionnez le type d\'analyse que vous souhaitez effectuer.' :
               'Welcome to MedAI Predictive Analysis System. Select the type of analysis you want to perform.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [patientData, setPatientData] = useState<PatientData>({
    symptoms: [],
    labResults: [],
    demographics: {}
  });
  const [currentStep, setCurrentStep] = useState<ChatStep>('diseaseSelection');
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | null>(null);
  const [n8nWebhook, setN8nWebhook] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (type: 'user' | 'bot' | 'system', content: string, data?: any) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      data
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleDiseaseSelection = (disease: DiseaseType) => {
    setSelectedDisease(disease);
    setPatientData(prev => ({ ...prev, diseaseType: disease }));
    
    const diseaseNames = {
      'diabetes': { es: 'Diabetes Tipo 2', en: 'Type 2 Diabetes', fr: 'Diabète Type 2' },
      'breast-cancer': { es: 'Cáncer de Mama', en: 'Breast Cancer', fr: 'Cancer du Sein' },
      'prostate-cancer': { es: 'Cáncer de Próstata', en: 'Prostate Cancer', fr: 'Cancer de la Prostate' },
      'heart-disease': { es: 'Enfermedad Cardíaca', en: 'Heart Disease', fr: 'Maladie Cardiaque' },
      'stroke': { es: 'Accidente Cerebrovascular', en: 'Stroke', fr: 'AVC' },
      'kidney-disease': { es: 'Enfermedad Renal', en: 'Kidney Disease', fr: 'Maladie Rénale' },
      'pancreatic-cancer': { es: 'Cáncer de Páncreas', en: 'Pancreatic Cancer', fr: 'Cancer du Pancréas' }
    };

    const diseaseName = diseaseNames[disease][language as keyof typeof diseaseNames[typeof disease]];
    
    addMessage('system', 
      language === 'es' ? `Análisis seleccionado: ${diseaseName}` :
      language === 'fr' ? `Analyse sélectionnée: ${diseaseName}` :
      `Selected analysis: ${diseaseName}`
    );
    
    addMessage('bot', 
      language === 'es' ? 'Perfecto. Ahora describe los síntomas del paciente (separados por comas):' :
      language === 'fr' ? 'Parfait. Maintenant décrivez les symptômes du patient (séparés par des virgules) :' :
      'Perfect. Now describe the patient symptoms (separated by commas):'
    );
    
    setCurrentStep('symptoms');
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    addMessage('user', userMessage);
    setInput('');

    await processUserInput(userMessage);
  };

  const processUserInput = async (userInput: string) => {
    switch (currentStep) {
      case 'symptoms':
        const symptoms = userInput.split(',').map(s => s.trim()).filter(s => s);
        setPatientData(prev => ({ ...prev, symptoms }));
        addMessage('bot', 
          language === 'es' ? `Síntomas registrados: ${symptoms.join(', ')}. Ahora proporciona los resultados de laboratorio:` :
          language === 'fr' ? `Symptômes enregistrés: ${symptoms.join(', ')}. Maintenant fournissez les résultats de laboratoire :` :
          `Symptoms recorded: ${symptoms.join(', ')}. Now provide laboratory results:`
        );
        setCurrentStep('labResults');
        break;

      case 'labResults':
        const labResults = userInput.split(',').map(s => s.trim()).filter(s => s);
        setPatientData(prev => ({ ...prev, labResults }));
        addMessage('bot', 
          language === 'es' ? `Resultados registrados: ${labResults.join(', ')}. Datos demográficos del paciente (edad, género, peso) o escribe "saltar":` :
          language === 'fr' ? `Résultats enregistrés: ${labResults.join(', ')}. Données démographiques du patient (âge, sexe, poids) ou écrivez "ignorer" :` :
          `Results recorded: ${labResults.join(', ')}. Patient demographics (age, gender, weight) or type "skip":`
        );
        setCurrentStep('demographics');
        break;

      case 'demographics':
        const skipWords = ['skip', 'saltar', 'ignorer'];
        if (!skipWords.includes(userInput.toLowerCase())) {
          const demographics = parseDemographics(userInput);
          setPatientData(prev => ({ ...prev, demographics }));
        }
        addMessage('bot', 
          language === 'es' ? 'Información completa. Iniciando análisis predictivo...' :
          language === 'fr' ? 'Informations complètes. Début de l\'analyse prédictive...' :
          'Complete information. Starting predictive analysis...'
        );
        setCurrentStep('analysis');
        await performAnalysis();
        break;

      default:
        addMessage('bot', 
          language === 'es' ? 'Puedes iniciar una nueva consulta.' :
          language === 'fr' ? 'Vous pouvez commencer une nouvelle consultation.' :
          'You can start a new consultation.'
        );
    }
  };

  const sendToN8n = async (analysisResults: any) => {
    if (!n8nWebhook) return;

    try {
      const systemMessages = {
        es: {
          sending: 'Enviando resultados a automatización n8n...',
          success: 'Resultados enviados al flujo n8n exitosamente. El reporte PDF será generado y enviado por email.',
          error: 'Error enviando al flujo n8n. Verifique la URL del webhook.'
        },
        en: {
          sending: 'Sending results to n8n automation...',
          success: 'Results sent to n8n workflow successfully. PDF report will be generated and emailed.',
          error: 'Error sending to n8n workflow. Please check the webhook URL.'
        },
        fr: {
          sending: 'Envoi des résultats à l\'automatisation n8n...',
          success: 'Résultats envoyés au flux n8n avec succès. Le rapport PDF sera généré et envoyé par email.',
          error: 'Erreur lors de l\'envoi au flux n8n. Veuillez vérifier l\'URL du webhook.'
        }
      };

      addMessage('system', systemMessages[language as keyof typeof systemMessages].sending);
      
      const emailReport = generateEmailReport(analysisResults, patientData, language);
      
      const payload = {
        patientData,
        analysisResults,
        emailReport,
        language,
        timestamp: new Date().toISOString(),
        source: 'MedAI Platform'
      };

      await fetch(n8nWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });

      addMessage('system', systemMessages[language as keyof typeof systemMessages].success);
      
      toast({
        title: language === 'es' ? 'Éxito' : language === 'fr' ? 'Succès' : 'Success',
        description: systemMessages[language as keyof typeof systemMessages].success,
      });
      
    } catch (error) {
      console.error('n8n webhook error:', error);
      const systemMessages = {
        es: 'Error enviando al flujo n8n. Verifique la URL del webhook.',
        en: 'Error sending to n8n workflow. Please check the webhook URL.',
        fr: 'Erreur lors de l\'envoi au flux n8n. Veuillez vérifier l\'URL du webhook.'
      };
      
      addMessage('system', systemMessages[language as keyof typeof systemMessages]);
      
      toast({
        title: language === 'es' ? 'Error' : 'Erreur',
        description: systemMessages[language as keyof typeof systemMessages],
        variant: "destructive",
      });
    }
  };

  const startNewConsultation = () => {
    setMessages([
      {
        id: Date.now().toString(),
        type: 'bot',
        content: language === 'es' ? 'Nueva consulta iniciada. Selecciona el tipo de análisis:' :
                 language === 'fr' ? 'Nouvelle consultation commencée. Sélectionnez le type d\'analyse :' :
                 'New consultation started. Select the analysis type:',
        timestamp: new Date()
      }
    ]);
    setPatientData({ symptoms: [], labResults: [], demographics: {} });
    setSelectedDisease(null);
    setCurrentStep('diseaseSelection');
  };

  const performAnalysis = async () => {
    if (!selectedDisease) return;
    
    setIsAnalyzing(true);
    
    const analysisMessages = {
      es: [
        'Inicializando análisis de IA...',
        'Ejecutando Modelo 1: Análisis de Riesgo Predictivo...',
        'Ejecutando Modelo 2: Evaluación de Patrones Clínicos...',
        'Ejecutando Modelo 3: Análisis de Machine Learning Avanzado...',
        'Ejecutando Modelo 4: Modelo de Deep Learning...',
        'Ejecutando Modelo 5: Meta-análisis y Validación...',
        'Compilando resultados finales...'
      ],
      en: [
        'Initializing AI analysis...',
        'Running Model 1: Predictive Risk Analysis...',
        'Running Model 2: Clinical Pattern Evaluation...',
        'Running Model 3: Advanced Machine Learning Analysis...',
        'Running Model 4: Deep Learning Model...',
        'Running Model 5: Meta-analysis and Validation...',
        'Compiling final results...'
      ],
      fr: [
        'Initialisation de l\'analyse IA...',
        'Exécution du Modèle 1: Analyse Prédictive des Risques...',
        'Exécution du Modèle 2: Évaluation des Patterns Cliniques...',
        'Exécution du Modèle 3: Analyse ML Avancée...',
        'Exécution du Modèle 4: Modèle d\'Apprentissage Profond...',
        'Exécution du Modèle 5: Méta-analyse et Validation...',
        'Compilation des résultats finaux...'
      ]
    };
    
    try {
      for (const message of analysisMessages[language as keyof typeof analysisMessages]) {
        addMessage('system', message);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      const analysisResults = generateMockAnalysis(language, selectedDisease);
      
      addMessage('bot', 
        language === 'es' ? 'Análisis completado. Aquí están los resultados:' :
        language === 'fr' ? 'Analyse terminée. Voici les résultats :' :
        'Analysis completed. Here are the results:', 
        analysisResults
      );
      
      if (n8nWebhook) {
        await sendToN8n(analysisResults);
      }
      
      setCurrentStep('complete');
      
    } catch (error) {
      console.error('Analysis error:', error);
      const errorMessages = {
        es: 'Lo siento, hubo un error durante el análisis. Por favor, intenta nuevamente.',
        en: 'Sorry, there was an error during analysis. Please try again.',
        fr: 'Désolé, il y a eu une erreur pendant l\'analyse. Veuillez réessayer.'
      };
      addMessage('bot', errorMessages[language as keyof typeof errorMessages]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <span>
              {language === 'es' ? 'Análisis Predictivo Multi-enfermedad' :
               language === 'fr' ? 'Analyse Prédictive Multi-maladies' :
               'Multi-Disease Predictive Analysis'}
            </span>
            {isAnalyzing && (
              <Badge variant="default" className="bg-blue-600 animate-pulse">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                {language === 'es' ? 'Analizando' : language === 'fr' ? 'Analyse' : 'Analyzing'}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WebhookConfig n8nWebhook={n8nWebhook} setN8nWebhook={setN8nWebhook} />

          {currentStep === 'diseaseSelection' && (
            <DiseaseSelector onSelectDisease={handleDiseaseSelection} />
          )}

          <ScrollArea className="h-96 w-full border rounded-lg p-4 mt-4" ref={scrollAreaRef}>
            {messages.map(message => (
              <MessageComponent key={message.id} message={message} />
            ))}
          </ScrollArea>

          {currentStep !== 'diseaseSelection' && (
            <div className="flex space-x-2 mt-4">
              <Textarea
                placeholder={
                  currentStep === 'symptoms' ? (
                    language === 'es' ? 'Describe los síntomas (ej: fatiga, sed excesiva, visión borrosa)' :
                    language === 'fr' ? 'Décrivez les symptômes (ex: fatigue, soif excessive, vision floue)' :
                    'Describe symptoms (e.g: fatigue, excessive thirst, blurred vision)'
                  ) :
                  currentStep === 'labResults' ? (
                    language === 'es' ? 'Resultados de laboratorio (ej: glucosa 180 mg/dl, HbA1c 8.5%)' :
                    language === 'fr' ? 'Résultats de laboratoire (ex: glucose 180 mg/dl, HbA1c 8.5%)' :
                    'Laboratory results (e.g: glucose 180 mg/dl, HbA1c 8.5%)'
                  ) :
                  currentStep === 'demographics' ? (
                    language === 'es' ? 'Datos del paciente (ej: 45 años, mujer, 70 kg) o "saltar"' :
                    language === 'fr' ? 'Données patient (ex: 45 ans, femme, 70 kg) ou "ignorer"' :
                    'Patient data (e.g: 45 years, female, 70 kg) or "skip"'
                  ) :
                  language === 'es' ? 'Consulta completada' :
                  language === 'fr' ? 'Consultation terminée' :
                  'Consultation completed'
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={isAnalyzing || currentStep === 'complete'}
                className="flex-1"
                rows={2}
              />
              <div className="flex flex-col space-y-2">
                <Button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isAnalyzing || currentStep === 'complete'}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
                {currentStep === 'complete' && (
                  <Button 
                    onClick={startNewConsultation}
                    variant="outline"
                    className="text-xs"
                  >
                    {language === 'es' ? 'Nuevo Caso' :
                     language === 'fr' ? 'Nouveau Cas' :
                     'New Case'}
                  </Button>
                )}
              </div>
            </div>
          )}

          <ProgressIndicator currentStep={currentStep} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
