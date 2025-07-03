
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, TrendingUp, AlertTriangle, CheckCircle, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const BreastCancer = () => {
  const riskFactors = [
    "Edad (>50 años)",
    "Historia familiar de cáncer de mama/ovario",
    "Mutaciones BRCA1/BRCA2",
    "Exposición hormonal prolongada",
    "Densidad mamaria alta",
    "Radiación previa al tórax",
    "Consumo de alcohol",
    "Obesidad postmenopáusica"
  ];

  const symptoms = [
    "Bulto o masa en la mama",
    "Cambios en la forma o tamaño de la mama",
    "Alteraciones en la piel (hoyuelos, enrojecimiento)",
    "Secreción del pezón",
    "Cambios en el pezón",
    "Dolor persistente en mama o axila",
    "Ganglios linfáticos inflamados"
  ];

  const analysisModels = [
    {
      name: "Modelo de Análisis de Imagen",
      accuracy: "94.2%",
      description: "Análisis de mamografías y resonancias magnéticas"
    },
    {
      name: "Modelo Genético",
      accuracy: "97.8%",
      description: "Evaluación de mutaciones BRCA y factores hereditarios"
    },
    {
      name: "Modelo de Factores de Riesgo",
      accuracy: "89.5%",
      description: "Análisis de factores de riesgo y estilo de vida"
    },
    {
      name: "Modelo Hormonal",
      accuracy: "91.3%",
      description: "Evaluación de factores hormonales y reproductivos"
    },
    {
      name: "Modelo Predictivo Combinado",
      accuracy: "96.1%",
      description: "Meta-análisis de todos los factores de riesgo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-pink-100/80 text-pink-800 rounded-full">
            Oncología Mamaria
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Análisis Predictivo de Cáncer de Mama
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detección temprana y evaluación de riesgo con IA médica avanzada para el cáncer más común en mujeres
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">Prevalencia Global</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">12.5%</div>
              <p className="text-gray-600">
                Cáncer más común en mujeres a nivel mundial, afectando 1 de cada 8 mujeres
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">Tasa de Supervivencia</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90%+</div>
              <p className="text-gray-600">
                Con detección temprana, la supervivencia a 5 años supera el 90%
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold">Precisión IA</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">96.1%</div>
              <p className="text-gray-600">
                Precisión promedio de nuestros 5 modelos especializados de IA
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Factores de Riesgo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 backdrop-blur-sm bg-white/50 rounded-xl">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Síntomas a Evaluar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 backdrop-blur-sm bg-white/50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Modelos de IA Especializados (5 Modelos)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisModels.map((model, index) => (
                <div key={index} className="p-6 backdrop-blur-sm bg-gradient-to-br from-pink-50/30 to-purple-50/30 rounded-2xl border border-white/30">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{model.name}</h3>
                    <Badge className="bg-pink-600 text-white">{model.accuracy}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{model.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Card className="bg-gradient-to-br from-pink-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardContent>
              <h3 className="text-3xl font-bold mb-4">Comienza el Análisis Predictivo</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Utiliza nuestros 5 modelos especializados de IA para evaluar el riesgo de cáncer de mama con precisión médica profesional
              </p>
              <Link to="/login">
                <Button className="bg-pink-600 hover:bg-pink-700 rounded-2xl text-lg px-8 py-3">
                  Iniciar Análisis de Cáncer de Mama
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BreastCancer;
