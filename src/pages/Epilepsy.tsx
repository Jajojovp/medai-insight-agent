
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Activity, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Epilepsy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-indigo-100/80 text-indigo-800 rounded-full">
            {language === 'es' ? 'Epilepsia' : 
             language === 'fr' ? 'Épilepsie' : 
             'Epilepsy'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Predicción de Epilepsia' : 
             language === 'fr' ? 'Prédiction d\'Épilepsie' : 
             'Epilepsy Prediction'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para epilepsia usando 4+ modelos especializados con datos EEG y algoritmos de aprendizaje profundo' :
             language === 'fr' ? 'Analyse prédictive avancée pour épilepsie utilisant 4+ modèles spécialisés avec données EEG et algorithmes d\'apprentissage profond' :
             'Advanced predictive analysis for epilepsy using 4+ specialized models with EEG data and deep learning algorithms'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'CNN + BiLSTM' : 
                 language === 'fr' ? 'CNN + BiLSTM' : 
                 'CNN + BiLSTM'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'CNN + BiLSTM para predecir convulsiones con procesamiento de wavelet y spectral entropy' :
                 language === 'fr' ? 'CNN + BiLSTM pour prédire les crises avec traitement de wavelets et entropie spectrale' :
                 'CNN + BiLSTM to predict seizures with wavelet processing and spectral entropy'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis EEG' : 
                 language === 'fr' ? 'Analyse EEG' : 
                 'EEG Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'LSTM para detectar convulsiones en EEG con aprendizaje profundo sobre series temporales' :
                 language === 'fr' ? 'LSTM pour détecter les crises dans l\'EEG avec apprentissage profond sur séries temporelles' :
                 'LSTM to detect seizures in EEG with deep learning on time series'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Datos Multimodales' : 
                 language === 'fr' ? 'Données Multimodales' : 
                 'Multimodal Data'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Predicción multivariable usando datos de EEG de wearables y ML supervisado con pandas y scikit-learn' :
                 language === 'fr' ? 'Prédiction multivariable utilisant données EEG de wearables et ML supervisé avec pandas et scikit-learn' :
                 'Multivariate prediction using EEG data from wearables and supervised ML with pandas and scikit-learn'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-indigo-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Predicción Preventiva' : 
                 language === 'fr' ? 'Prédiction Préventive' : 
                 'Preventive Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 4+ modelos especializados en epilepsia utilizan análisis EEG avanzado y aprendizaje profundo para predecir convulsiones antes de que ocurran.' :
                 language === 'fr' ? 'Nos 4+ modèles spécialisés en épilepsie utilisent l\'analyse EEG avancée et l\'apprentissage profond pour prédire les crises avant qu\'elles ne surviennent.' :
                 'Our 4+ specialized epilepsy models use advanced EEG analysis and deep learning to predict seizures before they occur.'}
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-2xl">
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

export default Epilepsy;
