
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
    'nav.dashboard': 'Panel de Control',
    'nav.chat': 'Chat IA',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.info': 'Información',
    'nav.admin': 'Configuración',
    'nav.welcome': 'Bienvenido',
    'nav.logout': 'Cerrar Sesión',
    
    // Dashboard
    'dashboard.title': 'Plataforma de Diagnóstico MedAI',
    'dashboard.subtitle': 'Diagnóstico médico avanzado impulsado por IA con análisis multi-modelo y reportes automatizados',
    'dashboard.badges.models': '9 Modelos de IA',
    'dashboard.badges.hipaa': 'Cumple HIPAA',
    'dashboard.badges.reports': 'Reportes Automáticos',
    'dashboard.cards.diagnosis.title': 'Iniciar Diagnóstico',
    'dashboard.cards.diagnosis.desc': 'Comenzar una nueva consulta de paciente con nuestro asistente de IA',
    'dashboard.cards.diagnosis.button': 'Nueva Consulta',
    'dashboard.cards.history.title': 'Historial de Casos',
    'dashboard.cards.history.desc': 'Revisar consultas anteriores y reportes',
    'dashboard.cards.history.button': 'Ver Casos',
    'dashboard.cards.patients.title': 'Gestión de Pacientes',
    'dashboard.cards.patients.desc': 'Administrar registros de pacientes y seguimientos',
    'dashboard.cards.patients.button': 'Gestionar Pacientes',
    'dashboard.howItWorks.title': 'Cómo Funciona',
    'dashboard.howItWorks.step1.title': 'Ingresar Síntomas',
    'dashboard.howItWorks.step1.desc': 'Describir síntomas del paciente y resultados de laboratorio',
    'dashboard.howItWorks.step2.title': 'Análisis IA',
    'dashboard.howItWorks.step2.desc': '9 modelos ML analizan los datos',
    'dashboard.howItWorks.step3.title': 'Meta-Análisis',
    'dashboard.howItWorks.step3.desc': 'OpenAI combina resultados',
    'dashboard.howItWorks.step4.title': 'Reporte Automático',
    'dashboard.howItWorks.step4.desc': 'PDF enviado al doctor',
    
    // Dashboard Stats
    'dashboard.totalConsultations': 'Total Consultas',
    'dashboard.activePatients': 'Pacientes Activos',
    'dashboard.reportsGenerated': 'Reportes Generados',
    'dashboard.accuracyRate': 'Tasa de Precisión',
    'dashboard.recentActivity': 'Actividad Reciente',
    'dashboard.fromLastMonth': 'del mes pasado',
    'dashboard.confidence': 'confianza',
    
    // Admin Settings
    'admin.title': 'Configuración de Cuenta',
    'admin.profile.title': 'Perfil Profesional',
    'admin.profile.name': 'Nombre Completo',
    'admin.profile.email': 'Correo Electrónico',
    'admin.profile.specialty': 'Especialidad Médica',
    'admin.profile.license': 'Número de Licencia',
    'admin.profile.hospital': 'Hospital/Clínica',
    'admin.notifications.title': 'Notificaciones',
    'admin.notifications.emailReports': 'Reportes por Email',
    'admin.notifications.emailReportsDesc': 'Recibir reportes de diagnóstico por correo electrónico',
    'admin.notifications.weeklyDigest': 'Resumen Semanal',
    'admin.notifications.weeklyDigestDesc': 'Recibir resumen semanal de actividad',
    'admin.notifications.criticalAlerts': 'Alertas Críticas',
    'admin.notifications.criticalAlertsDesc': 'Notificaciones inmediatas para casos críticos',
    'admin.integrations.title': 'Integraciones',
    'admin.integrations.n8nWebhook': 'URL Webhook n8n',
    'admin.integrations.n8nWebhookDesc': 'URL para enviar reportes automáticamente via n8n',
    'admin.integrations.reportFormat': 'Formato de Reporte',
    'admin.integrations.emailTemplate': 'Plantilla de Email',
    'admin.integrations.emailTemplatePlaceholder': 'Estimado Doctor,\n\nAdjunto encontrará el análisis de diagnóstico para el paciente.\n\nSaludos cordiales,\nMedAI Platform',
    'admin.integrations.autoSend': 'Envío Automático',
    'admin.integrations.autoSendDesc': 'Enviar reportes automáticamente después del análisis',
    'admin.save': 'Guardar Configuración',
    'admin.settings.saved': 'Configuración Guardada',
    'admin.settings.savedDesc': 'Sus preferencias han sido actualizadas exitosamente',
    
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
    'chat.placeholder.demographics': 'Ingresa datos demográficos del paciente o escribe \'saltar\'...',
    'chat.placeholder.complete': 'Análisis completo. Inicia una nueva consulta.',
    'chat.greeting': '¡Hola! Soy tu asistente médico de IA. Te ayudaré a analizar síntomas y resultados de laboratorio usando 9 modelos avanzados de ML. Comencemos con los síntomas principales del paciente.',
    'chat.symptoms.recorded': 'He registrado los siguientes síntomas: {symptoms}. Ahora, proporciona los resultados de laboratorio disponibles (ej: niveles de glucosa, presión arterial, colesterol, etc.)',
    'chat.labResults.recorded': 'Resultados de laboratorio registrados: {labResults}. Proporciona datos demográficos del paciente (edad, género, peso, altura) o escribe \'saltar\' para proceder con el análisis.',
    'chat.analysis.complete': '¡Perfecto! Tengo toda la información necesaria. Ahora analizaré este caso usando nuestros 9 modelos de IA y generaré un reporte completo.',
    'chat.analysis.result': '¡Análisis completado! Aquí están los resultados:',
    'chat.newConsultation': 'Iniciando nueva consulta. Describe los síntomas principales del paciente.',
    
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
    'nav.admin': 'Settings',
    'nav.welcome': 'Welcome',
    'nav.logout': 'Logout',
    
    // Dashboard
    'dashboard.title': 'MedAI Diagnostic Platform',
    'dashboard.subtitle': 'Advanced AI-powered medical diagnosis with multi-model analysis and automated reporting',
    'dashboard.badges.models': '9 AI Models',
    'dashboard.badges.hipaa': 'HIPAA Compliant',
    'dashboard.badges.reports': 'Auto Reports',
    'dashboard.cards.diagnosis.title': 'Start Diagnosis',
    'dashboard.cards.diagnosis.desc': 'Begin a new patient consultation with our AI assistant',
    'dashboard.cards.diagnosis.button': 'New Consultation',
    'dashboard.cards.history.title': 'Case History',
    'dashboard.cards.history.desc': 'Review previous consultations and reports',
    'dashboard.cards.history.button': 'View Cases',
    'dashboard.cards.patients.title': 'Patient Management',
    'dashboard.cards.patients.desc': 'Manage patient records and follow-ups',
    'dashboard.cards.patients.button': 'Manage Patients',
    'dashboard.howItWorks.title': 'How It Works',
    'dashboard.howItWorks.step1.title': 'Input Symptoms',
    'dashboard.howItWorks.step1.desc': 'Describe patient symptoms and lab results',
    'dashboard.howItWorks.step2.title': 'AI Analysis',
    'dashboard.howItWorks.step2.desc': '9 ML models analyze the data',
    'dashboard.howItWorks.step3.title': 'Meta-Analysis',
    'dashboard.howItWorks.step3.desc': 'OpenAI combines results',
    'dashboard.howItWorks.step4.title': 'Auto Report',
    'dashboard.howItWorks.step4.desc': 'PDF sent to doctor',
    
    // Dashboard Stats
    'dashboard.totalConsultations': 'Total Consultations',
    'dashboard.activePatients': 'Active Patients',
    'dashboard.reportsGenerated': 'Reports Generated',
    'dashboard.accuracyRate': 'Accuracy Rate',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.fromLastMonth': 'from last month',
    'dashboard.confidence': 'confidence',
    
    // Admin Settings
    'admin.title': 'Account Settings',
    'admin.profile.title': 'Professional Profile',
    'admin.profile.name': 'Full Name',
    'admin.profile.email': 'Email Address',
    'admin.profile.specialty': 'Medical Specialty',
    'admin.profile.license': 'License Number',
    'admin.profile.hospital': 'Hospital/Clinic',
    'admin.notifications.title': 'Notifications',
    'admin.notifications.emailReports': 'Email Reports',
    'admin.notifications.emailReportsDesc': 'Receive diagnostic reports via email',
    'admin.notifications.weeklyDigest': 'Weekly Digest',
    'admin.notifications.weeklyDigestDesc': 'Receive weekly activity summary',
    'admin.notifications.criticalAlerts': 'Critical Alerts',
    'admin.notifications.criticalAlertsDesc': 'Immediate notifications for critical cases',
    'admin.integrations.title': 'Integrations',
    'admin.integrations.n8nWebhook': 'n8n Webhook URL',
    'admin.integrations.n8nWebhookDesc': 'URL to send reports automatically via n8n',
    'admin.integrations.reportFormat': 'Report Format',
    'admin.integrations.emailTemplate': 'Email Template',
    'admin.integrations.emailTemplatePlaceholder': 'Dear Doctor,\n\nPlease find attached the diagnostic analysis for the patient.\n\nBest regards,\nMedAI Platform',
    'admin.integrations.autoSend': 'Auto Send',
    'admin.integrations.autoSendDesc': 'Send reports automatically after analysis',
    'admin.save': 'Save Settings',
    'admin.settings.saved': 'Settings Saved',
    'admin.settings.savedDesc': 'Your preferences have been successfully updated',
    
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
    'chat.greeting': 'Hello! I\'m your AI medical assistant. I\'ll help you analyze symptoms and lab results using 9 advanced ML models. Let\'s start with the patient\'s main symptoms.',
    'chat.symptoms.recorded': 'I\'ve recorded the following symptoms: {symptoms}. Now, please provide any available lab results (e.g., glucose levels, blood pressure, cholesterol, etc.)',
    'chat.labResults.recorded': 'Lab results recorded: {labResults}. Please provide patient demographics (age, gender, weight, height) or type \'skip\' to proceed with analysis.',
    'chat.analysis.complete': 'Perfect! I have all the information needed. I will now analyze this case using our 9 AI models and generate a comprehensive report.',
    'chat.analysis.result': 'Analysis completed! Here are the results:',
    'chat.newConsultation': 'Starting a new consultation. Please describe the patient\'s primary symptoms.',
    
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
    'nav.admin': 'Paramètres',
    'nav.welcome': 'Bienvenue',
    'nav.logout': 'Déconnexion',
    
    // Dashboard
    'dashboard.title': 'Plateforme de Diagnostic MedAI',
    'dashboard.subtitle': 'Diagnostic médical avancé avec IA, analyse multi-modèles et rapports automatisés',
    'dashboard.badges.models': '9 Modèles IA',
    'dashboard.badges.hipaa': 'Conforme HIPAA',
    'dashboard.badges.reports': 'Rapports Auto',
    'dashboard.cards.diagnosis.title': 'Commencer Diagnostic',
    'dashboard.cards.diagnosis.desc': 'Commencer une nouvelle consultation patient avec notre assistant IA',
    'dashboard.cards.diagnosis.button': 'Nouvelle Consultation',
    'dashboard.cards.history.title': 'Historique des Cas',
    'dashboard.cards.history.desc': 'Examiner les consultations précédentes et rapports',
    'dashboard.cards.history.button': 'Voir les Cas',
    'dashboard.cards.patients.title': 'Gestion des Patients',
    'dashboard.cards.patients.desc': 'Gérer les dossiers patients et suivis',
    'dashboard.cards.patients.button': 'Gérer les Patients',
    'dashboard.howItWorks.title': 'Comment ça Marche',
    'dashboard.howItWorks.step1.title': 'Saisir Symptômes',
    'dashboard.howItWorks.step1.desc': 'Décrire les symptômes du patient et résultats de laboratoire',
    'dashboard.howItWorks.step2.title': 'Analyse IA',
    'dashboard.howItWorks.step2.desc': '9 modèles ML analysent les données',
    'dashboard.howItWorks.step3.title': 'Méta-Analyse',
    'dashboard.howItWorks.step3.desc': 'OpenAI combine les résultats',
    'dashboard.howItWorks.step4.title': 'Rapport Auto',
    'dashboard.howItWorks.step4.desc': 'PDF envoyé au médecin',
    
    // Dashboard Stats
    'dashboard.totalConsultations': 'Total Consultations',
    'dashboard.activePatients': 'Patients Actifs',
    'dashboard.reportsGenerated': 'Rapports Générés',
    'dashboard.accuracyRate': 'Taux de Précision',
    'dashboard.recentActivity': 'Activité Récente',
    'dashboard.fromLastMonth': 'du mois dernier',
    'dashboard.confidence': 'confiance',
    
    // Admin Settings
    'admin.title': 'Paramètres du Compte',
    'admin.profile.title': 'Profil Professionnel',
    'admin.profile.name': 'Nom Complet',
    'admin.profile.email': 'Adresse Email',
    'admin.profile.specialty': 'Spécialité Médicale',
    'admin.profile.license': 'Numéro de Licence',
    'admin.profile.hospital': 'Hôpital/Clinique',
    'admin.notifications.title': 'Notifications',
    'admin.notifications.emailReports': 'Rapports Email',
    'admin.notifications.emailReportsDesc': 'Recevoir des rapports de diagnostic par email',
    'admin.notifications.weeklyDigest': 'Résumé Hebdomadaire',
    'admin.notifications.weeklyDigestDesc': 'Recevoir un résumé d\'activité hebdomadaire',
    'admin.notifications.criticalAlerts': 'Alertes Critiques',
    'admin.notifications.criticalAlertsDesc': 'Notifications immédiates pour les cas critiques',
    'admin.integrations.title': 'Intégrations',
    'admin.integrations.n8nWebhook': 'URL Webhook n8n',
    'admin.integrations.n8nWebhookDesc': 'URL pour envoyer des rapports automatiquement via n8n',
    'admin.integrations.reportFormat': 'Format de Rapport',
    'admin.integrations.emailTemplate': 'Modèle d\'Email',
    'admin.integrations.emailTemplatePlaceholder': 'Cher Docteur,\n\nVeuillez trouver ci-joint l\'analyse diagnostique pour le patient.\n\nCordialement,\nPlateforme MedAI',
    'admin.integrations.autoSend': 'Envoi Automatique',
    'admin.integrations.autoSendDesc': 'Envoyer les rapports automatiquement après analyse',
    'admin.save': 'Sauvegarder les Paramètres',
    'admin.settings.saved': 'Paramètres Sauvegardés',
    'admin.settings.savedDesc': 'Vos préférences ont été mises à jour avec succès',
    
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
    'chat.placeholder.demographics': 'Entrez les données démographiques du patient ou tapez \'ignorer\'...',
    'chat.placeholder.complete': 'Analyse terminée. Commencez une nouvelle consultation.',
    'chat.greeting': 'Bonjour ! Je suis votre assistant médical IA. Je vous aiderai à analyser les symptômes et résultats de laboratoire en utilisant 9 modèles ML avancés. Commençons par les symptômes principaux du patient.',
    'chat.symptoms.recorded': 'J\'ai enregistré les symptômes suivants : {symptoms}. Maintenant, veuillez fournir les résultats de laboratoire disponibles (ex : niveaux de glucose, pression artérielle, cholestérol, etc.)',
    'chat.labResults.recorded': 'Résultats de laboratoire enregistrés : {labResults}. Veuillez fournir les données démographiques du patient (âge, sexe, poids, taille) ou tapez \'ignorer\' pour procéder à l\'analyse.',
    'chat.analysis.complete': 'Parfait ! J\'ai toutes les informations nécessaires. Je vais maintenant analyser ce cas en utilisant nos 9 modèles IA et générer un rapport complet.',
    'chat.analysis.result': 'Analyse terminée ! Voici les résultats :',
    'chat.newConsultation': 'Début d\'une nouvelle consultation. Veuillez décrire les symptômes principaux du patient.',
    
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
    'landing.cta.final': 'Prêt à améliorer vos diagnostics ?',
    'landing.cta.final.desc': 'Rejoignez des centaines de professionnels qui utilisent déjà MedAI pour l\'analyse prédictive',
    'landing.cta.professional': 'Créer un Compte Professionnel',
    
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
    const translation = translations[language][key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
