
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Activity, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Diabetes = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Diabetes Tipo 2' : 
             language === 'fr' ? 'Diabète Type 2' : 
             'Type 2 Diabetes'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Análisis Predictivo de Diabetes' : 
             language === 'fr' ? 'Analyse Prédictive du Diabète' : 
             'Predictive Diabetes Analysis'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Detección temprana y análisis de riesgo de diabetes tipo 2 con 9+ modelos especializados que alcanzan 94.2% de precisión' :
             language === 'fr' ? 'Détection précoce et analyse de risque du diabète type 2 avec 9+ modèles spécialisés atteignant 94.2% de précision' :
             'Early detection and risk analysis of type 2 diabetes with 9+ specialized models achieving 94.2% accuracy'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis de Glucosa' : 
                 language === 'fr' ? 'Analyse du Glucose' : 
                 'Glucose Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación de niveles de glucosa en sangre, hemoglobina A1c y marcadores metabólicos para detección temprana' :
                 language === 'fr' ? 'Évaluation des niveaux de glucose sanguin, hémoglobine A1c et marqueurs métaboliques pour détection précoce' :
                 'Blood glucose levels, hemoglobin A1c and metabolic markers evaluation for early detection'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                {language === 'es' ? 'Análisis integral de IMC, edad, antecedentes familiares, presión arterial y estilo de vida del paciente' :
                 language === 'fr' ? 'Analyse intégrale de l\'IMC, âge, antécédents familiaux, pression artérielle et mode de vie du patient' :
                 'Comprehensive analysis of BMI, age, family history, blood pressure and patient lifestyle'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción Temprana' : 
                 language === 'fr' ? 'Prédiction Précoce' : 
                 'Early Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Identificación de pacientes en riesgo años antes del diagnóstico clínico tradicional con alta precisión' :
                 language === 'fr' ? 'Identification de patients à risque des années avant le diagnostic clinique traditionnel avec haute précision' :
                 'Identification of at-risk patients years before traditional clinical diagnosis with high accuracy'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-cyan-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Prevención que Salva Vidas' : 
                 language === 'fr' ? 'Prévention qui Sauve des Vies' : 
                 'Life-Saving Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 9+ modelos especializados en diabetes combinan análisis de laboratorio, factores de riesgo y datos clínicos para una detección temprana que puede prevenir complicaciones graves.' :
                 language === 'fr' ? 'Nos 9+ modèles spécialisés en diabète combinent analyses de laboratoire, facteurs de risque et données cliniques pour une détection précoce qui peut prévenir des complications graves.' :
                 'Our 9+ specialized diabetes models combine laboratory analysis, risk factors and clinical data for early detection that can prevent serious complications.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">94.2%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión' : language === 'fr' ? 'Précision' : 'Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">9+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">463M</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Afectados Global' : language === 'fr' ? 'Affectés Global' : 'Global Affected'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5-10</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Años Anticipación' : language === 'fr' ? 'Années Anticipation' : 'Years Early'}</div>
                </div>
              </div>
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

export default Diabetes;
