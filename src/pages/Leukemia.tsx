
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Microscope, Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Leukemia = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full">
            {language === 'es' ? 'Leucemia' : 
             language === 'fr' ? 'Leucémie' : 
             'Leukemia'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Leucemia' : 
             language === 'fr' ? 'Détection de Leucémie' : 
             'Leukemia Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para leucemia usando 5+ modelos especializados con imágenes microscópicas y datos de citometría de flujo' :
             language === 'fr' ? 'Analyse prédictive avancée pour leucémie utilisant 5+ modèles spécialisés avec images microscopiques et données de cytométrie de flux' :
             'Advanced predictive analysis for leukemia using 5+ specialized models with microscopic images and flow cytometry data'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Microscópico' : 
                 language === 'fr' ? 'Analyse Microscopique' : 
                 'Microscopic Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'CNN para detectar leucemia linfoblástica aguda mediante análisis de imágenes microscópicas de sangre' :
                 language === 'fr' ? 'CNN pour détecter la leucémie lymphoblastique aiguë via analyse d\'images microscopiques de sang' :
                 'CNN to detect acute lymphoblastic leukemia through microscopic blood image analysis'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Citometría de Flujo' : 
                 language === 'fr' ? 'Cytométrie de Flux' : 
                 'Flow Cytometry'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'ML clásico para clasificar leucemia mieloide aguda vs normal usando datos de citometría de flujo' :
                 language === 'fr' ? 'ML classique pour classifier leucémie myéloïde aiguë vs normal utilisant données de cytométrie de flux' :
                 'Classic ML to classify acute myeloid leukemia vs normal using flow cytometry data'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Genético' : 
                 language === 'fr' ? 'Analyse Génétique' : 
                 'Genetic Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis de expresión génica y Random Forest para biomarcadores predictivos de leucemia linfocítica' :
                 language === 'fr' ? 'Analyse d\'expression génique et Random Forest pour biomarqueurs prédictifs de leucémie lymphocytaire' :
                 'Gene expression analysis and Random Forest for predictive biomarkers of lymphocytic leukemia'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-purple-50/30 to-pink-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Diagnóstico de Precisión' : 
                 language === 'fr' ? 'Diagnostic de Précision' : 
                 'Precision Diagnosis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en leucemia combinan análisis microscópico, citometría de flujo y datos genéticos para diagnósticos precisos que salvan vidas.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en leucémie combinent analyse microscopique, cytométrie de flux et données génétiques pour des diagnostics précis qui sauvent des vies.' :
                 'Our 5+ specialized leukemia models combine microscopic analysis, flow cytometry, and genetic data for precise diagnoses that save lives.'}
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-2xl">
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

export default Leukemia;
