
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, FileText, MessageSquare, Shield, Users } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";
import Navigation from "@/components/Navigation";
import DashboardStats from "@/components/DashboardStats";
import AdminSettings from "@/components/AdminSettings";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const { t } = useLanguage();

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
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Brain className="h-8 w-8 text-blue-600" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('dashboard.title')}
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('dashboard.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Activity className="h-3 w-3 mr-1" />
                  {t('dashboard.badges.models')}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Shield className="h-3 w-3 mr-1" />
                  {t('dashboard.badges.hipaa')}
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  <FileText className="h-3 w-3 mr-1" />
                  {t('dashboard.badges.reports')}
                </Badge>
              </div>
            </div>

            <DashboardStats />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500"
                    onClick={() => setActiveView('chat')}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span>{t('dashboard.cards.diagnosis.title')}</span>
                  </CardTitle>
                  <CardDescription>
                    {t('dashboard.cards.diagnosis.desc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {t('dashboard.cards.diagnosis.button')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <span>{t('dashboard.cards.history.title')}</span>
                  </CardTitle>
                  <CardDescription>
                    {t('dashboard.cards.history.desc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t('dashboard.cards.history.button')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>{t('dashboard.cards.patients.title')}</span>
                  </CardTitle>
                  <CardDescription>
                    {t('dashboard.cards.patients.desc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t('dashboard.cards.patients.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardHeader>
                <CardTitle className="text-center">{t('dashboard.howItWorks.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="font-semibold">{t('dashboard.howItWorks.step1.title')}</h3>
                    <p className="text-sm text-gray-600">{t('dashboard.howItWorks.step1.desc')}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="font-semibold">{t('dashboard.howItWorks.step2.title')}</h3>
                    <p className="text-sm text-gray-600">{t('dashboard.howItWorks.step2.desc')}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="font-semibold">{t('dashboard.howItWorks.step3.title')}</h3>
                    <p className="text-sm text-gray-600">{t('dashboard.howItWorks.step3.desc')}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="font-semibold">{t('dashboard.howItWorks.step4.title')}</h3>
                    <p className="text-sm text-gray-600">{t('dashboard.howItWorks.step4.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
