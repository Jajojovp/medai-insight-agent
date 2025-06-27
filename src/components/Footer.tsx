
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">MedAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              {language === 'es' ? 'Plataforma profesional de análisis médico con inteligencia artificial y 62+ modelos especializados para 12 enfermedades críticas.' :
               language === 'fr' ? 'Plateforme professionnelle d\'analyse médicale avec intelligence artificielle et 62+ modèles spécialisés pour 12 maladies critiques.' :
               'Professional medical analysis platform with artificial intelligence and 62+ specialized models for 12 critical diseases.'}
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">
              {language === 'es' ? 'Producto' : language === 'fr' ? 'Produit' : 'Product'}
            </h4>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Características' : language === 'fr' ? 'Caractéristiques' : 'Features'}
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Precios' : language === 'fr' ? 'Prix' : 'Pricing'}
              </Link>
              <Link to="/api" className="block text-gray-400 hover:text-white transition-colors">
                API
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">
              {language === 'es' ? 'Recursos' : language === 'fr' ? 'Ressources' : 'Resources'}
            </h4>
            <div className="space-y-2">
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/documentation" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Documentación' : language === 'fr' ? 'Documentation' : 'Documentation'}
              </Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Recursos' : language === 'fr' ? 'Ressources' : 'Resources'}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">
              {language === 'es' ? 'Contacto' : language === 'fr' ? 'Contact' : 'Contact'}
            </h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Contacto' : language === 'fr' ? 'Contact' : 'Contact'}
              </Link>
              <Link to="/sales" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Ventas' : language === 'fr' ? 'Ventes' : 'Sales'}
              </Link>
              <Link to="/support" className="block text-gray-400 hover:text-white transition-colors">
                {language === 'es' ? 'Soporte' : language === 'fr' ? 'Support' : 'Support'}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MedAI. {language === 'es' ? 'Todos los derechos reservados.' : 
                          language === 'fr' ? 'Tous droits réservés.' : 
                          'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
