
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Brain, 
  Menu,
  X,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <nav className="backdrop-blur-md bg-white/10 shadow-sm border-b border-white/20 sticky top-0 z-50 rounded-b-3xl mx-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/blog" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MedAI</span>
            <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
              Pro
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
            
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                {t('auth.professionalAccess')}
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

        {/* Mobile Navigation - Positioned absolutely for better visibility */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 backdrop-blur-xl bg-white/95 border border-white/30 rounded-2xl shadow-xl z-[55]">
            <div className="p-4 space-y-3">
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
                  to="/" 
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                    {t('auth.professionalAccess')}
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
