
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Heart, Brain, Activity, Shield, Users, Zap, Droplets, Stethoscope, Microscope, Dna } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();

  const blogPosts = [
    // Diabetes Articles
    {
      id: 'diabetes-intro',
      title: {
        es: 'Diabetes Tipo 2: Factores de Riesgo y Prevención Inteligente',
        en: 'Type 2 Diabetes: Risk Factors and Smart Prevention',
        fr: 'Diabète Type 2: Facteurs de Risque et Prévention Intelligente'
      },
      excerpt: {
        es: 'Descubre cómo la IA identifica 15+ factores de riesgo tempranos para diabetes tipo 2, permitiendo intervenciones preventivas personalizadas.',
        en: 'Discover how AI identifies 15+ early risk factors for type 2 diabetes, enabling personalized preventive interventions.',
        fr: 'Découvrez comment l\'IA identifie 15+ facteurs de risque précoces pour diabète type 2, permettant des interventions préventives personnalisées.'
      },
      date: '2024-12-25',
      readTime: '8 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      icon: Droplets,
      featured: true
    },
    {
      id: 'diabetes-diagnosis',
      title: {
        es: 'Diagnóstico Avanzado de Diabetes con 9 Modelos de IA',
        en: 'Advanced Diabetes Diagnosis with 9 AI Models',
        fr: 'Diagnostic Avancé du Diabète avec 9 Modèles d\'IA'
      },
      excerpt: {
        es: 'Análisis profundo de nuestros 9 modelos especializados: desde Random Forest hasta LSTM, alcanzando 94% de precisión diagnóstica.',
        en: 'Deep analysis of our 9 specialized models: from Random Forest to LSTM, achieving 94% diagnostic accuracy.',
        fr: 'Analyse approfondie de nos 9 modèles spécialisés: de Random Forest à LSTM, atteignant 94% de précision diagnostique.'
      },
      date: '2024-12-22',
      readTime: '12 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      icon: Microscope
    },
    {
      id: 'diabetes-treatment',
      title: {
        es: 'Seguimiento Predictivo y Tratamiento Personalizado en Diabetes',
        en: 'Predictive Monitoring and Personalized Diabetes Treatment',
        fr: 'Suivi Prédictif et Traitement Personnalisé du Diabète'
      },
      excerpt: {
        es: 'Optimización de tratamientos con IA: ajuste automático de insulina, predicción de complicaciones y planes nutricionales inteligentes.',
        en: 'AI treatment optimization: automatic insulin adjustment, complication prediction and smart nutritional plans.',
        fr: 'Optimisation de traitements avec IA: ajustement automatique d\'insuline, prédiction de complications et plans nutritionnels intelligents.'
      },
      date: '2024-12-20',
      readTime: '10 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      icon: Activity
    },

    // Breast Cancer Articles
    {
      id: 'breast-cancer-intro',
      title: {
        es: 'Cáncer de Mama: Detección Temprana Salva Vidas',
        en: 'Breast Cancer: Early Detection Saves Lives',
        fr: 'Cancer du Sein: La Détection Précoce Sauve des Vies'
      },
      excerpt: {
        es: 'Factores de riesgo genéticos y ambientales: cómo la IA analiza patrones familiares y biomarcadores para identificación temprana.',
        en: 'Genetic and environmental risk factors: how AI analyzes family patterns and biomarkers for early identification.',
        fr: 'Facteurs de risque génétiques et environnementaux: comment l\'IA analyse les patterns familiaux et biomarqueurs pour identification précoce.'
      },
      date: '2024-12-18',
      readTime: '9 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Users
    },
    {
      id: 'breast-cancer-diagnosis',
      title: {
        es: 'Mamografías Inteligentes: IA que Supera a Radiólogos',
        en: 'Smart Mammograms: AI That Outperforms Radiologists',
        fr: 'Mammographies Intelligentes: IA qui Surpasse les Radiologues'
      },
      excerpt: {
        es: 'Análisis de imágenes médicas con deep learning: 98.2% precisión en detección de lesiones microscópicas invisibles al ojo humano.',
        en: 'Medical imaging analysis with deep learning: 98.2% accuracy in detecting microscopic lesions invisible to human eye.',
        fr: 'Analyse d\'imagerie médicale avec deep learning: 98,2% précision en détection de lésions microscopiques invisibles à l\'œil humain.'
      },
      date: '2024-12-15',
      readTime: '11 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Brain
    },
    {
      id: 'breast-cancer-treatment',
      title: {
        es: 'Oncología Personalizada: Tratamientos Dirigidos por IA',
        en: 'Personalized Oncology: AI-Driven Targeted Treatments',
        fr: 'Oncologie Personnalisée: Traitements Ciblés par IA'
      },
      excerpt: {
        es: 'Selección de terapias basada en perfil genético tumoral: inmunoterapia, quimioterapia dirigida y pronóstico de supervivencia.',
        en: 'Therapy selection based on tumor genetic profile: immunotherapy, targeted chemotherapy and survival prognosis.',
        fr: 'Sélection de thérapies basée sur profil génétique tumoral: immunothérapie, chimiothérapie dirigée et pronostic de survie.'
      },
      date: '2024-12-12',
      readTime: '13 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Dna
    },

    // Heart Disease Articles
    {
      id: 'heart-disease-intro',
      title: {
        es: 'Enfermedades Cardiovasculares: El Asesino Silencioso',
        en: 'Cardiovascular Disease: The Silent Killer',
        fr: 'Maladies Cardiovasculaires: Le Tueur Silencieux'
      },
      excerpt: {
        es: 'Factores de riesgo cardiovascular: hipertensión, colesterol, diabetes y cómo la IA predice eventos cardíacos con 92% precisión.',
        en: 'Cardiovascular risk factors: hypertension, cholesterol, diabetes and how AI predicts cardiac events with 92% accuracy.',
        fr: 'Facteurs de risque cardiovasculaire: hypertension, cholestérol, diabète et comment l\'IA prédit les événements cardiaques avec 92% précision.'
      },
      date: '2024-12-10',
      readTime: '10 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Heart
    },
    {
      id: 'heart-disease-diagnosis',
      title: {
        es: 'Electrocardiogramas Inteligentes y Diagnóstico Cardíaco',
        en: 'Smart ECGs and Cardiac Diagnosis',
        fr: 'ECG Intelligents et Diagnostic Cardiaque'
      },
      excerpt: {
        es: 'Análisis automático de ECG con machine learning: detección de arritmias, isquemia y patrones de riesgo en tiempo real.',
        en: 'Automatic ECG analysis with machine learning: detection of arrhythmias, ischemia and risk patterns in real time.',
        fr: 'Analyse automatique d\'ECG avec machine learning: détection d\'arythmies, ischémie et patterns de risque en temps réel.'
      },
      date: '2024-12-08',
      readTime: '12 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Activity
    },
    {
      id: 'heart-disease-treatment',
      title: {
        es: 'Cardiología Preventiva: Intervenciones Guiadas por IA',
        en: 'Preventive Cardiology: AI-Guided Interventions',
        fr: 'Cardiologie Préventive: Interventions Guidées par IA'
      },
      excerpt: {
        es: 'Estrategias preventivas personalizadas: medicación óptima, ejercicio dirigido y seguimiento continuo con wearables inteligentes.',
        en: 'Personalized preventive strategies: optimal medication, targeted exercise and continuous monitoring with smart wearables.',
        fr: 'Stratégies préventives personnalisées: médication optimale, exercice dirigé et suivi continu avec wearables intelligents.'
      },
      date: '2024-12-05',
      readTime: '11 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Shield
    },

    // Additional Featured Articles
    {
      id: 'ai-revolution',
      title: {
        es: 'Revolución de la IA Médica: 62+ Modelos para 12 Enfermedades',
        en: 'Medical AI Revolution: 62+ Models for 12 Diseases',
        fr: 'Révolution de l\'IA Médicale: 62+ Modèles pour 12 Maladies'
      },
      excerpt: {
        es: 'Análisis completo de nuestra plataforma: cómo 62+ modelos especializados transforman el diagnóstico médico con 98.8% precisión máxima.',
        en: 'Complete analysis of our platform: how 62+ specialized models transform medical diagnosis with 98.8% maximum accuracy.',
        fr: 'Analyse complète de notre plateforme: comment 62+ modèles spécialisés transforment le diagnostic médical avec 98,8% précision maximale.'
      },
      date: '2024-12-03',
      readTime: '15 min',
      category: { es: 'Medicina Predictiva', en: 'Predictive Medicine', fr: 'Médecine Prédictive' },
      icon: Brain
    },
    {
      id: 'hospital-success',
      title: {
        es: 'Casos de Éxito: 15+ Hospitales Transformados por IA',
        en: 'Success Stories: 15+ Hospitals Transformed by AI',
        fr: 'Cas de Succès: 15+ Hôpitaux Transformés par IA'
      },
      excerpt: {
        es: 'Implementaciones reales: 67% reducción tiempo diagnóstico, 40% mejora eficiencia operativa, 280% ROI promedio documentado.',
        en: 'Real implementations: 67% reduction in diagnostic time, 40% operational efficiency improvement, 280% average documented ROI.',
        fr: 'Implémentations réelles: 67% réduction temps diagnostic, 40% amélioration efficacité opérationnelle, 280% ROI moyen documenté.'
      },
      date: '2024-12-01',
      readTime: '13 min',
      category: { es: 'Casos de Estudio', en: 'Case Studies', fr: 'Études de Cas' },
      icon: Stethoscope
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Blog MedAI - Medicina Predictiva' :
             language === 'fr' ? 'Blog MedAI - Médecine Prédictive' :
             'MedAI Blog - Predictive Medicine'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Investigación médica avanzada con IA. 62+ modelos especializados transformando el diagnóstico y tratamiento.' :
             language === 'fr' ? 'Recherche médicale avancée avec IA. 62+ modèles spécialisés transformant diagnostic et traitement.' :
             'Advanced medical research with AI. 62+ specialized models transforming diagnosis and treatment.'}
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Artículo Destacado' :
             language === 'fr' ? 'Article en Vedette' :
             'Featured Article'}
          </h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <featuredPost.icon className="h-24 w-24 text-white" />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-600">
                      {featuredPost.category[language as keyof typeof featuredPost.category]}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : 'en-US')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3">
                    {featuredPost.title[language as keyof typeof featuredPost.title]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt[language as keyof typeof featuredPost.excerpt]}
                  </p>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      {language === 'es' ? 'Leer Artículo' :
                       language === 'fr' ? 'Lire Article' :
                       'Read Article'}
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Regular Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Artículos Médicos' :
             language === 'fr' ? 'Articles Médicaux' :
             'Medical Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <Badge variant="secondary">
                        {post.category[language as keyof typeof post.category]}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {post.title[language as keyof typeof post.title]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.excerpt[language as keyof typeof post.excerpt]}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-xs space-x-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : 'en-US')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm">
                          {language === 'es' ? 'Leer' :
                           language === 'fr' ? 'Lire' :
                           'Read'}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'MedAI en Números' :
               language === 'fr' ? 'MedAI en Chiffres' :
               'MedAI in Numbers'}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Enfermedades' :
                 language === 'fr' ? 'Maladies' :
                 'Diseases'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">62+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Modelos IA' :
                 language === 'fr' ? 'Modèles IA' :
                 'AI Models'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98.8%</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Precisión Máx.' :
                 language === 'fr' ? 'Précision Max.' :
                 'Max Accuracy'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Casos Clínicos' :
                 language === 'fr' ? 'Cas Cliniques' :
                 'Clinical Cases'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
