
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Heart, 
  Activity, 
  Shield, 
  Users, 
  Zap,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Mail,
  Droplets,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Landing = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Gracias por tu interés!",
      description: "Te contactaremos pronto para coordinar tu demo personalizada.",
    });
    setEmail('');
  };

  const diseases = [
    { name: 'Diabetes Tipo 2', models: 9, icon: Droplets, color: 'blue', link: '/diabetes' },
    { name: 'Cáncer de Mama', models: 5, icon: Users, color: 'pink', link: '/breast-cancer' },
    { name: 'Cáncer de Próstata', models: 4, icon: Activity, color: 'indigo', link: '/prostate-cancer' },
    { name: 'Enfermedades Cardíacas', models: 5, icon: Heart, color: 'red', link: '/heart-disease' },
    { name: 'Accidente Cerebrovascular', models: 5, icon: Brain, color: 'purple', link: '/stroke' },
    { name: 'Enfermedad Renal Crónica', models: 5, icon: Shield, color: 'teal', link: '/chronic-kidney-disease' },
    { name: 'Cáncer de Páncreas', models: 4, icon: Zap, color: 'orange', link: '/pancreatic-cancer' },
    { name: 'Cáncer de Pulmón', models: 4, icon: Activity, color: 'gray', link: '/lung-cancer' },
    { name: 'Cáncer de Hígado', models: 4, icon: Users, color: 'green', link: '/liver-cancer' },
    { name: 'Cáncer de Estómago', models: 4, icon: Droplets, color: 'yellow', link: '/stomach-cancer' },
    { name: 'Leucemia', models: 4, icon: Activity, color: 'red', link: '/leukemia' },
    { name: 'Epilepsia', models: 3, icon: Brain, color: 'purple', link: '/epilepsy' }
  ];

  const stats = [
    { number: '53+', label: 'Modelos de IA Médica', icon: Brain },
    { number: '12', label: 'Enfermedades Analizadas', icon: Heart },
    { number: '96.8%', label: 'Precisión Promedio', icon: TrendingUp },
    { number: '24/7', label: 'Soporte Médico', icon: Shield }
  ];

  const testimonials = [
    {
      name: "Dr. María González",
      specialty: "Endocrinóloga",
      hospital: "Hospital General Central",
      content: "MedAI ha revolucionado mi práctica. Los análisis predictivos me permiten detectar diabetes tipo 2 con una precisión increíble.",
      rating: 5
    },
    {
      name: "Dr. Carlos Rodríguez",
      specialty: "Oncólogo",
      hospital: "Instituto Nacional de Cáncer",
      content: "La capacidad de análisis de múltiples tipos de cáncer en una sola plataforma es extraordinaria. Imprescindible para cualquier oncólogo.",
      rating: 5
    },
    {
      name: "Dra. Ana Martínez",
      specialty: "Cardióloga",
      hospital: "Clínica Cardiovascular",
      content: "Los modelos de predicción cardiovascular son extremadamente precisos. Ha mejorado significativamente nuestros diagnósticos tempranos.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full text-sm px-4 py-2">
            🚀 Plataforma #1 en IA Médica Predictiva
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            MedAI
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-4xl mx-auto">
            Análisis Predictivo con IA para 12 Enfermedades Críticas
          </p>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            53+ modelos especializados de inteligencia artificial médica para diagnóstico predictivo preciso de las enfermedades más prevalentes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg px-8 py-4">
                <Play className="h-5 w-5 mr-2" />
                Ver Demo Médica
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="rounded-2xl text-lg px-8 py-4">
                Ver Planes
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Diseases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enfermedades Analizadas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análisis predictivo especializado para las 12 enfermedades más críticas con modelos de IA médica avanzada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diseases.map((disease, index) => {
            const Icon = disease.icon;
            return (
              <Link key={index} to={disease.link}>
                <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl h-full cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-${disease.color}-500 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{disease.name}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {disease.models} Modelos IA
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Lo que dicen los médicos</h2>
          <p className="text-xl text-gray-600">Testimonios de profesionales que ya utilizan MedAI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.specialty}</div>
                  <div className="text-sm text-gray-500">{testimonial.hospital}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Comienza a Salvar Vidas Hoy
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a miles de médicos que ya utilizan MedAI para diagnósticos predictivos más precisos
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 rounded-2xl"
              />
              <Button type="submit" variant="secondary" className="rounded-2xl whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" />
                Solicitar Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
