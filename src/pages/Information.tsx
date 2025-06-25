
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Activity, 
  FileText, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  BookOpen
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Information = () => {
  const { t } = useLanguage();

  const painPoints = [
    {
      icon: Users,
      title: "Listas de Espera Excesivas",
      description: "Los hospitales enfrentan largos tiempos de espera que afectan la calidad del servicio y la satisfacción del paciente.",
      solution: "Diagnósticos automatizados reducen el tiempo de consulta de 45 a 15 minutos."
    },
    {
      icon: Activity,
      title: "Diagnósticos Tardíos",
      description: "La detección tardía de diabetes y síndrome metabólico resulta en complicaciones evitables.",
      solution: "Detección temprana con 94% de precisión usando análisis predictivo."
    },
    {
      icon: FileText,
      title: "Documentación Manual",
      description: "El tiempo invertido en documentación reduce el tiempo disponible para atención al paciente.",
      solution: "Reportes automáticos generados en segundos con integración n8n."
    },
    {
      icon: TrendingUp,
      title: "Falta de Eficiencia",
      description: "Los recursos médicos limitados requieren optimización para atender más pacientes.",
      solution: "Aumento de 40% en la eficiencia diagnóstica con IA especializada."
    }
  ];

  const technicalSpecs = [
    {
      category: "Modelos de IA",
      items: [
        "9 modelos de machine learning especializados",
        "Algoritmos de ensemble para mayor precisión",
        "Validación cruzada con datos clínicos reales",
        "Actualización continua con nuevos casos"
      ]
    },
    {
      category: "Seguridad",
      items: [
        "Cumplimiento HIPAA completo",
        "Cifrado end-to-end de datos",
        "Auditoría completa de accesos",
        "Backup automático seguro"
      ]
    },
    {
      category: "Integración",
      items: [
        "API REST para sistemas hospitalarios",
        "Webhooks n8n para automatización",
        "Exportación PDF personalizable",
        "Integración con sistemas EMR existentes"
      ]
    },
    {
      category: "Rendimiento",
      items: [
        "Análisis en tiempo real (< 30 segundos)",
        "Disponibilidad 99.9% garantizada",
        "Escalabilidad automática",
        "Soporte multi-idioma"
      ]
    }
  ];

  const modelSources = [
    {
      name: "Diabetes Prediction SystemV3",
      url: "https://github.com/MorsalinIslamShapon/Diabetes-Prediction-SystemV3",
      description: "Sistema avanzado de predicción con múltiples algoritmos",
      accuracy: "92%"
    },
    {
      name: "Advanced Diabetes Prediction",
      url: "https://github.com/JitKrNaskar/Diabetes-Prediction",
      description: "Modelo optimizado para detección temprana",
      accuracy: "89%"
    },
    {
      name: "ML Diabetes Prediction",
      url: "https://github.com/MYoussef885/Diabetes_Prediction",
      description: "Implementación con técnicas de ensemble",
      accuracy: "91%"
    },
    {
      name: "Comprehensive ML Model",
      url: "https://github.com/aravinda-1402/Diabetes-Prediction-using-Machine-Learning",
      description: "Análisis integral con múltiples variables",
      accuracy: "88%"
    },
    {
      name: "Kaggle Diabetes Predictor",
      url: "https://www.kaggle.com/code/mvanshika/diabetes-prediction",
      description: "Modelo validado con datasets públicos",
      accuracy: "90%"
    },
    {
      name: "Advanced ML Implementation",
      url: "https://www.kaggle.com/code/isilguler/diabetes-prediction-with-machine-learning",
      description: "Implementación con técnicas avanzadas",
      accuracy: "87%"
    },
    {
      name: "Optimized ML Model",
      url: "https://www.kaggle.com/code/ahmetcankaraolan/diabetes-prediction-using-machine-learning",
      description: "Modelo optimizado para eficiencia",
      accuracy: "89%"
    },
    {
      name: "PyCaret Implementation",
      url: "https://www.analyticsvidhya.com/blog/2021/07/diabetes-prediction-with-pycaret/",
      description: "Implementación con AutoML",
      accuracy: "93%"
    },
    {
      name: "Deep Learning Model",
      url: "https://github.com/jarred13/Deeplearning_and_Diabetes",
      description: "Modelo de aprendizaje profundo especializado",
      accuracy: "94%"
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Reducción en tiempo de diagnóstico"
    },
    {
      metric: "60%",
      description: "Disminución en listas de espera"
    },
    {
      metric: "94%",
      description: "Precisión en detección temprana"
    },
    {
      metric: "25%",
      description: "Aumento en satisfacción del paciente"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Información Técnica y Beneficios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprende cómo MedAI resuelve los principales desafíos hospitalarios mediante 
            inteligencia artificial especializada en diagnóstico médico
          </p>
        </div>

        {/* Pain Points */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Problemas que Resolvemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-red-100 rounded-full">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">{point.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{point.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-l-green-500">
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-green-800">Solución:</span>
                      </div>
                      <p className="text-green-700 text-sm mt-1">{point.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Resultados Comprobados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Especificaciones Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span>{spec.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ML Models */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Modelos de Machine Learning Integrados
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Nuestra plataforma integra 9 modelos especializados de fuentes reconocidas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelSources.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    <Badge className="bg-green-600 text-white">
                      {model.accuracy}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{model.description}</p>
                  <a 
                    href={model.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-1" />
                    Ver Código Fuente
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Proceso de Implementación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Evaluación", desc: "Análisis de necesidades específicas" },
              { step: "2", title: "Configuración", desc: "Personalización del sistema" },
              { step: "3", title: "Integración", desc: "Conexión con sistemas existentes" },
              { step: "4", title: "Capacitación", desc: "Entrenamiento del equipo médico" }
            ].map((phase, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <Brain className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Transformar tu Práctica Médica?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Únete a los hospitales que ya están reduciendo listas de espera y mejorando diagnósticos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Demo Gratuita
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contactar Ventas
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Information;
