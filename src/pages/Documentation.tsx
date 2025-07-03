
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Database, Shield, Zap, Book, Terminal } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            Documentación
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Documentación Técnica
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documentación completa para integrar y utilizar los 53+ modelos de IA médica en tus sistemas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Guía de Integración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Instrucciones paso a paso para integrar MedAI en sistemas hospitalarios existentes
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Referencia de API</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Documentación completa de endpoints, parámetros y respuestas para los 12 tipos de análisis
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Terminal className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">Ejemplos de Código</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Ejemplos prácticos en Python, JavaScript, PHP y otros lenguajes para cada modelo de IA
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Documentación Interactiva</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                Explora nuestra documentación interactiva con ejemplos en vivo, pruebas de API y simuladores para cada tipo de análisis médico.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl">
                Explorar Documentación
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
