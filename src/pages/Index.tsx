
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, FileText, MessageSquare, Shield, Users, Heart, Droplets } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import Navigation from "@/components/Navigation";
import DashboardStats from "@/components/DashboardStats";
import AdminSettings from "@/components/AdminSettings";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const { t, language } = useLanguage();

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
                  {t('dashboard.title')}
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'es' ? 'Plataforma de análisis médico con IA para 7 tipos de enfermedades críticas con 47+ modelos especializados' :
                 language === 'fr' ? 'Plateforme d\'analyse médicale avec IA pour 7 types de maladies critiques avec 47+ modèles spécialisés' :
                 'AI medical analysis platform for 7 types of critical diseases with 47+ specialized models'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full backdrop-blur-sm">
                  <Droplets className="h-3 w-3 mr-1" />
                  {language === 'es' ? '7 Tipos de Análisis' : language === 'fr' ? '7 Types d\'Analyses' : '7 Analysis Types'}
                </Badge>
                <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full backdrop-blur-sm">
                  <Activity className="h-3 w-3 mr-1" />
                  {language === 'es' ? '47+ Modelos IA' : language === 'fr' ? '47+ Modèles IA' : '47+ AI Models'}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full backdrop-blur-sm">
                  <Shield className="h-3 w-3 mr-1" />
                  {t('dashboard.badges.hipaa')}
                </Badge>
                <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full backdrop-blur-sm">
                  <Heart className="h-3 w-3 mr-1" />
                  {language === 'es' ? '96.2% Precisión' : language === 'fr' ? '96.2% Précision' : '96.2% Accuracy'}
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
                    <span>
                      {language === 'es' ? 'Análisis Predictivos' :
                       language === 'fr' ? 'Analyses Prédictives' :
                       'Predictive Analysis'}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {language === 'es' ? 'Inicia análisis médico con IA para 7 tipos de enfermedades' :
                     language === 'fr' ? 'Commencer l\'analyse médicale avec IA pour 7 types de maladies' :
                     'Start AI medical analysis for 7 disease types'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl">
                    {language === 'es' ? 'Iniciar Análisis' :
                     language === 'fr' ? 'Commencer l\'Analyse' :
                     'Start Analysis'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-l-4 border-l-green-500 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>
                      {language === 'es' ? 'Historial de Análisis' :
                       language === 'fr' ? 'Historique des Analyses' :
                       'Analysis History'}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {language === 'es' ? 'Revisa todos los análisis realizados y sus resultados' :
                     language === 'fr' ? 'Examiner toutes les analyses effectuées et leurs résultats' :
                     'Review all performed analyses and their results'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-green-200 hover:bg-green-50">
                    {language === 'es' ? 'Ver Historial' :
                     language === 'fr' ? 'Voir l\'Historique' :
                     'View History'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-l-4 border-l-purple-500 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>
                      {language === 'es' ? 'Gestión de Pacientes' :
                       language === 'fr' ? 'Gestion des Patients' :
                       'Patient Management'}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {language === 'es' ? 'Administra información y análisis de pacientes' :
                     language === 'fr' ? 'Gérer les informations et analyses des patients' :
                     'Manage patient information and analyses'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-purple-200 hover:bg-purple-50">
                    {language === 'es' ? 'Gestionar' :
                     language === 'fr' ? 'Gérer' :
                     'Manage'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center">
                  {language === 'es' ? 'Cómo Funciona MedAI' :
                   language === 'fr' ? 'Comment Fonctionne MedAI' :
                   'How MedAI Works'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Seleccionar Análisis' :
                       language === 'fr' ? 'Sélectionner l\'Analyse' :
                       'Select Analysis'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Elige entre 7 tipos de análisis predictivos' :
                       language === 'fr' ? 'Choisissez parmi 7 types d\'analyses prédictives' :
                       'Choose from 7 types of predictive analyses'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Ingresar Datos' :
                       language === 'fr' ? 'Saisir les Données' :
                       'Input Data'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Proporciona información médica del paciente' :
                       language === 'fr' ? 'Fournir les informations médicales du patient' :
                       'Provide patient medical information'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Procesamiento IA' :
                       language === 'fr' ? 'Traitement IA' :
                       'AI Processing'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? '47+ modelos analizan la información' :
                       language === 'fr' ? '47+ modèles analysent les informations' :
                       '47+ models analyze the information'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Resultados Precisos' :
                       language === 'fr' ? 'Résultats Précis' :
                       'Accurate Results'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Obtén diagnóstico con 96.2% de precisión' :
                       language === 'fr' ? 'Obtenez un diagnostic avec 96.2% de précision' :
                       'Get diagnosis with 96.2% accuracy'}
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
