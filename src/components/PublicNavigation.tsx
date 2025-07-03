
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Menu,
  X,
  Home,
  ChevronDown,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";

const PublicNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const diseaseCategories = [
    {
      name: 'Cáncer',
      diseases: [
        { id: 'breast-cancer', name: 'Mama' },
        { id: 'prostate-cancer', name: 'Próstata' },
        { id: 'pancreatic-cancer', name: 'Páncreas' },
        { id: 'stomach-cancer', name: 'Estómago' },
        { id: 'liver-cancer', name: 'Hígado' },
        { id: 'lung-cancer', name: 'Pulmón' },
        { id: 'leukemia', name: 'Leucemia' }
      ]
    },
    {
      name: 'Cardiovascular',
      diseases: [
        { id: 'heart-disease', name: 'Corazón' },
        { id: 'stroke', name: 'ACV' }
      ]
    },
    {
      name: 'Otras',
      diseases: [
        { id: 'diabetes', name: 'Diabetes' },
        { id: 'chronic-kidney-disease', name: 'Riñón' },
        { id: 'epilepsy', name: 'Epilepsia' }
      ]
    }
  ];

  return (
    <nav className="backdrop-blur-md bg-white/10 shadow-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MedAI</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
              Pro
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                <Stethoscope className="h-4 w-4" />
                <span>Análisis Médicos</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className="absolute left-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {diseaseCategories.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                          {category.name}
                        </h3>
                        <div className="space-y-2">
                          {category.diseases.map((disease) => (
                            <Link
                              key={disease.id}
                              to={`/${disease.id}`}
                              className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                            >
                              {disease.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      to="/health-recommendations"
                      className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Recomendaciones de Salud
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Características
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Precios
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contacto
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                Comenzar Gratis
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 px-3">Cáncer</h3>
                <div className="space-y-1 pl-6">
                  {diseaseCategories[0].diseases.map((disease) => (
                    <Link
                      key={disease.id}
                      to={`/${disease.id}`}
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {disease.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 px-3">Cardiovascular</h3>
                <div className="space-y-1 pl-6">
                  {diseaseCategories[1].diseases.map((disease) => (
                    <Link
                      key={disease.id}
                      to={`/${disease.id}`}
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {disease.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 px-3">Otras Enfermedades</h3>
                <div className="space-y-1 pl-6">
                  {diseaseCategories[2].diseases.map((disease) => (
                    <Link
                      key={disease.id}
                      to={`/${disease.id}`}
                      className="block text-gray-600 hover:text-blue-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {disease.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <Link to="/features" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                  Características
                </Link>
                <Link to="/pricing" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                  Precios
                </Link>
                <Link to="/blog" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                  Blog
                </Link>
                <Link to="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                  Contacto
                </Link>
                <div className="px-3 py-2 space-y-2">
                  <Link to="/login">
                    <Button variant="ghost" size="sm" className="w-full">
                      Iniciar Sesión
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      Comenzar Gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavigation;
