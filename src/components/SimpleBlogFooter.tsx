
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const SimpleBlogFooter = () => {
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

          {/* Blog */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Blog</h4>
            <div className="space-y-2">
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Artículos
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Newsletter
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                RSS
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Categorías</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                IA Médica
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Cardiología
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Oncología
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link to="/support" className="block text-gray-400 hover:text-white transition-colors">
                Soporte
              </Link>
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Volver al Inicio
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

export default SimpleBlogFooter;
