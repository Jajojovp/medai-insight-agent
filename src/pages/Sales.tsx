
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, Phone, Mail, Calendar } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Sales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Ventas
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Equipo de Ventas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecta con nuestros especialistas en soluciones médicas para encontrar el plan perfecto para tu institución
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Consultoría Especializada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Nuestros expertos en IA médica te ayudarán a elegir los modelos más adecuados para tu especialidad
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">ROI Garantizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Demostramos el retorno de inversión mediante reducción de tiempos de espera y mejora en diagnósticos
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Implementación Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Servicio de implementación completo con capacitación del equipo médico y soporte técnico 24/7
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Contacta con Ventas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                Agenda una consulta gratuita con nuestros especialistas en IA médica para hospitales y centros de salud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Consulta
                </Button>
                <Button variant="outline" className="rounded-2xl">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sales;
