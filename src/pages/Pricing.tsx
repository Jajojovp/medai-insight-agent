
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Pricing = () => {
  const { language } = useLanguage();

  const plans = [
    {
      name: language === 'es' ? 'Básico' : language === 'fr' ? 'Basique' : 'Basic',
      price: '$49',
      period: language === 'es' ? '/mes' : language === 'fr' ? '/mois' : '/month',
      description: language === 'es' ? 'Para clínicas pequeñas y consultorios' : 
                   language === 'fr' ? 'Pour petites cliniques et cabinets' : 
                   'For small clinics and practices',
      features: [
        language === 'es' ? 'Hasta 100 análisis/mes' : language === 'fr' ? 'Jusqu\'à 100 analyses/mois' : 'Up to 100 analyses/month',
        language === 'es' ? '3 tipos de análisis' : language === 'fr' ? '3 types d\'analyses' : '3 analysis types',
        language === 'es' ? 'Soporte por email' : language === 'fr' ? 'Support par email' : 'Email support',
        language === 'es' ? 'Reportes básicos' : language === 'fr' ? 'Rapports de base' : 'Basic reports'
      ],
      popular: false
    },
    {
      name: language === 'es' ? 'Profesional' : language === 'fr' ? 'Professionnel' : 'Professional',
      price: '$149',
      period: language === 'es' ? '/mes' : language === 'fr' ? '/mois' : '/month',
      description: language === 'es' ? 'Para hospitales y centros médicos' : 
                   language === 'fr' ? 'Pour hôpitaux et centres médicaux' : 
                   'For hospitals and medical centers',
      features: [
        language === 'es' ? 'Hasta 1000 análisis/mes' : language === 'fr' ? 'Jusqu\'à 1000 analyses/mois' : 'Up to 1000 analyses/month',
        language === 'es' ? '7 tipos de análisis' : language === 'fr' ? '7 types d\'analyses' : '7 analysis types',
        language === 'es' ? 'Soporte prioritario 24/7' : language === 'fr' ? 'Support prioritaire 24/7' : '24/7 priority support',
        language === 'es' ? 'Reportes avanzados' : language === 'fr' ? 'Rapports avancés' : 'Advanced reports',
        language === 'es' ? 'API completa' : language === 'fr' ? 'API complète' : 'Full API access',
        language === 'es' ? 'Integración HIPAA' : language === 'fr' ? 'Intégration HIPAA' : 'HIPAA integration'
      ],
      popular: true
    },
    {
      name: language === 'es' ? 'Empresarial' : language === 'fr' ? 'Entreprise' : 'Enterprise',
      price: language === 'es' ? 'Personalizado' : language === 'fr' ? 'Personnalisé' : 'Custom',
      period: '',
      description: language === 'es' ? 'Para redes hospitalarias y sistemas de salud' : 
                   language === 'fr' ? 'Pour réseaux hospitaliers et systèmes de santé' : 
                   'For hospital networks and health systems',
      features: [
        language === 'es' ? 'Análisis ilimitados' : language === 'fr' ? 'Analyses illimitées' : 'Unlimited analyses',
        language === 'es' ? 'Todos los tipos de análisis' : language === 'fr' ? 'Tous types d\'analyses' : 'All analysis types',
        language === 'es' ? 'Soporte dedicado' : language === 'fr' ? 'Support dédié' : 'Dedicated support',
        language === 'es' ? 'Implementación personalizada' : language === 'fr' ? 'Implémentation personnalisée' : 'Custom implementation',
        language === 'es' ? 'Capacitación incluida' : language === 'fr' ? 'Formation incluse' : 'Training included',
        language === 'es' ? 'SLA garantizado' : language === 'fr' ? 'SLA garanti' : 'Guaranteed SLA'
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
            {language === 'es' ? 'Precios' : language === 'fr' ? 'Tarifs' : 'Pricing'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Planes que Salvan Vidas' : 
             language === 'fr' ? 'Plans qui Sauvent des Vies' : 
             'Plans that Save Lives'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Elige el plan que mejor se adapte a tu institución médica y comienza a salvar vidas con análisis predictivos precisos' :
             language === 'fr' ? 'Choisissez le plan qui convient le mieux à votre institution médicale et commencez à sauver des vies avec analyses prédictives précises' :
             'Choose the plan that best fits your medical institution and start saving lives with precise predictive analysis'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border rounded-3xl ${plan.popular ? 'border-blue-500 scale-105' : 'border-white/30'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white rounded-full px-4 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>{language === 'es' ? 'Más Popular' : language === 'fr' ? 'Plus Populaire' : 'Most Popular'}</span>
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
                      {language === 'es' ? 'Comenzar Ahora' : language === 'fr' ? 'Commencer Maintenant' : 'Get Started'}
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
              <h3 className="text-2xl font-bold mb-4">
                {language === 'es' ? '¿Necesitas un plan personalizado?' : 
                 language === 'fr' ? 'Besoin d\'un plan personnalisé?' : 
                 'Need a custom plan?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'es' ? 'Contáctanos para discutir las necesidades específicas de tu institución médica' :
                 language === 'fr' ? 'Contactez-nous pour discuter des besoins spécifiques de votre institution médicale' :
                 'Contact us to discuss your medical institution\'s specific needs'}
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  {language === 'es' ? 'Contactar Ventas' : language === 'fr' ? 'Contacter les Ventes' : 'Contact Sales'}
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
