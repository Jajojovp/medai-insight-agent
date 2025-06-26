
import { Book, Code, Shield, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicNavigation from "@/components/PublicNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Documentation = () => {
  const { language } = useLanguage();

  const sections = [
    {
      id: 'getting-started',
      title: language === 'es' ? 'Comenzando' : language === 'fr' ? 'Commencer' : 'Getting Started',
      icon: Book,
      content: [
        {
          title: language === 'es' ? '1. Configuración Inicial' : language === 'fr' ? '1. Configuration Initiale' : '1. Initial Setup',
          description: language === 'es' ? 'Configura tu cuenta y obtén las credenciales API necesarias para comenzar' : 
                       language === 'fr' ? 'Configurez votre compte et obtenez les identifiants API nécessaires pour commencer' :
                       'Set up your account and get the necessary API credentials to start'
        },
        {
          title: language === 'es' ? '2. Primer Análisis' : language === 'fr' ? '2. Première Analyse' : '2. First Analysis',
          description: language === 'es' ? 'Realiza tu primer análisis médico predictivo usando nuestros modelos especializados' : 
                       language === 'fr' ? 'Effectuez votre première analyse médicale prédictive en utilisant nos modèles spécialisés' :
                       'Perform your first predictive medical analysis using our specialized models'
        },
        {
          title: language === 'es' ? '3. Interpretación de Resultados' : language === 'fr' ? '3. Interprétation des Résultats' : '3. Results Interpretation',
          description: language === 'es' ? 'Aprende a interpretar los resultados y recomendaciones de nuestros análisis' : 
                       language === 'fr' ? 'Apprenez à interpréter les résultats et recommandations de nos analyses' :
                       'Learn how to interpret the results and recommendations from our analyses'
        }
      ]
    },
    {
      id: 'api-reference',
      title: language === 'es' ? 'Referencia API' : language === 'fr' ? 'Référence API' : 'API Reference',
      icon: Code,
      content: [
        {
          title: language === 'es' ? 'Autenticación' : language === 'fr' ? 'Authentification' : 'Authentication',
          description: language === 'es' ? 'Manejo seguro de tokens API y autenticación OAuth2' : 
                       language === 'fr' ? 'Gestion sécurisée des tokens API et authentification OAuth2' :
                       'Secure API token handling and OAuth2 authentication'
        },
        {
          title: language === 'es' ? 'Endpoints de Análisis' : language === 'fr' ? 'Endpoints d\'Analyse' : 'Analysis Endpoints',
          description: language === 'es' ? 'Documentación completa de todos los endpoints de análisis médico' : 
                       language === 'fr' ? 'Documentation complète de tous les endpoints d\'analyse médicale' :
                       'Complete documentation of all medical analysis endpoints'
        },
        {
          title: language === 'es' ? 'Manejo de Errores' : language === 'fr' ? 'Gestion d\'Erreurs' : 'Error Handling',
          description: language === 'es' ? 'Códigos de error, mensajes y mejores prácticas de manejo' : 
                       language === 'fr' ? 'Codes d\'erreur, messages et meilleures pratiques de gestion' :
                       'Error codes, messages and handling best practices'
        }
      ]
    },
    {
      id: 'security',
      title: language === 'es' ? 'Seguridad' : language === 'fr' ? 'Sécurité' : 'Security',
      icon: Shield,
      content: [
        {
          title: language === 'es' ? 'Cumplimiento HIPAA' : language === 'fr' ? 'Conformité HIPAA' : 'HIPAA Compliance',
          description: language === 'es' ? 'Guías detalladas para mantener el cumplimiento HIPAA en tu implementación' : 
                       language === 'fr' ? 'Guides détaillés pour maintenir la conformité HIPAA dans votre implémentation' :
                       'Detailed guides to maintain HIPAA compliance in your implementation'
        },
        {
          title: language === 'es' ? 'Encriptación de Datos' : language === 'fr' ? 'Chiffrement des Données' : 'Data Encryption',
          description: language === 'es' ? 'Encriptación end-to-end para proteger información médica sensible' : 
                       language === 'fr' ? 'Chiffrement end-to-end pour protéger les informations médicales sensibles' :
                       'End-to-end encryption to protect sensitive medical information'
        },
        {
          title: language === 'es' ? 'Auditoría y Logs' : language === 'fr' ? 'Audit et Logs' : 'Audit and Logs',
          description: language === 'es' ? 'Sistema completo de auditoría para rastrear accesos y modificaciones' : 
                       language === 'fr' ? 'Système d\'audit complet pour tracer les accès et modifications' :
                       'Complete audit system to track access and modifications'
        }
      ]
    },
    {
      id: 'integration',
      title: language === 'es' ? 'Integración' : language === 'fr' ? 'Intégration' : 'Integration',
      icon: Zap,
      content: [
        {
          title: language === 'es' ? 'Sistemas EMR' : language === 'fr' ? 'Systèmes EMR' : 'EMR Systems',
          description: language === 'es' ? 'Integración con sistemas de registros médicos electrónicos populares' : 
                       language === 'fr' ? 'Intégration avec systèmes de dossiers médicaux électroniques populaires' :
                       'Integration with popular electronic medical record systems'
        },
        {
          title: language === 'es' ? 'Webhooks' : language === 'fr' ? 'Webhooks' : 'Webhooks',
          description: language === 'es' ? 'Configuración de webhooks para notificaciones en tiempo real' : 
                       language === 'fr' ? 'Configuration de webhooks pour notifications en temps réel' :
                       'Webhook configuration for real-time notifications'
        },
        {
          title: language === 'es' ? 'SDKs y Librerías' : language === 'fr' ? 'SDKs et Bibliothèques' : 'SDKs and Libraries',
          description: language === 'es' ? 'SDKs oficiales para Python, JavaScript, Java y otros lenguajes' : 
                       language === 'fr' ? 'SDKs officiels pour Python, JavaScript, Java et autres langages' :
                       'Official SDKs for Python, JavaScript, Java and other languages'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Documentación' : language === 'fr' ? 'Documentation' : 'Documentation'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Documentación Completa' : 
             language === 'fr' ? 'Documentation Complète' : 
             'Complete Documentation'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Guías detalladas, referencias API y ejemplos para implementar exitosamente nuestra plataforma de IA médica' :
             language === 'fr' ? 'Guides détaillés, références API et exemples pour implémenter avec succès notre plateforme d\'IA médicale' :
             'Detailed guides, API references and examples to successfully implement our medical AI platform'}
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <TabsTrigger key={section.id} value={section.id} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{section.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-6">
              <div className="grid gap-6">
                {section.content.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>{item.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {language === 'es' ? 'Ejemplos de Código' : 
                 language === 'fr' ? 'Exemples de Code' : 
                 'Code Examples'}
              </CardTitle>
              <CardDescription>
                {language === 'es' ? 'Implementaciones prácticas paso a paso' :
                 language === 'fr' ? 'Implémentations pratiques étape par étape' :
                 'Step-by-step practical implementations'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  {language === 'es' ? 'Ver Ejemplos' : language === 'fr' ? 'Voir Exemples' : 'View Examples'}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {language === 'es' ? 'Referencia API' : 
                 language === 'fr' ? 'Référence API' : 
                 'API Reference'}
              </CardTitle>
              <CardDescription>
                {language === 'es' ? 'Documentación completa de endpoints' :
                 language === 'fr' ? 'Documentation complète des endpoints' :
                 'Complete endpoints documentation'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/api">
                <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                  {language === 'es' ? 'Explorar API' : language === 'fr' ? 'Explorer API' : 'Explore API'}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {language === 'es' ? 'Soporte Técnico' : 
                 language === 'fr' ? 'Support Technique' : 
                 'Technical Support'}
              </CardTitle>
              <CardDescription>
                {language === 'es' ? 'Ayuda especializada cuando la necesites' :
                 language === 'fr' ? 'Aide spécialisée quand vous en avez besoin' :
                 'Specialized help when you need it'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-green-200 hover:bg-green-50">
                  {language === 'es' ? 'Contactar Soporte' : language === 'fr' ? 'Contacter Support' : 'Contact Support'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'es' ? '¿No encuentras lo que buscas?' : 
                 language === 'fr' ? 'Vous ne trouvez pas ce que vous cherchez?' : 
                 'Can\'t find what you\'re looking for?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'es' ? 'Nuestro equipo de documentación está constantemente actualizando y mejorando nuestras guías' :
                 language === 'fr' ? 'Notre équipe de documentation met constamment à jour et améliore nos guides' :
                 'Our documentation team is constantly updating and improving our guides'}
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                    {language === 'es' ? 'Sugerir Mejora' : language === 'fr' ? 'Suggérer Amélioration' : 'Suggest Improvement'}
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="rounded-2xl backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                    {language === 'es' ? 'Ver Recursos' : language === 'fr' ? 'Voir Ressources' : 'View Resources'}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
