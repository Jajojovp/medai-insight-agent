
import { Brain, Shield, Zap, Heart, Activity, Users, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Médica Avanzada',
      description: '37 modelos especializados para análisis predictivo de 7 tipos de enfermedades críticas',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Cumplimiento HIPAA',
      description: 'Seguridad y privacidad de datos médicos garantizada según estándares internacionales',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Análisis Instantáneo',
      description: 'Resultados predictivos en segundos, reduciendo tiempos de espera críticos',
      color: 'bg-yellow-500'
    },
    {
      icon: Heart,
      title: '98.8% Precisión',
      description: 'Máxima precisión en diagnósticos predictivos validados clínicamente',
      color: 'bg-red-500'
    },
    {
      icon: Activity,
      title: 'Monitoreo Continuo',
      description: 'Seguimiento en tiempo real de indicadores críticos de salud',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Gestión de Pacientes',
      description: 'Sistema integrado para manejo eficiente de información médica',
      color: 'bg-indigo-500'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Acceso continuo a análisis médicos críticos sin interrupciones',
      color: 'bg-teal-500'
    },
    {
      icon: Target,
      title: 'Diagnóstico Preciso',
      description: 'Identificación temprana de enfermedades críticas para tratamiento oportuno',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Características
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tecnología Médica Avanzada
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las capacidades de nuestra plataforma de IA médica diseñada para salvar vidas con análisis predictivos precisos y rápidos
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
                ¿Por qué elegir MedAI?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Nuestra plataforma combina la precisión de 37 modelos de IA especializados con la velocidad necesaria para salvar vidas. Reduce los tiempos de espera críticos que pueden durar años y permite diagnósticos tempranos que marcan la diferencia entre la vida y la muerte.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
