
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Scan, Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const BreastCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-pink-100/80 text-pink-800 rounded-full">
            {language === 'es' ? 'Cáncer de Mama' : 
             language === 'fr' ? 'Cancer du Sein' : 
             'Breast Cancer'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección Temprana de Cáncer de Mama' : 
             language === 'fr' ? 'Détection Précoce du Cancer du Sein' : 
             'Early Breast Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo para cáncer de mama con 5+ modelos especializados que alcanzan 96.8% de precisión en clasificación benigno/maligno' :
             language === 'fr' ? 'Analyse prédictive pour cancer du sein avec 5+ modèles spécialisés atteignant 96.8% de précision en classification bénin/malin' :
             'Predictive analysis for breast cancer with 5+ specialized models achieving 96.8% accuracy in benign/malignant classification'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis de Mamografías' : 
                 language === 'fr' ? 'Analyse de Mammographies' : 
                 'Mammography Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación de características nucleares, textura celular y patrones morfológicos para clasificación precisa' :
                 language === 'fr' ? 'Évaluation des caractéristiques nucléaires, texture cellulaire et motifs morphologiques pour classification précise' :
                 'Evaluation of nuclear characteristics, cellular texture and morphological patterns for precise classification'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación Benigno/Maligno' : 
                 language === 'fr' ? 'Classification Bénin/Malin' : 
                 'Benign/Malignant Classification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Diferenciación precisa entre lesiones benignas y malignas usando datos del Wisconsin Diagnostic Dataset' :
                 language === 'fr' ? 'Différenciation précise entre lésions bénignes et malignes utilisant données du Wisconsin Diagnostic Dataset' :
                 'Precise differentiation between benign and malignant lesions using Wisconsin Diagnostic Dataset data'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Evaluación de Riesgo' : 
                 language === 'fr' ? 'Évaluation de Risque' : 
                 'Risk Assessment'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis integral de factores de riesgo incluyendo edad, historial familiar y características clínicas' :
                 language === 'fr' ? 'Analyse intégrale des facteurs de risque incluant âge, historique familial et caractéristiques cliniques' :
                 'Comprehensive risk factor analysis including age, family history and clinical characteristics'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-pink-50/30 to-rose-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección que Salva Vidas' : 
                 language === 'fr' ? 'Détection qui Sauve des Vies' : 
                 'Life-Saving Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer de mama ofrecen detección temprana y clasificación precisa, mejorando significativamente las tasas de supervivencia.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer du sein offrent détection précoce et classification précise, améliorant significativement les taux de survie.' :
                 'Our 5+ specialized breast cancer models offer early detection and precise classification, significantly improving survival rates.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">96.8%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión' : language === 'fr' ? 'Précision' : 'Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">5+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">90%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Supervivencia 5 años' : language === 'fr' ? 'Survie 5 ans' : '5-year Survival'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">1:8</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Riesgo Mujeres' : language === 'fr' ? 'Risque Femmes' : 'Women Risk'}</div>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 rounded-2xl">
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

export default BreastCancer;
