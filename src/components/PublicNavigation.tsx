
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Brain, 
  Menu,
  X,
  Globe,
  Home,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const PublicNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const getLanguageAbbreviation = (lang: string) => {
    switch (lang) {
      case 'es': return 'ES';
      case 'en': return 'EN';
      case 'fr': return 'FR';
      default: return 'ES';
    }
  };

  const diseases = [
    { 
      id: 'diabetes', 
      name: {
        es: 'Diabetes Tipo 2',
        en: 'Type 2 Diabetes', 
        fr: 'Diabète Type 2'
      }
    },
    { 
      id: 'breast-cancer', 
      name: {
        es: 'Cáncer de Mama',
        en: 'Breast Cancer', 
        fr: 'Cancer du Sein'
      }
    },
    { 
      id: 'prostate-cancer', 
      name: {
        es: 'Cáncer de Próstata',
        en: 'Prostate Cancer', 
        fr: 'Cancer de la Prostate'
      }
    },
    { 
      id: 'heart-disease', 
      name: {
        es: 'Enfermedades Cardíacas',
        en: 'Heart Disease', 
        fr: 'Maladies Cardiaques'
      }
    },
    { 
      id: 'stroke', 
      name: {
        es: 'Riesgo de ACV',
        en: 'Stroke Risk', 
        fr: 'Risque d\'AVC'
      }
    },
    { 
      id: 'chronic-kidney-disease', 
      name: {
        es: 'Enfermedad Renal Crónica',
        en: 'Chronic Kidney Disease', 
        fr: 'Maladie Rénale Chronique'
      }
    },
    { 
      id: 'pancreatic-cancer', 
      name: {
        es: 'Cáncer de Páncreas',
        en: 'Pancreatic Cancer', 
        fr: 'Cancer du Pancréas'
      }
    },
    { 
      id: 'stomach-cancer', 
      name: {
        es: 'Cáncer de Estómago',
        en: 'Stomach Cancer', 
        fr: 'Cancer de l\'Estomac'
      }
    },
    { 
      id: 'leukemia', 
      name: {
        es: 'Leucemia',
        en: 'Leukemia', 
        fr: 'Leucémie'
      }
    },
    { 
      id: 'liver-cancer', 
      name: {
        es: 'Cáncer de Hígado',
        en: 'Liver Cancer', 
        fr: 'Cancer du Foie'
      }
    },
    { 
      id: 'lung-cancer', 
      name: {
        es: 'Cáncer de Pulmón',
        en: 'Lung Cancer', 
        fr: 'Cancer du Poumon'
      }
    },
    { 
      id: 'epilepsy', 
      name: {
        es: 'Epilepsia',
        en: 'Epilepsy', 
        fr: 'Épilepsie'
      }
    }
  ];

  return (
    <nav className="backdrop-blur-md bg-white/10 shadow-sm border-b border-white/20 sticky top-0 z-50 rounded-b-3xl mx-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MedAI</span>
            <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
              Pro
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>{language === 'en' ? "Home" : language === 'fr' ? "Accueil" : "Inicio"}</span>
            </Link>
            
            {/* Diseases Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-blue-600 transition-colors bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    {language === 'es' ? 'Enfermedades' : language === 'fr' ? 'Maladies' : 'Diseases'}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-4 w-80">
                    <div className="grid grid-cols-1 gap-2">
                      {diseases.map((disease) => (
                        <Link 
                          key={disease.id}
                          to={`/${disease.id}`}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-xl"
                        >
                          {disease.name[language as keyof typeof disease.name]}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/health-recommendations" className="text-gray-600 hover:text-blue-600 transition-colors">
              {language === 'en' ? "Health Tips" : 
               language === 'fr' ? "Conseils Santé" : 
               "Consejos de Salud"}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right Side Actions - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32 backdrop-blur-sm bg-white/20 border-white/30 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="backdrop-blur-md bg-white/90 border-white/30 rounded-2xl z-50">
                <SelectItem value="es">{t('language.spanish')}</SelectItem>
                <SelectItem value="en">{t('language.english')}</SelectItem>
                <SelectItem value="fr">{t('language.french')}</SelectItem>
              </SelectContent>
            </Select>
            
            <Link to="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Se Connecter' : 'Login'}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-2xl p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 backdrop-blur-xl bg-white/95 border border-white/30 rounded-2xl shadow-xl z-[55]">
            <div className="p-4 space-y-3">
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>{language === 'en' ? "Home" : language === 'fr' ? "Accueil" : "Inicio"}</span>
              </Link>
              
              {/* Mobile Diseases Section */}
              <div className="border-t border-gray-200 pt-3">
                <div className="px-4 py-2 text-sm text-gray-500 font-medium">
                  {language === 'es' ? 'Enfermedades' : language === 'fr' ? 'Maladies' : 'Diseases'}
                </div>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {diseases.slice(0, 6).map((disease) => (
                    <Link 
                      key={disease.id}
                      to={`/${disease.id}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {disease.name[language as keyof typeof disease.name]}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to="/health-recommendations" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === 'en' ? "Health Tips" : 
                 language === 'fr' ? "Conseils Santé" : 
                 "Consejos de Salud"}
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
                  {t('nav.language') || 'Idioma'}
                </div>
                <Select value={language} onValueChange={(value) => {
                  setLanguage(value);
                  setMobileMenuOpen(false);
                }}>
                  <SelectTrigger className="w-full backdrop-blur-sm bg-white/20 border-white/30 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>{getLanguageAbbreviation(language)}</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-md bg-white/90 border-white/30 rounded-2xl z-[60]">
                    <SelectItem value="es">ES</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="fr">FR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border-t border-gray-200 pt-3">
                <Link 
                  to="/dashboard" 
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                    {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Se Connecter' : 'Login'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavigation;
