
import { Code, Database, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PublicNavigation from "@/components/PublicNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const API = () => {
  const { language } = useLanguage();

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/analyze/diabetes',
      description: language === 'es' ? 'Análisis predictivo de diabetes' : language === 'fr' ? 'Analyse prédictive du diabète' : 'Diabetes predictive analysis'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/analyze/heart-disease',
      description: language === 'es' ? 'Análisis de enfermedades cardíacas' : language === 'fr' ? 'Analyse des maladies cardiaques' : 'Heart disease analysis'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/analyze/cancer',
      description: language === 'es' ? 'Detección temprana de cáncer' : language === 'fr' ? 'Détection précoce du cancer' : 'Early cancer detection'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/patient/{id}',
      description: language === 'es' ? 'Obtener información del paciente' : language === 'fr' ? 'Obtenir informations patient' : 'Get patient information'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/reports/{id}',
      description: language === 'es' ? 'Generar reportes médicos' : language === 'fr' ? 'Générer rapports médicaux' : 'Generate medical reports'
    }
  ];

  const features = [
    {
      icon: Code,
      title: language === 'es' ? 'RESTful API' : language === 'fr' ? 'API RESTful' : 'RESTful API',
      description: language === 'es' ? 'Integración simple con endpoints estándar REST' : 
                   language === 'fr' ? 'Intégration simple avec endpoints REST standard' :
                   'Simple integration with standard REST endpoints'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Seguridad HIPAA' : language === 'fr' ? 'Sécurité HIPAA' : 'HIPAA Security',
      description: language === 'es' ? 'Encriptación end-to-end y cumplimiento total' : 
                   language === 'fr' ? 'Chiffrement end-to-end et conformité totale' :
                   'End-to-end encryption and full compliance'
    },
    {
      icon: Database,
      title: language === 'es' ? 'Respuestas JSON' : language === 'fr' ? 'Réponses JSON' : 'JSON Responses',
      description: language === 'es' ? 'Datos estructurados fáciles de integrar' : 
                   language === 'fr' ? 'Données structurées faciles à intégrer' :
                   'Structured data easy to integrate'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Respuesta Rápida' : language === 'fr' ? 'Réponse Rapide' : 'Fast Response',
      description: language === 'es' ? 'Análisis en segundos con alta disponibilidad' : 
                   language === 'fr' ? 'Analyse en secondes avec haute disponibilité' :
                   'Analysis in seconds with high availability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            API
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'API Médica Potente' : 
             language === 'fr' ? 'API Médicale Puissante' : 
             'Powerful Medical API'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Integra nuestros 37 modelos de IA médica en tu sistema con nuestra API REST segura y rápida' :
             language === 'fr' ? 'Intégrez nos 37 modèles d\'IA médicale dans votre système avec notre API REST sécurisée et rapide' :
             'Integrate our 37 medical AI models into your system with our secure and fast REST API'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-8">
          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {language === 'es' ? 'Endpoints Principales' : 
                 language === 'fr' ? 'Endpoints Principaux' : 
                 'Main Endpoints'}
              </CardTitle>
              <CardDescription>
                {language === 'es' ? 'Accede a nuestros modelos de IA médica especializados' :
                 language === 'fr' ? 'Accédez à nos modèles d\'IA médicale spécialisés' :
                 'Access our specialized medical AI models'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50/80 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'} className="rounded-full">
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono text-gray-800">{endpoint.endpoint}</code>
                    </div>
                    <span className="text-sm text-gray-600">{endpoint.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {language === 'es' ? 'Ejemplo de Respuesta' : 
                 language === 'fr' ? 'Exemple de Réponse' : 
                 'Response Example'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`{
  "analysis_id": "ana_123456789",
  "patient_id": "pat_987654321",
  "disease_type": "diabetes",
  "risk_level": "high",
  "confidence": 0.988,
  "predictions": {
    "diabetes_probability": 0.92,
    "risk_factors": [
      "high_glucose",
      "family_history",
      "obesity"
    ]
  },
  "recommendations": [
    "immediate_specialist_consultation",
    "glucose_monitoring",
    "lifestyle_modifications"
  ],
  "created_at": "2024-06-26T10:30:00Z"
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'es' ? '¿Listo para integrar?' : 
                   language === 'fr' ? 'Prêt à intégrer?' : 
                   'Ready to integrate?'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'es' ? 'Obtén acceso completo a nuestra API y comienza a salvar vidas hoy' :
                   language === 'fr' ? 'Obtenez un accès complet à notre API et commencez à sauver des vies aujourd\'hui' :
                   'Get full access to our API and start saving lives today'}
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                      {language === 'es' ? 'Solicitar Acceso' : language === 'fr' ? 'Demander l\'Accès' : 'Request Access'}
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" className="rounded-2xl backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                      {language === 'es' ? 'Ver Precios' : language === 'fr' ? 'Voir les Prix' : 'View Pricing'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default API;
