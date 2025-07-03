
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: '$49',
      period: '/mes',
      description: 'Para clínicas pequeñas y consultorios',
      features: [
        'Hasta 100 análisis/mes',
        '3 tipos de análisis',
        'Soporte por email',
        'Reportes básicos'
      ],
      popular: false
    },
    {
      name: 'Profesional',
      price: '$149',
      period: '/mes',
      description: 'Para hospitales y centros médicos',
      features: [
        'Hasta 1000 análisis/mes',
        '7 tipos de análisis',
        'Soporte prioritario 24/7',
        'Reportes avanzados',
        'API completa',
        'Integración HIPAA'
      ],
      popular: true
    },
    {
      name: 'Empresarial',
      price: 'Personalizado',
      period: '',
      description: 'Para redes hospitalarias y sistemas de salud',
      features: [
        'Análisis ilimitados',
        'Todos los tipos de análisis',
        'Soporte dedicado',
        'Implementación personalizada',
        'Capacitación incluida',
        'SLA garantizado'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Precios
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Planes que Salvan Vidas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tu institución médica y comienza a salvar vidas con análisis predictivos precisos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border rounded-3xl ${plan.popular ? 'border-blue-500 scale-105' : 'border-white/30'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white rounded-full px-4 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Más Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Link to="/contact">
                    <Button className={`w-full rounded-2xl ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                      Comenzar Ahora
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">¿Necesitas un plan personalizado?</h3>
              <p className="text-gray-600 mb-6">
                Contáctanos para discutir las necesidades específicas de tu institución médica
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  Contactar Ventas
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
