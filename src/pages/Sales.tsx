
import { Phone, Mail, Calendar, Users, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PublicNavigation from "@/components/PublicNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Sales = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: language === 'es' ? 'ROI Inmediato' : language === 'fr' ? 'ROI Immédiat' : 'Immediate ROI',
      description: language === 'es' ? 'Recupera tu inversión en los primeros 3 meses con diagnósticos más rápidos y precisos' : 
                   language === 'fr' ? 'Récupérez votre investissement dans les 3 premiers mois avec diagnostics plus rapides et précis' :
                   'Recover your investment in the first 3 months with faster and more accurate diagnoses'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Más Pacientes Salvados' : language === 'fr' ? 'Plus de Patients Sauvés' : 'More Patients Saved',
      description: language === 'es' ? 'Incrementa la capacidad de atención médica y salva más vidas con análisis instantáneos' : 
                   language === 'fr' ? 'Augmentez la capacité de soins médicaux et sauvez plus de vies avec analyses instantanées' :
                   'Increase medical care capacity and save more lives with instant analysis'
    },
    {
      icon: Award,
      title: language === 'es' ? 'Prestigio Institucional' : language === 'fr' ? 'Prestige Institutionnel' : 'Institutional Prestige',
      description: language === 'es' ? 'Posiciona tu institución como líder en innovación médica con tecnología de vanguardia' : 
                   language === 'fr' ? 'Positionnez votre institution comme leader en innovation médicale avec technologie de pointe' :
                   'Position your institution as a leader in medical innovation with cutting-edge technology'
    }
  ];

  const stats = [
    {
      number: '98.8%',
      label: language === 'es' ? 'Precisión Máxima' : language === 'fr' ? 'Précision Maximale' : 'Maximum Accuracy'
    },
    {
      number: '37+',
      label: language === 'es' ? 'Modelos Especializados' : language === 'fr' ? 'Modèles Spécialisés' : 'Specialized Models'
    },
    {
      number: '7',
      label: language === 'es' ? 'Tipos de Análisis' : language === 'fr' ? 'Types d\'Analyses' : 'Analysis Types'
    },
    {
      number: '24/7',
      label: language === 'es' ? 'Disponibilidad' : language === 'fr' ? 'Disponibilité' : 'Availability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Ventas' : language === 'fr' ? 'Ventes' : 'Sales'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Transforma tu Institución Médica' : 
             language === 'fr' ? 'Transformez votre Institution Médicale' : 
             'Transform Your Medical Institution'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Únete a las instituciones líderes que ya están salvando más vidas con nuestra plataforma de IA médica' :
             language === 'fr' ? 'Rejoignez les institutions leaders qui sauvent déjà plus de vies avec notre plateforme d\'IA médicale' :
             'Join leading institutions that are already saving more lives with our medical AI platform'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {language === 'es' ? '¿Por qué elegir MedAI?' : 
                 language === 'fr' ? 'Pourquoi choisir MedAI?' : 
                 'Why choose MedAI?'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'es' ? 'Nuestra plataforma no es solo una herramienta más, es la solución que tu institución necesita para salvar más vidas y operar con máxima eficiencia.' :
                 language === 'fr' ? 'Notre plateforme n\'est pas seulement un outil de plus, c\'est la solution dont votre institution a besoin pour sauver plus de vies et opérer avec une efficacité maximale.' :
                 'Our platform is not just another tool, it\'s the solution your institution needs to save more lives and operate with maximum efficiency.'}
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {language === 'es' ? 'Solicita una Demo Personalizada' : 
                 language === 'fr' ? 'Demandez une Démo Personnalisée' : 
                 'Request a Personalized Demo'}
              </CardTitle>
              <CardDescription className="text-center">
                {language === 'es' ? 'Nuestro equipo de expertos te mostrará cómo MedAI puede transformar tu institución' :
                 language === 'fr' ? 'Notre équipe d\'experts vous montrera comment MedAI peut transformer votre institution' :
                 'Our team of experts will show you how MedAI can transform your institution'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    {language === 'es' ? 'Nombre' : language === 'fr' ? 'Prénom' : 'First Name'}
                  </Label>
                  <Input id="firstName" placeholder={language === 'es' ? 'Juan' : language === 'fr' ? 'Jean' : 'John'} className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    {language === 'es' ? 'Apellido' : language === 'fr' ? 'Nom' : 'Last Name'}
                  </Label>
                  <Input id="lastName" placeholder={language === 'es' ? 'Pérez' : language === 'fr' ? 'Dupont' : 'Smith'} className="rounded-2xl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">
                  {language === 'es' ? 'Institución' : language === 'fr' ? 'Institution' : 'Institution'}
                </Label>
                <Input id="institution" placeholder={language === 'es' ? 'Hospital General' : language === 'fr' ? 'Hôpital Général' : 'General Hospital'} className="rounded-2xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === 'es' ? 'Email Corporativo' : language === 'fr' ? 'Email Corporatif' : 'Corporate Email'}
                </Label>
                <Input id="email" type="email" placeholder="medico@hospital.com" className="rounded-2xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">
                  {language === 'es' ? 'Teléfono' : language === 'fr' ? 'Téléphone' : 'Phone'}
                </Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="rounded-2xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">
                  {language === 'es' ? 'Cuéntanos sobre tu institución' : 
                   language === 'fr' ? 'Parlez-nous de votre institution' : 
                   'Tell us about your institution'}
                </Label>
                <Textarea 
                  id="message" 
                  placeholder={language === 'es' ? 'Tipo de institución, número de pacientes, necesidades específicas...' :
                               language === 'fr' ? 'Type d\'institution, nombre de patients, besoins spécifiques...' :
                               'Type of institution, number of patients, specific needs...'}
                  className="rounded-2xl"
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg py-3">
                {language === 'es' ? 'Solicitar Demo Gratuita' : 
                 language === 'fr' ? 'Demander Démo Gratuite' : 
                 'Request Free Demo'}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-8">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'es' ? '¿Prefieres hablar directamente?' : 
                 language === 'fr' ? 'Préférez-vous parler directement?' : 
                 'Prefer to speak directly?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'es' ? 'Nuestros especialistas están disponibles para resolver todas tus dudas' :
                 language === 'fr' ? 'Nos spécialistes sont disponibles pour résoudre tous vos doutes' :
                 'Our specialists are available to resolve all your questions'}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">ventas@medai.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">
                    {language === 'es' ? 'Lun-Vie 9AM-6PM' : language === 'fr' ? 'Lun-Ven 9H-18H' : 'Mon-Fri 9AM-6PM'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="outline" className="rounded-2xl backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                {language === 'es' ? 'Ver Precios' : language === 'fr' ? 'Voir Prix' : 'View Pricing'}
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="rounded-2xl backdrop-blur-sm border-green-200 hover:bg-green-50">
                {language === 'es' ? 'Ver Características' : language === 'fr' ? 'Voir Caractéristiques' : 'View Features'}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sales;
