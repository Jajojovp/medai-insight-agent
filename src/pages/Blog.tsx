
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
        es: 'Revolución en el Diagnóstico: IA Predictiva para 7 Enfermedades Críticas',
        en: 'Diagnostic Revolution: Predictive AI for 7 Critical Diseases',
        fr: 'Révolution Diagnostique: IA Prédictive pour 7 Maladies Critiques'
      },
      excerpt: {
        es: 'Descubre cómo nuestros 47+ modelos de IA están transformando la detección temprana de diabetes, cáncer, enfermedades cardíacas y más.',
        en: 'Discover how our 47+ AI models are transforming early detection of diabetes, cancer, heart disease and more.',
        fr: 'Découvrez comment nos 47+ modèles d\'IA transforment la détection précoce du diabète, du cancer, des maladies cardiaques et plus.'
      },
      date: '2024-12-25',
      readTime: '8 min',
      category: {
        es: 'IA Médica',
        en: 'Medical AI',
        fr: 'IA Médicale'
      },
      icon: Brain,
      featured: true
    },
    {
      id: '2', 
      title: {
        es: 'Diabetes Tipo 2: Predicción Avanzada con 9 Modelos de Machine Learning',
        en: 'Type 2 Diabetes: Advanced Prediction with 9 Machine Learning Models',
        fr: 'Diabète Type 2: Prédiction Avancée avec 9 Modèles de Machine Learning'
      },
      excerpt: {
        es: 'Análisis profundo de cómo utilizamos modelos de GitHub y Kaggle para lograr 94% de precisión en predicción de diabetes.',
        en: 'Deep analysis of how we use GitHub and Kaggle models to achieve 94% accuracy in diabetes prediction.',
        fr: 'Analyse approfondie de la façon dont nous utilisons les modèles GitHub et Kaggle pour atteindre 94% de précision dans la prédiction du diabète.'
      },
      date: '2024-12-20',
      readTime: '6 min',
      category: {
        es: 'Diabetes',
        en: 'Diabetes',
        fr: 'Diabète'
      },
      icon: Droplets
    },
    {
      id: '3',
      title: {
        es: 'Detección Temprana de Cáncer: Mama, Próstata y Páncreas',
        en: 'Early Cancer Detection: Breast, Prostate and Pancreatic',
        fr: 'Détection Précoce du Cancer: Sein, Prostate et Pancréas'
      },
      excerpt: {
        es: 'Cómo nuestros modelos especializados están mejorando las tasas de supervivencia mediante detección temprana de 3 tipos de cáncer.',
        en: 'How our specialized models are improving survival rates through early detection of 3 types of cancer.',
        fr: 'Comment nos modèles spécialisés améliorent les taux de survie grâce à la détection précoce de 3 types de cancer.'
      },
      date: '2024-12-18',
      readTime: '10 min',
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
        es: 'Prevención Cardiovascular: IA para Corazón y Cerebro',
        en: 'Cardiovascular Prevention: AI for Heart and Brain',
        fr: 'Prévention Cardiovasculaire: IA pour Cœur et Cerveau'
      },
      excerpt: {
        es: 'Estrategias de prevención basadas en IA para enfermedades cardíacas y accidentes cerebrovasculares usando 14+ modelos predictivos.',
        en: 'AI-based prevention strategies for heart disease and stroke using 14+ predictive models.',
        fr: 'Stratégies de prévention basées sur l\'IA pour les maladies cardiaques et les AVC utilisant 14+ modèles prédictifs.'
      },
      date: '2024-12-15',
      readTime: '7 min',
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
        es: 'Enfermedad Renal Crónica: Detección Precoz con ML',
        en: 'Chronic Kidney Disease: Early Detection with ML',
        fr: 'Maladie Rénale Chronique: Détection Précoce avec ML'
      },
      excerpt: {
        es: 'Implementación de 5 modelos especializados para detectar deterioro renal antes de síntomas clínicos.',
        en: 'Implementation of 5 specialized models to detect kidney deterioration before clinical symptoms.',
        fr: 'Implémentation de 5 modèles spécialisés pour détecter la détérioration rénale avant les symptômes cliniques.'
      },
      date: '2024-12-12',
      readTime: '5 min',
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
        es: 'Integración Hospitalaria: Casos de Éxito y ROI',
        en: 'Hospital Integration: Success Cases and ROI',
        fr: 'Intégration Hospitalière: Cas de Succès et ROI'
      },
      excerpt: {
        es: '67% reducción en tiempos de espera y 40% aumento en eficiencia: casos reales de hospitales usando MedAI.',
        en: '67% reduction in waiting times and 40% increase in efficiency: real cases of hospitals using MedAI.',
        fr: '67% de réduction des temps d\'attente et 40% d\'augmentation de l\'efficacité: cas réels d\'hôpitaux utilisant MedAI.'
      },
      date: '2024-12-10',
      readTime: '9 min',
      category: {
        es: 'Casos de Estudio',
        en: 'Case Studies',
        fr: 'Études de Cas'
      },
      icon: TrendingUp
    },
    {
      id: '7',
      title: {
        es: 'Automatización con n8n: Reportes PDF y Flujos de Trabajo',
        en: 'n8n Automation: PDF Reports and Workflows',
        fr: 'Automatisation n8n: Rapports PDF et Flux de Travail'
      },
      excerpt: {
        es: 'Guía completa para automatizar análisis médicos, generar reportes PDF y configurar flujos de trabajo con n8n.',
        en: 'Complete guide to automate medical analysis, generate PDF reports and configure workflows with n8n.',
        fr: 'Guide complet pour automatiser l\'analyse médicale, générer des rapports PDF et configurer les flux de travail avec n8n.'
      },
      date: '2024-12-08',
      readTime: '12 min',
      category: {
        es: 'Automatización',
        en: 'Automation',
        fr: 'Automatisation'
      },
      icon: Zap
    },
    {
      id: '8',
      title: {
        es: 'Modelos de IA: De GitHub y Kaggle al Entorno Clínico',
        en: 'AI Models: From GitHub and Kaggle to Clinical Environment',
        fr: 'Modèles d\'IA: De GitHub et Kaggle à l\'Environnement Clinique'
      },
      excerpt: {
        es: 'Proceso de validación y adaptación de modelos open-source para uso clínico real con estándares HIPAA.',
        en: 'Validation and adaptation process of open-source models for real clinical use with HIPAA standards.',
        fr: 'Processus de validation et d\'adaptation des modèles open-source pour un usage clinique réel avec les normes HIPAA.'
      },
      date: '2024-12-05',
      readTime: '11 min',
      category: {
        es: 'Validación Clínica',
        en: 'Clinical Validation',
        fr: 'Validation Clinique'
      },
      icon: Activity
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
            {language === 'es' ? 'Blog MedAI - Análisis Predictivo Médico' :
             language === 'fr' ? 'Blog MedAI - Analyse Prédictive Médicale' :
             'MedAI Blog - Medical Predictive Analysis'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Últimas noticias, casos de estudio e investigaciones sobre IA médica predictiva para 12 tipos de enfermedades críticas.' :
             language === 'fr' ? 'Dernières nouvelles, études de cas et recherches sur l\'IA médicale prédictive pour 12 types de maladies critiques.' :
             'Latest news, case studies and research on predictive medical AI for 12 types of critical diseases.'}
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
            {language === 'es' ? 'Todos los Artículos' :
             language === 'fr' ? 'Tous les Articles' :
             'All Articles'}
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
                {language === 'es' ? 'Tipos de Análisis' :
                 language === 'fr' ? 'Types d\'Analyses' :
                 'Analysis Types'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">53+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Modelos de IA' :
                 language === 'fr' ? 'Modèles d\'IA' :
                 'AI Models'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98.8%</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Precisión Máxima' :
                 language === 'fr' ? 'Précision Maximale' :
                 'Maximum Accuracy'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10000+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Casos Analizados' :
                 language === 'fr' ? 'Cas Analysés' :
                 'Cases Analyzed'}
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
