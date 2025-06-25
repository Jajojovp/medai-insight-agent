
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  Brain,
  CreditCard,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
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
    // Aquí se integraría con el sistema de contacto real
    toast({
      title: "Solicitud Enviada",
      description: "Te contactaremos en las próximas 24 horas para coordinar tu demo.",
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
      name: "Plan Básico",
      price: "$199",
      period: "/mes",
      features: [
        "Hasta 100 análisis mensuales",
        "5 modelos de IA básicos",
        "Reportes PDF automáticos",
        "Soporte por email"
      ],
      popular: false
    },
    {
      name: "Plan Profesional",
      price: "$399",
      period: "/mes",
      features: [
        "Análisis ilimitados",
        "9 modelos de IA avanzados",
        "Reportes PDF personalizados",
        "Integración n8n completa",
        "Soporte prioritario 24/7",
        "Dashboard avanzado"
      ],
      popular: true
    },
    {
      name: "Plan Hospitalario",
      price: "$799",
      period: "/mes",
      features: [
        "Multi-usuario ilimitado",
        "Todos los modelos de IA",
        "API personalizada",
        "Integración hospitalaria",
        "Soporte dedicado",
        "Entrenamiento del equipo"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contacto y Suscripciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicita una demo personalizada o contrata nuestros servicios de análisis médico con IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>Solicitar Demo Gratuita</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre Completo</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Dr. Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Profesional</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="juan.perez@hospital.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Hospital/Clínica</label>
                  <Input
                    value={formData.hospital}
                    onChange={(e) => handleInputChange('hospital', e.target.value)}
                    placeholder="Hospital General de México"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Especialidad</label>
                    <Select onValueChange={(value) => handleInputChange('specialty', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona especialidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="endocrinologia">Endocrinología</SelectItem>
                        <SelectItem value="medicina-interna">Medicina Interna</SelectItem>
                        <SelectItem value="medicina-familiar">Medicina Familiar</SelectItem>
                        <SelectItem value="cardioologia">Cardiología</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tipo de Solicitud</label>
                    <Select onValueChange={(value) => handleInputChange('requestType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de solicitud" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Demo Personalizada</SelectItem>
                        <SelectItem value="info">Información de Precios</SelectItem>
                        <SelectItem value="integration">Integración Hospitalaria</SelectItem>
                        <SelectItem value="support">Soporte Técnico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Mensaje</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Cuéntanos más sobre tus necesidades específicas..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Solicitar Demo Gratuita
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">contact@medai.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Oficina</div>
                    <div className="text-gray-600">Ciudad de México, México</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Horario</div>
                    <div className="text-gray-600">Lun-Vie 9:00-18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Demo Gratuita Incluye:</span>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Análisis de casos reales de tu hospital</li>
                  <li>• Configuración personalizada</li>
                  <li>• Integración con sistemas existentes</li>
                  <li>• Entrenamiento del equipo médico</li>
                  <li>• 30 días de prueba gratuita</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planes de Suscripción
            </h2>
            <p className="text-lg text-gray-600">
              Elige el plan que mejor se adapte a las necesidades de tu práctica médica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Más Popular</Badge>
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
                    Contratar Plan
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
              Procesamiento Seguro con Stripe
            </h3>
            <p className="text-blue-700 mb-4">
              Todos los pagos son procesados de forma segura a través de Stripe. 
              Aceptamos todas las tarjetas principales y ofrecemos facturación mensual automática.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-blue-600">
              <span>• SSL Seguro</span>
              <span>• PCI Compliant</span>
              <span>• Facturación Automática</span>
              <span>• Cancelación Fácil</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
