
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
                {language === 'es' ? 'Plataforma de análisis médico con IA para 7 tipos de enfermedades críticas con 37+ modelos especializados' :
                 language === 'fr' ? 'Plateforme d\'analyse médicale avec IA pour 7 types de maladies critiques avec 37+ modèles spécialisés' :
                 'AI medical analysis platform for 7 types of critical diseases with 37+ specialized models'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full backdrop-blur-sm">
                  <Droplets className="h-3 w-3 mr-1" />
                  {language === 'es' ? '7 Tipos de Análisis' : language === 'fr' ? '7 Types d\'Analyses' : '7 Analysis Types'}
                </Badge>
                <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full backdrop-blur-sm">
                  <Activity className="h-3 w-3 mr-1" />
                  {language === 'es' ? '37+ Modelos IA' : language === 'fr' ? '37+ Modèles IA' : '37+ AI Models'}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full backdrop-blur-sm">
                  <Shield className="h-3 w-3 mr-1" />
                  {t('dashboard.badges.hipaa')}
                </Badge>
                <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full backdrop-blur-sm">
                  <Heart className="h-3 w-3 mr-1" />
                  {language === 'es' ? '98.8% Precisión' : language === 'fr' ? '98.8% Précision' : '98.8% Accuracy'}
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
                    {language === 'es' ? 'Inicia análisis médico con IA para 7 tipos de enfermedades críticas usando 37+ modelos especializados' :
                     language === 'fr' ? 'Commencer l\'analyse médicale avec IA pour 7 types de maladies critiques utilisant 37+ modèles spécialisés' :
                     'Start AI medical analysis for 7 critical disease types using 37+ specialized models'}
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
                    {language === 'es' ? 'Revisa todos los análisis predictivos realizados con modelos de diabetes, cáncer y enfermedades cardíacas' :
                     language === 'fr' ? 'Examiner toutes les analyses prédictives effectuées avec modèles de diabète, cancer et maladies cardiaques' :
                     'Review all predictive analyses performed with diabetes, cancer and heart disease models'}
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
                    {language === 'es' ? 'Administra información de pacientes y análisis predictivos con resultados de alta precisión hasta 98.8%' :
                     language === 'fr' ? 'Gérer les informations des patients et analyses prédictives avec résultats haute précision jusqu\'à 98.8%' :
                     'Manage patient information and predictive analyses with high precision results up to 98.8%'}
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
                      {language === 'es' ? 'Elige entre 7 tipos de análisis predictivos especializados' :
                       language === 'fr' ? 'Choisissez parmi 7 types d\'analyses prédictives spécialisées' :
                       'Choose from 7 types of specialized predictive analyses'}
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
                      {language === 'es' ? 'Proporciona información médica del paciente según el tipo de análisis seleccionado' :
                       language === 'fr' ? 'Fournir les informations médicales du patient selon le type d\'analyse sélectionné' :
                       'Provide patient medical information according to selected analysis type'}
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
                      {language === 'es' ? '37+ modelos especializados analizan la información usando algoritmos avanzados' :
                       language === 'fr' ? '37+ modèles spécialisés analysent les informations utilisant algorithmes avancés' :
                       '37+ specialized models analyze the information using advanced algorithms'}
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
                      {language === 'es' ? 'Obtén diagnóstico predictivo con hasta 98.8% de precisión máxima' :
                       language === 'fr' ? 'Obtenez un diagnostic prédictif avec jusqu\'à 98.8% de précision maximale' :
                       'Get predictive diagnosis with up to 98.8% maximum accuracy'}
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
