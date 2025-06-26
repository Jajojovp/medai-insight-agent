
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
      title: language === 'es' ? "37+ Modelos de IA Especializados" : language === 'fr' ? "37+ Modèles d'IA Spécialisés" : "37+ Specialized AI Models",
      description: language === 'es' ? "Modelos de GitHub, Kaggle y Analytics Vidhya verificados para análisis médico predictivo de alta precisión con tecnologías como TensorFlow, scikit-learn, PyTorch y Keras" : language === 'fr' ? "Modèles de GitHub, Kaggle et Analytics Vidhya vérifiés pour l'analyse médicale prédictive haute précision avec technologies comme TensorFlow, scikit-learn, PyTorch et Keras" : "Verified models from GitHub, Kaggle and Analytics Vidhya for high-precision predictive medical analysis with technologies like TensorFlow, scikit-learn, PyTorch and Keras"
    },
    {
      icon: Activity,
      title: language === 'es' ? "Detección Temprana de 7 Enfermedades Críticas" : language === 'fr' ? "Détection Précoce de 7 Maladies Critiques" : "Early Detection of 7 Critical Diseases",
      description: language === 'es' ? "Diabetes tipo 2, cáncer de mama, cáncer de próstata, enfermedades cardíacas, accidente cerebrovascular, enfermedad renal crónica y cáncer de páncreas con algoritmos avanzados" : language === 'fr' ? "Diabète type 2, cancer du sein, cancer de la prostate, maladies cardiaques, accident vasculaire cérébral, maladie rénale chronique et cancer du pancréas avec algorithmes avancés" : "Type 2 diabetes, breast cancer, prostate cancer, heart disease, stroke, chronic kidney disease and pancreatic cancer with advanced algorithms"
    },
    {
      icon: FileText,
      title: language === 'es' ? "Reportes PDF Automáticos con n8n" : language === 'fr' ? "Rapports PDF Automatiques avec n8n" : "Automatic PDF Reports with n8n",
      description: language === 'es' ? "Integración completa con n8n para generar reportes médicos automáticos y flujos de trabajo personalizados basados en los resultados de análisis predictivo" : language === 'fr' ? "Intégration complète avec n8n pour générer des rapports médicaux automatiques et des flux de travail personnalisés basés sur les résultats d'analyse prédictive" : "Complete n8n integration for automatic medical report generation and custom workflows based on predictive analysis results"
    },
    {
      icon: Shield,
      title: language === 'es' ? "Seguridad HIPAA y Validación Clínica" : language === 'fr' ? "Sécurité HIPAA et Validation Clinique" : "HIPAA Security and Clinical Validation",
      description: language === 'es' ? "Cumplimiento de normativas médicas con validación cruzada usando datasets clínicos como UCI Heart Disease, Wisconsin Breast Cancer y biomarcadores urinarios" : language === 'fr' ? "Conformité aux réglementations médicales avec validation croisée utilisant des datasets cliniques comme UCI Heart Disease, Wisconsin Breast Cancer et biomarqueurs urinaires" : "Medical regulatory compliance with cross-validation using clinical datasets like UCI Heart Disease, Wisconsin Breast Cancer and urinary biomarkers"
    },
    {
      icon: Clock,
      title: language === 'es' ? "Reducción Crítica de Tiempos Diagnósticos" : language === 'fr' ? "Réduction Critique des Temps Diagnostiques" : "Critical Diagnostic Time Reduction",
      description: language === 'es' ? "Acelera diagnósticos que pueden tomar años en sistemas públicos, evitando que pacientes mueran esperando atención especializada con análisis instantáneo" : language === 'fr' ? "Accélère les diagnostics qui peuvent prendre des années dans les systèmes publics, évitant que les patients meurent en attendant des soins spécialisés avec analyse instantanée" : "Accelerates diagnoses that can take years in public systems, preventing patients from dying while waiting for specialized care with instant analysis"
    },
    {
      icon: Hospital,
      title: language === 'es' ? "Integración Hospitalaria Completa" : language === 'fr' ? "Intégration Hospitalière Complète" : "Complete Hospital Integration",
      description: language === 'es' ? "API REST, SDKs y compatibilidad con sistemas hospitalarios existentes usando Flask, Heroku y arquitecturas escalables para implementación sin interrupciones" : language === 'fr' ? "API REST, SDKs et compatibilité avec les systèmes hospitaliers existants utilisant Flask, Heroku et architectures évolutives pour une implémentation sans interruption" : "REST API, SDKs and compatibility with existing hospital systems using Flask, Heroku and scalable architectures for seamless implementation"
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
        es: 'Análisis predictivo con 9 modelos especializados usando Machine Learning, Deep Learning y PyCaret con datasets de Kaggle y GitHub',
        en: 'Predictive analysis with 9 specialized models using Machine Learning, Deep Learning and PyCaret with Kaggle and GitHub datasets',
        fr: 'Analyse prédictive avec 9 modèles spécialisés utilisant Machine Learning, Deep Learning et PyCaret avec datasets Kaggle et GitHub'
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
        es: 'Clasificación benigno/maligno con 5 modelos usando dataset Wisconsin (WDBC) con regresión logística, SVM, Random Forest, XGBoost y redes neuronales',
        en: 'Benign/malignant classification with 5 models using Wisconsin dataset (WDBC) with logistic regression, SVM, Random Forest, XGBoost and neural networks',
        fr: 'Classification bénin/malin avec 5 modèles utilisant le dataset Wisconsin (WDBC) avec régression logistique, SVM, Random Forest, XGBoost et réseaux de neurones'
      },
      prevalence: '12.5%',
      models: 5,
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
        es: 'Detección con 4 modelos especializados combinando R y Python, incluyendo redes neuronales, SVM y técnicas de transfer learning con DenseNet-121',
        en: 'Detection with 4 specialized models combining R and Python, including neural networks, SVM and transfer learning techniques with DenseNet-121',
        fr: 'Détection avec 4 modèles spécialisés combinant R et Python, incluant réseaux de neurones, SVM et techniques de transfer learning avec DenseNet-121'
      },
      prevalence: '11.6%',
      models: 4,
      accuracy: '98.8%'
    },
    {
      icon: Heart,
      name: {
        es: 'Enfermedades Cardíacas',
        en: 'Heart Disease',
        fr: 'Maladies Cardiaques'
      },
      description: {
        es: 'Predicción de riesgo cardiovascular con 5 modelos usando dataset UCI con algoritmos como XGBoost, Random Forest, Naive Bayes y redes neuronales con Keras',
        en: 'Cardiovascular risk prediction with 5 models using UCI dataset with algorithms like XGBoost, Random Forest, Naive Bayes and neural networks with Keras',
        fr: 'Prédiction du risque cardiovasculaire avec 5 modèles utilisant le dataset UCI avec algorithmes comme XGBoost, Random Forest, Naive Bayes et réseaux de neurones avec Keras'
      },
      prevalence: '6.2%',
      models: 5,
      accuracy: '93.7%'
    },
    {
      icon: Brain,
      name: {
        es: 'Accidente Cerebrovascular',
        en: 'Stroke Risk',
        fr: 'Risque d\'AVC'
      },
      description: {
        es: 'Análisis de riesgo de ACV con 5 modelos especializados usando regresión logística, SVM, Random Forest y XGBoost en datasets clínicos desequilibrados',
        en: 'Stroke risk analysis with 5 specialized models using logistic regression, SVM, Random Forest and XGBoost on imbalanced clinical datasets',
        fr: 'Analyse du risque d\'AVC avec 5 modèles spécialisés utilisant régression logistique, SVM, Random Forest et XGBoost sur datasets cliniques déséquilibrés'
      },
      prevalence: '2.8%',
      models: 5,
      accuracy: '91.3%'
    },
    {
      icon: Shield,
      name: {
        es: 'Enfermedad Renal Crónica',
        en: 'Chronic Kidney Disease',
        fr: 'Maladie Rénale Chronique'
      },
      description: {
        es: 'Detección temprana con 5 modelos de alta precisión usando Flask, scikit-learn con Decision Tree, Random Forest, SVM y redes neuronales',
        en: 'Early detection with 5 high-precision models using Flask, scikit-learn with Decision Tree, Random Forest, SVM and neural networks',
        fr: 'Détection précoce avec 5 modèles haute précision utilisant Flask, scikit-learn avec Decision Tree, Random Forest, SVM et réseaux de neurones'
      },
      prevalence: '9.1%',
      models: 5,
      accuracy: '97.5%'
    },
    {
      icon: Zap,
      name: {
        es: 'Cáncer de Páncreas',
        en: 'Pancreatic Cancer',
        fr: 'Cancer du Pancréas'
      },
      description: {
        es: 'Detección del "asesino silencioso" con 4 modelos usando biomarcadores urinarios, CNN avanzadas y EfficientNetV2 con transfer learning',
        en: 'Detection of the "silent killer" with 4 models using urinary biomarkers, advanced CNNs and EfficientNetV2 with transfer learning',
        fr: 'Détection du "tueur silencieux" avec 4 modèles utilisant biomarqueurs urinaires, CNN avancées et EfficientNetV2 avec transfer learning'
      },
      prevalence: '0.6%',
      models: 4,
      accuracy: '87.4%'
    }
  ];

  const modelSources = [
    "GitHub: Diabetes-Prediction-SystemV3",
    "GitHub: Diabetes-Prediction (JitKrNaskar)",
    "GitHub: Diabetes_Prediction (MYoussef885)",
    "GitHub: Diabetes-Prediction-ML (aravinda)",
    "Kaggle: Diabetes Prediction (mvanshika)",
    "Kaggle: Diabetes ML (isilguler)",
    "Kaggle: Diabetes ML (ahmetcankaraolan)",
    "Analytics Vidhya: PyCaret Diabetes",
    "GitHub: Deeplearning_and_Diabetes",
    "GitHub: Breast-Cancer-Prediction (virajbhutada)",
    "GitHub: Breast-Cancer-Prediction (Eakta08)",
    "GitHub: Breast-Cancer-Prediction (karthik-rc)",
    "GitHub: Breast-Cancer-Prediction (ammahmoudi)",
    "GitHub: Breast-Cancer-Prediction (mani24singh)",
    "GitHub: Prostate-Cancer-Prediction (mrthlinh)",
    "GitHub: Prostate-cancer-prediction (bikramb98)",
    "GitHub: Prostate_Cancer_Prediction (hasansust32)",
    "GitHub: Prostate-Cancer-Detection (hakanskn)",
    "GitHub: Heart_Disease_Prediction_ML (iamanuragdhiman)",
    "GitHub: Heart-Disease-Prediction (g-shreekant)",
    "GitHub: HeartDiseaseApp Flask (Monica-Gullapalli)",
    "GitHub: Heart-Disease-Prediction API (asthasharma98)",
    "GitHub: Heart-disease (Deba951)",
    "GitHub: Stroke-Predictions-ML (alexvolchek615)",
    "GitHub: Stroke-Prediction (Chandrakant817)",
    "GitHub: Stroke-Prediction-ML (devashree21)",
    "GitHub: Stroke-prediction Flask (Vignesh227)",
    "GitHub: Stroke-Prediction-Model (Tharun-tharun)",
    "GitHub: CKD-Prediction Flask (venkata-sreeram)",
    "GitHub: CKD-Prediction (Saurabh641444)",
    "GitHub: CKD-Prediction-Project (SagarDhandare)",
    "GitHub: CKD-ML-Techniques (suhasjadhav264)",
    "GitHub: CKD-Prediction (AndreaHobby)",
    "GitHub: Pancreatic-Cancer-Detection (sarvesh2003)",
    "Kaggle: Pancreatic-Cancer (tararelan)",
    "GitHub: Pancreas-cancer-CNN (RemilaJoysMaryA)",
    "GitHub: EfficientNet-Pancreatic-Cancer (atlan-antillia)"
  ];

  const painPoints = [
    {
      icon: Users,
      title: language === 'en' ? "Critical Diagnostic Delays" : language === 'fr' ? "Retards Diagnostiques Critiques" : "Retrasos Diagnósticos Críticos",
      description: language === 'en' ? "In public health systems, patients can wait years for specialist care, often dying before receiving proper diagnosis. Our AI reduces this to minutes." : language === 'fr' ? "Dans les systèmes de santé publique, les patients peuvent attendre des années pour des soins spécialisés, mourant souvent avant de recevoir un diagnostic approprié. Notre IA réduit cela à quelques minutes." : "En sistemas de salud pública, los pacientes pueden esperar años por atención especializada, muriendo frecuentemente antes de recibir diagnóstico adecuado. Nuestra IA reduce esto a minutos",
      metric: language === 'en' ? "From years to minutes" : language === 'fr' ? "D'années à minutes" : "De años a minutos"
    },
    {
      icon: Activity,
      title: language === 'en' ? "Late Detection Deaths" : language === 'fr' ? "Décès par Détection Tardive" : "Muertes por Detección Tardía",
      description: language === 'en' ? "Early detection prevents deaths from diseases like pancreatic cancer (87.4% accuracy) and prostate cancer (98.8% accuracy) that are often diagnosed too late." : language === 'fr' ? "La détection précoce prévient les décès de maladies comme le cancer du pancréas (87.4% de précision) et le cancer de la prostate (98.8% de précision) qui sont souvent diagnostiquées trop tard." : "Detección temprana previene muertes por enfermedades como cáncer de páncreas (87.4% precisión) y cáncer de próstata (98.8% precisión) que se diagnostican frecuentemente muy tarde",
      metric: language === 'en' ? "98.8% max accuracy" : language === 'fr' ? "98.8% précision max" : "98.8% precisión máx"
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? "Healthcare System Collapse" : language === 'fr' ? "Effondrement du Système de Santé" : "Colapso del Sistema de Salud",
      description: language === 'en' ? "Overwhelmed healthcare systems need AI assistance to handle critical cases efficiently with 37+ specialized models and automated workflows." : language === 'fr' ? "Les systèmes de santé débordés ont besoin d'assistance IA pour gérer efficacement les cas critiques avec 37+ modèles spécialisés et flux automatisés." : "Sistemas de salud saturados necesitan asistencia de IA para manejar casos críticos eficientemente con 37+ modelos especializados y flujos automatizados",
      metric: language === 'en' ? "37+ AI models" : language === 'fr' ? "37+ modèles IA" : "37+ modelos IA"
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
                {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Se Connecter' : 'Login'}
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
                    {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Se Connecter' : 'Login'}
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
              {language === 'es' ? 'Plataforma profesional de análisis médico con 7 tipos de análisis predictivos, 37+ modelos de IA especializados de GitHub, Kaggle y Analytics Vidhya para detección temprana de enfermedades críticas.' :
               language === 'fr' ? 'Plateforme professionnelle d\'analyse médicale avec 7 types d\'analyses prédictives, 37+ modèles d\'IA spécialisés de GitHub, Kaggle et Analytics Vidhya pour détection précoce de maladies critiques.' :
               'Professional medical analysis platform with 7 types of predictive analysis, 37+ specialized AI models from GitHub, Kaggle and Analytics Vidhya for early detection of critical diseases.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Stethoscope className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Solicitar Demo' : language === 'fr' ? 'Demander Démo' : 'Request Demo'}
                </Button>
              </Link>
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
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setShowAuth(true)}
                className="text-lg px-10 py-4 rounded-2xl backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Se Connecter' : 'Login'}
              </Button>
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
                <div className="text-4xl font-bold text-blue-600 mb-3">37+</div>
                <div className="text-gray-700 font-medium">
                  {language === 'es' ? 'Modelos de IA' :
                   language === 'fr' ? 'Modèles d\'IA' :
                   'AI Models'}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">98.8%</div>
                <div className="text-gray-700 font-medium">
                  {language === 'es' ? 'Precisión Máxima' : language === 'fr' ? 'Précision Maximale' : 'Max Accuracy'}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/20 rounded-3xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-3">37</div>
                <div className="text-gray-700 font-medium">
                  {language === 'es' ? 'Repositorios GitHub' : language === 'fr' ? 'Dépôts GitHub' : 'GitHub Repositories'}
                </div>
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
              {language === 'es' ? '7 tipos diferentes de análisis con 37+ modelos especializados de fuentes verificadas' :
               language === 'fr' ? '7 types d\'analyses différents avec 37+ modèles spécialisés de sources vérifiées' :
               '7 different types of analysis with 37+ specialized models from verified sources'}
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
              {language === 'en' ? "Medical Challenges We Solve" : language === 'fr' ? "Défis Médicaux que Nous Résolvons" : "Desafíos Médicos que Resolvemos"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'en' ? "Transform medical diagnosis with AI-powered early detection" : language === 'fr' ? "Transformez le diagnostic médical avec détection précoce par IA" : "Transforma el diagnóstico médico con detección temprana por IA"}
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
            {language === 'es' ? 'Características Principales' : language === 'fr' ? 'Caractéristiques Principales' : 'Key Features'}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {language === 'es' ? 'Tecnología avanzada para análisis médico predictivo profesional' : language === 'fr' ? 'Technologie avancée pour analyse médicale prédictive professionnelle' : 'Advanced technology for professional predictive medical analysis'}
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
              {language === 'es' ? '37+ Modelos de Machine Learning Especializados' :
               language === 'fr' ? '37+ Modèles de Machine Learning Spécialisés' :
               '37+ Specialized Machine Learning Models'}
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {language === 'es' ? 'Fuentes verificadas de repositorios especializados en análisis médico predictivo' :
               language === 'fr' ? 'Sources vérifiées de dépôts spécialisés en analyse médicale prédictive' :
               'Verified sources from repositories specialized in predictive medical analysis'}
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
              {language === 'en' ? "Proven Technical Results" : language === 'fr' ? "Résultats Techniques Prouvés" : "Resultados Técnicos Comprobados"}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {language === 'en' ? "Real performance metrics from our specialized AI models" : language === 'fr' ? "Métriques de performance réelles de nos modèles IA spécialisés" : "Métricas de rendimiento reales de nuestros modelos de IA especializados"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                metric: "98.8%", 
                desc: language === 'en' ? "Max accuracy (Prostate Cancer)" : language === 'fr' ? "Précision max (Cancer Prostate)" : "Precisión máx (Cáncer Próstata)" 
              },
              { 
                metric: "37+", 
                desc: language === 'en' ? "Specialized AI models" : language === 'fr' ? "Modèles IA spécialisés" : "Modelos IA especializados" 
              },
              { 
                metric: "37", 
                desc: language === 'en' ? "GitHub repositories" : language === 'fr' ? "Dépôts GitHub" : "Repositorios GitHub" 
              },
              { 
                metric: "7", 
                desc: language === 'en' ? "Disease categories" : language === 'fr' ? "Catégories de maladies" : "Categorías de enfermedades" 
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
            {language === 'es' ? 'Solicita Acceso Profesional a MedAI' :
             language === 'fr' ? 'Demandez un Accès Professionnel à MedAI' :
             'Request Professional Access to MedAI'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {language === 'es' ? 'Solicitar Demo' : language === 'fr' ? 'Demander Démo' : 'Request Demo'}
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowAuth(true)}
              className="border-white text-white hover:bg-white/20 hover:text-white text-lg px-10 py-4 bg-transparent rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Se Connecter' : 'Login'}
            </Button>
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
                {language === 'en' ? "Professional medical analysis platform with artificial intelligence and 37+ specialized models." : language === 'fr' ? "Plateforme professionnelle d'analyse médicale avec intelligence artificielle et 37+ modèles spécialisés." : "Plataforma profesional de análisis médico con inteligencia artificial y 37+ modelos especializados."}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{language === 'en' ? "Product" : language === 'fr' ? "Produit" : "Producto"}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors duration-300">{language === 'en' ? "Features" : language === 'fr' ? "Caractéristiques" : "Características"}</a></li>
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
