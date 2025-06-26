
import { Book, Video, FileText, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PublicNavigation from "@/components/PublicNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Resources = () => {
  const { language } = useLanguage();

  const resources = [
    {
      icon: Book,
      title: language === 'es' ? 'Guías Clínicas' : language === 'fr' ? 'Guides Cliniques' : 'Clinical Guides',
      description: language === 'es' ? 'Documentación completa para implementación médica' : 
                   language === 'fr' ? 'Documentation complète pour implémentation médicale' :
                   'Complete documentation for medical implementation',
      items: [
        language === 'es' ? 'Guía de Implementación HIPAA' : language === 'fr' ? 'Guide d\'Implémentation HIPAA' : 'HIPAA Implementation Guide',
        language === 'es' ? 'Protocolo de Análisis Diabetes' : language === 'fr' ? 'Protocole d\'Analyse Diabète' : 'Diabetes Analysis Protocol',
        language === 'es' ? 'Manual de Enfermedades Cardíacas' : language === 'fr' ? 'Manuel des Maladies Cardiaques' : 'Heart Disease Manual',
        language === 'es' ? 'Detección Temprana de Cáncer' : language === 'fr' ? 'Détection Précoce du Cancer' : 'Early Cancer Detection'
      ]
    },
    {
      icon: Video,
      title: language === 'es' ? 'Tutoriales en Video' : language === 'fr' ? 'Tutoriels Vidéo' : 'Video Tutorials',
      description: language === 'es' ? 'Aprende paso a paso cómo usar nuestra plataforma' : 
                   language === 'fr' ? 'Apprenez étape par étape comment utiliser notre plateforme' :
                   'Learn step by step how to use our platform',
      items: [
        language === 'es' ? 'Configuración Inicial (15 min)' : language === 'fr' ? 'Configuration Initiale (15 min)' : 'Initial Setup (15 min)',
        language === 'es' ? 'Primer Análisis Médico (20 min)' : language === 'fr' ? 'Première Analyse Médicale (20 min)' : 'First Medical Analysis (20 min)',
        language === 'es' ? 'Interpretación de Resultados (25 min)' : language === 'fr' ? 'Interprétation des Résultats (25 min)' : 'Results Interpretation (25 min)',
        language === 'es' ? 'Integración API (30 min)' : language === 'fr' ? 'Intégration API (30 min)' : 'API Integration (30 min)'
      ]
    },
    {
      icon: FileText,
      title: language === 'es' ? 'Casos de Estudio' : language === 'fr' ? 'Études de Cas' : 'Case Studies',
      description: language === 'es' ? 'Casos reales de éxito en instituciones médicas' : 
                   language === 'fr' ? 'Cas réels de succès dans institutions médicales' :
                   'Real success cases in medical institutions',
      items: [
        language === 'es' ? 'Hospital General: 40% reducción tiempo diagnóstico' : language === 'fr' ? 'Hôpital Général: 40% réduction temps diagnostic' : 'General Hospital: 40% diagnosis time reduction',
        language === 'es' ? 'Clínica Diabetes: 98.5% precisión predictiva' : language === 'fr' ? 'Clinique Diabète: 98.5% précision prédictive' : 'Diabetes Clinic: 98.5% predictive accuracy',
        language === 'es' ? 'Centro Cardiológico: Detección temprana +60%' : language === 'fr' ? 'Centre Cardiologique: Détection précoce +60%' : 'Cardiology Center: +60% early detection',
        language === 'es' ? 'Instituto Oncológico: Análisis instantáneo' : language === 'fr' ? 'Institut Oncologique: Analyse instantanée' : 'Oncology Institute: Instant analysis'
      ]
    },
    {
      icon: Download,
      title: language === 'es' ? 'Herramientas' : language === 'fr' ? 'Outils' : 'Tools',
      description: language === 'es' ? 'Recursos descargables para tu equipo médico' : 
                   language === 'fr' ? 'Ressources téléchargeables pour votre équipe médicale' :
                   'Downloadable resources for your medical team',
      items: [
        language === 'es' ? 'SDK Python/JavaScript' : language === 'fr' ? 'SDK Python/JavaScript' : 'Python/JavaScript SDK',
        language === 'es' ? 'Plantillas de Integración' : language === 'fr' ? 'Modèles d\'Intégration' : 'Integration Templates',
        language === 'es' ? 'Checklist de Implementación' : language === 'fr' ? 'Liste de Contrôle d\'Implémentation' : 'Implementation Checklist',
        language === 'es' ? 'Formularios de Validación HIPAA' : language === 'fr' ? 'Formulaires de Validation HIPAA' : 'HIPAA Validation Forms'
      ]
    }
  ];

  const quickLinks = [
    {
      title: language === 'es' ? 'Documentación API' : language === 'fr' ? 'Documentation API' : 'API Documentation',
      description: language === 'es' ? 'Referencia completa de endpoints' : language === 'fr' ? 'Référence complète des endpoints' : 'Complete endpoints reference',
      link: '/api'
    },
    {
      title: language === 'es' ? 'Estado del Sistema' : language === 'fr' ? 'État du Système' : 'System Status',
      description: language === 'es' ? 'Monitoreo en tiempo real' : language === 'fr' ? 'Surveillance en temps réel' : 'Real-time monitoring',
      link: '#'
    },
    {
      title: language === 'es' ? 'Soporte Técnico' : language === 'fr' ? 'Support Technique' : 'Technical Support',
      description: language === 'es' ? 'Ayuda especializada 24/7' : language === 'fr' ? 'Aide spécialisée 24/7' : '24/7 specialized help',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Recursos' : language === 'fr' ? 'Ressources' : 'Resources'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Centro de Recursos Médicos' : 
             language === 'fr' ? 'Centre de Ressources Médicales' : 
             'Medical Resources Center'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Todo lo que necesitas para implementar exitosamente nuestra plataforma de IA médica en tu institución' :
             language === 'fr' ? 'Tout ce dont vous avez besoin pour implémenter avec succès notre plateforme d\'IA médicale dans votre institution' :
             'Everything you need to successfully implement our medical AI platform in your institution'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {language === 'es' ? 'Enlaces Rápidos' : 
             language === 'fr' ? 'Liens Rapides' : 
             'Quick Links'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {link.title}
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={link.link}>
                    <Button variant="outline" className="w-full rounded-2xl backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                      {language === 'es' ? 'Acceder' : language === 'fr' ? 'Accéder' : 'Access'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'es' ? '¿Necesitas ayuda personalizada?' : 
                 language === 'fr' ? 'Besoin d\'aide personnalisée?' : 
                 'Need personalized help?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'es' ? 'Nuestro equipo de expertos médicos está disponible para apoyarte en cada paso' :
                 language === 'fr' ? 'Notre équipe d\'experts médicaux est disponible pour vous accompagner à chaque étape' :
                 'Our team of medical experts is available to support you every step of the way'}
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  {language === 'es' ? 'Contactar Soporte' : language === 'fr' ? 'Contacter le Support' : 'Contact Support'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Resources;
