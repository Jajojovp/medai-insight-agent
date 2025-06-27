
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const HeartDisease = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full">
            {language === 'es' ? 'Enfermedades Cardíacas' : 
             language === 'fr' ? 'Maladies Cardiaques' : 
             'Heart Disease'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Predicción de Enfermedades Cardiovasculares' : 
             language === 'fr' ? 'Prédiction des Maladies Cardiovasculaires' : 
             'Cardiovascular Disease Prediction'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de riesgo cardiovascular con 5+ modelos especializados que alcanzan 93.7% de precisión' :
             language === 'fr' ? 'Analyse prédictive du risque cardiovasculaire avec 5+ modèles spécialisés atteignant 93.7% de précision' :
             'Cardiovascular risk predictive analysis with 5+ specialized models achieving 93.7% accuracy'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Perfil Cardiovascular' : 
                 language === 'fr' ? 'Profil Cardiovasculaire' : 
                 'Cardiovascular Profile'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación integral de presión arterial, colesterol, frecuencia cardíaca y electrocardiograma' :
                 language === 'fr' ? 'Évaluation intégrale de pression artérielle, cholestérol, fréquence cardiaque et électrocardiogramme' :
                 'Comprehensive evaluation of blood pressure, cholesterol, heart rate and electrocardiogram'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Factores de Riesgo' : 
                 language === 'fr' ? 'Facteurs de Risque' : 
                 'Risk Factors'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis de edad, sexo, diabetes, tabaquismo, ejercicio y antecedentes familiares cardiovasculares' :
                 language === 'fr' ? 'Analyse d\'âge, sexe, diabète, tabagisme, exercice et antécédents familiaux cardiovasculaires' :
                 'Analysis of age, gender, diabetes, smoking, exercise and cardiovascular family history'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Prevención Personalizada' : 
                 language === 'fr' ? 'Prévention Personnalisée' : 
                 'Personalized Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Recomendaciones específicas de estilo de vida, medicación y seguimiento preventivo personalizado' :
                 language === 'fr' ? 'Recommandations spécifiques de mode de vie, médication et suivi préventif personnalisé' :
                 'Specific lifestyle recommendations, medication and personalized preventive follow-up'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-red-50/30 to-pink-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Prevención Cardiovascular Inteligente' : 
                 language === 'fr' ? 'Prévention Cardiovasculaire Intelligente' : 
                 'Intelligent Cardiovascular Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en enfermedades cardíacas utilizan datos clínicos validados para predecir y prevenir eventos cardiovasculares antes de que ocurran.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en maladies cardiaques utilisent des données cliniques validées pour prédire et prévenir les événements cardiovasculaires avant qu\'ils ne surviennent.' :
                 'Our 5+ specialized heart disease models use validated clinical data to predict and prevent cardiovascular events before they occur.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">93.7%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión' : language === 'fr' ? 'Précision' : 'Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">5+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">655K</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Muertes/Año USA' : language === 'fr' ? 'Décès/An USA' : 'Deaths/Year USA'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">80%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Prevenible' : language === 'fr' ? 'Évitable' : 'Preventable'}</div>
                </div>
              </div>
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

export default HeartDisease;
