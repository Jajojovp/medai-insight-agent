
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Activity, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Stroke = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-violet-100/80 text-violet-800 rounded-full">
            {language === 'es' ? 'Accidente Cerebrovascular' : 
             language === 'fr' ? 'Accident Vasculaire Cérébral' : 
             'Stroke Risk'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Predicción de Riesgo de ACV' : 
             language === 'fr' ? 'Prédiction du Risque d\'AVC' : 
             'Stroke Risk Prediction'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de riesgo de accidente cerebrovascular con 5+ modelos especializados que alcanzan 91.3% de precisión' :
             language === 'fr' ? 'Analyse prédictive du risque d\'accident vasculaire cérébral avec 5+ modèles spécialisés atteignant 91.3% de précision' :
             'Stroke risk predictive analysis with 5+ specialized models achieving 91.3% accuracy'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Evaluación Neurológica' : 
                 language === 'fr' ? 'Évaluation Neurologique' : 
                 'Neurological Assessment'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis de función cerebral, historial de AIT, síntomas neurológicos y factores de riesgo cerebrovasculares' :
                 language === 'fr' ? 'Analyse de fonction cérébrale, historique d\'AIT, symptômes neurologiques et facteurs de risque cérébrovasculaires' :
                 'Brain function analysis, TIA history, neurological symptoms and cerebrovascular risk factors'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Factores Vasculares' : 
                 language === 'fr' ? 'Facteurs Vasculaires' : 
                 'Vascular Factors'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación de hipertensión, fibrilación auricular, diabetes, colesterol y enfermedad carotídea' :
                 language === 'fr' ? 'Évaluation d\'hypertension, fibrillation auriculaire, diabète, cholestérol et maladie carotidienne' :
                 'Evaluation of hypertension, atrial fibrillation, diabetes, cholesterol and carotid disease'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Prevención Temprana' : 
                 language === 'fr' ? 'Prévention Précoce' : 
                 'Early Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Identificación de pacientes de alto riesgo para intervención preventiva y reducción de incidencia' :
                 language === 'fr' ? 'Identification de patients à haut risque pour intervention préventive et réduction d\'incidence' :
                 'High-risk patient identification for preventive intervention and incidence reduction'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-violet-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Prevención Cerebrovascular Avanzada' : 
                 language === 'fr' ? 'Prévention Cérébrovasculaire Avancée' : 
                 'Advanced Cerebrovascular Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en ACV analizan múltiples factores de riesgo para predecir y prevenir accidentes cerebrovasculares antes de que ocurran.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en AVC analysent multiples facteurs de risque pour prédire et prévenir accidents cérébrovasculaires avant qu\'ils ne surviennent.' :
                 'Our 5+ specialized stroke models analyze multiple risk factors to predict and prevent cerebrovascular accidents before they occur.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">91.3%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión' : language === 'fr' ? 'Précision' : 'Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">5+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">795K</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Casos/Año USA' : language === 'fr' ? 'Cas/An USA' : 'Cases/Year USA'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">4min</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Frecuencia' : language === 'fr' ? 'Fréquence' : 'Frequency'}</div>
                </div>
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700 rounded-2xl">
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

export default Stroke;
