
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Scan, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ProstateCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-indigo-100/80 text-indigo-800 rounded-full">
            {language === 'es' ? 'Cáncer de Próstata' : 
             language === 'fr' ? 'Cancer de la Prostate' : 
             'Prostate Cancer'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección Avanzada de Cáncer de Próstata' : 
             language === 'fr' ? 'Détection Avancée du Cancer de la Prostate' : 
             'Advanced Prostate Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de cáncer de próstata con 4+ modelos especializados que alcanzan 98.8% de precisión máxima' :
             language === 'fr' ? 'Analyse prédictive du cancer de la prostate avec 4+ modèles spécialisés atteignant 98.8% de précision maximale' :
             'Predictive prostate cancer analysis with 4+ specialized models achieving 98.8% maximum accuracy'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis PSA' : 
                 language === 'fr' ? 'Analyse PSA' : 
                 'PSA Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación avanzada de niveles de antígeno prostático específico y marcadores relacionados para detección temprana' :
                 language === 'fr' ? 'Évaluation avancée des niveaux d\'antigène prostatique spécifique et marqueurs associés pour détection précoce' :
                 'Advanced evaluation of prostate-specific antigen levels and related markers for early detection'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Imagen Médica Avanzada' : 
                 language === 'fr' ? 'Imagerie Médicale Avancée' : 
                 'Advanced Medical Imaging'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis de resonancia magnética multiparamétrica y técnicas de transfer learning para clasificación precisa' :
                 language === 'fr' ? 'Analyse de résonance magnétique multiparamétrique et techniques de transfer learning pour classification précise' :
                 'Multiparametric MRI analysis and transfer learning techniques for precise classification'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Estratificación de Riesgo' : 
                 language === 'fr' ? 'Stratification de Risque' : 
                 'Risk Stratification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Clasificación de riesgo bajo, intermedio y alto para optimizar estrategias de tratamiento personalizado' :
                 language === 'fr' ? 'Classification de risque faible, intermédiaire et élevé pour optimiser stratégies de traitement personnalisé' :
                 'Low, intermediate and high-risk classification to optimize personalized treatment strategies'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-indigo-50/30 to-blue-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Precisión Máxima en Detección' : 
                 language === 'fr' ? 'Précision Maximale en Détection' : 
                 'Maximum Detection Precision'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 4+ modelos especializados en cáncer de próstata combinan análisis bioquímico, imagen médica y inteligencia artificial para la detección más precisa disponible.' :
                 language === 'fr' ? 'Nos 4+ modèles spécialisés en cancer de la prostate combinent analyse biochimique, imagerie médicale et intelligence artificielle pour la détection la plus précise disponible.' :
                 'Our 4+ specialized prostate cancer models combine biochemical analysis, medical imaging and artificial intelligence for the most precise detection available.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">98.8%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión Máxima' : language === 'fr' ? 'Précision Maximale' : 'Max Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">4+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">1:7</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Riesgo Hombres' : language === 'fr' ? 'Risque Hommes' : 'Men Risk'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">95%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Supervivencia 10 años' : language === 'fr' ? 'Survie 10 ans' : '10-year Survival'}</div>
                </div>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-2xl">
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

export default ProstateCancer;
