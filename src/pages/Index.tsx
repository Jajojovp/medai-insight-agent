
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, FileText, MessageSquare, Shield, Users, Heart, Droplets } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import Navigation from "@/components/Navigation";
import DashboardStats from "@/components/DashboardStats";
import AdminSettings from "@/components/AdminSettings";

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'chat':
        return <ChatInterface />;
      case 'admin':
        return <AdminSettings />;
      case 'dashboard':
      default:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-center space-x-2">
                <Brain className="h-8 w-8 text-blue-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MedAI Dashboard
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Plataforma de medicina predictiva con IA para diagnóstico avanzado de enfermedades críticas
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full backdrop-blur-sm">
                  <Droplets className="h-3 w-3 mr-1" />
                  12 Enfermedades
                </Badge>
                <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full backdrop-blur-sm">
                  <Activity className="h-3 w-3 mr-1" />
                  IA Avanzada
                </Badge>
                <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full backdrop-blur-sm">
                  <Shield className="h-3 w-3 mr-1" />
                  Seguro HIPAA
                </Badge>
                <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full backdrop-blur-sm">
                  <Heart className="h-3 w-3 mr-1" />
                  Alta Precisión
                </Badge>
              </div>
            </div>

            <DashboardStats />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all cursor-pointer border-l-4 border-l-blue-500 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:bg-white/90"
                    onClick={() => setActiveView('chat')}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span>Análisis Predictivo</span>
                  </CardTitle>
                  <CardDescription>
                    Diagnóstico inteligente para enfermedades críticas usando algoritmos médicos avanzados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl">
                    Iniciar Análisis
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-l-4 border-l-green-500 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>Historial Clínico</span>
                  </CardTitle>
                  <CardDescription>
                    Registro completo de análisis realizados y resultados obtenidos para seguimiento médico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-green-200 hover:bg-green-50">
                    Ver Historial
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-l-4 border-l-purple-500 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Gestión Pacientes</span>
                  </CardTitle>
                  <CardDescription>
                    Sistema de gestión integral para el seguimiento y monitoreo continuo de pacientes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-purple-200 hover:bg-purple-50">
                    Gestionar
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center">Cómo Funciona MedAI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="font-semibold">Seleccionar Enfermedad</h3>
                    <p className="text-sm text-gray-600">
                      Elija la enfermedad a analizar entre las 12 disponibles
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="font-semibold">Ingresar Datos</h3>
                    <p className="text-sm text-gray-600">
                      Proporcione la información médica necesaria del paciente
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="font-semibold">Análisis IA</h3>
                    <p className="text-sm text-gray-600">
                      La inteligencia artificial procesa los datos médicos
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="font-semibold">Resultado Médico</h3>
                    <p className="text-sm text-gray-600">
                      Obtenga un reporte detallado con recomendaciones clínicas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30 backdrop-blur-sm">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
