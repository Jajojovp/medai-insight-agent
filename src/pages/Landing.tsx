
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  Stethoscope, 
  Activity, 
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Hospital,
  UserCheck,
  Clock,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Landing = () => {
  const { language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Brain,
      title: {
        es: 'IA Médica Avanzada',
        en: 'Advanced Medical AI',
        fr: 'IA Médicale Avancée'
      },
      description: {
        es: 'Algoritmos de inteligencia artificial entrenados específicamente para cada enfermedad crítica',
        en: 'AI algorithms specifically trained for each critical disease',
        fr: 'Algorithmes d\'IA spécifiquement entraînés pour chaque maladie critique'
      }
    },
    {
      icon: Shield,
      title: {
        es: 'Seguridad Médica',
        en: 'Medical Security',
        fr: 'Sécurité Médicale'
      },
      description: {
        es: 'Cumplimiento total con estándares HIPAA y protección de datos médicos sensibles',
        en: 'Full HIPAA compliance and sensitive medical data protection',
        fr: 'Conformité HIPAA complète et protection des données médicales sensibles'
      }
    },
    {
      icon: Activity,
      title: {
        es: 'Diagnóstico Preciso',
        en: 'Accurate Diagnosis',
        fr: 'Diagnostic Précis'
      },
      description: {
        es: 'Precisión diagnóstica superior al 95% en la detección temprana de enfermedades',
        en: 'Diagnostic accuracy above 95% in early disease detection',
        fr: 'Précision diagnostique supérieure à 95% dans la détection précoce des maladies'
      }
    },
    {
      icon: Clock,
      title: {
        es: 'Análisis Rápido',
        en: 'Fast Analysis',
        fr: 'Analyse Rapide'
      },
      description: {
        es: 'Resultados médicos en tiempo real para toma de decisiones clínicas inmediatas',
        en: 'Real-time medical results for immediate clinical decision-making',
        fr: 'Résultats médicaux en temps réel pour prise de décisions cliniques immédiates'
      }
    }
  ];

  const diseases = [
    {
      category: {
        es: 'Oncología',
        en: 'Oncology',
        fr: 'Oncologie'
      },
      items: [
        { es: 'Cáncer de Mama', en: 'Breast Cancer', fr: 'Cancer du Sein' },
        { es: 'Cáncer de Próstata', en: 'Prostate Cancer', fr: 'Cancer de la Prostate' },
        { es: 'Leucemia', en: 'Leukemia', fr: 'Leucémie' },
        { es: 'Cáncer de Pulmón', en: 'Lung Cancer', fr: 'Cancer du Poumon' }
      ]
    },
    {
      category: {
        es: 'Cardiología',
        en: 'Cardiology',
        fr: 'Cardiologie'
      },
      items: [
        { es: 'Enfermedad Cardíaca', en: 'Heart Disease', fr: 'Maladie Cardiaque' },
        { es: 'Accidente Cerebrovascular', en: 'Stroke', fr: 'AVC' }
      ]
    },
    {
      category: {
        es: 'Endocrinología',
        en: 'Endocrinology',
        fr: 'Endocrinologie'
      },
      items: [
        { es: 'Diabetes', en: 'Diabetes', fr: 'Diabète' },
        { es: 'Enfermedad Renal', en: 'Kidney Disease', fr: 'Maladie Rénale' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Dr. María González',
      role: {
        es: 'Oncóloga - Hospital Universitario',
        en: 'Oncologist - University Hospital',
        fr: 'Oncologue - Hôpital Universitaire'
      },
      content: {
        es: 'MedAI ha revolucionado nuestro enfoque diagnóstico. La precisión en la detección temprana de cáncer de mama ha mejorado significativamente.',
        en: 'MedAI has revolutionized our diagnostic approach. Accuracy in early breast cancer detection has improved significantly.',
        fr: 'MedAI a révolutionné notre approche diagnostique. La précision dans la détection précoce du cancer du sein s\'est considérablement améliorée.'
      }
    },
    {
      name: 'Dr. Carlos Mendoza',
      role: {
        es: 'Cardiólogo - Clínica San Rafael',
        en: 'Cardiologist - San Rafael Clinic',
        fr: 'Cardiologue - Clinique San Rafael'
      },
      content: {
        es: 'La plataforma nos permite identificar riesgos cardiovasculares que antes pasaban desapercibidos. Es una herramienta invaluable.',
        en: 'The platform allows us to identify cardiovascular risks that previously went unnoticed. It\'s an invaluable tool.',
        fr: 'La plateforme nous permet d\'identifier des risques cardiovasculaires qui passaient inaperçus auparavant. C\'est un outil inestimable.'
      }
    }
  ];

  const stats = [
    {
      number: '98.5%',
      label: {
        es: 'Precisión Diagnóstica',
        en: 'Diagnostic Accuracy',
        fr: 'Précision Diagnostique'
      }
    },
    {
      number: '50,000+',
      label: {
        es: 'Pacientes Analizados',
        en: 'Patients Analyzed',
        fr: 'Patients Analysés'
      }
    },
    {
      number: '200+',
      label: {
        es: 'Hospitales Activos',
        en: 'Active Hospitals',
        fr: 'Hôpitaux Actifs'
      }
    },
    {
      number: '12',
      label: {
        es: 'Enfermedades Críticas',
        en: 'Critical Diseases',
        fr: 'Maladies Critiques'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full px-4 py-2">
                <Stethoscope className="h-4 w-4 mr-2" />
                {language === 'es' ? 'Medicina Predictiva con IA' : 
                 language === 'fr' ? 'Médecine Prédictive avec IA' : 
                 'Predictive Medicine with AI'}
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MedAI Pro
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {language === 'es' ? 'Diagnóstico médico inteligente para 12 enfermedades críticas. Detección temprana, precisión superior y resultados confiables para profesionales de la salud.' :
                 language === 'fr' ? 'Diagnostic médical intelligent pour 12 maladies critiques. Détection précoce, précision supérieure et résultats fiables pour professionnels de santé.' :
                 'Intelligent medical diagnosis for 12 critical diseases. Early detection, superior accuracy and reliable results for healthcare professionals.'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-xl">
                  {language === 'es' ? 'Comenzar Análisis' :
                   language === 'fr' ? 'Commencer Analyse' :
                   'Start Analysis'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/features">
                <Button variant="outline" size="lg" className="px-8 py-6 rounded-2xl text-lg font-semibold border-2 hover:bg-gray-50">
                  {language === 'es' ? 'Ver Características' :
                   language === 'fr' ? 'Voir Fonctionnalités' :
                   'View Features'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label[language as keyof typeof stat.label]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Tecnología Médica Avanzada' :
               language === 'fr' ? 'Technologie Médicale Avancée' :
               'Advanced Medical Technology'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'es' ? 'Herramientas de diagnóstico respaldadas por inteligencia artificial para mejorar la precisión médica' :
               language === 'fr' ? 'Outils de diagnostic soutenus par intelligence artificielle pour améliorer la précision médicale' :
               'AI-powered diagnostic tools to improve medical accuracy'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {feature.title[language as keyof typeof feature.title]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description[language as keyof typeof feature.description]}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diseases Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Enfermedades Analizadas' :
               language === 'fr' ? 'Maladies Analysées' :
               'Analyzed Diseases'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'es' ? 'Diagnóstico especializado para las enfermedades más críticas' :
               language === 'fr' ? 'Diagnostic spécialisé pour les maladies les plus critiques' :
               'Specialized diagnosis for the most critical diseases'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {diseases.map((category, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-center text-xl text-blue-600">
                    {category.category[language as keyof typeof category.category]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">
                          {item[language as keyof typeof item]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Testimonio de Profesionales' :
               language === 'fr' ? 'Témoignages de Professionnels' :
               'Professional Testimonials'}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl p-8">
              <CardContent className="text-center space-y-6">
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl italic text-gray-700 leading-relaxed">
                  "{testimonials[currentTestimonial].content[language as keyof typeof testimonials[currentTestimonial].content]}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role[language as keyof typeof testimonials[currentTestimonial].role]}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {language === 'es' ? '¿Listo para mejorar sus diagnósticos?' :
               language === 'fr' ? 'Prêt à améliorer vos diagnostics ?' :
               'Ready to improve your diagnostics?'}
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {language === 'es' ? 'Únase a cientos de profesionales que ya confían en MedAI para diagnósticos precisos' :
               language === 'fr' ? 'Rejoignez des centaines de professionnels qui font déjà confiance à MedAI pour des diagnostics précis' :
               'Join hundreds of professionals who already trust MedAI for accurate diagnostics'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-2xl text-lg font-semibold">
                  {language === 'es' ? 'Comenzar Gratis' :
                   language === 'fr' ? 'Commencer Gratuitement' :
                   'Start Free'}
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-2xl text-lg font-semibold">
                  {language === 'es' ? 'Contactar Ventas' :
                   language === 'fr' ? 'Contacter Ventes' :
                   'Contact Sales'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
