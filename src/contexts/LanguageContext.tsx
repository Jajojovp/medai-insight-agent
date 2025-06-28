
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

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

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState('es');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log('🌐 LanguageProvider inicializando de forma segura...');
    
    const initializeLanguage = () => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedLanguage = localStorage.getItem('language');
          if (storedLanguage && ['es', 'en', 'fr'].includes(storedLanguage)) {
            setLanguageState(storedLanguage);
            console.log('✅ Idioma cargado:', storedLanguage);
          }
        }
      } catch (error) {
        console.log('⚠️ localStorage no disponible, usando idioma por defecto');
      } finally {
        setIsInitialized(true);
        console.log('✅ LanguageProvider inicializado');
      }
    };

    // Delay initialization to avoid SSR issues
    setTimeout(initializeLanguage, 0);
  }, []);

  const setLanguage = (newLanguage: string) => {
    console.log('🌐 Cambiando idioma a:', newLanguage);
    setLanguageState(newLanguage);
    
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', newLanguage);
      }
    } catch (error) {
      console.log('⚠️ No se pudo guardar idioma en localStorage');
    }
  };

  const t = (key: string): string => {
    if (!isInitialized) return key;
    
    try {
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
    } catch (error) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  
  // Always return a safe object, never throw
  if (!context) {
    return {
      language: 'es',
      setLanguage: () => {},
      t: (key: string) => key
    };
  }
  
  return context;
};

export { LanguageProvider, useLanguage };
