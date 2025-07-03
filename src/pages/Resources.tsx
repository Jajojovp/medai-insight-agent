
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Video, FileText, Users, Lightbulb } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Recursos
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Recursos Médicos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guías, tutoriales y recursos educativos para maximizar el uso de MedAI en tu práctica médica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Guías Clínicas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Protocolos paso a paso para cada uno de los 12 tipos de análisis médico predictivo
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Videos Tutoriales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Capacitación visual para médicos sobre el uso efectivo de modelos de IA en diagnóstico
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Casos de Estudio</CardTitle>
            </CardHeader>  
            <CardContent>
              <p className="text-center text-gray-600">
                Casos reales de hospitales que han implementado con éxito MedAI en sus flujos de trabajo
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Centro de Aprendizaje</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                Accede a nuestro centro de aprendizaje completo con webinars, certificaciones y recursos educativos continuos para profesionales médicos.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                Explorar Recursos
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
