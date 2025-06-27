import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Lungs, 
  Shield, 
  Activity, 
  Stethoscope,
  Eye,
  Bone,
  Droplets,
  Zap,
  ArrowRight,
  Download,
  Utensils
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const HealthRecommendations = () => {
  const { language } = useLanguage();

  const recommendations = [
    {
      disease: {
        es: 'Cáncer de Mama',
        en: 'Breast Cancer',
        fr: 'Cancer du Sein'
      },
      recommendation: {
        es: 'Mamografías anuales para mujeres de 45-54 años',
        en: 'Annual mammograms for women aged 45-54',
        fr: 'Mammographies annuelles pour femmes de 45-54 ans'
      }
    },
    {
      disease: {
        es: 'Cáncer de Próstata',
        en: 'Prostate Cancer',
        fr: 'Cancer de la Prostate'
      },
      recommendation: {
        es: 'Examen de PSA anual para hombres mayores de 50 años',
        en: 'Annual PSA test for men over 50 years old',
        fr: 'Test PSA annuel pour hommes de plus de 50 ans'
      }
    },
    {
      disease: {
        es: 'Diabetes',
        en: 'Diabetes',
        fr: 'Diabète'
      },
      recommendation: {
        es: 'Control de glucosa en sangre y dieta baja en carbohidratos',
        en: 'Blood glucose control and low-carb diet',
        fr: 'Contrôle de la glycémie et régime pauvre en glucides'
      }
    },
    {
      disease: {
        es: 'Enfermedad Cardíaca',
        en: 'Heart Disease',
        fr: 'Maladie Cardiaque'
      },
      recommendation: {
        es: 'Dieta baja en grasas saturadas y ejercicio regular',
        en: 'Low saturated fat diet and regular exercise',
        fr: 'Régime pauvre en graisses saturées et exercice régulier'
      }
    },
    {
      disease: {
        es: 'ACV',
        en: 'Stroke',
        fr: 'AVC'
      },
      recommendation: {
        es: 'Control de la presión arterial y colesterol',
        en: 'Blood pressure and cholesterol control',
        fr: 'Contrôle de la pression artérielle et du cholestérol'
      }
    },
    {
      disease: {
        es: 'Enfermedad Renal Crónica',
        en: 'Chronic Kidney Disease',
        fr: 'Maladie Rénale Chronique'
      },
      recommendation: {
        es: 'Control de la presión arterial y dieta baja en proteínas',
        en: 'Blood pressure control and low-protein diet',
        fr: 'Contrôle de la pression artérielle et régime pauvre en protéines'
      }
    },
    {
      disease: {
        es: 'Cáncer de Pulmón',
        en: 'Lung Cancer',
        fr: 'Cancer du Poumon'
      },
      recommendation: {
        es: 'Dejar de fumar y evitar la exposición al humo',
        en: 'Quit smoking and avoid smoke exposure',
        fr: 'Arrêter de fumer et éviter l\'exposition à la fumée'
      }
    },
    {
      disease: {
        es: 'Cáncer de Páncreas',
        en: 'Pancreatic Cancer',
        fr: 'Cancer du Pancréas'
      },
      recommendation: {
        es: 'Dieta saludable y evitar el consumo de alcohol',
        en: 'Healthy diet and avoid alcohol consumption',
        fr: 'Alimentation saine et éviter la consommation d\'alcool'
      }
    },
    {
      disease: {
        es: 'Cáncer de Hígado',
        en: 'Liver Cancer',
        fr: 'Cancer du Foie'
      },
      recommendation: {
        es: 'Vacunación contra la hepatitis B y evitar el alcohol',
        en: 'Hepatitis B vaccination and avoid alcohol',
        fr: 'Vaccination contre l\'hépatite B et éviter l\'alcool'
      }
    },
    {
      disease: {
        es: 'Cáncer de Estómago',
        en: 'Stomach Cancer',
        fr: 'Cancer de l\'Estomac'
      },
      recommendation: {
        es: 'Dieta baja en sal y evitar alimentos ahumados',
        en: 'Low-salt diet and avoid smoked foods',
        fr: 'Régime pauvre en sel et éviter les aliments fumés'
      }
    },
    {
      disease: {
        es: 'Leucemia',
        en: 'Leukemia',
        fr: 'Leucémie'
      },
      recommendation: {
        es: 'Evitar la exposición a productos químicos tóxicos',
        en: 'Avoid exposure to toxic chemicals',
        fr: 'Éviter l\'exposition aux produits chimiques toxiques'
      }
    },
    {
      disease: {
        es: 'Epilepsia',
        en: 'Epilepsy',
        fr: 'Épilepsie'
      },
      recommendation: {
        es: 'Tomar medicamentos según lo prescrito y evitar el estrés',
        en: 'Take medication as prescribed and avoid stress',
        fr: 'Prendre les médicaments comme prescrits et éviter le stress'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-green-50/30">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Recomendaciones Clínicas' :
             language === 'fr' ? 'Recommandations Cliniques' :
             'Clinical Recommendations'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Guías basadas en evidencia para las 12 enfermedades analizadas por nuestra IA médica' :
             language === 'fr' ? 'Guides basés sur preuves pour les 12 maladies analysées par notre IA médicale' :
             'Evidence-based guides for the 12 diseases analyzed by our medical AI'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((item, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-center text-xl text-blue-600">
                  {item.disease[language as keyof typeof item.disease]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {item.recommendation[language as keyof typeof item.recommendation]}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons Section - Fixed functionality */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'es' ? 'Herramientas Médicas Avanzadas' :
             language === 'fr' ? 'Outils Médicaux Avancés' :
             'Advanced Medical Tools'}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'es' ? 'Acceda a nuestras herramientas de diagnóstico IA y descargue guías clínicas completas' :
             language === 'fr' ? 'Accédez à nos outils de diagnostic IA et téléchargez guides cliniques complètes' :
             'Access our AI diagnostic tools and download complete clinical guides'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                {language === 'es' ? 'Acceder a Herramientas' :
                 language === 'fr' ? 'Accéder aux Outils' :
                 'Access Tools'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/resources">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-2xl text-lg font-semibold">
                {language === 'es' ? 'Descargar Guías' :
                 language === 'fr' ? 'Télécharger Guides' :
                 'Download Guides'}
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* General Wellness Section */}
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'es' ? 'Bienestar General' :
             language === 'fr' ? 'Bien-être Général' :
             'General Wellness'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-3">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-800">
                  {language === 'es' ? 'Nutrición Integral' :
                   language === 'fr' ? 'Nutrition Intégrale' :
                   'Comprehensive Nutrition'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• {language === 'es' ? 'Dieta mediterránea rica en antioxidantes' : 'Mediterranean diet rich in antioxidants'}</li>
                  <li>• {language === 'es' ? 'Omega-3 para salud cardiovascular' : 'Omega-3 for cardiovascular health'}</li>
                  <li>• {language === 'es' ? 'Fibra para salud digestiva' : 'Fiber for digestive health'}</li>
                  <li>• {language === 'es' ? 'Limitación de azúcares procesados' : 'Processed sugar limitation'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-3">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-800">
                  {language === 'es' ? 'Ejercicio Adaptado' :
                   language === 'fr' ? 'Exercice Adapté' :
                   'Adapted Exercise'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• {language === 'es' ? '150 min/semana actividad moderada' : '150 min/week moderate activity'}</li>
                  <li>• {language === 'es' ? 'Ejercicios de fuerza 2x/semana' : 'Strength exercises 2x/week'}</li>
                  <li>• {language === 'es' ? 'Flexibilidad y equilibrio' : 'Flexibility and balance'}</li>
                  <li>• {language === 'es' ? 'Adaptación según condición' : 'Adaptation by condition'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-800">
                  {language === 'es' ? 'Salud Mental' :
                   language === 'fr' ? 'Santé Mentale' :
                   'Mental Health'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>• {language === 'es' ? 'Técnicas de manejo del estrés' : 'Stress management techniques'}</li>
                  <li>• {language === 'es' ? 'Sueño reparador 7-9 horas' : 'Restorative sleep 7-9 hours'}</li>
                  <li>• {language === 'es' ? 'Mindfulness y meditación' : 'Mindfulness and meditation'}</li>
                  <li>• {language === 'es' ? 'Apoyo social y profesional' : 'Social and professional support'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HealthRecommendations;
