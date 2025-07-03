
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
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Contact = () => {
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
      price: "$50",
      period: "/mes",
      features: [
        "Hasta 25 análisis mensuales",
        "3 modelos de IA básicos",
        "Reportes PDF",
        "Soporte por email"
      ],
      popular: false
    },
    {
      name: "Plan Profesional",
      price: "$150",
      period: "/mes",
      features: [
        "Hasta 100 análisis mensuales",
        "Los 53+ modelos de IA",
        "Reportes PDF personalizados",
        "Integración n8n completa",
        "Soporte prioritario 24/7",
        "Dashboard avanzado"
      ],
      popular: true
    },
    {
      name: "Plan Hospitalario",
      price: "$400",
      period: "/mes",
      features: [
        "Análisis ilimitados",
        "Los 53+ modelos de IA",
        "Integración API personalizada",
        "Capacitación incluida",
        "Soporte dedicado 24/7",
        "SLA garantizado"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Contacto
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Solicita tu Demo Médica
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programa una demostración personalizada de MedAI y descubre cómo nuestra plataforma puede transformar tu práctica médica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Solicitar Demo Personalizada</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Dr. María González"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Profesional</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="maria@hospital.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Hospital/Clínica</label>
                    <Input
                      required
                      value={formData.hospital}
                      onChange={(e) => handleInputChange('hospital', e.target.value)}
                      placeholder="Hospital General"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Especialidad Médica</label>
                    <Select value={formData.specialty} onValueChange={(value) => handleInputChange('specialty', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona especialidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="endocrinologia">Endocrinología</SelectItem>
                        <SelectItem value="oncologia">Oncología</SelectItem>
                        <SelectItem value="cardiologia">Cardiología</SelectItem>
                        <SelectItem value="nefrologia">Nefrología</SelectItem>
                        <SelectItem value="medicina-interna">Medicina Interna</SelectItem>
                        <SelectItem value="medicina-familiar">Medicina Familiar</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Solicitud</label>
                  <Select value={formData.requestType} onValueChange={(value) => handleInputChange('requestType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="¿Qué te interesa más?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demo Personalizada</SelectItem>
                      <SelectItem value="pricing">Información de Precios</SelectItem>
                      <SelectItem value="integration">Integración con Sistema Existente</SelectItem>
                      <SelectItem value="training">Capacitación del Equipo</SelectItem>
                      <SelectItem value="pilot">Programa Piloto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Cuéntanos sobre tus necesidades específicas, número de pacientes mensuales, casos de uso prioritarios..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  <Calendar className="h-4 w-4 mr-2" />
                  Solicitar Demo Gratuita
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Pricing Overview */}
          <div className="space-y-6">
            <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Planes Disponibles</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pricingPlans.map((plan, index) => (
                    <div key={index} className={`p-4 rounded-2xl border ${plan.popular ? 'border-blue-500 bg-blue-50/50' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{plan.name}</h3>
                          <div className="flex items-baseline space-x-1">
                            <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                            <span className="text-gray-600">{plan.period}</span>
                          </div>
                        </div>
                        {plan.popular && (
                          <Badge className="bg-blue-600 text-white">Más Popular</Badge>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {plan.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Brain className="h-12 w-12 text-blue-600 mx-auto" />
                  <h3 className="text-xl font-bold">¿Por qué elegir MedAI?</h3>
                  <ul className="text-left space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      53+ modelos de IA médica especializados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Análisis predictivo para 12 enfermedades críticas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Integración completa con n8n y sistemas hospitalarios
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Reportes automáticos por email en PDF
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Soporte médico especializado 24/7
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
