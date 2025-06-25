
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Bot, 
  User, 
  Brain,
  Activity,
  FileText,
  AlertCircle,
  CheckCircle,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  data?: any;
}

interface PatientData {
  symptoms: string[];
  labResults: string[];
  demographics: {
    age?: number;
    gender?: string;
    weight?: number;
    height?: number;
  };
}

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
  const [currentStep, setCurrentStep] = useState('symptoms');
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

    // Process the message based on current step
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

  const parseDemographics = (input: string) => {
    const demographics: any = {};
    const ageMatch = input.match(/(\d+)\s*(?:years?|yrs?|y\.o\.?|años?|ans?)/i);
    if (ageMatch) demographics.age = parseInt(ageMatch[1]);
    
    const genderMatch = input.match(/\b(male|female|m|f|masculino|femenino|homme|femme)\b/i);
    if (genderMatch) demographics.gender = genderMatch[1].toLowerCase();
    
    const weightMatch = input.match(/(\d+(?:\.\d+)?)\s*(?:kg|lbs?|pounds?|libras?)/i);
    if (weightMatch) demographics.weight = parseFloat(weightMatch[1]);
    
    return demographics;
  };

  const generateMockAnalysis = () => {
    const modelSources = [
      {
        name: 'Diabetes Prediction SystemV3',
        url: 'https://github.com/MorsalinIslamShapon/Diabetes-Prediction-SystemV3',
        confidence: 94,
        prediction: language === 'es' ? 'Alto Riesgo' : language === 'fr' ? 'Risque Élevé' : 'High Risk'
      },
      {
        name: 'Advanced ML Diabetes Model',
        url: 'https://github.com/JitKrNaskar/Diabetes-Prediction',
        confidence: 87,
        prediction: language === 'es' ? 'Riesgo Moderado' : language === 'fr' ? 'Risque Modéré' : 'Moderate Risk'
      },
      {
        name: 'Comprehensive Prediction Model',
        url: 'https://github.com/MYoussef885/Diabetes_Prediction',
        confidence: 96,
        prediction: language === 'es' ? 'Positivo' : language === 'fr' ? 'Positif' : 'Positive'
      },
      {
        name: 'ML-Based Diabetes Detection',
        url: 'https://github.com/aravinda-1402/Diabetes-Prediction-using-Machine-Learning',
        confidence: 91,
        prediction: language === 'es' ? 'Diabetes Tipo 2' : language === 'fr' ? 'Diabète Type 2' : 'Type 2 Diabetes'
      },
      {
        name: 'Kaggle Diabetes Predictor',
        url: 'https://www.kaggle.com/code/mvanshika/diabetes-prediction',
        confidence: 89,
        prediction: language === 'es' ? 'Alta Prioridad' : language === 'fr' ? 'Haute Priorité' : 'High Priority'
      },
      {
        name: 'Advanced ML Implementation',
        url: 'https://www.kaggle.com/code/isilguler/diabetes-prediction-with-machine-learning',
        confidence: 88,
        prediction: language === 'es' ? 'Riesgo Elevado' : language === 'fr' ? 'Risque Élevé' : 'Elevated Risk'
      },
      {
        name: 'Optimized ML Model',
        url: 'https://www.kaggle.com/code/ahmetcankaraolan/diabetes-prediction-using-machine-learning',
        confidence: 90,
        prediction: language === 'es' ? 'Diagnóstico Positivo' : language === 'fr' ? 'Diagnostic Positif' : 'Positive Diagnosis'
      },
      {
        name: 'PyCaret Implementation',
        url: 'https://www.analyticsvidhya.com/blog/2021/07/diabetes-prediction-with-pycaret/',
        confidence: 93,
        prediction: language === 'es' ? 'Síndrome Metabólico' : language === 'fr' ? 'Syndrome Métabolique' : 'Metabolic Syndrome'
      },
      {
        name: 'Deep Learning Model',
        url: 'https://github.com/jarred13/Deeplearning_and_Diabetes',
        confidence: 95,
        prediction: language === 'es' ? 'Diabetes Confirmada' : language === 'fr' ? 'Diabète Confirmé' : 'Diabetes Confirmed'
      }
    ];

    const diagnosisTexts = {
      es: 'Diabetes Tipo 2 con Síndrome Metabólico',
      en: 'Type 2 Diabetes with Metabolic Syndrome',
      fr: 'Diabète Type 2 avec Syndrome Métabolique'
    };

    const riskFactorsTexts = {
      es: [
        'Niveles elevados de glucosa',
        'IMC >30',
        'Antecedentes familiares de diabetes',
        'Estilo de vida sedentario'
      ],
      en: [
        'Elevated glucose levels',
        'BMI >30',
        'Family history of diabetes',
        'Sedentary lifestyle'
      ],
      fr: [
        'Niveaux de glucose élevés',
        'IMC >30',
        'Antécédents familiaux de diabète',
        'Mode de vie sédentaire'
      ]
    };

    const recommendationsTexts = {
      es: [
        'Monitoreo inmediato de glucosa',
        'Consulta nutricional',
        'Inicio de programa de ejercicio',
        'Seguimiento en 2 semanas'
      ],
      en: [
        'Immediate glucose monitoring',
        'Nutritional consultation',
        'Start exercise program',
        'Follow-up in 2 weeks'
      ],
      fr: [
        'Surveillance immédiate du glucose',
        'Consultation nutritionnelle',
        'Début du programme d\'exercice',
        'Suivi dans 2 semaines'
      ]
    };

    return {
      diagnosis: diagnosisTexts[language],
      confidence: 92,
      riskFactors: riskFactorsTexts[language],
      recommendations: recommendationsTexts[language],
      modelResults: modelSources
    };
  };

  const generateEmailReport = (analysisResults: any) => {
    const emailTemplates = {
      es: `
REPORTE DE ANÁLISIS MÉDICO - MedAI Platform

Estimado/a Doctor/a,

Se ha completado el análisis predictivo para el paciente utilizando 9 modelos avanzados de Machine Learning.

=== RESUMEN DEL ANÁLISIS ===
Diagnóstico Principal: ${analysisResults.diagnosis}
Nivel de Confianza: ${analysisResults.confidence}%

=== SÍNTOMAS REPORTADOS ===
${patientData.symptoms.join(', ')}

=== RESULTADOS DE LABORATORIO ===
${patientData.labResults.join(', ')}

=== FACTORES DE RIESGO IDENTIFICADOS ===
${analysisResults.riskFactors.map((factor: string, index: number) => `${index + 1}. ${factor}`).join('\n')}

=== RECOMENDACIONES MÉDICAS ===
${analysisResults.recommendations.map((rec: string, index: number) => `${index + 1}. ${rec}`).join('\n')}

=== RESULTADOS POR MODELO ===
${analysisResults.modelResults.map((result: any, index: number) => 
  `${index + 1}. ${result.name}: ${result.prediction} (${result.confidence}% confianza)`
).join('\n')}

Este reporte ha sido generado automáticamente por MedAI Platform.
Para más información, visite: https://medai.platform

Saludos cordiales,
Sistema MedAI
      `,
      en: `
MEDICAL ANALYSIS REPORT - MedAI Platform

Dear Doctor,

Predictive analysis for the patient has been completed using 9 advanced Machine Learning models.

=== ANALYSIS SUMMARY ===
Primary Diagnosis: ${analysisResults.diagnosis}
Confidence Level: ${analysisResults.confidence}%

=== REPORTED SYMPTOMS ===
${patientData.symptoms.join(', ')}

=== LABORATORY RESULTS ===
${patientData.labResults.join(', ')}

=== IDENTIFIED RISK FACTORS ===
${analysisResults.riskFactors.map((factor: string, index: number) => `${index + 1}. ${factor}`).join('\n')}

=== MEDICAL RECOMMENDATIONS ===
${analysisResults.recommendations.map((rec: string, index: number) => `${index + 1}. ${rec}`).join('\n')}

=== RESULTS BY MODEL ===
${analysisResults.modelResults.map((result: any, index: number) => 
  `${index + 1}. ${result.name}: ${result.prediction} (${result.confidence}% confidence)`
).join('\n')}

This report has been automatically generated by MedAI Platform.
For more information, visit: https://medai.platform

Best regards,
MedAI System
      `,
      fr: `
RAPPORT D'ANALYSE MÉDICALE - Plateforme MedAI

Cher Docteur,

L'analyse prédictive pour le patient a été complétée en utilisant 9 modèles d'apprentissage automatique avancés.

=== RÉSUMÉ DE L'ANALYSE ===
Diagnostic Principal: ${analysisResults.diagnosis}
Niveau de Confiance: ${analysisResults.confidence}%

=== SYMPTÔMES RAPPORTÉS ===
${patientData.symptoms.join(', ')}

=== RÉSULTATS DE LABORATOIRE ===
${patientData.labResults.join(', ')}

=== FACTEURS DE RISQUE IDENTIFIÉS ===
${analysisResults.riskFactors.map((factor: string, index: number) => `${index + 1}. ${factor}`).join('\n')}

=== RECOMMANDATIONS MÉDICALES ===
${analysisResults.recommendations.map((rec: string, index: number) => `${index + 1}. ${rec}`).join('\n')}

=== RÉSULTATS PAR MODÈLE ===
${analysisResults.modelResults.map((result: any, index: number) => 
  `${index + 1}. ${result.name}: ${result.prediction} (${result.confidence}% confiance)`
).join('\n')}

Ce rapport a été généré automatiquement par la Plateforme MedAI.
Pour plus d'informations, visitez: https://medai.platform

Cordialement,
Système MedAI
      `
    };

    return emailTemplates[language];
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

      addMessage('system', systemMessages[language].sending);
      
      const emailReport = generateEmailReport(analysisResults);
      
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

      addMessage('system', systemMessages[language].success);
      
      toast({
        title: language === 'es' ? 'Éxito' : language === 'fr' ? 'Succès' : 'Success',
        description: systemMessages[language].success,
      });
      
    } catch (error) {
      console.error('n8n webhook error:', error);
      const systemMessages = {
        es: 'Error enviando al flujo n8n. Verifique la URL del webhook.',
        en: 'Error sending to n8n workflow. Please check the webhook URL.',
        fr: 'Erreur lors de l\'envoi au flux n8n. Veuillez vérifier l\'URL du webhook.'
      };
      
      addMessage('system', systemMessages[language]);
      
      toast({
        title: language === 'es' ? 'Error' : 'Erreur',
        description: systemMessages[language],
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

  const renderMessage = (message: Message) => {
    const isUser = message.type === 'user';
    const isSystem = message.type === 'system';
    
    return (
      <div key={message.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`flex items-start space-x-2 max-w-[80%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className={`p-2 rounded-full ${
            isUser ? 'bg-blue-600 text-white' : 
            isSystem ? 'bg-gray-600 text-white' : 
            'bg-green-600 text-white'
          }`}>
            {isUser ? <User className="h-4 w-4" /> : 
             isSystem ? <Activity className="h-4 w-4" /> :
             <Bot className="h-4 w-4" />}
          </div>
          <div className={`p-3 rounded-lg ${
            isUser ? 'bg-blue-600 text-white' : 
            isSystem ? 'bg-gray-100 text-gray-800 border-l-4 border-l-blue-500' :
            'bg-white border border-gray-200'
          }`}>
            <div className="text-sm">{message.content}</div>
            {message.data && (
              <div className="mt-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-blue-600">
                    {language === 'es' ? 'Diagnóstico' : language === 'fr' ? 'Diagnostic' : 'Diagnosis'}: {message.data.diagnosis}
                  </span>
                  <Badge variant="default" className="bg-green-600">
                    {message.data.confidence}% {t('dashboard.confidence')}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1 text-red-500" />
                      {language === 'es' ? 'Factores de Riesgo' : language === 'fr' ? 'Facteurs de Risque' : 'Risk Factors'}
                    </h4>
                    <ul className="text-xs space-y-1">
                      {message.data.riskFactors.map((factor: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                      {language === 'es' ? 'Recomendaciones' : language === 'fr' ? 'Recommandations' : 'Recommendations'}
                    </h4>
                    <ul className="text-xs space-y-1">
                      {message.data.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm mb-2">
                    {language === 'es' ? 'Resultados por Modelo' : language === 'fr' ? 'Résultats par Modèle' : 'Model Results'}
                  </h4>
                  <div className="space-y-1">
                    {message.data.modelResults.map((result: any, index: number) => (
                      <div key={index} className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded">
                        <span>{result.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">{result.prediction}</span>
                          <Badge variant="secondary" className="text-xs">
                            {result.confidence}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="text-xs text-gray-500 mt-2">
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    );
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
      // Simulate AI analysis process with multilingual messages
      for (const message of analysisMessages[language]) {
        addMessage('system', message);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      // Generate mock analysis results
      const analysisResults = generateMockAnalysis();
      
      addMessage('bot', t('chat.analysis.result'), analysisResults);
      
      // Send to n8n webhook if configured
      if (n8nWebhook) {
        await sendToN8n(analysisResults);
      }
      
      // Reset for new consultation
      setCurrentStep('complete');
      
    } catch (error) {
      console.error('Analysis error:', error);
      const errorMessages = {
        es: 'Lo siento, hubo un error durante el análisis. Por favor, intenta nuevamente.',
        en: 'Sorry, there was an error during analysis. Please try again.',
        fr: 'Désolé, il y a eu une erreur pendant l\'analyse. Veuillez réessayer.'
      };
      addMessage('bot', errorMessages[language]);
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
          {/* n8n Webhook Configuration */}
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-sm mb-2">{t('chat.webhook.title')}</h3>
            <Input
              placeholder={t('chat.webhook.placeholder')}
              value={n8nWebhook}
              onChange={(e) => setN8nWebhook(e.target.value)}
              className="text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t('chat.webhook.description')}
            </p>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="h-96 w-full border rounded-lg p-4" ref={scrollAreaRef}>
            {messages.map(renderMessage)}
          </ScrollArea>

          {/* Input Area */}
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

          {/* Current Progress */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{t('chat.progress')}</span>
              <div className="flex space-x-2">
                <Badge variant={currentStep === 'symptoms' ? 'default' : 'secondary'}>
                  1. {t('chat.symptoms')}
                </Badge>
                <Badge variant={currentStep === 'labResults' ? 'default' : 'secondary'}>
                  2. {t('chat.labResults')}
                </Badge>
                <Badge variant={currentStep === 'demographics' ? 'default' : 'secondary'}>
                  3. {t('chat.demographics')}
                </Badge>
                <Badge variant={currentStep === 'analysis' ? 'default' : 'secondary'}>
                  4. {t('chat.analysis')}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
