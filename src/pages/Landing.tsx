
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Activity, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Stethoscope,
  BarChart3,
  FileText
} from "lucide-react";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/contexts/AuthContext";

const Landing = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { user } = useAuth();

  // Redirect to dashboard if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const features = [
    {
      icon: Brain,
      title: "Análisis con IA Avanzada",
      description: "5 modelos de machine learning especializados en predicción de diabetes"
    },
    {
      icon: Activity,
      title: "Diagnóstico Preciso",
      description: "92% de precisión en detección de diabetes tipo 2 y síndrome metabólico"
    },
    {
      icon: FileText,
      title: "Reportes Automáticos",
      description: "Generación automática de PDFs y envío por email con n8n"
    },
    {
      icon: Shield,
      title: "Datos Seguros",
      description: "Cumple con estándares HIPAA para protección de datos médicos"
    }
  ];

  const modelSources = [
    "GitHub: Diabetes-Prediction-SystemV3",
    "GitHub: Advanced ML Diabetes Models",
    "Kaggle: Machine Learning Predictions",
    "Analytics Vidhya: PyCaret Implementation",
    "Deep Learning & Diabetes Research"
  ];

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AuthForm onSuccess={() => setShowAuth(false)} />
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              onClick={() => setShowAuth(false)}
              className="text-gray-600"
            >
              ← Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MedAI</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Pro
            </Badge>
          </div>
          <Button 
            onClick={() => setShowAuth(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Acceso Profesional
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Plataforma de Análisis Médico 
            <span className="text-blue-600"> con Inteligencia Artificial</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Revoluciona tu práctica médica con análisis predictivo avanzado para diabetes y síndrome metabólico. 
            Utiliza 5 modelos de machine learning especializados para obtener diagnósticos precisos y reportes automáticos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => setShowAuth(true)}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Stethoscope className="mr-2 h-5 w-5" />
              Comenzar Análisis
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-3"
            >
              Ver Características
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-gray-600">Precisión en Diagnósticos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Modelos de IA Especializados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Casos Analizados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Características Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Herramientas diseñadas específicamente para profesionales de la salud
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* ML Models Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Modelos de Machine Learning Integrados
            </h3>
            <p className="text-gray-600">
              Basados en investigación científica de fuentes reconocidas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modelSources.map((source, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para mejorar tus diagnósticos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de profesionales que ya utilizan MedAI para análisis predictivo
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowAuth(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Crear Cuenta Profesional
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold">MedAI</span>
          </div>
          <p className="text-sm">
            © 2024 MedAI. Plataforma profesional de análisis médico con inteligencia artificial.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
