
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

  const diseaseCategories = [
    {
      name: {
        es: 'Cáncer',
        en: 'Cancer',
        fr: 'Cancer'
      },
      diseases: [
        { 
          id: 'breast-cancer', 
          name: {
            es: 'Mama',
            en: 'Breast', 
            fr: 'Sein'
          }
        },
        { 
          id: 'prostate-cancer', 
          name: {
            es: 'Próstata',
            en: 'Prostate', 
            fr: 'Prostate'
          }
        },
        { 
          id: 'pancreatic-cancer', 
          name: {
            es: 'Páncreas',
            en: 'Pancreatic', 
            fr: 'Pancréas'
          }
        },
        { 
          id: 'stomach-cancer', 
          name: {
            es: 'Estómago',
            en: 'Stomach', 
            fr: 'Estomac'
          }
        },
        { 
          id: 'liver-cancer', 
          name: {
            es: 'Hígado',
            en: 'Liver', 
            fr: 'Foie'
          }
        },
        { 
          id: 'lung-cancer', 
          name: {
            es: 'Pulmón',
            en: 'Lung', 
            fr: 'Poumon'
          }
        },
        { 
          id: 'leukemia', 
          name: {
            es: 'Leucemia',
            en: 'Leukemia', 
            fr: 'Leucémie'
          }
        }
      ]
    },
    {
      name: {
        es: 'Cardiovascular',
        en: 'Cardiovascular',
        fr: 'Cardiovasculaire'
      },
      diseases: [
        { 
          id: 'heart-disease', 
          name: {
            es: 'Corazón',
            en: 'Heart', 
            fr: 'Cœur'
          }
        },
        { 
          id: 'stroke', 
          name: {
            es: 'ACV',
            en: 'Stroke', 
            fr: 'AVC'
          }
        }
      ]
    },
    {
      name: {
        es: 'Otras',
        en: 'Other',
        fr: 'Autres'
      },
      diseases: [
        { 
          id: 'diabetes', 
          name: {
            es: 'Diabetes',
            en: 'Diabetes', 
            fr: 'Diabète'
          }
        },
        { 
          id: 'chronic-kidney-disease', 
          name: {
            es: 'Riñón',
            en: 'Kidney', 
            fr: 'Rein'
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
      ]
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
            
            {/* Diseases Dropdown - Categorized */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-blue-600 transition-colors bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    {language === 'es' ? 'Enfermedades' : language === 'fr' ? 'Maladies' : 'Diseases'}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-6 w-96">
                    <div className="space-y-4">
                      {diseaseCategories.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">
                            {category.name[language as keyof typeof category.name]}
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {category.diseases.map((disease) => (
                              <Link 
                                key={disease.id}
                                to={`/${disease.id}`}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 rounded-lg"
                              >
                                {disease.name[language as keyof typeof disease.name]}
                              </Link>
                            ))}
                          </div>
                        </div>
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
              {language === 'en' ? "Tips" : 
               language === 'fr' ? "Conseils" : 
               "Consejos"}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right Side Actions - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-20 backdrop-blur-sm bg-white/20 border-white/30 rounded-2xl">
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">{getLanguageAbbreviation(language)}</span>
                </div>
              </SelectTrigger>
              <SelectContent className="backdrop-blur-md bg-white/90 border-white/30 rounded-2xl z-50">
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>
            
            <Link to="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Connexion' : 'Login'}
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
              
              {/* Mobile Diseases Section - Categorized */}
              {diseaseCategories.map((category, idx) => (
                <div key={idx} className="border-t border-gray-200 pt-3">
                  <div className="px-4 py-2 text-sm text-gray-500 font-medium">
                    {category.name[language as keyof typeof category.name]}
                  </div>
                  <div className="space-y-1">
                    {category.diseases.map((disease) => (
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
              ))}

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
                {language === 'en' ? "Tips" : 
                 language === 'fr' ? "Conseils" : 
                 "Consejos"}
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
                    {language === 'es' ? 'Ingresar' : language === 'fr' ? 'Connexion' : 'Login'}
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
