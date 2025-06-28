
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SimpleBlogNavigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Brain className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MedAI Blog</span>
          </Link>

          {/* Simple Navigation */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link 
              to="/blog" 
              className="text-blue-600 font-semibold"
            >
              Blog
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">
                Acceso Profesional
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SimpleBlogNavigation;
