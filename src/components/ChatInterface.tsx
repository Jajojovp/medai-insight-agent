
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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI medical assistant. I'll help you analyze patient symptoms and lab results using advanced ML models. Let's start with the patient's primary symptoms.",
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

  const performAnalysis = async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate AI analysis process
      addMessage('system', 'Initializing AI analysis...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addMessage('system', 'Running Model 1: Diabetes Risk Assessment...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Running Model 2: Cardiovascular Analysis...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Running Model 3: Metabolic Syndrome Detection...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Running Model 4: Symptom Pattern Recognition...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Running Model 5: Comprehensive Risk Profiling...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addMessage('system', 'Performing meta-analysis with OpenAI...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate mock analysis results
      const analysisResults = generateMockAnalysis();
      
      addMessage('bot', 'Analysis complete! Here are the results:', analysisResults);
      
      // Send to n8n webhook if configured
      if (n8nWebhook) {
        await sendToN8n(analysisResults);
      }
      
      // Reset for new consultation
      setCurrentStep('complete');
      
    } catch (error) {
      console.error('Analysis error:', error);
      addMessage('bot', 'Sorry, there was an error during analysis. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateMockAnalysis = () => {
    const modelSources = [
      'https://github.com/MorsalinIslamShapon/Diabetes-Prediction-SystemV3',
      'https://github.com/JitKrNaskar/Diabetes-Prediction',
      'https://github.com/MYoussef885/Diabetes_Prediction',
      'https://github.com/aravinda-1402/Diabetes-Prediction-using-Machine-Learning',
      'https://www.kaggle.com/code/mvanshika/diabetes-prediction'
    ];

    return {
      diagnosis: 'Type 2 Diabetes with Metabolic Syndrome',
      confidence: 92,
      riskFactors: [
        'Elevated glucose levels',
        'BMI >30',
        'Family history of diabetes',
        'Sedentary lifestyle'
      ],
      recommendations: [
        'Immediate glucose monitoring',
        'Dietary consultation',
        'Exercise program initiation',
        'Follow-up in 2 weeks'
      ],
      modelResults: [
        { model: 'Diabetes Prediction SystemV3', confidence: 94, prediction: 'High Risk', source: modelSources[0] },
        { model: 'Advanced ML Diabetes Model', confidence: 87, prediction: 'Moderate Risk', source: modelSources[1] },
        { model: 'Comprehensive Prediction Model', confidence: 96, prediction: 'Positive', source: modelSources[2] },
        { model: 'ML-Based Diabetes Detection', confidence: 91, prediction: 'Diabetes Type 2', source: modelSources[3] },
        { model: 'Kaggle Diabetes Predictor', confidence: 89, prediction: 'High Priority', source: modelSources[4] }
      ]
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <span>AI Medical Consultation</span>
            {isAnalyzing && (
              <Badge variant="default" className="bg-blue-600 animate-pulse">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                Analyzing...
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* n8n Webhook Configuration */}
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-sm mb-2">Configuración Webhook n8n</h3>
            <Input
              placeholder="Ingresa tu URL de webhook n8n para reportes automáticos"
              value={n8nWebhook}
              onChange={(e) => setN8nWebhook(e.target.value)}
              className="text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Los reportes PDF se generarán automáticamente y se enviarán por email
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
                currentStep === 'symptoms' ? "Describe los síntomas del paciente (separados por comas)..." :
                currentStep === 'labResults' ? "Ingresa los resultados de laboratorio (separados por comas)..." :
                currentStep === 'demographics' ? "Ingresa datos demográficos del paciente o escribe 'skip'..." :
                "Análisis completo. Inicia una nueva consulta."
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
                  Nuevo Caso
                </Button>
              )}
            </div>
          </div>

          {/* Current Progress */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Progreso:</span>
              <div className="flex space-x-2">
                <Badge variant={currentStep === 'symptoms' ? 'default' : 'secondary'}>
                  1. Síntomas
                </Badge>
                <Badge variant={currentStep === 'labResults' ? 'default' : 'secondary'}>
                  2. Laboratorios
                </Badge>
                <Badge variant={currentStep === 'demographics' ? 'default' : 'secondary'}>
                  3. Demografía
                </Badge>
                <Badge variant={currentStep === 'analysis' ? 'default' : 'secondary'}>
                  4. Análisis
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
