
import { Badge } from "@/components/ui/badge";
import { Bot, User, Activity, Brain, AlertCircle, CheckCircle } from "lucide-react";
import { Message } from "@/types/chat";
import { useLanguage } from "@/contexts/LanguageContext";

interface MessageComponentProps {
  message: Message;
}

const MessageComponent = ({ message }: MessageComponentProps) => {
  const { language, t } = useLanguage();
  const isUser = message.type === 'user';
  const isSystem = message.type === 'system';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
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

export default MessageComponent;
