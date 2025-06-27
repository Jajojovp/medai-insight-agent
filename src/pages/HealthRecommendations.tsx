
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users,
  Droplets,
  Scan,
  TrendingUp
} from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const HealthRecommendations = () => {
  const { language } = useLanguage();

  const medicalRecommendations = [
    {
      category: {
        es: 'Diabetes Tipo 2',
        en: 'Type 2 Diabetes',
        fr: 'Diabète Type 2'
      },
      icon: Droplets,
      color: 'blue',
      recommendations: {
        es: [
          'Monitoreo continuo de glucosa en sangre con glucómetros o CGM',
          'Control de HbA1c cada 3-6 meses (objetivo <7% para la mayoría)',
          'Derivación a nutricionista para plan alimentario personalizado',
          'Ejercicio regular: 150 minutos semanales de actividad moderada',
          'Exámenes regulares: ojos, riñones, pies para prevenir complicaciones',
          'Educación continua del paciente sobre autocuidado y medicamentos'
        ],
        en: [
          'Continuous blood glucose monitoring with glucometers or CGM',
          'HbA1c control every 3-6 months (target <7% for most)',
          'Nutritionist referral for personalized meal plan',
          'Regular exercise: 150 minutes weekly of moderate activity', 
          'Regular exams: eyes, kidneys, feet to prevent complications',
          'Continuous patient education on self-care and medications'
        ],
        fr: [
          'Surveillance continue du glucose sanguin avec glucomètres ou CGM',
          'Contrôle HbA1c tous les 3-6 mois (objectif <7% pour la plupart)',
          'Référence à nutritionniste pour plan alimentaire personnalisé',
          'Exercice régulier: 150 minutes hebdomadaires d\'activité modérée',
          'Examens réguliers: yeux, reins, pieds pour prévenir complications',
          'Éducation continue du patient sur auto-soins et médicaments'
        ]
      }
    },
    {
      category: {
        es: 'Cáncer de Mama',
        en: 'Breast Cancer', 
        fr: 'Cancer du Sein'
      },
      icon: Heart,
      color: 'pink',
      recommendations: {
        es: [
          'Mamografías anuales a partir de los 40-50 años según factores de riesgo',
          'Autoexamen mamario mensual para detectar cambios tempranos',
          'Evaluación genética para mutaciones BRCA1/BRCA2 en casos familiares',
          'Examen clínico de mama semestral por profesional capacitado',
          'Resonancia magnética anual para pacientes de muy alto riesgo',
          'Seguimiento multidisciplinario post-tratamiento durante 5+ años'
        ],
        en: [
          'Annual mammograms starting at 40-50 years based on risk factors',
          'Monthly breast self-examination to detect early changes',
          'Genetic evaluation for BRCA1/BRCA2 mutations in familial cases',
          'Semi-annual clinical breast exam by trained professional',
          'Annual MRI for very high-risk patients',
          'Multidisciplinary post-treatment follow-up for 5+ years'
        ],
        fr: [
          'Mammographies annuelles à partir de 40-50 ans selon facteurs de risque',
          'Auto-examen mammaire mensuel pour détecter changements précoces',
          'Évaluation génétique pour mutations BRCA1/BRCA2 dans cas familiaux',
          'Examen clinique mammaire semestriel par professionnel formé',
          'IRM annuelle pour patientes à très haut risque',
          'Suivi multidisciplinaire post-traitement pendant 5+ ans'
        ]
      }
    },
    {
      category: {
        es: 'Enfermedades Cardíacas',
        en: 'Heart Disease',
        fr: 'Maladies Cardiaques'
      },
      icon: Activity,
      color: 'red',
      recommendations: {
        es: [
          'Control estricto de presión arterial (<130/80 mmHg para la mayoría)',
          'Manejo de colesterol con estatinas según guías clínicas',
          'Cesación completa del tabaquismo con apoyo médico si necesario',
          'Dieta mediterránea rica en omega-3 y fibra, baja en sodio',
          'Ejercicio cardiovascular regular: 30 minutos, 5 días/semana',
          'Evaluación de riesgo cardiovascular cada 2-3 años'
        ],
        en: [
          'Strict blood pressure control (<130/80 mmHg for most)',
          'Cholesterol management with statins per clinical guidelines',
          'Complete smoking cessation with medical support if needed',
          'Mediterranean diet rich in omega-3 and fiber, low sodium',
          'Regular cardiovascular exercise: 30 minutes, 5 days/week',
          'Cardiovascular risk assessment every 2-3 years'
        ],
        fr: [
          'Contrôle strict de la pression artérielle (<130/80 mmHg pour la plupart)',
          'Gestion du cholestérol avec statines selon directives cliniques',
          'Arrêt complet du tabagisme avec soutien médical si nécessaire',
          'Régime méditerranéen riche en oméga-3 et fibres, faible en sodium',
          'Exercice cardiovasculaire régulier: 30 minutes, 5 jours/semaine',
          'Évaluation du risque cardiovasculaire tous les 2-3 ans'
        ]
      }
    },
    {
      category: {
        es: 'Prevención de ACV',
        en: 'Stroke Prevention',
        fr: 'Prévention AVC'
      },
      icon: Brain,
      color: 'purple',
      recommendations: {
        es: [
          'Control óptimo de presión arterial (principal factor de riesgo)',
          'Anticoagulación en fibrilación auricular según CHA2DS2-VASc',
          'Control glucémico estricto en pacientes diabéticos',
          'Manejo de lípidos con objetivos LDL <70 mg/dL en alto riesgo',
          'Actividad física regular para mejorar circulación cerebral',
          'Reconocimiento temprano de síntomas: protocolo FAST'
        ],
        en: [
          'Optimal blood pressure control (main risk factor)',
          'Anticoagulation in atrial fibrillation per CHA2DS2-VASc',
          'Strict glycemic control in diabetic patients',
          'Lipid management with LDL targets <70 mg/dL in high risk',
          'Regular physical activity to improve cerebral circulation',
          'Early symptom recognition: FAST protocol'
        ],
        fr: [
          'Contrôle optimal de la pression artérielle (principal facteur de risque)',
          'Anticoagulation en fibrillation auriculaire selon CHA2DS2-VASc',
          'Contrôle glycémique strict chez patients diabétiques',
          'Gestion lipidique avec objectifs LDL <70 mg/dL en haut risque',
          'Activité physique régulière pour améliorer circulation cérébrale',
          'Reconnaissance précoce des symptômes: protocole FAST'
        ]
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      pink: 'bg-pink-100 text-pink-800 border-pink-200',
      red: 'bg-red-100 text-red-800 border-red-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      pink: 'bg-pink-500', 
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full">
            {language === 'es' ? 'Consejos Médicos Profesionales' : 
             language === 'fr' ? 'Conseils Médicaux Professionnels' : 
             'Professional Medical Advice'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Recomendaciones Clínicas Basadas en Evidencia' : 
             language === 'fr' ? 'Recommandations Cliniques Basées sur l\'Évidence' : 
             'Evidence-Based Clinical Recommendations'}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === 'es' ? 'Guías clínicas actualizadas para profesionales de la salud basadas en evidencia científica y buenas prácticas médicas para 12+ enfermedades críticas' :
             language === 'fr' ? 'Guides cliniques mis à jour pour professionnels de santé basés sur évidence scientifique et bonnes pratiques médicales pour 12+ maladies critiques' :
             'Updated clinical guidelines for healthcare professionals based on scientific evidence and medical best practices for 12+ critical diseases'}
          </p>
        </div>

        {/* Medical Statistics */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {language === 'es' ? 'Impacto Global de Enfermedades Crónicas' :
               language === 'fr' ? 'Impact Global des Maladies Chroniques' :
               'Global Impact of Chronic Diseases'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">41M</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Muertes anuales por enfermedades crónicas' :
                   language === 'fr' ? 'Décès annuels par maladies chroniques' :
                   'Annual deaths from chronic diseases'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">71%</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'De todas las muertes globales' :
                   language === 'fr' ? 'De tous les décès mondiaux' :
                   'Of all global deaths'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Prevenibles con detección temprana' :
                   language === 'fr' ? 'Évitables avec détection précoce' :
                   'Preventable with early detection'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">62+</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Modelos de IA especializados' :
                   language === 'fr' ? 'Modèles d\'IA spécialisés' :
                   'Specialized AI models'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Recommendations by Disease */}
        <div className="space-y-12">
          {medicalRecommendations.map((disease, index) => {
            const Icon = disease.icon;
            return (
              <Card key={index} className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${getIconBgColor(disease.color)} rounded-2xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">
                        {disease.category[language as keyof typeof disease.category]}
                      </CardTitle>
                      <Badge className={getColorClasses(disease.color)}>
                        {language === 'es' ? 'Recomendaciones Clínicas' :
                         language === 'fr' ? 'Recommandations Cliniques' :
                         'Clinical Recommendations'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {disease.recommendations[language as keyof typeof disease.recommendations].map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professional Sources Section */}
        <Card className="mt-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Shield className="h-6 w-6 mr-2 text-blue-500" />
              {language === 'es' ? 'Fuentes Certificadas' :
               language === 'fr' ? 'Sources Certifiées' :
               'Certified Sources'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">American Diabetes Association (ADA)</h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Guías de práctica clínica para diabetes' :
                   language === 'fr' ? 'Guides de pratique clinique pour diabète' :
                   'Clinical practice guidelines for diabetes'}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">National Cancer Institute (NCI)</h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Protocolos de detección y tratamiento oncológico' :
                   language === 'fr' ? 'Protocoles de détection et traitement oncologique' :
                   'Cancer detection and treatment protocols'}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">American Heart Association (AHA)</h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Directrices para enfermedades cardiovasculares' :
                   language === 'fr' ? 'Directives pour maladies cardiovasculaires' :
                   'Cardiovascular disease guidelines'}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">World Health Organization (WHO)</h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Estándares globales de salud pública' :
                   language === 'fr' ? 'Standards globaux de santé publique' :
                   'Global public health standards'}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Mayo Clinic</h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Protocolos de práctica médica basada en evidencia' :
                   language === 'fr' ? 'Protocoles de pratique médicale basée sur évidence' :
                   'Evidence-based medical practice protocols'}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">CDC - Centers for Disease Control</h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Recomendaciones de prevención y salud pública' :
                   language === 'fr' ? 'Recommandations de prévention et santé publique' :
                   'Prevention and public health recommendations'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-green-50/30 to-blue-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Medicina Predictiva Basada en IA' : 
                 language === 'fr' ? 'Médecine Prédictive Basée sur IA' : 
                 'AI-Based Predictive Medicine'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Implemente estas recomendaciones clínicas junto con nuestros 62+ modelos de IA especializados para optimizar la detección temprana y el manejo de 12 enfermedades críticas.' :
                 language === 'fr' ? 'Implémentez ces recommandations cliniques avec nos 62+ modèles d\'IA spécialisés pour optimiser la détection précoce et la gestion de 12 maladies critiques.' :
                 'Implement these clinical recommendations alongside our 62+ specialized AI models to optimize early detection and management of 12 critical diseases.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 rounded-2xl text-lg px-8 py-3">
                  {language === 'es' ? 'Acceder a Herramientas Médicas' : 
                   language === 'fr' ? 'Accéder aux Outils Médicaux' : 
                   'Access Medical Tools'}
                </Button>
                <Button variant="outline" className="rounded-2xl text-lg px-8 py-3 border-green-200 hover:bg-green-50">
                  {language === 'es' ? 'Descargar Guías PDF' : 
                   language === 'fr' ? 'Télécharger Guides PDF' : 
                   'Download PDF Guidelines'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthRecommendations;
