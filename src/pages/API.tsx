
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Globe, Brain } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const API = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            API
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            API de Análisis Médico
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integra nuestros 53+ modelos de IA médica en tus sistemas con nuestra API RESTful robusta y segura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Endpoints RESTful
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Acceso completo a 12 tipos de análisis médico predictivo a través de endpoints HTTP simples y consistentes
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Seguridad HIPAA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Autenticación OAuth 2.0, encriptación end-to-end y cumplimiento total con regulaciones médicas
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                Respuesta Rápida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Análisis predictivos en menos de 2 segundos con 99.9% de disponibilidad y escalabilidad automática
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Documentación Completa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                Accede a nuestra documentación técnica completa con ejemplos de código, guías de integración y casos de uso para cada uno de los 12 tipos de análisis médico.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                Ver Documentación
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default API;
