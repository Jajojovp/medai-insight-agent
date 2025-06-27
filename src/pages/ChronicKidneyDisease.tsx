
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ChronicKidneyDisease = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-teal-100/80 text-teal-800 rounded-full">
            {language === 'es' ? 'Enfermedad Renal Crónica' : 
             language === 'fr' ? 'Maladie Rénale Chronique' : 
             'Chronic Kidney Disease'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección Temprana de Enfermedad Renal' : 
             language === 'fr' ? 'Détection Précoce de Maladie Rénale' : 
             'Early Kidney Disease Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de enfermedad renal crónica con 5+ modelos especializados que alcanzan 97.5% de precisión' :
             language === 'fr' ? 'Analyse prédictive de maladie rénale chronique avec 5+ modèles spécialisés atteignant 97.5% de précision' :
             'Chronic kidney disease predictive analysis with 5+ specialized models achieving 97.5% accuracy'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Función Renal' : 
                 language === 'fr' ? 'Fonction Rénale' : 
                 'Kidney Function'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación de creatinina sérica, tasa de filtración glomerular y clearance renal para detección temprana' :
                 language === 'fr' ? 'Évaluation de créatinine sérique, taux de filtration glomérulaire et clearance rénale pour détection précoce' :
                 'Serum creatinine, glomerular filtration rate and renal clearance evaluation for early detection'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Biomarcadores Urinarios' : 
                 language === 'fr' ? 'Biomarqueurs Urinaires' : 
                 'Urinary Biomarkers'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis de proteinuria, albuminuria, células rojas y blancas, y otros indicadores de daño renal' :
                 language === 'fr' ? 'Analyse de protéinurie, albuminurie, cellules rouges et blanches, et autres indicateurs de dommage rénal' :
                 'Proteinuria, albuminuria, red and white cells, and other kidney damage indicators analysis'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Progresión de la Enfermedad' : 
                 language === 'fr' ? 'Progression de la Maladie' : 
                 'Disease Progression'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Predicción de progresión a enfermedad renal terminal y necesidad de diálisis o trasplante' :
                 language === 'fr' ? 'Prédiction de progression vers maladie rénale terminale et besoin de dialyse ou transplantation' :
                 'Prediction of progression to end-stage renal disease and need for dialysis or transplant'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-teal-50/30 to-cyan-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Protección Renal Avanzada' : 
                 language === 'fr' ? 'Protection Rénale Avancée' : 
                 'Advanced Kidney Protection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en enfermedad renal crónica detectan deterioro renal años antes de síntomas clínicos, permitiendo intervención temprana.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en maladie rénale chronique détectent détérioration rénale des années avant symptômes cliniques, permettant intervention précoce.' :
                 'Our 5+ specialized chronic kidney disease models detect kidney deterioration years before clinical symptoms, enabling early intervention.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">97.5%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión' : language === 'fr' ? 'Précision' : 'Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">5+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">37M</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Afectados USA' : language === 'fr' ? 'Affectés USA' : 'Affected USA'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">90%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'No lo Saben' : language === 'fr' ? 'Ne le Savent Pas' : 'Don\'t Know'}</div>
                </div>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 rounded-2xl">
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

export default ChronicKidneyDisease;
