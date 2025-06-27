
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Activity, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PancreaticCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-amber-100/80 text-amber-800 rounded-full">
            {language === 'es' ? 'Cáncer de Páncreas' : 
             language === 'fr' ? 'Cancer du Pancréas' : 
             'Pancreatic Cancer'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección del "Asesino Silencioso"' : 
             language === 'fr' ? 'Détection du "Tueur Silencieux"' : 
             'Detection of the "Silent Killer"'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de cáncer pancreático con 4+ modelos especializados que alcanzan 87.4% de precisión usando biomarcadores urinarios' :
             language === 'fr' ? 'Analyse prédictive du cancer pancréatique avec 4+ modèles spécialisés atteignant 87.4% de précision utilisant biomarqueurs urinaires' :
             'Pancreatic cancer predictive analysis with 4+ specialized models achieving 87.4% accuracy using urinary biomarkers'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Biomarcadores Urinarios' : 
                 language === 'fr' ? 'Biomarqueurs Urinaires' : 
                 'Urinary Biomarkers'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis de LYVE1, REG1B, TFF1 y creatinina urinaria para detección no invasiva del cáncer pancreático' :
                 language === 'fr' ? 'Analyse de LYVE1, REG1B, TFF1 et créatinine urinaire pour détection non invasive du cancer pancréatique' :
                 'Analysis of LYVE1, REG1B, TFF1 and urinary creatinine for non-invasive pancreatic cancer detection'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Detección Temprana Crítica' : 
                 language === 'fr' ? 'Détection Précoce Critique' : 
                 'Critical Early Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Identificación en etapas tempranas cuando el tratamiento quirúrgico aún es posible y efectivo' :
                 language === 'fr' ? 'Identification aux stades précoces quand le traitement chirurgical est encore possible et efficace' :
                 'Identification in early stages when surgical treatment is still possible and effective'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis de Supervivencia' : 
                 language === 'fr' ? 'Analyse de Survie' : 
                 'Survival Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Evaluación de pronóstico y expectativa de vida para optimizar estrategias de tratamiento personalizado' :
                 language === 'fr' ? 'Évaluation de pronostic et espérance de vie pour optimiser stratégies de traitement personnalisé' :
                 'Prognosis and life expectancy evaluation to optimize personalized treatment strategies'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-amber-50/30 to-orange-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Combatiendo el Cáncer Más Letal' : 
                 language === 'fr' ? 'Combattre le Cancer le Plus Mortel' : 
                 'Fighting the Deadliest Cancer'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 4+ modelos especializados en cáncer pancreático utilizan análisis de biomarcadores urinarios para detectar esta enfermedad letal en etapas tratables.' :
                 language === 'fr' ? 'Nos 4+ modèles spécialisés en cancer pancréatique utilisent analyse de biomarqueurs urinaires pour détecter cette maladie mortelle aux stades traitables.' :
                 'Our 4+ specialized pancreatic cancer models use urinary biomarker analysis to detect this lethal disease in treatable stages.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">87.4%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Precisión' : language === 'fr' ? 'Précision' : 'Accuracy'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">4+</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Modelos' : language === 'fr' ? 'Modèles' : 'Models'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">5%</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Supervivencia 5 años' : language === 'fr' ? 'Survie 5 ans' : '5-year Survival'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">60K</div>
                  <div className="text-sm text-gray-600">{language === 'es' ? 'Casos/Año USA' : language === 'fr' ? 'Cas/An USA' : 'Cases/Year USA'}</div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 rounded-2xl">
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

export default PancreaticCancer;
