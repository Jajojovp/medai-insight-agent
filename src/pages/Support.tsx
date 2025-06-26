
import { MessageCircle, Phone, Mail, Clock, Book, Video, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PublicNavigation from "@/components/PublicNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Support = () => {
  const { language } = useLanguage();

  const supportChannels = [
    {
      icon: MessageCircle,
      title: language === 'es' ? 'Chat en Vivo' : language === 'fr' ? 'Chat en Direct' : 'Live Chat',
      description: language === 'es' ? 'Respuesta inmediata de nuestros expertos técnicos' : 
                   language === 'fr' ? 'Réponse immédiate de nos experts techniques' :
                   'Immediate response from our technical experts',
      availability: language === 'es' ? '24/7 Disponible' : language === 'fr' ? '24/7 Disponible' : '24/7 Available',
      response: language === 'es' ? '< 2 minutos' : language === 'fr' ? '< 2 minutes' : '< 2 minutes',
      color: 'bg-green-500'
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Soporte Telefónico' : language === 'fr' ? 'Support Téléphonique' : 'Phone Support',
      description: language === 'es' ? 'Llamada directa con especialistas médicos certificados' : 
                   language === 'fr' ? 'Appel direct avec spécialistes médicaux certifiés' :
                   'Direct call with certified medical specialists',
      availability: language === 'es' ? 'Lun-Dom 7AM-11PM' : language === 'fr' ? 'Lun-Dim 7H-23H' : 'Mon-Sun 7AM-11PM',
      response: language === 'es' ? 'Inmediato' : language === 'fr' ? 'Immédiat' : 'Immediate',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: language === 'es' ? 'Email Técnico' : language === 'fr' ? 'Email Technique' : 'Technical Email',
      description: language === 'es' ? 'Consultas detalladas y documentación especializada' : 
                   language === 'fr' ? 'Consultations détaillées et documentation spécialisée' :
                   'Detailed consultations and specialized documentation',
      availability: language === 'es' ? '24/7 Disponible' : language === 'fr' ? '24/7 Disponible' : '24/7 Available',
      response: language === 'es' ? '< 4 horas' : language === 'fr' ? '< 4 heures' : '< 4 hours',
      color: 'bg-purple-500'
    }
  ];

  const resourcesData = [
    {
      icon: Book,
      title: language === 'es' ? 'Base de Conocimientos' : language === 'fr' ? 'Base de Connaissances' : 'Knowledge Base',
      description: language === 'es' ? '500+ artículos técnicos y guías médicas especializadas' : 
                   language === 'fr' ? '500+ articles techniques et guides médicaux spécialisés' :
                   '500+ technical articles and specialized medical guides'
    },
    {
      icon: Video,
      title: language === 'es' ? 'Video Tutoriales' : language === 'fr' ? 'Tutoriels Vidéo' : 'Video Tutorials',
      description: language === 'es' ? 'Aprende paso a paso con casos médicos reales' : 
                   language === 'fr' ? 'Apprenez étape par étape avec cas médicaux réels' :
                   'Learn step by step with real medical cases'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Comunidad Médica' : language === 'fr' ? 'Communauté Médicale' : 'Medical Community',
      description: language === 'es' ? 'Conecta con otros profesionales usando MedAI' : 
                   language === 'fr' ? 'Connectez-vous avec d\'autres professionnels utilisant MedAI' :
                   'Connect with other professionals using MedAI'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Estado del Sistema' : language === 'fr' ? 'État du Système' : 'System Status',
      description: language === 'es' ? 'Monitoreo en tiempo real de todos nuestros servicios' : 
                   language === 'fr' ? 'Surveillance en temps réel de tous nos services' :
                   'Real-time monitoring of all our services'
    }
  ];

  const priorities = [
    { value: 'critical', label: language === 'es' ? 'Crítico - Paciente en Riesgo' : language === 'fr' ? 'Critique - Patient en Risque' : 'Critical - Patient at Risk' },
    { value: 'high', label: language === 'es' ? 'Alta - Problema Urgente' : language === 'fr' ? 'Haute - Problème Urgent' : 'High - Urgent Issue' },
    { value: 'medium', label: language === 'es' ? 'Media - Consulta General' : language === 'fr' ? 'Moyenne - Consultation Générale' : 'Medium - General Inquiry' },
    { value: 'low', label: language === 'es' ? 'Baja - Pregunta Informativa' : language === 'fr' ? 'Basse - Question Informative' : 'Low - Informational Question' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Soporte' : language === 'fr' ? 'Support' : 'Support'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Soporte Médico Especializado' : 
             language === 'fr' ? 'Support Médical Spécialisé' : 
             'Specialized Medical Support'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Nuestro equipo de expertos médicos y técnicos está disponible 24/7 para garantizar que salves más vidas' :
             language === 'fr' ? 'Notre équipe d\'experts médicaux et techniques est disponible 24/7 pour garantir que vous sauviez plus de vies' :
             'Our team of medical and technical experts is available 24/7 to ensure you save more lives'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {channel.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {channel.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {language === 'es' ? 'Disponibilidad:' : language === 'fr' ? 'Disponibilité:' : 'Availability:'}
                    </span>
                    <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full">
                      {channel.availability}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {language === 'es' ? 'Respuesta:' : language === 'fr' ? 'Réponse:' : 'Response:'}
                    </span>
                    <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
                      {channel.response}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {language === 'es' ? 'Crear Ticket de Soporte' : 
                 language === 'fr' ? 'Créer Ticket de Support' : 
                 'Create Support Ticket'}
              </CardTitle>
              <CardDescription>
                {language === 'es' ? 'Describe tu consulta y nuestros expertos te ayudarán inmediatamente' :
                 language === 'fr' ? 'Décrivez votre consultation et nos experts vous aideront immédiatement' :
                 'Describe your inquiry and our experts will help you immediately'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {language === 'es' ? 'Nombre Completo' : language === 'fr' ? 'Nom Complet' : 'Full Name'}
                  </Label>
                  <Input id="name" placeholder={language === 'es' ? 'Dr. Juan Pérez' : language === 'fr' ? 'Dr. Jean Dupont' : 'Dr. John Smith'} className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {language === 'es' ? 'Email' : language === 'fr' ? 'Email' : 'Email'}
                  </Label>
                  <Input id="email" type="email" placeholder="medico@hospital.com" className="rounded-2xl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">
                  {language === 'es' ? 'Institución Médica' : language === 'fr' ? 'Institution Médicale' : 'Medical Institution'}
                </Label>
                <Input id="institution" placeholder={language === 'es' ? 'Hospital General' : language === 'fr' ? 'Hôpital Général' : 'General Hospital'} className="rounded-2xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">
                  {language === 'es' ? 'Prioridad' : language === 'fr' ? 'Priorité' : 'Priority'}
                </Label>
                <Select>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder={language === 'es' ? 'Selecciona prioridad' : language === 'fr' ? 'Sélectionnez priorité' : 'Select priority'} />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        {priority.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">
                  {language === 'es' ? 'Asunto' : language === 'fr' ? 'Sujet' : 'Subject'}
                </Label>
                <Input id="subject" placeholder={language === 'es' ? 'Error en análisis de diabetes' : language === 'fr' ? 'Erreur dans analyse diabète' : 'Error in diabetes analysis'} className="rounded-2xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">
                  {language === 'es' ? 'Descripción Detallada' : language === 'fr' ? 'Description Détaillée' : 'Detailed Description'}
                </Label>
                <Textarea 
                  id="description" 
                  placeholder={language === 'es' ? 'Describe el problema, pasos realizados, mensajes de error...' :
                               language === 'fr' ? 'Décrivez le problème, étapes réalisées, messages d\'erreur...' :
                               'Describe the problem, steps taken, error messages...'}
                  className="rounded-2xl"
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 rounded-2xl text-lg py-3">
                {language === 'es' ? 'Enviar Ticket Urgente' : 
                 language === 'fr' ? 'Envoyer Ticket Urgent' : 
                 'Send Urgent Ticket'}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                {language === 'es' ? 'Para emergencias médicas críticas, llama al +1 (555) 911-HELP' :
                 language === 'fr' ? 'Pour urgences médicales critiques, appelez le +1 (555) 911-HELP' :
                 'For critical medical emergencies, call +1 (555) 911-HELP'}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {language === 'es' ? 'Recursos de Autoayuda' : 
                 language === 'fr' ? 'Ressources d\'Auto-assistance' : 
                 'Self-Help Resources'}
              </h2>
              <div className="space-y-4">
                {resourcesData.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-2xl">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{resource.title}</h3>
                            <p className="text-sm text-gray-600">{resource.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">
                    {language === 'es' ? 'Horarios de Soporte' : 
                     language === 'fr' ? 'Horaires de Support' : 
                     'Support Hours'}
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">
                      {language === 'es' ? 'Chat/Email:' : language === 'fr' ? 'Chat/Email:' : 'Chat/Email:'}
                    </span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">
                      {language === 'es' ? 'Teléfono:' : language === 'fr' ? 'Téléphone:' : 'Phone:'}
                    </span>
                    <span>
                      {language === 'es' ? 'Lun-Dom 7AM-11PM' : language === 'fr' ? 'Lun-Dim 7H-23H' : 'Mon-Sun 7AM-11PM'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">
                      {language === 'es' ? 'Emergencias:' : language === 'fr' ? 'Urgences:' : 'Emergencies:'}
                    </span>
                    <span className="text-red-600 font-medium">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'es' ? 'Contacto Directo' : 
                 language === 'fr' ? 'Contact Direct' : 
                 'Direct Contact'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'es' ? 'Para consultas inmediatas, nuestros especialistas están disponibles' :
                 language === 'fr' ? 'Pour consultations immédiates, nos spécialistes sont disponibles' :
                 'For immediate consultations, our specialists are available'}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">+1 (555) 911-HELP</div>
                  <div className="text-sm text-gray-500">
                    {language === 'es' ? 'Emergencias Médicas' : language === 'fr' ? 'Urgences Médicales' : 'Medical Emergencies'}
                  </div>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">soporte@medai.com</div>
                  <div className="text-sm text-gray-500">
                    {language === 'es' ? 'Soporte Técnico' : language === 'fr' ? 'Support Technique' : 'Technical Support'}
                  </div>
                </div>
                <div className="text-center">
                  <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">
                    {language === 'es' ? 'Chat en Vivo' : language === 'fr' ? 'Chat en Direct' : 'Live Chat'}
                  </div>
                  <div className="text-sm text-gray-500">24/7</div>
                </div>
              </div>
              <div className="mt-6 flex gap-4 justify-center">
                <Link to="/documentation">
                  <Button variant="outline" className="rounded-2xl backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                    {language === 'es' ? 'Ver Documentación' : language === 'fr' ? 'Voir Documentation' : 'View Documentation'}
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" className="rounded-2xl backdrop-blur-sm border-green-200 hover:bg-green-50">
                    {language === 'es' ? 'Explorar Recursos' : language === 'fr' ? 'Explorer Ressources' : 'Explore Resources'}
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

export default Support;
