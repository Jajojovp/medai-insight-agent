
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Footer = () => {
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
              Plataforma profesional de análisis médico con inteligencia artificial y 62+ modelos especializados para 12 enfermedades críticas.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Producto</h4>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-400 hover:text-white transition-colors">
                Características
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                Precios
              </Link>
              <Link to="/api" className="block text-gray-400 hover:text-white transition-colors">
                API
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Recursos</h4>
            <div className="space-y-2">
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/documentation" className="block text-gray-400 hover:text-white transition-colors">
                Documentación
              </Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white transition-colors">
                Recursos
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link to="/sales" className="block text-gray-400 hover:text-white transition-colors">
                Ventas
              </Link>
              <Link to="/support" className="block text-gray-400 hover:text-white transition-colors">
                Soporte
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MedAI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
