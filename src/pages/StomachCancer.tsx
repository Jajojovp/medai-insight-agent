
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const StomachCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full">
            {language === 'es' ? 'Cáncer de Estómago' : 
             language === 'fr' ? 'Cancer de l\'Estomac' : 
             'Stomach Cancer'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Cáncer Gástrico' : 
             language === 'fr' ? 'Détection du Cancer Gastrique' : 
             'Gastric Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para cáncer de estómago usando 5+ modelos especializados con imágenes histopatológicas y datos clínicos' :
             language === 'fr' ? 'Analyse prédictive avancée pour cancer de l\'estomac utilisant 5+ modèles spécialisés avec images histopathologiques et données cliniques' :
             'Advanced predictive analysis for stomach cancer using 5+ specialized models with histopathological images and clinical data'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Histopatológico' : 
                 language === 'fr' ? 'Analyse Histopathologique' : 
                 'Histopathological Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'EfficientNetV2B0 + CatBoost para análisis de imágenes histopatológicas con GasHisSDB, incluyendo Grad-CAM y t-SNE' :
                 language === 'fr' ? 'EfficientNetV2B0 + CatBoost pour analyse d\'images histopathologiques avec GasHisSDB, incluant Grad-CAM et t-SNE' :
                 'EfficientNetV2B0 + CatBoost for histopathological image analysis with GasHisSDB, including Grad-CAM and t-SNE'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación y Segmentación' : 
                 language === 'fr' ? 'Classification et Segmentation' : 
                 'Classification & Segmentation'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Visión por computador para detectar tejidos cancerosos en imágenes gástricas con clasificación y segmentación automática' :
                 language === 'fr' ? 'Vision par ordinateur pour détecter les tissus cancéreux dans les images gastriques avec classification et segmentation automatique' :
                 'Computer vision to detect cancerous tissues in gastric images with automatic classification and segmentation'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Metástasis' : 
                 language === 'fr' ? 'Prédiction des Métastases' : 
                 'Metastasis prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'ML clásico para predecir metástasis en ganglios linfáticos usando datos clínicos en población asiática' :
                 language === 'fr' ? 'ML classique pour prédire les métastases dans les ganglions lymphatiques utilisant données cliniques en population asiatique' :
                 'Classic ML to predict lymph node metastasis using clinical data in Asian population'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-red-50/30 to-orange-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección Temprana Vital' : 
                 language === 'fr' ? 'Détection Précoce Vitale' : 
                 'Vital Early Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer gástrico combinan análisis de imágenes histopatológicas con datos clínicos para una detección temprana que salva vidas.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer gastrique combinent l\'analyse d\'images histopathologiques avec des données cliniques pour une détection précoce qui sauve des vies.' :
                 'Our 5+ specialized gastric cancer models combine histopathological image analysis with clinical data for life-saving early detection.'}
              </p>
              <Button className="bg-red-600 hover:bg-red-700 rounded-2xl">
                {language === 'es' ? 'Iniciar IA' : 
                 language === 'fr' ? 'Commencer IA' : 
                 'Start AI'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StomachCancer;
