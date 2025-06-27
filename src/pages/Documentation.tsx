
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Database, Shield, Zap, Book, Terminal } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Documentation = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Documentación' : language === 'fr' ? 'Documentation' : 'Documentation'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Documentación Técnica' : 
             language === 'fr' ? 'Documentation Technique' : 
             'Technical Documentation'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Documentación completa para integrar y utilizar los 53+ modelos de IA médica en tus sistemas' :
             language === 'fr' ? 'Documentation complète pour intégrer et utiliser les 53+ modèles d\'IA médicale dans vos systèmes' :
             'Complete documentation to integrate and use the 53+ medical AI models in your systems'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Guía de Integración' : 
                 language === 'fr' ? 'Guide d\'Intégration' : 
                 'Integration Guide'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Instrucciones paso a paso para integrar MedAI en sistemas hospitalarios existentes' :
                 language === 'fr' ? 'Instructions étape par étape pour intégrer MedAI dans les systèmes hospitaliers existants' :
                 'Step-by-step instructions to integrate MedAI into existing hospital systems'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Referencia de API' : 
                 language === 'fr' ? 'Référence API' : 
                 'API Reference'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Documentación completa de endpoints, parámetros y respuestas para los 12 tipos de análisis' :
                 language === 'fr' ? 'Documentation complète des points de terminaison, paramètres et réponses pour les 12 types d\'analyse' :
                 'Complete documentation of endpoints, parameters, and responses for the 12 analysis types'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Terminal className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Ejemplos de Código' : 
                 language === 'fr' ? 'Exemples de Code' : 
                 'Code Examples'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Ejemplos prácticos en Python, JavaScript, PHP y otros lenguajes para cada modelo de IA' :
                 language === 'fr' ? 'Exemples pratiques en Python, JavaScript, PHP et autres langages pour chaque modèle d\'IA' :
                 'Practical examples in Python, JavaScript, PHP, and other languages for each AI model'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Documentación Interactiva' : 
                 language === 'fr' ? 'Documentation Interactive' : 
                 'Interactive Documentation'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Explora nuestra documentación interactiva con ejemplos en vivo, pruebas de API y simuladores para cada tipo de análisis médico.' :
                 language === 'fr' ? 'Explorez notre documentation interactive avec exemples en direct, tests d\'API et simulateurs pour chaque type d\'analyse médicale.' :
                 'Explore our interactive documentation with live examples, API testing, and simulators for each type of medical analysis.'}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                {language === 'es' ? 'Explorar Documentación' : 
                 language === 'fr' ? 'Explorer la Documentation' : 
                 'Explore Documentation'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
