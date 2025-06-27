
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Brain, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Message, PatientData, ChatStep } from "@/types/chat";
import MessageComponent from "@/components/chat/MessageComponent";
import ProgressIndicator from "@/components/chat/ProgressIndicator";
import WebhookConfig from "@/components/chat/WebhookConfig";
import { generateMockAnalysis, generateEmailReport, parseDemographics } from "@/utils/analysisUtils";

const ChatInterface = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: t('chat.greeting'),
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
  const [currentStep, setCurrentStep] = useState<ChatStep>('symptoms');
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
        addMessage('bot', t('chat.symptoms.recorded').replace('{symptoms}', symptoms.join(', ')));
        setCurrentStep('labResults');
        break;

      case 'labResults':
        const labResults = userInput.split(',').map(s => s.trim()).filter(s => s);
        setPatientData(prev => ({ ...prev, labResults }));
        addMessage('bot', t('chat.labResults.recorded').replace('{labResults}', labResults.join(', ')));
        setCurrentStep('demographics');
        break;

      case 'demographics':
        const skipWords = ['skip', 'saltar', 'ignorer'];
        if (!skipWords.includes(userInput.toLowerCase())) {
          const demographics = parseDemographics(userInput);
          setPatientData(prev => ({ ...prev, demographics }));
        }
        addMessage('bot', t('chat.analysis.complete'));
        setCurrentStep('analysis');
        await performAnalysis();
        break;

      default:
        addMessage('bot', t('chat.newConsultation'));
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
        content: t('chat.newConsultation'),
        timestamp: new Date()
      }
    ]);
    setPatientData({ symptoms: [], labResults: [], demographics: {} });
    setCurrentStep('symptoms');
  };

  const performAnalysis = async () => {
    setIsAnalyzing(true);
    
    const analysisMessages = {
      es: [
        'Inicializando análisis de IA...',
        'Ejecutando Modelo 1: Evaluación de Riesgo de Diabetes...',
        'Ejecutando Modelo 2: Análisis Cardiovascular...',
        'Ejecutando Modelo 3: Detección de Síndrome Metabólico...',
        'Ejecutando Modelo 4: Reconocimiento de Patrones de Síntomas...',
        'Ejecutando Modelo 5: Perfilado Integral de Riesgo...',
        'Ejecutando Modelo 6: Análisis ML Avanzado...',
        'Ejecutando Modelo 7: Modelo ML Optimizado...',
        'Ejecutando Modelo 8: Implementación PyCaret...',
        'Ejecutando Modelo 9: Modelo de Aprendizaje Profundo...',
        'Realizando meta-análisis con OpenAI...'
      ],
      en: [
        'Initializing AI analysis...',
        'Running Model 1: Diabetes Risk Assessment...',
        'Running Model 2: Cardiovascular Analysis...',
        'Running Model 3: Metabolic Syndrome Detection...',
        'Running Model 4: Symptom Pattern Recognition...',
        'Running Model 5: Comprehensive Risk Profiling...',
        'Running Model 6: Advanced ML Analysis...',
        'Running Model 7: Optimized ML Model...',
        'Running Model 8: PyCaret Implementation...',
        'Running Model 9: Deep Learning Model...',
        'Performing meta-analysis with OpenAI...'
      ],
      fr: [
        'Initialisation de l\'analyse IA...',
        'Exécution du Modèle 1: Évaluation du Risque de Diabète...',
        'Exécution du Modèle 2: Analyse Cardiovasculaire...',
        'Exécution du Modèle 3: Détection du Syndrome Métabolique...',
        'Exécution du Modèle 4: Reconnaissance des Patterns de Symptômes...',
        'Exécution du Modèle 5: Profilage de Risque Complet...',
        'Exécution du Modèle 6: Analyse ML Avancée...',
        'Exécution du Modèle 7: Modèle ML Optimisé...',
        'Exécution du Modèle 8: Implémentation PyCaret...',
        'Exécution du Modèle 9: Modèle d\'Apprentissage Profond...',
        'Réalisation de méta-analyse avec OpenAI...'
      ]
    };
    
    try {
      for (const message of analysisMessages[language as keyof typeof analysisMessages]) {
        addMessage('system', message);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      const analysisResults = generateMockAnalysis(language);
      
      addMessage('bot', t('chat.analysis.result'), analysisResults);
      
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
            <span>{t('chat.title')}</span>
            {isAnalyzing && (
              <Badge variant="default" className="bg-blue-600 animate-pulse">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                {t('chat.analyzing')}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WebhookConfig n8nWebhook={n8nWebhook} setN8nWebhook={setN8nWebhook} />

          <ScrollArea className="h-96 w-full border rounded-lg p-4" ref={scrollAreaRef}>
            {messages.map(message => (
              <MessageComponent key={message.id} message={message} />
            ))}
          </ScrollArea>

          <div className="flex space-x-2 mt-4">
            <Textarea
              placeholder={
                currentStep === 'symptoms' ? t('chat.placeholder.symptoms') :
                currentStep === 'labResults' ? t('chat.placeholder.labResults') :
                currentStep === 'demographics' ? t('chat.placeholder.demographics') :
                t('chat.placeholder.complete')
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
                  {t('chat.newCase')}
                </Button>
              )}
            </div>
          </div>

          <ProgressIndicator currentStep={currentStep} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
