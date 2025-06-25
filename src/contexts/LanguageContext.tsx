
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.chat': 'Chat IA',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.info': 'Información',
    'nav.admin': 'Admin',
    'nav.welcome': 'Bienvenido',
    'nav.logout': 'Cerrar Sesión',
    
    // Landing Page
    'landing.title': 'Plataforma de Análisis Médico con Inteligencia Artificial',
    'landing.subtitle': 'Revoluciona tu práctica médica con análisis predictivo avanzado para diabetes y síndrome metabólico. Reduce las listas de espera y optimiza los diagnósticos con 9 modelos de machine learning especializados.',
    'landing.cta.start': 'Comenzar Análisis',
    'landing.cta.features': 'Ver Características',
    'landing.cta.demo': 'Solicitar Demo',
    'landing.stats.accuracy': 'Precisión en Diagnósticos',
    'landing.stats.models': 'Modelos de IA Especializados',
    'landing.stats.cases': 'Casos Analizados',
    'landing.features.title': 'Características Profesionales',
    'landing.features.subtitle': 'Herramientas diseñadas específicamente para profesionales de la salud',
    'landing.feature.ai': 'Análisis con IA Avanzada',
    'landing.feature.ai.desc': '9 modelos de machine learning especializados en predicción de diabetes',
    'landing.feature.diagnosis': 'Diagnóstico Preciso',
    'landing.feature.diagnosis.desc': '94% de precisión en detección de diabetes tipo 2 y síndrome metabólico',
    'landing.feature.reports': 'Reportes Automáticos',
    'landing.feature.reports.desc': 'Generación automática de PDFs y envío por email con n8n',
    'landing.feature.security': 'Datos Seguros',
    'landing.feature.security.desc': 'Cumple con estándares HIPAA para protección de datos médicos',
    'landing.feature.waitlist': 'Reducción de Listas de Espera',
    'landing.feature.waitlist.desc': 'Diagnósticos más rápidos y eficientes para optimizar el flujo de pacientes',
    'landing.feature.efficiency': 'Eficiencia Hospitalaria',
    'landing.feature.efficiency.desc': 'Mejora la productividad del personal médico con análisis automatizado',
    'landing.models.title': 'Modelos de Machine Learning Integrados',
    'landing.models.subtitle': 'Basados en investigación científica de fuentes reconocidas',
    'landing.cta.final': '¿Listo para mejorar tus diagnósticos?',
    'landing.cta.final.desc': 'Únete a cientos de profesionales que ya utilizan MedAI para análisis predictivo',
    'landing.cta.professional': 'Crear Cuenta Profesional',
    
    // Dashboard
    'dashboard.totalConsultations': 'Total Consultas',
    'dashboard.activePatients': 'Pacientes Activos',
    'dashboard.reportsGenerated': 'Reportes Generados',
    'dashboard.accuracyRate': 'Tasa de Precisión',
    'dashboard.recentActivity': 'Actividad Reciente',
    'dashboard.fromLastMonth': 'del mes pasado',
    'dashboard.confidence': 'confianza',
    
    // Chat Interface
    'chat.title': 'Consulta Médica IA',
    'chat.analyzing': 'Analizando...',
    'chat.webhook.title': 'Configuración Webhook n8n',
    'chat.webhook.placeholder': 'Ingresa tu URL de webhook n8n para reportes automáticos',
    'chat.webhook.description': 'Los reportes PDF se generarán automáticamente y se enviarán por email',
    'chat.progress': 'Progreso:',
    'chat.symptoms': 'Síntomas',
    'chat.labResults': 'Laboratorios',
    'chat.demographics': 'Demografía',
    'chat.analysis': 'Análisis',
    'chat.newCase': 'Nuevo Caso',
    'chat.placeholder.symptoms': 'Describe los síntomas del paciente (separados por comas)...',
    'chat.placeholder.labResults': 'Ingresa los resultados de laboratorio (separados por comas)...',
    'chat.placeholder.demographics': 'Ingresa datos demográficos del paciente o escribe \'skip\'...',
    'chat.placeholder.complete': 'Análisis completo. Inicia una nueva consulta.',
    
    // Auth
    'auth.professionalAccess': 'Acceso Profesional',
    'auth.backToStart': '← Volver al inicio',
    'auth.loading': 'Verificando autenticación...',
    
    // Languages
    'language.spanish': 'Español',
    'language.english': 'English',
    'language.french': 'Français',
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.chat': 'AI Chat',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.info': 'Information',
    'nav.admin': 'Admin',
    'nav.welcome': 'Welcome',
    'nav.logout': 'Logout',
    
    // Landing Page
    'landing.title': 'AI-Powered Medical Analysis Platform',
    'landing.subtitle': 'Revolutionize your medical practice with advanced predictive analysis for diabetes and metabolic syndrome. Reduce waiting lists and optimize diagnoses with 9 specialized machine learning models.',
    'landing.cta.start': 'Start Analysis',
    'landing.cta.features': 'View Features',
    'landing.cta.demo': 'Request Demo',
    'landing.stats.accuracy': 'Diagnostic Accuracy',
    'landing.stats.models': 'Specialized AI Models',
    'landing.stats.cases': 'Cases Analyzed',
    'landing.features.title': 'Professional Features',
    'landing.features.subtitle': 'Tools designed specifically for healthcare professionals',
    'landing.feature.ai': 'Advanced AI Analysis',
    'landing.feature.ai.desc': '9 machine learning models specialized in diabetes prediction',
    'landing.feature.diagnosis': 'Accurate Diagnosis',
    'landing.feature.diagnosis.desc': '94% accuracy in type 2 diabetes and metabolic syndrome detection',
    'landing.feature.reports': 'Automated Reports',
    'landing.feature.reports.desc': 'Automatic PDF generation and email delivery with n8n',
    'landing.feature.security': 'Secure Data',
    'landing.feature.security.desc': 'HIPAA compliant for medical data protection',
    'landing.feature.waitlist': 'Waitlist Reduction',
    'landing.feature.waitlist.desc': 'Faster and more efficient diagnoses to optimize patient flow',
    'landing.feature.efficiency': 'Hospital Efficiency',
    'landing.feature.efficiency.desc': 'Improve medical staff productivity with automated analysis',
    'landing.models.title': 'Integrated Machine Learning Models',
    'landing.models.subtitle': 'Based on scientific research from recognized sources',
    'landing.cta.final': 'Ready to improve your diagnoses?',
    'landing.cta.final.desc': 'Join hundreds of professionals already using MedAI for predictive analysis',
    'landing.cta.professional': 'Create Professional Account',
    
    // Dashboard
    'dashboard.totalConsultations': 'Total Consultations',
    'dashboard.activePatients': 'Active Patients',
    'dashboard.reportsGenerated': 'Reports Generated',
    'dashboard.accuracyRate': 'Accuracy Rate',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.fromLastMonth': 'from last month',
    'dashboard.confidence': 'confidence',
    
    // Chat Interface
    'chat.title': 'AI Medical Consultation',
    'chat.analyzing': 'Analyzing...',
    'chat.webhook.title': 'n8n Webhook Configuration',
    'chat.webhook.placeholder': 'Enter your n8n webhook URL for automatic reports',
    'chat.webhook.description': 'PDF reports will be automatically generated and emailed',
    'chat.progress': 'Progress:',
    'chat.symptoms': 'Symptoms',
    'chat.labResults': 'Lab Results',
    'chat.demographics': 'Demographics',
    'chat.analysis': 'Analysis',
    'chat.newCase': 'New Case',
    'chat.placeholder.symptoms': 'Describe patient symptoms (comma separated)...',
    'chat.placeholder.labResults': 'Enter lab results (comma separated)...',
    'chat.placeholder.demographics': 'Enter patient demographics or type \'skip\'...',
    'chat.placeholder.complete': 'Analysis complete. Start a new consultation.',
    
    // Auth
    'auth.professionalAccess': 'Professional Access',
    'auth.backToStart': '← Back to start',
    'auth.loading': 'Verifying authentication...',
    
    // Languages
    'language.spanish': 'Español',
    'language.english': 'English',
    'language.french': 'Français',
  },
  fr: {
    // Navigation
    'nav.dashboard': 'Tableau de Bord',
    'nav.chat': 'Chat IA',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.info': 'Information',
    'nav.admin': 'Admin',
    'nav.welcome': 'Bienvenue',
    'nav.logout': 'Déconnexion',
    
    // Landing Page
    'landing.title': 'Plateforme d\'Analyse Médicale avec Intelligence Artificielle',
    'landing.subtitle': 'Révolutionnez votre pratique médicale avec une analyse prédictive avancée pour le diabète et le syndrome métabolique. Réduisez les listes d\'attente et optimisez les diagnostics avec 9 modèles d\'apprentissage automatique spécialisés.',
    'landing.cta.start': 'Commencer l\'Analyse',
    'landing.cta.features': 'Voir les Caractéristiques',
    'landing.cta.demo': 'Demander une Démo',
    'landing.stats.accuracy': 'Précision Diagnostique',
    'landing.stats.models': 'Modèles IA Spécialisés',
    'landing.stats.cases': 'Cas Analysés',
    'landing.features.title': 'Caractéristiques Professionnelles',
    'landing.features.subtitle': 'Outils conçus spécifiquement pour les professionnels de la santé',
    'landing.feature.ai': 'Analyse IA Avancée',
    'landing.feature.ai.desc': '9 modèles d\'apprentissage automatique spécialisés dans la prédiction du diabète',
    'landing.feature.diagnosis': 'Diagnostic Précis',
    'landing.feature.diagnosis.desc': '94% de précision dans la détection du diabète type 2 et du syndrome métabolique',
    'landing.feature.reports': 'Rapports Automatiques',
    'landing.feature.reports.desc': 'Génération automatique de PDF et envoi par email avec n8n',
    'landing.feature.security': 'Données Sécurisées',
    'landing.feature.security.desc': 'Conforme aux normes HIPAA pour la protection des données médicales',
    'landing.feature.waitlist': 'Réduction des Listes d\'Attente',
    'landing.feature.waitlist.desc': 'Diagnostics plus rapides et efficaces pour optimiser le flux de patients',
    'landing.feature.efficiency': 'Efficacité Hospitalière',
    'landing.feature.efficiency.desc': 'Améliore la productivité du personnel médical avec une analyse automatisée',
    'landing.models.title': 'Modèles d\'Apprentissage Automatique Intégrés',
    'landing.models.subtitle': 'Basés sur la recherche scientifique de sources reconnues',
    'landing.cta.final': 'Prêt à améliorer vos diagnostics?',
    'landing.cta.final.desc': 'Rejoignez des centaines de professionnels qui utilisent déjà MedAI pour l\'analyse prédictive',
    'landing.cta.professional': 'Créer un Compte Professionnel',
    
    // Dashboard
    'dashboard.totalConsultations': 'Total Consultations',
    'dashboard.activePatients': 'Patients Actifs',
    'dashboard.reportsGenerated': 'Rapports Générés',
    'dashboard.accuracyRate': 'Taux de Précision',
    'dashboard.recentActivity': 'Activité Récente',
    'dashboard.fromLastMonth': 'du mois dernier',
    'dashboard.confidence': 'confiance',
    
    // Chat Interface
    'chat.title': 'Consultation Médicale IA',
    'chat.analyzing': 'Analyse en cours...',
    'chat.webhook.title': 'Configuration Webhook n8n',
    'chat.webhook.placeholder': 'Entrez votre URL webhook n8n pour les rapports automatiques',
    'chat.webhook.description': 'Les rapports PDF seront générés automatiquement et envoyés par email',
    'chat.progress': 'Progrès:',
    'chat.symptoms': 'Symptômes',
    'chat.labResults': 'Résultats de Laboratoire',
    'chat.demographics': 'Démographie',
    'chat.analysis': 'Analyse',
    'chat.newCase': 'Nouveau Cas',
    'chat.placeholder.symptoms': 'Décrivez les symptômes du patient (séparés par des virgules)...',
    'chat.placeholder.labResults': 'Entrez les résultats de laboratoire (séparés par des virgules)...',
    'chat.placeholder.demographics': 'Entrez les données démographiques du patient ou tapez \'skip\'...',
    'chat.placeholder.complete': 'Analyse terminée. Commencez une nouvelle consultation.',
    
    // Auth
    'auth.professionalAccess': 'Accès Professionnel',
    'auth.backToStart': '← Retour au début',
    'auth.loading': 'Vérification de l\'authentification...',
    
    // Languages
    'language.spanish': 'Español',
    'language.english': 'English',
    'language.french': 'Français',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const stored = localStorage.getItem('medai_language') as Language;
    if (stored && ['es', 'en', 'fr'].includes(stored)) {
      setLanguage(stored);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('medai_language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
