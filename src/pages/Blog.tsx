
import { useState } from 'react';
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Heart, Brain, Activity, Shield, Users, Zap, Droplets, Stethoscope, Microscope, Dna, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const articlesPerPage = 12;

  const blogPosts = [
    // Diabetes Articles (4 articles)
    {
      id: 'diabetes-intro',
      title: {
        es: 'Diabetes Tipo 2: Factores de Riesgo y Prevención',
        en: 'Type 2 Diabetes: Risk Factors and Prevention',
        fr: 'Diabète Type 2: Facteurs de Risque et Prévention'
      },
      excerpt: {
        es: 'Descubre cómo la IA identifica 15+ factores de riesgo tempranos para diabetes tipo 2.',
        en: 'Discover how AI identifies 15+ early risk factors for type 2 diabetes.',
        fr: 'Découvrez comment l\'IA identifie 15+ facteurs de risque précoces pour diabète type 2.'
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
        es: 'Análisis profundo de nuestros 9 modelos especializados: Random Forest hasta LSTM.',
        en: 'Deep analysis of our 9 specialized models: from Random Forest to LSTM.',
        fr: 'Analyse approfondie de nos 9 modèles spécialisés: de Random Forest à LSTM.'
      },
      date: '2024-12-22',
      readTime: '12 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      icon: Microscope
    },
    {
      id: 'diabetes-treatment',
      title: {
        es: 'Seguimiento Predictivo en Diabetes',
        en: 'Predictive Diabetes Monitoring',
        fr: 'Suivi Prédictif du Diabète'
      },
      excerpt: {
        es: 'Optimización de tratamientos con IA: ajuste automático de insulina.',
        en: 'AI treatment optimization: automatic insulin adjustment.',
        fr: 'Optimisation de traitements avec IA: ajustement automatique d\'insuline.'
      },
      date: '2024-12-20',
      readTime: '10 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      icon: Activity
    },
    {
      id: 'diabetes-nutrition',
      title: {
        es: 'Nutrición Personalizada para Diabéticos con IA',
        en: 'AI-Personalized Nutrition for Diabetics',
        fr: 'Nutrition Personnalisée pour Diabétiques avec IA'
      },
      excerpt: {
        es: 'Planes alimentarios adaptativos basados en respuesta glucémica individual.',
        en: 'Adaptive meal plans based on individual glycemic response.',
        fr: 'Plans alimentaires adaptatifs basés sur réponse glycémique individuelle.'
      },
      date: '2024-12-18',
      readTime: '9 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      icon: Droplets
    },

    // Breast Cancer Articles (4 articles)
    {
      id: 'breast-cancer-intro',
      title: {
        es: 'Cáncer de Mama: Detección Temprana Salva Vidas',
        en: 'Breast Cancer: Early Detection Saves Lives',
        fr: 'Cancer du Sein: La Détection Précoce Sauve des Vies'
      },
      excerpt: {
        es: 'Factores de riesgo genéticos y ambientales: cómo la IA analiza patrones familiares.',
        en: 'Genetic and environmental risk factors: how AI analyzes family patterns.',
        fr: 'Facteurs de risque génétiques: comment l\'IA analyse les patterns familiaux.'
      },
      date: '2024-12-15',
      readTime: '9 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Users
    },
    {
      id: 'breast-cancer-mammography',
      title: {
        es: 'Mamografías Inteligentes: IA vs Radiólogos',
        en: 'Smart Mammograms: AI vs Radiologists',
        fr: 'Mammographies Intelligentes: IA vs Radiologues'
      },
      excerpt: {
        es: 'Análisis de imágenes médicas con deep learning: 98.2% precisión en detección.',
        en: 'Medical imaging analysis with deep learning: 98.2% detection accuracy.',
        fr: 'Analyse d\'imagerie médicale avec deep learning: 98,2% précision détection.'
      },
      date: '2024-12-12',
      readTime: '11 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Brain
    },
    {
      id: 'breast-cancer-genetics',
      title: {
        es: 'Análisis Genético BRCA1/BRCA2 con IA',
        en: 'BRCA1/BRCA2 Genetic Analysis with AI',
        fr: 'Analyse Génétique BRCA1/BRCA2 avec IA'
      },
      excerpt: {
        es: 'Predicción de riesgo hereditario y recomendaciones preventivas personalizadas.',
        en: 'Hereditary risk prediction and personalized preventive recommendations.',
        fr: 'Prédiction risque héréditaire et recommandations préventives personnalisées.'
      },
      date: '2024-12-10',
      readTime: '13 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Dna
    },
    {
      id: 'breast-cancer-treatment',
      title: {
        es: 'Oncología Personalizada: Terapias Dirigidas',
        en: 'Personalized Oncology: Targeted Therapies',
        fr: 'Oncologie Personnalisée: Thérapies Ciblées'
      },
      excerpt: {
        es: 'Selección de terapias basada en perfil genético tumoral e inmunoterapia.',
        en: 'Therapy selection based on tumor genetic profile and immunotherapy.',
        fr: 'Sélection thérapies basée sur profil génétique tumoral et immunothérapie.'
      },
      date: '2024-12-08',
      readTime: '15 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Shield
    },

    // Heart Disease Articles (4 articles)
    {
      id: 'heart-disease-intro',
      title: {
        es: 'Enfermedades Cardiovasculares: El Asesino Silencioso',
        en: 'Cardiovascular Disease: The Silent Killer',
        fr: 'Maladies Cardiovasculaires: Le Tueur Silencieux'
      },
      excerpt: {
        es: 'Factores de riesgo cardiovascular: cómo la IA predice eventos cardíacos.',
        en: 'Cardiovascular risk factors: how AI predicts cardiac events.',
        fr: 'Facteurs de risque cardiovasculaire: comment l\'IA prédit événements cardiaques.'
      },
      date: '2024-12-06',
      readTime: '10 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Heart
    },
    {
      id: 'heart-disease-ecg',
      title: {
        es: 'ECG Inteligentes: Diagnóstico Automático',
        en: 'Smart ECGs: Automatic Diagnosis',
        fr: 'ECG Intelligents: Diagnostic Automatique'
      },
      excerpt: {
        es: 'Análisis automático de ECG: detección de arritmias e isquemia en tiempo real.',
        en: 'Automatic ECG analysis: real-time arrhythmia and ischemia detection.',
        fr: 'Analyse automatique ECG: détection arythmies et ischémie temps réel.'
      },
      date: '2024-12-04',
      readTime: '12 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Activity
    },
    {
      id: 'heart-disease-prevention',
      title: {
        es: 'Cardiología Preventiva Guiada por IA',
        en: 'AI-Guided Preventive Cardiology',
        fr: 'Cardiologie Préventive Guidée par IA'
      },
      excerpt: {
        es: 'Estrategias preventivas personalizadas con wearables inteligentes.',
        en: 'Personalized preventive strategies with smart wearables.',
        fr: 'Stratégies préventives personnalisées avec wearables intelligents.'
      },
      date: '2024-12-02',
      readTime: '11 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Shield
    },
    {
      id: 'heart-disease-surgery',
      title: {
        es: 'Cirugía Cardíaca Asistida por IA',
        en: 'AI-Assisted Heart Surgery',
        fr: 'Chirurgie Cardiaque Assistée par IA'
      },
      excerpt: {
        es: 'Planificación quirúrgica con modelos 3D y robótica cardiovascular.',
        en: 'Surgical planning with 3D models and cardiovascular robotics.',
        fr: 'Planification chirurgicale avec modèles 3D et robotique cardiovasculaire.'
      },
      date: '2024-11-30',
      readTime: '14 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      icon: Stethoscope
    },

    // Prostate Cancer Articles (3 articles)
    {
      id: 'prostate-cancer-screening',
      title: {
        es: 'Screening de Cáncer de Próstata con IA',
        en: 'AI Prostate Cancer Screening',
        fr: 'Dépistage Cancer Prostate avec IA'
      },
      excerpt: {
        es: 'Optimización del screening PSA con algoritmos predictivos avanzados.',
        en: 'PSA screening optimization with advanced predictive algorithms.',
        fr: 'Optimisation dépistage PSA avec algorithmes prédictifs avancés.'
      },
      date: '2024-11-28',
      readTime: '9 min',
      category: { es: 'Urología', en: 'Urology', fr: 'Urologie' },
      icon: Users
    },
    {
      id: 'prostate-cancer-biopsy',
      title: {
        es: 'Biopsias Dirigidas por IA en Próstata',
        en: 'AI-Guided Prostate Biopsies',
        fr: 'Biopsies Prostate Guidées par IA'
      },
      excerpt: {
        es: 'Mejora de precisión diagnóstica con biopsias dirigidas por resonancia.',
        en: 'Improved diagnostic accuracy with MRI-guided biopsies.',
        fr: 'Amélioration précision diagnostique avec biopsies guidées par IRM.'
      },
      date: '2024-11-26',
      readTime: '11 min',
      category: { es: 'Urología', en: 'Urology', fr: 'Urologie' },
      icon: Microscope
    },
    {
      id: 'prostate-cancer-treatment',
      title: {
        es: 'Terapias Personalizadas en Cáncer de Próstata',
        en: 'Personalized Prostate Cancer Therapies',
        fr: 'Thérapies Personnalisées Cancer Prostate'
      },
      excerpt: {
        es: 'Selección de tratamiento basada en perfil molecular y genómico.',
        en: 'Treatment selection based on molecular and genomic profiling.',
        fr: 'Sélection traitement basée sur profilage moléculaire et génomique.'
      },
      date: '2024-11-24',
      readTime: '13 min',
      category: { es: 'Urología', en: 'Urology', fr: 'Urologie' },
      icon: Dna
    },

    // Stroke Articles (3 articles)
    {
      id: 'stroke-prediction',
      title: {
        es: 'Predicción de ACV con Modelos de IA',
        en: 'Stroke Prediction with AI Models',
        fr: 'Prédiction AVC avec Modèles IA'
      },
      excerpt: {
        es: 'Identificación temprana de riesgo de ACV usando biomarcadores.',
        en: 'Early stroke risk identification using biomarkers.',
        fr: 'Identification précoce risque AVC utilisant biomarqueurs.'
      },
      date: '2024-11-22',
      readTime: '10 min',
      category: { es: 'Neurología', en: 'Neurology', fr: 'Neurologie' },
      icon: Brain
    },
    {
      id: 'stroke-emergency',
      title: {
        es: 'Protocolo FAST Mejorado con IA',
        en: 'AI-Enhanced FAST Protocol',
        fr: 'Protocole FAST Amélioré avec IA'
      },
      excerpt: {
        es: 'Optimización del protocolo de emergencia para ACV agudo.',
        en: 'Emergency protocol optimization for acute stroke.',
        fr: 'Optimisation protocole urgence pour AVC aigu.'
      },
      date: '2024-11-20',
      readTime: '8 min',
      category: { es: 'Neurología', en: 'Neurology', fr: 'Neurologie' },
      icon: Zap
    },
    {
      id: 'stroke-rehabilitation',
      title: {
        es: 'Rehabilitación Post-ACV con IA',
        en: 'Post-Stroke Rehabilitation with AI',
        fr: 'Rééducation Post-AVC avec IA'
      },
      excerpt: {
        es: 'Terapias de rehabilitación personalizadas y seguimiento digital.',
        en: 'Personalized rehabilitation therapies and digital monitoring.',
        fr: 'Thérapies rééducation personnalisées et suivi digital.'
      },
      date: '2024-11-18',
      readTime: '12 min',
      category: { es: 'Neurología', en: 'Neurology', fr: 'Neurologie' },
      icon: Activity
    },

    // Additional Cancer Articles
    {
      id: 'lung-cancer-screening',
      title: {
        es: 'Screening de Cáncer de Pulmón con TC-IA',
        en: 'Lung Cancer Screening with AI-CT',
        fr: 'Dépistage Cancer Poumon avec TC-IA'
      },
      excerpt: {
        es: 'Detección temprana de nódulos pulmonares con análisis de imagen IA.',
        en: 'Early detection of lung nodules with AI image analysis.',
        fr: 'Détection précoce nodules pulmonaires avec analyse image IA.'
      },
      date: '2024-11-16',
      readTime: '10 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Heart
    },
    {
      id: 'pancreatic-cancer-biomarkers',
      title: {
        es: 'Biomarcadores en Cáncer Pancreático',
        en: 'Pancreatic Cancer Biomarkers',
        fr: 'Biomarqueurs Cancer Pancréatique'
      },
      excerpt: {
        es: 'Identificación temprana usando CA 19-9 y nuevos biomarcadores.',
        en: 'Early identification using CA 19-9 and novel biomarkers.',
        fr: 'Identification précoce utilisant CA 19-9 et nouveaux biomarqueurs.'
      },
      date: '2024-11-14',
      readTime: '11 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Microscope
    },
    {
      id: 'liver-cancer-imaging',
      title: {
        es: 'Imagen Hepática Inteligente para Cáncer',
        en: 'Smart Liver Imaging for Cancer',
        fr: 'Imagerie Hépatique Intelligente pour Cancer'
      },
      excerpt: {
        es: 'Diagnóstico de hepatocarcinoma con resonancia magnética y IA.',
        en: 'Hepatocellular carcinoma diagnosis with MRI and AI.',
        fr: 'Diagnostic carcinome hépatocellulaire avec IRM et IA.'
      },
      date: '2024-11-12',
      readTime: '9 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      icon: Shield
    },

    // Kidney Disease Articles
    {
      id: 'kidney-disease-prediction',
      title: {
        es: 'Predicción de Enfermedad Renal Crónica',
        en: 'Chronic Kidney Disease Prediction',
        fr: 'Prédiction Maladie Rénale Chronique'
      },
      excerpt: {
        es: 'Modelos predictivos para deterioro de función renal.',
        en: 'Predictive models for kidney function deterioration.',
        fr: 'Modèles prédictifs pour détérioration fonction rénale.'
      },
      date: '2024-11-10',
      readTime: '10 min',
      category: { es: 'Nefrología', en: 'Nephrology', fr: 'Néphrologie' },
      icon: Activity
    },
    {
      id: 'kidney-disease-dialysis',
      title: {
        es: 'Optimización de Diálisis con IA',
        en: 'AI Dialysis Optimization',
        fr: 'Optimisation Dialyse avec IA'
      },
      excerpt: {
        es: 'Personalización de parámetros de diálisis usando machine learning.',
        en: 'Dialysis parameter personalization using machine learning.',
        fr: 'Personnalisation paramètres dialyse utilisant machine learning.'
      },
      date: '2024-11-08',
      readTime: '12 min',
      category: { es: 'Nefrología', en: 'Nephrology', fr: 'Néphrologie' },
      icon: Stethoscope
    },

    // Epilepsy Articles
    {
      id: 'epilepsy-seizure-prediction',
      title: {
        es: 'Predicción de Crisis Epilépticas',
        en: 'Epileptic Seizure Prediction',
        fr: 'Prédiction Crises Épileptiques'
      },
      excerpt: {
        es: 'Algoritmos de detección temprana de crisis usando EEG inteligente.',
        en: 'Early seizure detection algorithms using smart EEG.',
        fr: 'Algorithmes détection précoce crises utilisant EEG intelligent.'
      },
      date: '2024-11-06',
      readTime: '11 min',
      category: { es: 'Neurología', en: 'Neurology', fr: 'Neurologie' },
      icon: Zap
    },
    {
      id: 'epilepsy-medication',
      title: {
        es: 'Optimización de Medicación Antiepiléptica',
        en: 'Antiepileptic Medication Optimization',
        fr: 'Optimisation Médication Antiépileptique'
      },
      excerpt: {
        es: 'Personalización de dosis usando farmacocinética y genómica.',
        en: 'Dose personalization using pharmacokinetics and genomics.',
        fr: 'Personnalisation doses utilisant pharmacocinétique et génomique.'
      },
      date: '2024-11-04',
      readTime: '9 min',
      category: { es: 'Neurología', en: 'Neurology', fr: 'Neurologie' },
      icon: Brain
    },

    // Leukemia Articles
    {
      id: 'leukemia-diagnosis',
      title: {
        es: 'Diagnóstico de Leucemia con IA',
        en: 'Leukemia Diagnosis with AI',
        fr: 'Diagnostic Leucémie avec IA'
      },
      excerpt: {
        es: 'Análisis automatizado de células sanguíneas y médula ósea.',
        en: 'Automated analysis of blood cells and bone marrow.',
        fr: 'Analyse automatisée cellules sanguines et moelle osseuse.'
      },
      date: '2024-11-02',
      readTime: '13 min',
      category: { es: 'Hematología', en: 'Hematology', fr: 'Hématologie' },
      icon: Microscope
    },
    {
      id: 'leukemia-treatment-response',
      title: {
        es: 'Monitoreo de Respuesta en Leucemia',
        en: 'Leukemia Treatment Response Monitoring',
        fr: 'Surveillance Réponse Traitement Leucémie'
      },
      excerpt: {
        es: 'Seguimiento de enfermedad mínima residual con PCR cuantitativa.',
        en: 'Minimal residual disease monitoring with quantitative PCR.',
        fr: 'Suivi maladie résiduelle minimale avec PCR quantitative.'
      },
      date: '2024-10-31',
      readTime: '11 min',
      category: { es: 'Hematología', en: 'Hematology', fr: 'Hématologie' },
      icon: Activity
    },

    // Stomach Cancer Articles
    {
      id: 'stomach-cancer-helicobacter',
      title: {
        es: 'H. Pylori y Cáncer Gástrico: Prevención IA',
        en: 'H. Pylori and Gastric Cancer: AI Prevention',
        fr: 'H. Pylori et Cancer Gastrique: Prévention IA'
      },
      excerpt: {
        es: 'Estrategias de erradicación personalizadas basadas en resistencias.',
        en: 'Personalized eradication strategies based on resistance patterns.',
        fr: 'Stratégies éradication personnalisées basées sur résistances.'
      },
      date: '2024-10-29',
      readTime: '10 min',
      category: { es: 'Gastroenterología', en: 'Gastroenterology', fr: 'Gastroentérologie' },
      icon: Stethoscope
    },
    {
      id: 'stomach-cancer-endoscopy',
      title: {
        es: 'Endoscopia Inteligente para Cáncer Gástrico',
        en: 'Smart Endoscopy for Gastric Cancer',
        fr: 'Endoscopie Intelligente pour Cancer Gastrique'
      },
      excerpt: {
        es: 'Detección automática de lesiones precancerosas con IA.',
        en: 'Automatic detection of precancerous lesions with AI.',
        fr: 'Détection automatique lésions précancéreuses avec IA.'
      },
      date: '2024-10-27',
      readTime: '12 min',
      category: { es: 'Gastroenterología', en: 'Gastroenterology', fr: 'Gastroentérologie' },
      icon: Microscope
    },

    // AI & Technology Articles
    {
      id: 'ai-revolution-medicine',
      title: {
        es: 'Revolución IA en Medicina: 62+ Modelos',
        en: 'AI Revolution in Medicine: 62+ Models',
        fr: 'Révolution IA en Médecine: 62+ Modèles'
      },
      excerpt: {
        es: 'Análisis completo de nuestra plataforma de 62+ modelos especializados.',
        en: 'Complete analysis of our 62+ specialized model platform.',
        fr: 'Analyse complète de notre plateforme 62+ modèles spécialisés.'
      },
      date: '2024-10-25',
      readTime: '15 min',
      category: { es: 'IA Médica', en: 'Medical AI', fr: 'IA Médicale' },
      icon: Brain
    },
    {
      id: 'hospital-success-stories',
      title: {
        es: 'Casos Éxito: 15+ Hospitales Transformados',
        en: 'Success Stories: 15+ Transformed Hospitals',
        fr: 'Cas Succès: 15+ Hôpitaux Transformés'
      },
      excerpt: {
        es: 'Implementaciones reales: 67% reducción tiempo diagnóstico.',
        en: 'Real implementations: 67% diagnostic time reduction.',
        fr: 'Implémentations réelles: 67% réduction temps diagnostic.'
      },
      date: '2024-10-23',
      readTime: '13 min',
      category: { es: 'Casos Estudio', en: 'Case Studies', fr: 'Études Cas' },
      icon: Shield
    },
    {
      id: 'future-ai-medicine',
      title: {
        es: 'Futuro de la IA en Medicina 2025-2030',
        en: 'Future of AI in Medicine 2025-2030',
        fr: 'Avenir IA en Médecine 2025-2030'
      },
      excerpt: {
        es: 'Tendencias emergentes: medicina cuántica y diagnóstico molecular.',
        en: 'Emerging trends: quantum medicine and molecular diagnostics.',
        fr: 'Tendances émergentes: médecine quantique et diagnostic moléculaire.'
      },
      date: '2024-10-21',
      readTime: '14 min',
      category: { es: 'IA Médica', en: 'Medical AI', fr: 'IA Médicale' },
      icon: Brain
    },
    {
      id: 'precision-medicine-genomics',
      title: {
        es: 'Medicina de Precisión y Genómica',
        en: 'Precision Medicine and Genomics',
        fr: 'Médecine Précision et Génomique'
      },
      excerpt: {
        es: 'Integración de datos genómicos para tratamientos personalizados.',
        en: 'Genomic data integration for personalized treatments.',
        fr: 'Intégration données génomiques pour traitements personnalisés.'
      },
      date: '2024-10-19',
      readTime: '16 min',
      category: { es: 'Genómica', en: 'Genomics', fr: 'Génomique' },
      icon: Dna
    }
  ];

  const categories = [
    { id: 'all', name: { es: 'Todos', en: 'All', fr: 'Tous' } },
    { id: 'oncologia', name: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' } },
    { id: 'cardiologia', name: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' } },
    { id: 'endocrinologia', name: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' } },
    { id: 'neurologia', name: { es: 'Neurología', en: 'Neurology', fr: 'Neurologie' } },
    { id: 'ia-medica', name: { es: 'IA Médica', en: 'Medical AI', fr: 'IA Médicale' } }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => {
        const categoryKey = post.category[language as keyof typeof post.category].toLowerCase();
        return categoryKey.includes(selectedCategory) || 
               (selectedCategory === 'ia-medica' && (categoryKey.includes('ia') || categoryKey.includes('ai')));
      });

  const totalPages = Math.ceil(filteredPosts.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + articlesPerPage);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header - Shortened title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Blog MedAI - Medicina IA' :
             language === 'fr' ? 'Blog MedAI - Médecine IA' :
             'MedAI Blog - AI Medicine'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Investigación médica con IA. 62+ modelos especializados.' :
             language === 'fr' ? 'Recherche médicale avec IA. 62+ modèles spécialisés.' :
             'Medical research with AI. 62+ specialized models.'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className="rounded-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name[language as keyof typeof category.name]}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && currentPage === 1 && (
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
                          {new Date(featuredPost.date).toLocaleDateString()}
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
        )}

        {/* Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Artículos Médicos' :
             language === 'fr' ? 'Articles Médicaux' :
             'Medical Articles'}
            <span className="text-base font-normal text-gray-500 ml-2">
              ({filteredPosts.length} {language === 'es' ? 'artículos' : language === 'fr' ? 'articles' : 'articles'})
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {paginatedPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {post.category[language as keyof typeof post.category]}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {post.title[language as keyof typeof post.title]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt[language as keyof typeof post.excerpt]}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-xs space-x-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                {language === 'es' ? 'Anterior' : language === 'fr' ? 'Précédent' : 'Previous'}
              </Button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                {language === 'es' ? 'Siguiente' : language === 'fr' ? 'Suivant' : 'Next'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
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
              <div className="text-3xl font-bold text-blue-600 mb-2">{blogPosts.length}+</div>
              <div className="text-gray-600 text-sm">
                {language === 'es' ? 'Artículos' :
                 language === 'fr' ? 'Articles' :
                 'Articles'}
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
