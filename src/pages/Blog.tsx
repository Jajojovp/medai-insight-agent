import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, TrendingUp, Heart, Brain, Activity, Shield, Users, Zap, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();

  const blogPosts = [
    {
      id: '1',
      title: {
        es: 'Revolución Diagnóstica: 62+ Modelos de IA para 12 Enfermedades Críticas',
        en: 'Diagnostic Revolution: 62+ AI Models for 12 Critical Diseases',
        fr: 'Révolution Diagnostique: 62+ Modèles d\'IA pour 12 Maladies Critiques'
      },
      excerpt: {
        es: 'Análisis completo de cómo nuestros 62+ modelos especializados están transformando la medicina predictiva con hasta 98.8% de precisión en detección temprana.',
        en: 'Complete analysis of how our 62+ specialized models are transforming predictive medicine with up to 98.8% accuracy in early detection.',
        fr: 'Analyse complète de la façon dont nos 62+ modèles spécialisés transforment la médecine prédictive avec jusqu\'à 98,8% de précision en détection précoce.'
      },
      date: '2024-12-25',
      readTime: '12 min',
      category: {
        es: 'Medicina Predictiva',
        en: 'Predictive Medicine',
        fr: 'Médecine Prédictive'
      },
      icon: Brain,
      featured: true
    },
    {
      id: '2', 
      title: {
        es: 'Diabetes Tipo 2: 9 Modelos Especializados con Validación Clínica',
        en: 'Type 2 Diabetes: 9 Specialized Models with Clinical Validation',
        fr: 'Diabète Type 2: 9 Modèles Spécialisés avec Validation Clinique'
      },
      excerpt: {
        es: 'Implementación clínica de 9 modelos de ML para diabetes tipo 2: desde Random Forest hasta LSTM, alcanzando 94% de precisión en predicción.',
        en: 'Clinical implementation of 9 ML models for type 2 diabetes: from Random Forest to LSTM, achieving 94% accuracy in prediction.',
        fr: 'Implémentation clinique de 9 modèles ML pour diabète type 2: de Random Forest à LSTM, atteignant 94% de précision en prédiction.'
      },
      date: '2024-12-22',
      readTime: '8 min',
      category: {
        es: 'Endocrinología',
        en: 'Endocrinology',
        fr: 'Endocrinologie'
      },
      icon: Droplets
    },
    {
      id: '3',
      title: {
        es: 'Oncología Predictiva: Detección Temprana en 6 Tipos de Cáncer',
        en: 'Predictive Oncology: Early Detection in 6 Cancer Types',
        fr: 'Oncologie Prédictive: Détection Précoce en 6 Types de Cancer'
      },
      excerpt: {
        es: 'Análisis profundo de modelos especializados para mama, próstata, páncreas, estómago, hígado y pulmón con técnicas de deep learning.',
        en: 'Deep analysis of specialized models for breast, prostate, pancreatic, stomach, liver and lung cancer with deep learning techniques.',
        fr: 'Analyse approfondie des modèles spécialisés pour cancers du sein, prostate, pancréas, estomac, foie et poumon avec techniques de deep learning.'
      },
      date: '2024-12-20',
      readTime: '15 min',
      category: {
        es: 'Oncología',
        en: 'Oncology',
        fr: 'Oncologie'
      },
      icon: Users
    },
    {
      id: '4',
      title: {
        es: 'Cardiología Digital: IA para Prevención de Enfermedades Cardiovasculares',
        en: 'Digital Cardiology: AI for Cardiovascular Disease Prevention',
        fr: 'Cardiologie Numérique: IA pour Prévention des Maladies Cardiovasculaires'
      },
      excerpt: {
        es: 'Modelos predictivos para enfermedades cardíacas y ACV utilizando 14+ algoritmos especializados con validación en poblaciones diversas.',
        en: 'Predictive models for heart disease and stroke using 14+ specialized algorithms with validation in diverse populations.',
        fr: 'Modèles prédictifs pour maladies cardiaques et AVC utilisant 14+ algorithmes spécialisés avec validation dans populations diverses.'
      },
      date: '2024-12-18',
      readTime: '11 min',
      category: {
        es: 'Cardiología',
        en: 'Cardiology',
        fr: 'Cardiologie'
      },
      icon: Heart
    },
    {
      id: '5',
      title: {
        es: 'Nefrología Predictiva: Detección Temprana de Enfermedad Renal Crónica',
        en: 'Predictive Nephrology: Early Detection of Chronic Kidney Disease',
        fr: 'Néphrologie Prédictive: Détection Précoce de la Maladie Rénale Chronique'
      },
      excerpt: {
        es: 'Implementación de 5 modelos especializados para CKD que mejoran la detección temprana antes de síntomas clínicos evidentes.',
        en: 'Implementation of 5 specialized CKD models that improve early detection before evident clinical symptoms.',
        fr: 'Implémentation de 5 modèles spécialisés pour MRC améliorant la détection précoce avant symptômes cliniques évidents.'
      },
      date: '2024-12-15',
      readTime: '9 min',
      category: {
        es: 'Nefrología',
        en: 'Nephrology',
        fr: 'Néphrologie'
      },
      icon: Shield
    },
    {
      id: '6',
      title: {
        es: 'Neurología Computacional: IA Avanzada para Epilepsia',
        en: 'Computational Neurology: Advanced AI for Epilepsy',
        fr: 'Neurologie Computationnelle: IA Avancée pour l\'Épilepsie'
      },
      excerpt: {
        es: 'Modelos de deep learning para predicción de crisis epilépticas y optimización de tratamientos antiepilépticos personalizados.',
        en: 'Deep learning models for epileptic seizure prediction and optimization of personalized antiepileptic treatments.',
        fr: 'Modèles de deep learning pour prédiction de crises épileptiques et optimisation de traitements antiépileptiques personnalisés.'
      },
      date: '2024-12-12',
      readTime: '10 min',
      category: {
        es: 'Neurología',
        en: 'Neurology',
        fr: 'Neurologie'
      },
      icon: Brain
    },
    {
      id: '7',
      title: {
        es: 'Hematología Digital: Modelos Predictivos para Leucemia',
        en: 'Digital Hematology: Predictive Models for Leukemia',
        fr: 'Hématologie Numérique: Modèles Prédictifs pour la Leucémie'
      },
      excerpt: {
        es: 'Análisis de 4 tipos de leucemia mediante ML: clasificación, pronóstico y optimización de protocolos terapéuticos.',
        en: 'Analysis of 4 leukemia types through ML: classification, prognosis and optimization of therapeutic protocols.',
        fr: 'Analyse de 4 types de leucémie par ML: classification, pronostic et optimisation de protocoles thérapeutiques.'
      },
      date: '2024-12-10',
      readTime: '13 min',
      category: {
        es: 'Hematología', 
        en: 'Hematology',
        fr: 'Hématologie'
      },
      icon: Activity
    },
    {
      id: '8',
      title: {
        es: 'Integración Hospitalaria: ROI y Casos de Éxito Documentados',
        en: 'Hospital Integration: Documented ROI and Success Cases',
        fr: 'Intégration Hospitalière: ROI Documenté et Cas de Succès'
      },
      excerpt: {
        es: 'Análisis de 15+ implementaciones hospitalarias: 67% reducción tiempos diagnóstico, 40% mejora eficiencia, ROI 280% promedio.',
        en: 'Analysis of 15+ hospital implementations: 67% reduction in diagnostic times, 40% efficiency improvement, 280% average ROI.',
        fr: 'Analyse de 15+ implémentations hospitalières: 67% réduction temps diagnostic, 40% amélioration efficacité, 280% ROI moyen.'
      },
      date: '2024-12-08',
      readTime: '14 min',
      category: {
        es: 'Casos de Estudio',
        en: 'Case Studies',
        fr: 'Études de Cas'
      },
      icon: TrendingUp
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
            {language === 'es' ? 'Blog MedAI - Medicina Predictiva Avanzada' :
             language === 'fr' ? 'Blog MedAI - Médecine Prédictive Avancée' :
             'MedAI Blog - Advanced Predictive Medicine'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Investigaciones, casos clínicos y avances en medicina predictiva con IA. 62+ modelos especializados para 12 enfermedades críticas.' :
             language === 'fr' ? 'Recherches, cas cliniques et avancées en médecine prédictive avec IA. 62+ modèles spécialisés pour 12 maladies critiques.' :
             'Research, clinical cases and advances in predictive medicine with AI. 62+ specialized models for 12 critical diseases.'}
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
                      {language === 'es' ? 'Leer Artículo Completo' :
                       language === 'fr' ? 'Lire l\'Article Complet' :
                       'Read Full Article'}
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
            {language === 'es' ? 'Artículos Médicos Especializados' :
             language === 'fr' ? 'Articles Médicaux Spécialisés' :
             'Specialized Medical Articles'}
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

        {/* Updated Statistics Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'MedAI en Números - Medicina Predictiva' :
               language === 'fr' ? 'MedAI en Chiffres - Médecine Prédictive' :
               'MedAI in Numbers - Predictive Medicine'}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Enfermedades Críticas' :
                 language === 'fr' ? 'Maladies Critiques' :
                 'Critical Diseases'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">62+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Modelos de IA Especializados' :
                 language === 'fr' ? 'Modèles d\'IA Spécialisés' :
                 'Specialized AI Models'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98.8%</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Precisión Máxima Alcanzada' :
                 language === 'fr' ? 'Précision Maximale Atteinte' :
                 'Maximum Accuracy Achieved'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25000+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Casos Clínicos Analizados' :
                 language === 'fr' ? 'Cas Cliniques Analysés' :
                 'Clinical Cases Analyzed'}
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
