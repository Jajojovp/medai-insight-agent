
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

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MedAI</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Pro
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.home')}
            </Link>
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

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">{t('language.spanish')}</SelectItem>
                <SelectItem value="en">{t('language.english')}</SelectItem>
                <SelectItem value="fr">{t('language.french')}</SelectItem>
              </SelectContent>
            </Select>
            
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                {t('auth.professionalAccess')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to="/health-recommendations" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === 'en' ? "Health Tips" : 
                 language === 'fr' ? "Conseils Santé" : 
                 "Consejos de Salud"}
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavigation;
