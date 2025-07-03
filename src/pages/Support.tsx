
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, Clock, Shield, Book, Headphones } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Soporte
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Centro de Soporte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtén ayuda técnica especializada para maximizar el uso de MedAI en tu práctica médica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Chat en Vivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Soporte técnico inmediato para resolver dudas sobre los 53+ modelos de IA médica
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Soporte 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Asistencia técnica disponible las 24 horas para casos críticos y emergencias médicas
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Base de Conocimientos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Biblioteca completa de tutoriales, FAQ y guías para cada tipo de análisis médico
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Soporte Especializado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                Nuestro equipo de soporte incluye médicos especialistas e ingenieros de IA para brindar asistencia completa.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                Contactar Soporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
