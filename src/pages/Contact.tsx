
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  Brain,
  CreditCard,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    specialty: '',
    requestType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? "Request Sent" : language === 'fr' ? "Demande Envoyée" : "Solicitud Enviada",
      description: language === 'en' ? "We will contact you within 24 hours to schedule your demo." :
                   language === 'fr' ? "Nous vous contacterons dans les 24 heures pour programmer votre démo." :
                   "Te contactaremos en las próximas 24 horas para coordinar tu demo.",
    });
    setFormData({
      name: '',
      email: '',
      hospital: '',
      specialty: '',
      requestType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const pricingPlans = [
    {
      name: language === 'en' ? "Basic Plan" : language === 'fr' ? "Plan de Base" : "Plan Básico",
      price: "$50",
      period: language === 'en' ? "/month" : language === 'fr' ? "/mois" : "/mes",
      features: [
        language === 'en' ? "Up to 25 monthly analyses" : language === 'fr' ? "Jusqu'à 25 analyses mensuelles" : "Hasta 25 análisis mensuales",
        language === 'en' ? "3 basic AI models" : language === 'fr' ? "3 modèles d'IA de base" : "3 modelos de IA básicos",
        language === 'en' ? "PDF reports" : language === 'fr' ? "Rapports PDF" : "Reportes PDF",
        language === 'en' ? "Email support" : language === 'fr' ? "Support par email" : "Soporte por email"
      ],
      popular: false
    },
    {
      name: language === 'en' ? "Professional Plan" : language === 'fr' ? "Plan Professionnel" : "Plan Profesional",
      price: "$150",
      period: language === 'en' ? "/month" : language === 'fr' ? "/mois" : "/mes",
      features: [
        language === 'en' ? "Up to 100 monthly analyses" : language === 'fr' ? "Jusqu'à 100 analyses mensuelles" : "Hasta 100 análisis mensuales",
        language === 'en' ? "6 advanced AI models" : language === 'fr' ? "6 modèles d'IA avancés" : "6 modelos de IA avanzados",
        language === 'en' ? "Custom PDF reports" : language === 'fr' ? "Rapports PDF personnalisés" : "Reportes PDF personalizados",
        language === 'en' ? "Complete n8n integration" : language === 'fr' ? "Intégration n8n complète" : "Integración n8n completa",
        language === 'en' ? "Priority 24/7 support" : language === 'fr' ? "Support prioritaire 24/7" : "Soporte prioritario 24/7",
        language === 'en' ? "Advanced dashboard" : language === 'fr' ? "Tableau de bord avancé" : "Dashboard avanzado"
      ],
      popular: true
    },
    {
      name: language === 'en' ? "Hospital Plan" : language === 'fr' ? "Plan Hospitalier" : "Plan Hospitalario",
      price: "$400",
      period: language === 'en' ? "/month" : language === 'fr' ? "/mois" : "/mes",
      features: [
        language === 'en' ? "Unlimited analyses" : language === 'fr' ? "Analyses illimitées" : "Análisis ilimitados",
        language === 'en' ? "All 9 AI models" : language === 'fr' ? "Tous les 9 modèles d'IA" : "Los 9 modelos de IA",
        language === 'en' ? "Custom API" : language === 'fr' ? "API personnalisée" : "API personalizada",
        language === 'en' ? "Hospital integration" : language === 'fr' ? "Intégration hospitalière" : "Integración hospitalaria",
        language === 'en' ? "Dedicated support" : language === 'fr' ? "Support dédié" : "Soporte dedicado",
        language === 'en' ? "Team training" : language === 'fr' ? "Formation d'équipe" : "Entrenamiento del equipo",
        language === 'en' ? "Multi-user unlimited" : language === 'fr' ? "Multi-utilisateur illimité" : "Multi-usuario ilimitado"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? "Contact & Subscriptions" :
             language === 'fr' ? "Contact et Abonnements" :
             "Contacto y Suscripciones"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ? "Request a personalized demo or subscribe to our medical AI analysis services" :
             language === 'fr' ? "Demandez une démo personnalisée ou abonnez-vous à nos services d'analyse médicale IA" :
             "Solicita una demo personalizada o contrata nuestros servicios de análisis médico con IA"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>
                  {language === 'en' ? "Request Free Demo" :
                   language === 'fr' ? "Demander une Démo Gratuite" :
                   "Solicitar Demo Gratuita"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? "Full Name" :
                       language === 'fr' ? "Nom Complet" :
                       "Nombre Completo"}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={language === 'en' ? "Dr. John Smith" :
                                   language === 'fr' ? "Dr. Jean Dupont" :
                                   "Dr. Juan Pérez"}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? "Professional Email" :
                       language === 'fr' ? "Email Professionnel" :
                       "Email Profesional"}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={language === 'en' ? "john.smith@hospital.com" :
                                   language === 'fr' ? "jean.dupont@hopital.fr" :
                                   "juan.perez@hospital.com"}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? "Hospital/Clinic" :
                     language === 'fr' ? "Hôpital/Clinique" :
                     "Hospital/Clínica"}
                  </label>
                  <Input
                    value={formData.hospital}
                    onChange={(e) => handleInputChange('hospital', e.target.value)}
                    placeholder={language === 'en' ? "General Hospital" :
                                 language === 'fr' ? "Hôpital Général" :
                                 "Hospital General"}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? "Specialty" :
                       language === 'fr' ? "Spécialité" :
                       "Especialidad"}
                    </label>
                    <Select onValueChange={(value) => handleInputChange('specialty', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={
                          language === 'en' ? "Select specialty" :
                          language === 'fr' ? "Sélectionner spécialité" :
                          "Selecciona especialidad"
                        } />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="endocrinologia">
                          {language === 'en' ? "Endocrinology" :
                           language === 'fr' ? "Endocrinologie" :
                           "Endocrinología"}
                        </SelectItem>
                        <SelectItem value="medicina-interna">
                          {language === 'en' ? "Internal Medicine" :
                           language === 'fr' ? "Médecine Interne" :
                           "Medicina Interna"}
                        </SelectItem>
                        <SelectItem value="medicina-familiar">
                          {language === 'en' ? "Family Medicine" :
                           language === 'fr' ? "Médecine Familiale" :
                           "Medicina Familiar"}
                        </SelectItem>
                        <SelectItem value="cardioologia">
                          {language === 'en' ? "Cardiology" :
                           language === 'fr' ? "Cardiologie" :
                           "Cardiología"}
                        </SelectItem>
                        <SelectItem value="otro">
                          {language === 'en' ? "Other" :
                           language === 'fr' ? "Autre" :
                           "Otro"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      {language === 'en' ? "Request Type" :
                       language === 'fr' ? "Type de Demande" :
                       "Tipo de Solicitud"}
                    </label>
                    <Select onValueChange={(value) => handleInputChange('requestType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={
                          language === 'en' ? "Request type" :
                          language === 'fr' ? "Type de demande" :
                          "Tipo de solicitud"
                        } />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">
                          {language === 'en' ? "Personalized Demo" :
                           language === 'fr' ? "Démo Personnalisée" :
                           "Demo Personalizada"}
                        </SelectItem>
                        <SelectItem value="info">
                          {language === 'en' ? "Pricing Information" :
                           language === 'fr' ? "Information sur les Prix" :
                           "Información de Precios"}
                        </SelectItem>
                        <SelectItem value="integration">
                          {language === 'en' ? "Hospital Integration" :
                           language === 'fr' ? "Intégration Hospitalière" :
                           "Integración Hospitalaria"}
                        </SelectItem>
                        <SelectItem value="support">
                          {language === 'en' ? "Technical Support" :
                           language === 'fr' ? "Support Technique" :
                           "Soporte Técnico"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'en' ? "Message" :
                     language === 'fr' ? "Message" :
                     "Mensaje"}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={
                      language === 'en' ? "Tell us more about your specific needs..." :
                      language === 'fr' ? "Parlez-nous de vos besoins spécifiques..." :
                      "Cuéntanos más sobre tus necesidades específicas..."
                    }
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  {language === 'en' ? "Request Free Demo" :
                   language === 'fr' ? "Demander une Démo Gratuite" :
                   "Solicitar Demo Gratuita"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Demo Information */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">
                  {language === 'en' ? "Free Demo Includes:" :
                   language === 'fr' ? "La Démo Gratuite Comprend :" :
                   "Demo Gratuita Incluye:"}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• {language === 'en' ? "Analysis of real cases from your hospital" :
                         language === 'fr' ? "Analyse de cas réels de votre hôpital" :
                         "Análisis de casos reales de tu hospital"}</li>
                <li>• {language === 'en' ? "Personalized configuration" :
                         language === 'fr' ? "Configuration personnalisée" :
                         "Configuración personalizada"}</li>
                <li>• {language === 'en' ? "Integration with existing systems" :
                         language === 'fr' ? "Intégration avec les systèmes existants" :
                         "Integración con sistemas existentes"}</li>
                <li>• {language === 'en' ? "Medical team training" :
                         language === 'fr' ? "Formation de l'équipe médicale" :
                         "Entrenamiento del equipo médico"}</li>
                <li>• {language === 'en' ? "7-day free trial" :
                         language === 'fr' ? "Essai gratuit de 7 jours" :
                         "7 días de prueba gratuita"}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? "Subscription Plans" :
               language === 'fr' ? "Plans d'Abonnement" :
               "Planes de Suscripción"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' ? "Choose the plan that best fits your medical practice needs" :
               language === 'fr' ? "Choisissez le plan qui convient le mieux aux besoins de votre pratique médicale" :
               "Elige el plan que mejor se adapte a las necesidades de tu práctica médica"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">
                      {language === 'en' ? "Most Popular" :
                       language === 'fr' ? "Plus Populaire" :
                       "Más Popular"}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    {language === 'en' ? "Subscribe" :
                     language === 'fr' ? "S'abonner" :
                     "Contratar Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration with Stripe Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {language === 'en' ? "Secure Processing with Stripe" :
               language === 'fr' ? "Traitement Sécurisé avec Stripe" :
               "Procesamiento Seguro con Stripe"}
            </h3>
            <p className="text-blue-700 mb-4">
              {language === 'en' ? "All payments are securely processed through Stripe. We accept all major cards and offer automatic monthly billing." :
               language === 'fr' ? "Tous les paiements sont traités de manière sécurisée via Stripe. Nous acceptons toutes les cartes principales et offrons une facturation mensuelle automatique." :
               "Todos los pagos son procesados de forma segura a través de Stripe. Aceptamos todas las tarjetas principales y ofrecemos facturación mensual automática."}
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-blue-600">
              <span>• SSL {language === 'en' ? "Secure" : language === 'fr' ? "Sécurisé" : "Seguro"}</span>
              <span>• PCI Compliant</span>
              <span>• {language === 'en' ? "Auto Billing" : language === 'fr' ? "Facturation Auto" : "Facturación Automática"}</span>
              <span>• {language === 'en' ? "Easy Cancel" : language === 'fr' ? "Annulation Facile" : "Cancelación Fácil"}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
