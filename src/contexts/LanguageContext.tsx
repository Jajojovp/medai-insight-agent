import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  es: {
    landing: {
      title: "Análisis Médico Profesional con IA",
      subtitle: "Diagnóstico preciso y eficiente para mejorar la salud de tus pacientes",
      cta: {
        start: "Comienza Ahora",
        features: "Ver Características",
        demo: "Solicitar Demo",
        professional: "Acceso Profesional",
        final: "¿Listo para transformar tu práctica médica?",
        finalDesc: "Únete a la revolución de la inteligencia artificial en la medicina y ofrece diagnósticos más rápidos y precisos."
      },
      features: {
        title: "Características Clave",
        subtitle: "Descubre cómo MedAI puede transformar tu práctica médica",
      },
      feature: {
        ai: "Inteligencia Artificial Avanzada",
        aiDesc: "Modelos de IA de última generación para análisis precisos.",
        diagnosis: "Diagnóstico Automatizado",
        diagnosisDesc: "Acelera el proceso de diagnóstico con IA.",
        reports: "Reportes Detallados",
        reportsDesc: "Genera informes completos y personalizados.",
        security: "Seguridad de Datos",
        securityDesc: "Protege la información de tus pacientes con altos estándares de seguridad.",
        waitlist: "Reducción de Listas de Espera",
        waitlistDesc: "Optimiza el flujo de pacientes y reduce los tiempos de espera.",
        efficiency: "Mayor Eficiencia",
        efficiencyDesc: "Aumenta la productividad de tu equipo médico."
      },
      models: {
        title: "Modelos de Machine Learning",
        subtitle: "Utilizamos modelos de machine learning de código abierto y validados por la comunidad científica."
      },
      stats: {
        accuracy: "Precisión en Diagnósticos",
        models: "Modelos de IA",
        cases: "Casos Analizados"
      }
    },
    auth: {
      login: "Iniciar Sesión",
      register: "Registrarse",
      name: "Nombre",
      email: "Correo Electrónico",
      password: "Contraseña",
      loginButton: "Iniciar Sesión",
      registerButton: "Registrarse",
      backToStart: "Volver al Inicio",
      professionalAccess: "Acceso Profesional"
    },
    language: {
      spanish: "Español",
      english: "Inglés",
      french: "Francés"
    },
    nav: {
      dashboard: "Dashboard",
      chat: "Chat IA",
      admin: "Admin",
      welcome: "Bienvenido",
      logout: "Cerrar Sesión",
      blog: "Blog",
      contact: "Contacto",
      home: "Inicio"
    },
  },
  en: {
    landing: {
      title: "Professional Medical Analysis with AI",
      subtitle: "Precise and efficient diagnosis to improve your patients' health",
      cta: {
        start: "Start Now",
        features: "View Features",
        demo: "Request Demo",
        professional: "Professional Access",
        final: "Ready to transform your medical practice?",
        finalDesc: "Join the artificial intelligence revolution in medicine and offer faster and more accurate diagnoses."
      },
      features: {
        title: "Key Features",
        subtitle: "Discover how MedAI can transform your medical practice",
      },
      feature: {
        ai: "Advanced Artificial Intelligence",
        aiDesc: "State-of-the-art AI models for accurate analysis.",
        diagnosis: "Automated Diagnosis",
        diagnosisDesc: "Accelerate the diagnosis process with AI.",
        reports: "Detailed Reports",
        reportsDesc: "Generate comprehensive and personalized reports.",
        security: "Data Security",
        securityDesc: "Protect your patients' information with high security standards.",
        waitlist: "Waiting List Reduction",
        waitlistDesc: "Optimize patient flow and reduce waiting times.",
        efficiency: "Greater Efficiency",
        efficiencyDesc: "Increase the productivity of your medical team."
      },
      models: {
        title: "Machine Learning Models",
        subtitle: "We use open source machine learning models validated by the scientific community."
      },
      stats: {
        accuracy: "Accuracy in Diagnostics",
        models: "AI Models",
        cases: "Cases Analyzed"
      }
    },
    auth: {
      login: "Login",
      register: "Register",
      name: "Name",
      email: "Email",
      password: "Password",
      loginButton: "Login",
      registerButton: "Register",
      backToStart: "Back to Start",
      professionalAccess: "Professional Access"
    },
    language: {
      spanish: "Spanish",
      english: "English",
      french: "French"
    },
    nav: {
      dashboard: "Dashboard",
      chat: "AI Chat",
      admin: "Admin",
      welcome: "Welcome",
      logout: "Logout",
      blog: "Blog",
      contact: "Contact",
      home: "Home"
    },
  },
  fr: {
    landing: {
      title: "Analyse Médicale Professionnelle avec IA",
      subtitle: "Diagnostic précis et efficace pour améliorer la santé de vos patients",
      cta: {
        start: "Commencer Maintenant",
        features: "Voir les Caractéristiques",
        demo: "Demander une Démo",
        professional: "Accès Professionnel",
        final: "Prêt à transformer votre pratique médicale ?",
        finalDesc: "Rejoignez la révolution de l'intelligence artificielle en médecine et offrez des diagnostics plus rapides et plus précis."
      },
       features: {
        title: "Principales Caractéristiques",
        subtitle: "Découvrez comment MedAI peut transformer votre pratique médicale",
      },
      feature: {
        ai: "Intelligence Artificielle Avancée",
        aiDesc: "Modèles d'IA de pointe pour une analyse précise.",
        diagnosis: "Diagnostic Automatisé",
        diagnosisDesc: "Accélérer le processus de diagnostic avec l'IA.",
        reports: "Rapports Détaillés",
        reportsDesc: "Générer des rapports complets et personnalisés.",
        security: "Sécurité des Données",
        securityDesc: "Protégez les informations de vos patients avec des normes de sécurité élevées.",
        waitlist: "Réduction des Listes d'Attente",
        waitlistDesc: "Optimisez le flux de patients et réduisez les temps d'attente.",
        efficiency: "Plus d'Efficacité",
        efficiencyDesc: "Augmentez la productivité de votre équipe médicale."
      },
      models: {
        title: "Modèles d'Apprentissage Automatique",
        subtitle: "Nous utilisons des modèles d'apprentissage automatique open source validés par la communauté scientifique."
      },
      stats: {
        accuracy: "Précision des Diagnostics",
        models: "Modèles d'IA",
        cases: "Cas Analysés"
      }
    },
    auth: {
      login: "Se Connecter",
      register: "S'inscrire",
      name: "Nom",
      email: "Courriel",
      password: "Mot de Passe",
      loginButton: "Se Connecter",
      registerButton: "S'inscrire",
      backToStart: "Retour au Début",
      professionalAccess: "Accès Professionnel"
    },
    language: {
      spanish: "Espagnol",
      english: "Anglais",
      french: "Français"
    },
    nav: {
      dashboard: "Tableau de Bord",
      chat: "Chat IA",
      admin: "Admin",
      welcome: "Bienvenue",
      logout: "Déconnexion",
      blog: "Blog",
      contact: "Contact",
      home: "Accueil"
    },
  }
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
