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
  const { language } = useLanguage();

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
                  {language === 'es' ? 'MedAI Dashboard' : 
                   language === 'fr' ? 'Tableau de Bord MedAI' : 
                   'MedAI Dashboard'}
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'es' ? 'Plataforma de medicina predictiva con IA para 12 enfermedades críticas utilizando 62+ modelos especializados' :
                 language === 'fr' ? 'Plateforme de médecine prédictive avec IA pour 12 maladies critiques utilisant 62+ modèles spécialisés' :
                 'Predictive medicine platform with AI for 12 critical diseases using 62+ specialized models'}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full backdrop-blur-sm">
                  <Droplets className="h-3 w-3 mr-1" />
                  {language === 'es' ? '12 Enfermedades Críticas' : language === 'fr' ? '12 Maladies Critiques' : '12 Critical Diseases'}
                </Badge>
                <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full backdrop-blur-sm">
                  <Activity className="h-3 w-3 mr-1" />
                  {language === 'es' ? '62+ Modelos IA' : language === 'fr' ? '62+ Modèles IA' : '62+ AI Models'}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full backdrop-blur-sm">
                  <Shield className="h-3 w-3 mr-1" />
                  {language === 'es' ? 'Cumplimiento HIPAA' : language === 'fr' ? 'Conformité HIPAA' : 'HIPAA Compliant'}
                </Badge>
                <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full backdrop-blur-sm">
                  <Heart className="h-3 w-3 mr-1" />
                  {language === 'es' ? '98.8% Precisión Máxima' : language === 'fr' ? '98.8% Précision Maximale' : '98.8% Maximum Accuracy'}
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
                      {language === 'es' ? 'Análisis Predictivo Médico' :
                       language === 'fr' ? 'Analyse Prédictive Médicale' :
                       'Medical Predictive Analysis'}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {language === 'es' ? 'Análisis médico con IA para 12 enfermedades críticas: diabetes, cánceres, cardiovasculares, renales, neurológicas y hematológicas' :
                     language === 'fr' ? 'Analyse médicale avec IA pour 12 maladies critiques: diabète, cancers, cardiovasculaires, rénales, neurologiques et hématologiques' :
                     'Medical analysis with AI for 12 critical diseases: diabetes, cancers, cardiovascular, kidney, neurological and hematological'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl">
                    {language === 'es' ? 'Iniciar Análisis Médico' :
                     language === 'fr' ? 'Commencer l\'Analyse Médicale' :
                     'Start Medical Analysis'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all border-l-4 border-l-green-500 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>
                      {language === 'es' ? 'Historial Clínico' :
                       language === 'fr' ? 'Historique Clinique' :
                       'Clinical History'}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {language === 'es' ? 'Historial completo de análisis predictivos realizados con modelos especializados para cada enfermedad crítica' :
                     language === 'fr' ? 'Historique complet des analyses prédictives effectuées avec modèles spécialisés pour chaque maladie critique' :
                     'Complete history of predictive analyses performed with specialized models for each critical disease'}
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
                    {language === 'es' ? 'Sistema integral de gestión de pacientes con análisis predictivos y seguimiento médico continuo' :
                     language === 'fr' ? 'Système intégral de gestion des patients avec analyses prédictives et suivi médical continu' :
                     'Comprehensive patient management system with predictive analyses and continuous medical monitoring'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-purple-200 hover:bg-purple-50">
                    {language === 'es' ? 'Gestionar Pacientes' :
                     language === 'fr' ? 'Gérer les Patients' :
                     'Manage Patients'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center">
                  {language === 'es' ? 'Medicina Predictiva con MedAI' :
                   language === 'fr' ? 'Médecine Prédictive avec MedAI' :
                   'Predictive Medicine with MedAI'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Seleccionar Enfermedad' :
                       language === 'fr' ? 'Sélectionner la Maladie' :
                       'Select Disease'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Elija entre 12 enfermedades críticas con modelos especializados' :
                       language === 'fr' ? 'Choisissez parmi 12 maladies critiques avec modèles spécialisés' :
                       'Choose from 12 critical diseases with specialized models'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Datos Clínicos' :
                       language === 'fr' ? 'Données Cliniques' :
                       'Clinical Data'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Proporcione información médica del paciente según protocolo clínico' :
                       language === 'fr' ? 'Fournir les informations médicales du patient selon protocole clinique' :
                       'Provide patient medical information according to clinical protocol'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Análisis IA' :
                       language === 'fr' ? 'Analyse IA' :
                       'AI Analysis'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? '62+ modelos especializados procesan datos con algoritmos validados clínicamente' :
                       language === 'fr' ? '62+ modèles spécialisés traitent les données avec algorithmes validés cliniquement' :
                       '62+ specialized models process data with clinically validated algorithms'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="font-semibold">
                      {language === 'es' ? 'Diagnóstico Predictivo' :
                       language === 'fr' ? 'Diagnostic Prédictif' :
                       'Predictive Diagnosis'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === 'es' ? 'Reporte médico detallado con precisión hasta 98.8% y recomendaciones clínicas' :
                       language === 'fr' ? 'Rapport médical détaillé avec précision jusqu\'à 98.8% et recommandations cliniques' :
                       'Detailed medical report with up to 98.8% accuracy and clinical recommendations'}
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
