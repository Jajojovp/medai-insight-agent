
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Brain, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Message, PatientData, ChatStep, DiseaseType } from "@/types/chat";
import MessageComponent from "@/components/chat/MessageComponent";
import ProgressIndicator from "@/components/chat/ProgressIndicator";
import WebhookConfig from "@/components/chat/WebhookConfig";
import DiseaseSelector from "@/components/chat/DiseaseSelector";
import { generateMockAnalysis, generateEmailReport, parseDemographics } from "@/utils/analysisUtils";

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Bienvenido al Sistema de Análisis Predictivo MedAI. Selecciona el tipo de análisis que deseas realizar.',
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
      'diabetes': 'Diabetes Tipo 2',
      'breast-cancer': 'Cáncer de Mama',
      'prostate-cancer': 'Cáncer de Próstata',
      'heart-disease': 'Enfermedad Cardíaca',
      'stroke': 'Accidente Cerebrovascular',
      'kidney-disease': 'Enfermedad Renal',
      'pancreatic-cancer': 'Cáncer de Páncreas'
    };

    const diseaseName = diseaseNames[disease];
    
    addMessage('system', `Análisis seleccionado: ${diseaseName}`);
    addMessage('bot', 'Perfecto. Ahora describe los síntomas del paciente (separados por comas):');
    
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
        addMessage('bot', `Síntomas registrados: ${symptoms.join(', ')}. Ahora proporciona los resultados de laboratorio:`);
        setCurrentStep('labResults');
        break;

      case 'labResults':
        const labResults = userInput.split(',').map(s => s.trim()).filter(s => s);
        setPatientData(prev => ({ ...prev, labResults }));
        addMessage('bot', `Resultados registrados: ${labResults.join(', ')}. Datos demográficos del paciente (edad, género, peso) o escribe "saltar":`);
        setCurrentStep('demographics');
        break;

      case 'demographics':
        const skipWords = ['skip', 'saltar'];
        if (!skipWords.includes(userInput.toLowerCase())) {
          const demographics = parseDemographics(userInput);
          setPatientData(prev => ({ ...prev, demographics }));
        }
        addMessage('bot', 'Información completa. Iniciando análisis predictivo...');
        setCurrentStep('analysis');
        await performAnalysis();
        break;

      default:
        addMessage('bot', 'Puedes iniciar una nueva consulta.');
    }
  };

  const sendToN8n = async (analysisResults: any) => {
    if (!n8nWebhook) return;

    try {
      addMessage('system', 'Enviando resultados a automatización n8n...');
      
      const emailReport = generateEmailReport(analysisResults, patientData, 'es');
      
      const payload = {
        patientData,
        analysisResults,
        emailReport,
        language: 'es',
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

      addMessage('system', 'Resultados enviados al flujo n8n exitosamente. El reporte PDF será generado y enviado por email.');
      
      toast({
        title: 'Éxito',
        description: 'Resultados enviados al flujo n8n exitosamente. El reporte PDF será generado y enviado por email.',
      });
      
    } catch (error) {
      console.error('n8n webhook error:', error);
      addMessage('system', 'Error enviando al flujo n8n. Verifique la URL del webhook.');
      
      toast({
        title: 'Error',
        description: 'Error enviando al flujo n8n. Verifique la URL del webhook.',
        variant: "destructive",
      });
    }
  };

  const startNewConsultation = () => {
    setMessages([
      {
        id: Date.now().toString(),
        type: 'bot',
        content: 'Nueva consulta iniciada. Selecciona el tipo de análisis:',
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
    
    const analysisMessages = [
      'Inicializando análisis de IA...',
      'Ejecutando Modelo 1: Análisis de Riesgo Predictivo...',
      'Ejecutando Modelo 2: Evaluación de Patrones Clínicos...',
      'Ejecutando Modelo 3: Análisis de Machine Learning Avanzado...',
      'Ejecutando Modelo 4: Modelo de Deep Learning...',
      'Ejecutando Modelo 5: Meta-análisis y Validación...',
      'Compilando resultados finales...'
    ];
    
    try {
      for (const message of analysisMessages) {
        addMessage('system', message);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      const analysisResults = generateMockAnalysis('es', selectedDisease);
      
      addMessage('bot', 'Análisis completado. Aquí están los resultados:', analysisResults);
      
      if (n8nWebhook) {
        await sendToN8n(analysisResults);
      }
      
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
            <span>Análisis Predictivo Multi-enfermedad</span>
            {isAnalyzing && (
              <Badge variant="default" className="bg-blue-600 animate-pulse">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                Analizando
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
                  currentStep === 'symptoms' ? 'Describe los síntomas (ej: fatiga, sed excesiva, visión borrosa)' :
                  currentStep === 'labResults' ? 'Resultados de laboratorio (ej: glucosa 180 mg/dl, HbA1c 8.5%)' :
                  currentStep === 'demographics' ? 'Datos del paciente (ej: 45 años, mujer, 70 kg) o "saltar"' :
                  'Consulta completada'
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
          )}

          <ProgressIndicator currentStep={currentStep} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
