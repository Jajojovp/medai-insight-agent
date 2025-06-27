
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Globe, Brain } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const API = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            API
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'API de Análisis Médico' : 
             language === 'fr' ? 'API d\'Analyse Médicale' : 
             'Medical Analysis API'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Integra nuestros 53+ modelos de IA médica en tus sistemas con nuestra API RESTful robusta y segura' :
             language === 'fr' ? 'Intégrez nos 53+ modèles d\'IA médicale dans vos systèmes avec notre API RESTful robuste et sécurisée' :
             'Integrate our 53+ medical AI models into your systems with our robust and secure RESTful API'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Endpoints RESTful' : 
                 language === 'fr' ? 'Points de Terminaison RESTful' : 
                 'RESTful Endpoints'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Acceso completo a 12 tipos de análisis médico predictivo a través de endpoints HTTP simples y consistentes' :
                 language === 'fr' ? 'Accès complet à 12 types d\'analyse médicale prédictive via des points de terminaison HTTP simples et cohérents' :
                 'Complete access to 12 types of predictive medical analysis through simple and consistent HTTP endpoints'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Seguridad HIPAA' : 
                 language === 'fr' ? 'Sécurité HIPAA' : 
                 'HIPAA Security'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Autenticación OAuth 2.0, encriptación end-to-end y cumplimiento total con regulaciones médicas' :
                 language === 'fr' ? 'Authentification OAuth 2.0, chiffrement end-to-end et conformité totale aux réglementations médicales' :
                 'OAuth 2.0 authentication, end-to-end encryption, and full compliance with medical regulations'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Respuesta Rápida' : 
                 language === 'fr' ? 'Réponse Rapide' : 
                 'Fast Response'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                {language === 'es' ? 'Análisis predictivos en menos de 2 segundos con 99.9% de disponibilidad y escalabilidad automática' :
                 language === 'fr' ? 'Analyses prédictives en moins de 2 secondes avec 99.9% de disponibilité et évolutivité automatique' :
                 'Predictive analysis in under 2 seconds with 99.9% uptime and automatic scalability'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Documentación Completa' : 
                 language === 'fr' ? 'Documentation Complète' : 
                 'Complete Documentation'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Accede a nuestra documentación técnica completa con ejemplos de código, guías de integración y casos de uso para cada uno de los 12 tipos de análisis médico.' :
                 language === 'fr' ? 'Accédez à notre documentation technique complète avec exemples de code, guides d\'intégration et cas d\'usage pour chacun des 12 types d\'analyse médicale.' :
                 'Access our complete technical documentation with code examples, integration guides, and use cases for each of the 12 types of medical analysis.'}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                {language === 'es' ? 'Ver Documentación' : 
                 language === 'fr' ? 'Voir la Documentation' : 
                 'View Documentation'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default API;
