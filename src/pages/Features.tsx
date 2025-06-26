
import { Brain, Shield, Zap, Heart, Activity, Users, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PublicNavigation from "@/components/PublicNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: language === 'es' ? 'IA Médica Avanzada' : language === 'fr' ? 'IA Médicale Avancée' : 'Advanced Medical AI',
      description: language === 'es' ? '37 modelos especializados para análisis predictivo de 7 tipos de enfermedades críticas' : 
                   language === 'fr' ? '37 modèles spécialisés pour analyse prédictive de 7 types de maladies critiques' :
                   '37 specialized models for predictive analysis of 7 critical disease types',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Cumplimiento HIPAA' : language === 'fr' ? 'Conformité HIPAA' : 'HIPAA Compliant',
      description: language === 'es' ? 'Seguridad y privacidad de datos médicos garantizada según estándares internacionales' :
                   language === 'fr' ? 'Sécurité et confidentialité des données médicales garanties selon standards internationaux' :
                   'Medical data security and privacy guaranteed according to international standards',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Análisis Instantáneo' : language === 'fr' ? 'Analyse Instantanée' : 'Instant Analysis',
      description: language === 'es' ? 'Resultados predictivos en segundos, reduciendo tiempos de espera críticos' :
                   language === 'fr' ? 'Résultats prédictifs en secondes, réduisant les temps d\'attente critiques' :
                   'Predictive results in seconds, reducing critical waiting times',
      color: 'bg-yellow-500'
    },
    {
      icon: Heart,
      title: language === 'es' ? '98.8% Precisión' : language === 'fr' ? '98.8% Précision' : '98.8% Accuracy',
      description: language === 'es' ? 'Máxima precisión en diagnósticos predictivos validados clínicamente' :
                   language === 'fr' ? 'Précision maximale dans diagnostics prédictifs validés cliniquement' :
                   'Maximum precision in clinically validated predictive diagnostics',
      color: 'bg-red-500'
    },
    {
      icon: Activity,
      title: language === 'es' ? 'Monitoreo Continuo' : language === 'fr' ? 'Surveillance Continue' : 'Continuous Monitoring',
      description: language === 'es' ? 'Seguimiento en tiempo real de indicadores críticos de salud' :
                   language === 'fr' ? 'Suivi en temps réel des indicateurs critiques de santé' :
                   'Real-time tracking of critical health indicators',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Gestión de Pacientes' : language === 'fr' ? 'Gestion des Patients' : 'Patient Management',
      description: language === 'es' ? 'Sistema integrado para manejo eficiente de información médica' :
                   language === 'fr' ? 'Système intégré pour gestion efficace des informations médicales' :
                   'Integrated system for efficient medical information management',
      color: 'bg-indigo-500'
    },
    {
      icon: Clock,
      title: language === 'es' ? 'Disponibilidad 24/7' : language === 'fr' ? 'Disponibilité 24/7' : '24/7 Availability',
      description: language === 'es' ? 'Acceso continuo a análisis médicos críticos sin interrupciones' :
                   language === 'fr' ? 'Accès continu aux analyses médicales critiques sans interruptions' :
                   'Continuous access to critical medical analysis without interruptions',
      color: 'bg-teal-500'
    },
    {
      icon: Target,
      title: language === 'es' ? 'Diagnóstico Preciso' : language === 'fr' ? 'Diagnostic Précis' : 'Precise Diagnosis',
      description: language === 'es' ? 'Identificación temprana de enfermedades críticas para tratamiento oportuno' :
                   language === 'fr' ? 'Identification précoce des maladies critiques pour traitement opportun' :
                   'Early identification of critical diseases for timely treatment',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Características' : language === 'fr' ? 'Caractéristiques' : 'Features'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Tecnología Médica Avanzada' : 
             language === 'fr' ? 'Technologie Médicale Avancée' : 
             'Advanced Medical Technology'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Descubre las capacidades de nuestra plataforma de IA médica diseñada para salvar vidas con análisis predictivos precisos y rápidos' :
             language === 'fr' ? 'Découvrez les capacités de notre plateforme d\'IA médicale conçue pour sauver des vies avec analyses prédictives précises et rapides' :
             'Discover the capabilities of our medical AI platform designed to save lives with precise and fast predictive analysis'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
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

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? '¿Por qué elegir MedAI?' : 
                 language === 'fr' ? 'Pourquoi choisir MedAI?' : 
                 'Why choose MedAI?'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {language === 'es' ? 'Nuestra plataforma combina la precisión de 37 modelos de IA especializados con la velocidad necesaria para salvar vidas. Reduce los tiempos de espera críticos que pueden durar años y permite diagnósticos tempranos que marcan la diferencia entre la vida y la muerte.' :
                 language === 'fr' ? 'Notre plateforme combine la précision de 37 modèles d\'IA spécialisés avec la vitesse nécessaire pour sauver des vies. Réduit les temps d\'attente critiques qui peuvent durer des années et permet des diagnostics précoces qui font la différence entre la vie et la mort.' :
                 'Our platform combines the precision of 37 specialized AI models with the speed necessary to save lives. Reduces critical waiting times that can last years and enables early diagnoses that make the difference between life and death.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Features;
