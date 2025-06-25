import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Brain, 
  Shield, 
  Activity, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Stethoscope,
  BarChart3,
  FileText,
  Clock,
  Globe,
  Hospital,
  Zap,
  Heart,
  Droplets,
  Menu,
  X
} from "lucide-react";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Landing = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  // Redirect to dashboard if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const getLanguageAbbreviation = (lang: string) => {
    switch (lang) {
      case 'es': return 'ES';
      case 'en': return 'EN';
      case 'fr': return 'FR';
      default: return 'ES';
    }
  };

  const features = [
    {
      icon: Brain,
      title: t('landing.feature.ai'),
      description: t('landing.feature.ai.desc')
    },
    {
      icon: Activity,
      title: t('landing.feature.diagnosis'),
      description: t('landing.feature.diagnosis.desc')
    },
    {
      icon: FileText,
      title: t('landing.feature.reports'),
      description: t('landing.feature.reports.desc')
    },
    {
      icon: Shield,
      title: t('landing.feature.security'),
      description: t('landing.feature.security.desc')
    },
    {
      icon: Clock,
      title: t('landing.feature.waitlist'),
      description: t('landing.feature.waitlist.desc')
    },
    {
      icon: Hospital,
      title: t('landing.feature.efficiency'),
      description: t('landing.feature.efficiency.desc')
    }
  ];

  const supportedDiseases = [
    {
      icon: Droplets,
      name: {
        es: 'Diabetes Tipo 2',
        en: 'Type 2 Diabetes',
        fr: 'Diabète Type 2'
      },
      description: {
        es: 'Análisis predictivo del riesgo de diabetes y control glucémico',
        en: 'Predictive analysis of diabetes risk and glycemic control',
        fr: 'Analyse prédictive du risque de diabète et contrôle glycémique'
      },
      prevalence: '10.5%',
      models: 9,
      accuracy: '94.2%'
    },
    {
      icon: Users,
      name: {
        es: 'Cáncer de Mama',
        en: 'Breast Cancer',
        fr: 'Cancer du Sein'
      },
      description: {
        es: 'Detección temprana y clasificación benigno/maligno',
        en: 'Early detection and benign/malignant classification',
        fr: 'Détection précoce et classification bénin/malin'
      },
      prevalence: '12.5%',
      models: 8,
      accuracy: '96.8%'
    },
    {
      icon: Activity,
      name: {
        es: 'Cáncer de Próstata',
        en: 'Prostate Cancer',
        fr: 'Cancer de la Prostate'
      },
      description: {
        es: 'Evaluación de riesgo y progresión en hombres',
        en: 'Risk assessment and progression evaluation in men',
        fr: 'Évaluation des risques et progression chez les hommes'
      },
      prevalence: '11.6%',
      models: 7,
      accuracy: '92.5%'
    },
    {
      icon: Heart,
      name: {
        es: 'Enfermedades Cardíacas',
        en: 'Heart Disease',
        fr: 'Maladies Cardiaques'
      },
      description: {
        es: 'Predicción de riesgo cardiovascular y prevención',
        en: 'Cardiovascular risk prediction and prevention',
        fr: 'Prédiction du risque cardiovasculaire et prévention'
      },
      prevalence: '6.2%',
      models: 8,
      accuracy: '98.0%'
    },
    {
      icon: Brain,
      name: {
        es: 'Accidente Cerebrovascular',
        en: 'Stroke Risk',
        fr: 'Risque d\'AVC'
      },
      description: {
        es: 'Análisis de riesgo de ACV y factores de prevención',
        en: 'Stroke risk analysis and prevention factors',
        fr: 'Analyse du risque d\'AVC et facteurs de prévention'
      },
      prevalence: '2.8%',
      models: 6,
      accuracy: '89.7%'
    },
    {
      icon: Shield,
      name: {
        es: 'Enfermedad Renal Crónica',
        en: 'Chronic Kidney Disease',
        fr: 'Maladie Rénale Chronique'
      },
      description: {
        es: 'Detección temprana de deterioro de función renal',
        en: 'Early detection of kidney function deterioration',
        fr: 'Détection précoce de la détérioration de la fonction rénale'
      },
      prevalence: '9.1%',
      models: 5,
      accuracy: '91.3%'
    },
    {
      icon: Zap,
      name: {
        es: 'Cáncer de Páncreas',
        en: 'Pancreatic Cancer',
        fr: 'Cancer du Pancréas'
      },
      description: {
        es: 'Detección de alto riesgo y biomarcadores',
        en: 'High-risk detection and biomarker analysis',
        fr: 'Détection à haut risque et analyse des biomarqueurs'
      },
      prevalence: '0.6%',
      models: 4,
      accuracy: '87.4%'
    }
  ];

  const modelSources = [
    "Kaggle: Diabetes",
    "GitHub: Diabetes", 
    "Scikit: Diabetes",
    "TensorFlow: Diabetes",
    "Kaggle: Breast Cancer",
    "GitHub: Heart Disease",
    "PyTorch: Prostate",
    "Scikit: Stroke",
    "Keras: Kidney",
    "XGBoost: Pancreatic",
    "Random Forest: Diabetes",
    "SVM: Breast Cancer",
    "Neural Net: Heart",
    "Gradient Boost: Stroke",
    "Decision Tree: Kidney",
    "Logistic Reg: Pancreatic",
    "Ensemble: Multi-Disease",
    "Deep Learning: Medical",
    "PyCaret: Analytics"
  ];

  const painPoints = [
    {
      icon: Users,
      title: language === 'en' ? "Excessive Waiting Lists" : language === 'fr' ? "Listes d'Attente Excessives" : "Listas de Espera Excesivas",
      description: language === 'en' ? "Reduce waiting times from 45 to 15 minutes per consultation" : language === 'fr' ? "Réduire les temps d'attente de 45 à 15 minutes par consultation" : "Reduce los tiempos de espera de 45 a 15 minutos por consulta",
      metric: language === 'en' ? "67% reduction" : language === 'fr' ? "67% de réduction" : "67% reducción"
    },
    {
      icon: Activity,
      title: language === 'en' ? "Late Diagnoses" : language === 'fr' ? "Diagnostics Tardifs" : "Diagnósticos Tardíos",
      description: language === 'en' ? "Early detection prevents costly complications" : language === 'fr' ? "La détection précoce prévient les complications coûteuses" : "Detección temprana previene complicaciones costosas",
      metric: language === 'en' ? "94% accuracy" : language === 'fr' ? "94% de précision" : "94% precisión"
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? "Low Efficiency" : language === 'fr' ? "Faible Efficacité" : "Baja Eficiencia",
      description: language === 'en' ? "Optimize limited medical resources with specialized AI" : language === 'fr' ? "Optimiser les ressources médicales limitées avec l'IA spécialisée" : "Optimiza recursos médicos limitados con IA especializada",
      metric: language === 'en' ? "40% more efficient" : language === 'fr' ? "40% plus efficace" : "40% más eficiente"
    }
  ];

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-white/30 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <AuthForm onSuccess={() => setShowAuth(false)} />
          <div className="text-center mt-6">
            <Button
              variant="ghost"
              onClick={() => setShowAuth(false)}
              className="text-gray-600 hover:bg-white/20 rounded-2xl transition-all duration-300"
            >
              {t('auth.backToStart')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-white/30 backdrop-blur-sm">
      {/* Header */}
      <nav className="container mx-auto px-4 py-6 relative">
        <div className="flex items-center justify-between backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-8 py-4 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100/20 rounded-2xl backdrop-blur-sm">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MedAI
            </span>
            <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full px-3 py-1">
              Pro
            </Badge>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Navigation Links - Desktop Only */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
                {t('nav.blog')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
                {t('nav.contact')}
              </Link>
            </div>

            {/* Language Selector - Desktop Only */}
            <div className="hidden md:block">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32 backdrop-blur-sm bg-white/20 border-white/30 rounded-2xl hover:bg-white/30 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="backdrop-blur-xl bg-white/90 border-white/30 rounded-2xl">
                  <SelectItem value="es">{t('language.spanish')}</SelectItem>
                  <SelectItem value="en">{t('language.english')}</SelectItem>
                  <SelectItem value="fr">{t('language.french')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Professional Access Button - Desktop Only */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setShowAuth(true)}
                className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('auth.professionalAccess')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-2xl p-2 z-50 relative"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 z-[100]">
            <div className="backdrop-blur-xl bg-white/95 border border-white/30 rounded-2xl shadow-xl">
              <div className="p-4 space-y-3">
                <Link 
                  to="/blog" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.blog')}
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
                
                {/* Language Selector for Mobile */}
                <div className="border-t border-gray-200 pt-3">
                  <div className="px-4 py-2 text-sm text-gray-500 font-medium">
                    {language === 'es' ? 'Idioma' : language === 'en' ? 'Language' : 'Langue'}
                  </div>
                  <div className="px-4">
                    <Select value={language} onValueChange={(value) => {
                      setLanguage(value);
                      setMobileMenuOpen(false);
                    }}>
                      <SelectTrigger className="w-full backdrop-blur-sm bg-white/80 border-white/50 rounded-xl">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4" />
                          <span>{getLanguageAbbreviation(language)}</span>
                        </div>
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-md bg-white/95 border-white/50 rounded-2xl z-[150]">
                        <SelectItem value="es">ES</SelectItem>
                        <SelectItem value="en">EN</SelectItem>
                        <SelectItem value="fr">FR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 px-4">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
                    onClick={() => {
                      setShowAuth(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t('auth.professionalAccess')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-16 shadow-2xl">
          <div className="space-y-8">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              {language === 'es' ? 'Análisis Predictivo Multi-Enfermedad con IA' :
               language === 'fr' ? 'Analyse Prédictive Multi-Maladies avec IA' :
               'Multi-Disease Predictive Analysis with AI'}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {language === 'es' ? 'Plataforma profesional de análisis médico con 7 tipos de análisis predictivos, 47+ modelos de IA y detección temprana de enfermedades críticas.' :
               language === 'fr' ? 'Plateforme professionnelle d\'analyse médicale avec 7 types d\'analyses prédictives, 47+ modèles d\'IA et détection précoce de maladies critiques.' :
               'Professional medical analysis platform with 7 types of predictive analysis, 47+ AI models and early detection of critical diseases.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                onClick={() => setShowAuth(true)}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Stethoscope className="mr-3 h-5 w-5" />
                {t('landing.cta.start')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('diseases')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-10 py-4 rounded-2xl backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                {language === 'es' ? 'Ver Análisis' :
                 language === 'fr' ? 'Voir Analyses' :
                 'View Analysis'}
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-10 py-4 rounded-2xl backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  {t('landing.cta.demo')}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">7</div>
                <div className="text-gray-700 font-medium">
                  {language === 'es' ? 'Tipos de Análisis' :
                   language === 'fr' ? 'Types d\'Analyses' :
                   'Analysis Types'}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">47+</div>
                <div className="text-gray-700 font-medium">
                  {language === 'es' ? 'Modelos de IA' :
                   language === 'fr' ? 'Modèles d\'IA' :
                   'AI Models'}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">94%</div>
                <div className="text-gray-700 font-medium">{t('landing.stats.accuracy')}</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">5000+</div>
                <div className="text-gray-700 font-medium">{t('landing.stats.cases')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Diseases Section */}
      <div id="diseases" className="backdrop-blur-xl bg-white/10 py-20 rounded-3xl mx-4 mb-20 border border-white/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {language === 'es' ? 'Análisis Predictivos Disponibles' :
               language === 'fr' ? 'Analyses Prédictives Disponibles' :
               'Available Predictive Analysis'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'es' ? '7 tipos diferentes de análisis con múltiples modelos de IA especializados' :
               language === 'fr' ? '7 types d\'analyses différents avec plusieurs modèles d\'IA spécialisés' :
               '7 different types of analysis with multiple specialized AI models'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedDiseases.map((disease, index) => {
              const Icon = disease.icon;
              return (
                <div key={index} className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/30 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-blue-100/80 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-blue-200/80 transition-all duration-300">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 rounded-full bg-green-100/80 text-green-700 px-3 py-1 font-semibold">
                        {disease.accuracy}
                      </Badge>
                      <div className="text-sm text-gray-600 font-medium">
                        {disease.models} {language === 'es' ? 'modelos' : language === 'fr' ? 'modèles' : 'models'}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {disease.name[language as keyof typeof disease.name]}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {disease.description[language as keyof typeof disease.description]}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-sm rounded-full px-3 py-1">{disease.prevalence}</Badge>
                    <span className="text-sm text-gray-600 font-medium">
                      {language === 'es' ? 'Prevalencia' : language === 'fr' ? 'Prévalence' : 'Prevalence'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="backdrop-blur-xl bg-white/10 py-20 rounded-3xl mx-4 mb-20 border border-white/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
              {language === 'en' ? "Hospital Problems We Solve" : language === 'fr' ? "Problèmes Hospitaliers que Nous Résolvons" : "Problemas Hospitalarios que Resolvemos"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'en' ? "Optimize your hospital and improve patient care" : language === 'fr' ? "Optimisez votre hôpital et améliorez les soins aux patients" : "Optimiza tu hospital y mejora la atención al paciente"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="text-center p-8 backdrop-blur-sm bg-white/20 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-white/30 group hover:bg-white/30">
                  <div className="mx-auto w-20 h-20 bg-red-100/80 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-red-200/80 transition-all duration-300">
                    <Icon className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{point.description}</p>
                  <Badge className="bg-green-600 text-white rounded-full px-4 py-2 font-semibold">{point.metric}</Badge>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('landing.features.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('landing.features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-8 backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:bg-white/30 group">
                <div className="mx-auto w-20 h-20 bg-blue-100/80 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-blue-200/80 transition-all duration-300">
                  <Icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* ML Models Section */}
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {language === 'es' ? '47+ Modelos de Machine Learning Especializados' :
               language === 'fr' ? '47+ Modèles de Machine Learning Spécialisés' :
               '47+ Specialized Machine Learning Models'}
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {language === 'es' ? 'Fuentes verificadas de GitHub, Kaggle y revistas científicas' :
               language === 'fr' ? 'Sources vérifiées de GitHub, Kaggle et revues scientifiques' :
               'Verified sources from GitHub, Kaggle and scientific journals'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelSources.map((source, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/20 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="backdrop-blur-xl bg-white/10 py-20 rounded-3xl mx-4 mb-20 border border-white/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {language === 'en' ? "Proven Results" : language === 'fr' ? "Résultats Prouvés" : "Resultados Comprobados"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'en' ? "Hospitals using MedAI report significant improvements" : language === 'fr' ? "Les hôpitaux utilisant MedAI rapportent des améliorations significatives" : "Hospitales que ya usan MedAI reportan mejoras significativas"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                metric: "67%", 
                desc: language === 'en' ? "Reduction in waiting lists" : language === 'fr' ? "Réduction des listes d'attente" : "Reducción en listas de espera" 
              },
              { 
                metric: "40%", 
                desc: language === 'en' ? "Increase in efficiency" : language === 'fr' ? "Augmentation de l'efficacité" : "Aumento en eficiencia" 
              },
              { 
                metric: "25%", 
                desc: language === 'en' ? "Improvement in satisfaction" : language === 'fr' ? "Amélioration de la satisfaction" : "Mejora en satisfacción" 
              },
              { 
                metric: "30%", 
                desc: language === 'en' ? "Cost reduction" : language === 'fr' ? "Réduction des coûts" : "Reducción en costos" 
              }
            ].map((stat, index) => (
              <div key={index} className="text-center backdrop-blur-sm bg-white/20 p-8 rounded-3xl shadow-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-4">{stat.metric}</div>
                <div className="text-gray-700 font-medium">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl text-white py-20 rounded-3xl mx-4 mb-20 border border-white/20 shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {t('landing.cta.final')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Professional Access Button - Desktop Only */}
            <div className="hidden md:block">
              <Button 
                size="lg" 
                onClick={() => setShowAuth(true)}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {t('landing.cta.professional')}
              </Button>
            </div>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 hover:text-white text-lg px-10 py-4 bg-transparent rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                {t('landing.cta.demo')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="backdrop-blur-xl bg-gray-900/90 text-gray-300 py-12 rounded-3xl mx-4 border border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100/20 rounded-2xl backdrop-blur-sm">
                  <Brain className="h-6 w-6 text-blue-400" />
                </div>
                <span className="text-xl font-bold">MedAI</span>
              </div>
              <p className="text-sm leading-relaxed">
                {language === 'en' ? "Professional medical analysis platform with artificial intelligence." : language === 'fr' ? "Plateforme professionnelle d'analyse médicale avec intelligence artificielle." : "Plataforma profesional de análisis médico con inteligencia artificial."}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{language === 'en' ? "Product" : language === 'fr' ? "Produit" : "Producto"}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Features" : language === 'fr' ? "Caractéristiques" : "Características"}</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Pricing" : language === 'fr' ? "Tarifs" : "Precios"}</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{language === 'en' ? "Resources" : language === 'fr' ? "Ressources" : "Recursos"}</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Documentation" : language === 'fr' ? "Documentation" : "Documentación"}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Support" : language === 'fr' ? "Support" : "Soporte"}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{language === 'en' ? "Contact" : language === 'fr' ? "Contact" : "Contacto"}</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/contact" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Contact" : language === 'fr' ? "Contact" : "Contacto"}</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Sales" : language === 'fr' ? "Ventes" : "Ventas"}</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Support" : language === 'fr' ? "Support" : "Soporte"}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
            <p>© 2024 MedAI. {language === 'en' ? "All rights reserved." : language === 'fr' ? "Tous droits réservés." : "Todos los derechos reservados."}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
