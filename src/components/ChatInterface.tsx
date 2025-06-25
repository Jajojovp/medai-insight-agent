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
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "¡Hola! Soy tu asistente médico de IA. Te ayudaré a analizar síntomas y resultados de laboratorio de pacientes usando 9 modelos avanzados de ML. Comencemos con los síntomas principales del paciente.",
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
        addMessage('bot', `I've recorded the following symptoms: ${symptoms.join(', ')}. Now, please provide any available lab results (e.g., glucose levels, blood pressure, cholesterol, etc.)`);
        setCurrentStep('labResults');
        break;

      case 'labResults':
        const labResults = userInput.split(',').map(s => s.trim()).filter(s => s);
        setPatientData(prev => ({ ...prev, labResults }));
        addMessage('bot', `Lab results recorded: ${labResults.join(', ')}. Please provide patient demographics (age, gender, weight, height) or type 'skip' to proceed with analysis.`);
        setCurrentStep('demographics');
        break;

      case 'demographics':
        if (userInput.toLowerCase() !== 'skip') {
          // Parse demographics (simple parsing - in production, use more sophisticated NLP)
          const demographics = parseDemographics(userInput);
          setPatientData(prev => ({ ...prev, demographics }));
        }
        addMessage('bot', 'Perfect! I have all the information needed. I will now analyze this case using our 5 AI models and generate a comprehensive report.');
        setCurrentStep('analysis');
        await performAnalysis();
        break;

      default:
        addMessage('bot', 'Please start a new consultation to analyze another case.');
    }
  };

  const parseDemographics = (input: string) => {
    const demographics: any = {};
    const ageMatch = input.match(/(\d+)\s*(?:years?|yrs?|y\.o\.?)/i);
    if (ageMatch) demographics.age = parseInt(ageMatch[1]);
    
    const genderMatch = input.match(/\b(male|female|m|f)\b/i);
    if (genderMatch) demographics.gender = genderMatch[1].toLowerCase();
    
    const weightMatch = input.match(/(\d+(?:\.\d+)?)\s*(?:kg|lbs?|pounds?)/i);
    if (weightMatch) demographics.weight = parseFloat(weightMatch[1]);
    
    return demographics;
  };

  const generateMockAnalysis = () => {
    const modelSources = [
      {
        name: 'Diabetes Prediction SystemV3',
        url: 'https://github.com/MorsalinIslamShapon/Diabetes-Prediction-SystemV3',
        confidence: 94,
        prediction: 'Alto Riesgo'
      },
      {
        name: 'Advanced ML Diabetes Model',
        url: 'https://github.com/JitKrNaskar/Diabetes-Prediction',
        confidence: 87,
        prediction: 'Riesgo Moderado'
      },
      {
        name: 'Comprehensive Prediction Model',
        url: 'https://github.com/MYoussef885/Diabetes_Prediction',
        confidence: 96,
        prediction: 'Positivo'
      },
      {
        name: 'ML-Based Diabetes Detection',
        url: 'https://github.com/aravinda-1402/Diabetes-Prediction-using-Machine-Learning',
        confidence: 91,
        prediction: 'Diabetes Tipo 2'
      },
      {
        name: 'Kaggle Diabetes Predictor',
        url: 'https://www.kaggle.com/code/mvanshika/diabetes-prediction',
        confidence: 89,
        prediction: 'Alta Prioridad'
      },
      {
        name: 'Advanced ML Implementation',
        url: 'https://www.kaggle.com/code/isilguler/diabetes-prediction-with-machine-learning',
        confidence: 88,
        prediction: 'Riesgo Elevado'
      },
      {
        name: 'Optimized ML Model',
        url: 'https://www.kaggle.com/code/ahmetcankaraolan/diabetes-prediction-using-machine-learning',
        confidence: 90,
        prediction: 'Diagnóstico Positivo'
      },
      {
        name: 'PyCaret Implementation',
        url: 'https://www.analyticsvidhya.com/blog/2021/07/diabetes-prediction-with-pycaret/',
        confidence: 93,
        prediction: 'Síndrome Metabólico'
      },
      {
        name: 'Deep Learning Model',
        url: 'https://github.com/jarred13/Deeplearning_and_Diabetes',
        confidence: 95,
        prediction: 'Diabetes Confirmada'
      }
    ];

    return {
      diagnosis: 'Diabetes Tipo 2 con Síndrome Metabólico',
      confidence: 92,
      riskFactors: [
        'Niveles elevados de glucosa',
        'IMC >30',
        'Antecedentes familiares de diabetes',
        'Estilo de vida sedentario'
      ],
      recommendations: [
        'Monitoreo inmediato de glucosa',
        'Consulta nutricional',
        'Inicio de programa de ejercicio',
        'Seguimiento en 2 semanas'
      ],
      modelResults: modelSources
    };
  };

  const sendToN8n = async (analysisResults: any) => {
    if (!n8nWebhook) return;

    try {
      addMessage('system', 'Sending results to n8n automation...');
      
      const payload = {
        patientData,
        analysisResults,
        timestamp: new Date().toISOString(),
        source: 'MedAI Platform'
      };

      const response = await fetch(n8nWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });

      addMessage('system', 'Results sent to n8n workflow successfully. PDF report will be generated and emailed.');
      
      toast({
        title: "Success",
        description: "Analysis sent to n8n workflow. PDF report will be emailed to the doctor.",
      });
      
    } catch (error) {
      console.error('n8n webhook error:', error);
      addMessage('system', 'Error sending to n8n workflow. Please check the webhook URL.');
      
      toast({
        title: "Error",
        description: "Failed to send to n8n workflow. Please check your webhook URL.",
        variant: "destructive",
      });
    }
  };

  const startNewConsultation = () => {
    setMessages([
      {
        id: Date.now().toString(),
        type: 'bot',
        content: "Starting a new consultation. Please describe the patient's primary symptoms.",
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
                  <span className="font-semibold text-blue-600">Diagnosis: {message.data.diagnosis}</span>
                  <Badge variant="default" className="bg-green-600">
                    {message.data.confidence}% confidence
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1 text-red-500" />
                      Risk Factors
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
                      Recommendations
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
                  <h4 className="font-semibold text-sm mb-2">Model Results</h4>
                  <div className="space-y-1">
                    {message.data.modelResults.map((result: any, index: number) => (
                      <div key={index} className="flex items-center justify-between text-xs p-2 bg-gray-50 rounded">
                        <span>{result.model}</span>
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
    
    try {
      // Simulate AI analysis process
      addMessage('system', 'Inicializando análisis de IA...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addMessage('system', 'Ejecutando Modelo 1: Evaluación de Riesgo de Diabetes...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Ejecutando Modelo 2: Análisis Cardiovascular...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Ejecutando Modelo 3: Detección de Síndrome Metabólico...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Ejecutando Modelo 4: Reconocimiento de Patrones de Síntomas...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Ejecutando Modelo 5: Perfilado Integral de Riesgo...');
      await new Promise(resolve => setTimeout(resolve, 1500));

      addMessage('system', 'Ejecutando Modelo 6: Análisis ML Avanzado...');
      await new Promise(resolve => setTimeout(resolve, 1500));

      addMessage('system', 'Ejecutando Modelo 7: Modelo ML Optimizado...');
      await new Promise(resolve => setTimeout(resolve, 1500));

      addMessage('system', 'Ejecutando Modelo 8: Implementación PyCaret...');
      await new Promise(resolve => setTimeout(resolve, 1500));

      addMessage('system', 'Ejecutando Modelo 9: Modelo de Aprendizaje Profundo...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Realizando meta-análisis con OpenAI...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate mock analysis results
      const analysisResults = generateMockAnalysis();
      
      addMessage('bot', '¡Análisis completado! Aquí están los resultados:', analysisResults);
      
      // Send to n8n webhook if configured
      if (n8nWebhook) {
        await sendToN8n(analysisResults);
      }
      
      // Reset for new consultation
      setCurrentStep('complete');
      
    } catch (error) {
      console.error('Analysis error:', error);
      addMessage('bot', 'Lo siento, hubo un error durante el análisis. Por favor, intenta nuevamente.');
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
