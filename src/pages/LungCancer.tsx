
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Scan, Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const LungCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Cáncer de Pulmón' : 
             language === 'fr' ? 'Cancer du Poumon' : 
             'Lung Cancer'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Cáncer Pulmonar' : 
             language === 'fr' ? 'Détection du Cancer Pulmonaire' : 
             'Lung Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para cáncer de pulmón usando 5+ modelos especializados con imágenes médicas y datos clínicos' :
             language === 'fr' ? 'Analyse prédictive avancée pour cancer du poumon utilisant 5+ modèles spécialisés avec images médicales et données cliniques' :
             'Advanced predictive analysis for lung cancer using 5+ specialized models with medical images and clinical data'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación por CNN' : 
                 language === 'fr' ? 'Classification par CNN' : 
                 'CNN Classification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'CNN con transferencia para clasificar tipos de cáncer de pulmón mediante imágenes médicas' :
                 language === 'fr' ? 'CNN avec transfert pour classifier les types de cancer du poumon via images médicales' :
                 'CNN with transfer learning to classify lung cancer types through medical images'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Visión por Computador' : 
                 language === 'fr' ? 'Vision par Ordinateur' : 
                 'Computer Vision'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'ML + visión por computador para detección de cáncer de pulmón con interfaz en Streamlit/Flask' :
                 language === 'fr' ? 'ML + vision par ordinateur pour détection de cancer du poumon avec interface Streamlit/Flask' :
                 'ML + computer vision for lung cancer detection with Streamlit/Flask interface'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Tabular' : 
                 language === 'fr' ? 'Analyse Tabulaire' : 
                 'Tabular Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Múltiples modelos (RF, SVM, RL) sobre datos clínicos con features demográficas y síntomas' :
                 language === 'fr' ? 'Multiples modèles (RF, SVM, RL) sur données cliniques avec caractéristiques démographiques et symptômes' :
                 'Multiple models (RF, SVM, LR) on clinical data with demographic features and symptoms'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-cyan-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección Temprana Crítica' : 
                 language === 'fr' ? 'Détection Précoce Critique' : 
                 'Critical Early Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer pulmonar combinan análisis de imágenes médicas con datos clínicos para una detección temprana que puede salvar vidas.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer pulmonaire combinent l\'analyse d\'images médicales avec des données cliniques pour une détection précoce qui peut sauver des vies.' :
                 'Our 5+ specialized lung cancer models combine medical image analysis with clinical data for early detection that can save lives.'}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                {language === 'es' ? 'Iniciar Análisis' : 
                 language === 'fr' ? 'Commencer l\'Analyse' : 
                 'Start Analysis'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LungCancer;
