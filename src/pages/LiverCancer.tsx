
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scan, Brain, Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const LiverCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-orange-100/80 text-orange-800 rounded-full">
            {language === 'es' ? 'Cáncer de Hígado' : 
             language === 'fr' ? 'Cancer du Foie' : 
             'Liver Cancer'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Cáncer Hepático' : 
             language === 'fr' ? 'Détection du Cancer Hépatique' : 
             'Liver Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para cáncer de hígado usando 5+ modelos especializados con imágenes CT y datos clínicos' :
             language === 'fr' ? 'Analyse prédictive avancée pour cancer du foie utilisant 5+ modèles spécialisés avec images CT et données cliniques' :
             'Advanced predictive analysis for liver cancer using 5+ specialized models with CT images and clinical data'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Segmentación en CT' : 
                 language === 'fr' ? 'Segmentation CT' : 
                 'CT Segmentation'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'U-Net piramidal para segmentación automática de tumores hepáticos en imágenes CT con deep learning' :
                 language === 'fr' ? 'U-Net pyramidal pour segmentation automatique de tumeurs hépatiques en images CT avec deep learning' :
                 'Pyramidal U-Net for automatic liver tumor segmentation in CT images with deep learning'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación de Tipos' : 
                 language === 'fr' ? 'Classification des Types' : 
                 'Type Classification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'PCA + regresión logística + Random Forest para clasificar tipos de cáncer hepático (CHC vs CCK)' :
                 language === 'fr' ? 'PCA + régression logistique + Random Forest pour classifier types de cancer hépatique (CHC vs CCK)' :
                 'PCA + logistic regression + Random Forest to classify liver cancer types (HCC vs CCK)'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Riesgo' : 
                 language === 'fr' ? 'Prédiction de Risque' : 
                 'Risk Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'DNN entrenado con 84 factores de riesgo clínicos (AUC 0.718) detectando variables clave de riesgo hepático' :
                 language === 'fr' ? 'DNN entraîné avec 84 facteurs de risque cliniques (AUC 0.718) détectant les variables clés de risque hépatique' :
                 'DNN trained with 84 clinical risk factors (AUC 0.718) detecting key liver risk variables'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-orange-50/30 to-yellow-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección Precisa' : 
                 language === 'fr' ? 'Détection Précise' : 
                 'Precise Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer hepático combinan análisis de imágenes CT con datos clínicos para una detección temprana y clasificación precisa.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer hépatique combinent l\'analyse d\'images CT avec des données cliniques pour une détection précoce et classification précise.' :
                 'Our 5+ specialized liver cancer models combine CT image analysis with clinical data for early detection and precise classification.'}
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 rounded-2xl">
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

export default LiverCancer;
