import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const LiverCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-yellow-100/80 text-yellow-800 rounded-full">
            {language === "es" ? "Cáncer de Hígado" : 
             language === "fr" ? "Cancer du Foie" : 
             "Liver Cancer"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Cáncer de Hígado" : 
             language === "fr" ? "Analyse Prédictive du Cancer du Foie" : 
             "Liver Cancer Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 58+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado del cáncer de hígado con 98.5% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 58+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et gestion personnalisée du cancer du foie avec 98.5% de précision maximale" :
             "Medical platform with 58+ specialized AI models for early detection, risk stratification and personalized management of liver cancer with 98.5% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-yellow-600" />
              {language === "es" ? "Información Clave - Cáncer de Hígado" :
               language === "fr" ? "Information Clé - Cancer du Foie" :
               "Key Information - Liver Cancer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El cáncer de hígado es una neoplasia maligna que se origina en las células del hígado. Es una de las principales causas de muerte por cáncer a nivel mundial, con más de 900,000 nuevos casos anuales." :
                   language === "fr" ? "Le cancer du foie est une néoplasie maligne qui prend naissance dans les cellules du foie. C\\'est l\\'une des principales causes de décès par cancer dans le monde, avec plus de 900 000 nouveaux cas annuels." :
                   "Liver cancer is a malignant neoplasm that originates in the cells of the liver. It is one of the leading causes of cancer death worldwide, with over 900,000 new cases annually."}
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " 906,000 casos nuevos en 2020. Tasa de supervivencia a 5 años: 18%." :
                     language === "fr" ? " 906 000 nouveaux cas en 2020. Taux de survie à 5 ans: 18 %." :
                     " 906,000 new cases in 2020. 5-year survival rate: 18%."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  {language === "es" ? "Clasificación de Riesgo" :
                   language === "fr" ? "Classification du Risque" :
                   "Risk Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Bajo:</strong> {language === "es" ? "Tumores pequeños, sin invasión vascular, función hepática preservada" : language === "fr" ? "Petites tumeurs, sans invasion vasculaire, fonction hépatique préservée" : "Small tumors, no vascular invasion, preserved liver function"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Intermedio:</strong> {language === "es" ? "Tumores más grandes, invasión vascular limitada, función hepática comprometida" : language === "fr" ? "Tumeurs plus grandes, invasion vasculaire limitée, fonction hépatique compromise" : "Larger tumors, limited vascular invasion, compromised liver function"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Alto:</strong> {language === "es" ? "Tumores grandes, invasión vascular extensa, metástasis, función hepática severamente comprometida" : language === "fr" ? "Grandes tumeurs, invasion vasculaire étendue, métastases, fonction hépatique gravement compromise" : "Large tumors, extensive vascular invasion, metastasis, severely compromised liver function"}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Factors Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-orange-500" />
              {language === "es" ? "Factores de Riesgo y Detección" :
               language === "fr" ? "Facteurs de Risque et Détection" :
               "Risk Factors and Detection"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {language === "es" ? "Factores No Modificables" :
                   language === "fr" ? "Facteurs Non Modifiables" :
                   "Non-Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo después de los 50 años" : language === "fr" ? "Risque accru après 50 ans" : "Increased risk after 50 years"}</li>
                  <li>• <strong>{language === "es" ? "Sexo:" : language === "fr" ? "Sexe:" : "Sex:"}</strong> {language === "es" ? "Hombres tienen mayor riesgo" : language === "fr" ? "Les hommes ont un risque plus élevé" : "Men have a higher risk"}</li>
                  <li>• <strong>{language === "es" ? "Etnia:" : language === "fr" ? "Origine ethnique:" : "Race/Ethnicity:"}</strong> {language === "es" ? "Mayor incidencia en Asia y África" : language === "fr" ? "Incidence plus élevée en Asie et en Afrique" : "Higher incidence in Asia and Africa"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Riesgo aumentado si familiares cercanos afectados" : language === "fr" ? "Risque accru si des proches sont touchés" : "Increased risk if close relatives are affected"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Infección crónica por VHB/VHC:" : language === "fr" ? "Infection chronique par VHB/VHC :" : "Chronic HBV/HCV infection:"}</strong> {language === "es" ? "Principal factor de riesgo a nivel mundial" : language === "fr" ? "Principal facteur de risque dans le monde" : "Leading risk factor worldwide"}</li>
                  <li>• <strong>{language === "es" ? "Cirrosis:" : language === "fr" ? "Cirrhose :" : "Cirrhosis:"}</strong> {language === "es" ? "Cicatrización del hígado por diversas causas" : language === "fr" ? "Cicatrisation du foie pour diverses raisons" : "Scarring of the liver from various causes"}</li>
                  <li>• <strong>{language === "es" ? "Consumo excesivo de alcohol:" : language === "fr" ? "Consommation excessive d'alcool :" : "Excessive alcohol consumption:"}</strong> {language === "es" ? "Aumenta el riesgo de cirrosis y cáncer" : language === "fr" ? "Augmente le risque de cirrhose et de cancer" : "Increases the risk of cirrhosis and cancer"}</li>
                  <li>• <strong>{language === "es" ? "Enfermedad del hígado graso no alcohólico (EHGNA):" : language === "fr" ? "Maladie du foie gras non alcoolique (NAFLD) :" : "Non-alcoholic fatty liver disease (NAFLD):"}</strong> {language === "es" ? "Asociada con obesidad y diabetes" : language === "fr" ? "Associée à l'obésité et au diabète" : "Associated with obesity and diabetes"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Vigilancia en pacientes de alto riesgo:" : language === "fr" ? "Surveillance chez les patients à haut risque :" : "Surveillance in high-risk patients:"}</strong> {language === "es" ? "Ecografía hepática cada 6 meses" : language === "fr" ? "Échographie hépatique tous les 6 mois" : "Liver ultrasound every 6 months"}</li>
                  <li>• <strong>{language === "es" ? "Alfa-fetoproteína (AFP):" : language === "fr" ? "Alpha-fœtoprotéine (AFP) :" : "Alpha-fetoprotein (AFP):"}</strong> {language === "es" ? "Medición en sangre, aunque su sensibilidad es limitada" : language === "fr" ? "Mesure dans le sang, bien que sa sensibilité soit limitée" : "Measurement in blood, although its sensitivity is limited"}</li>
                  <li>• <strong>{language === "es" ? "Resonancia magnética (RM) o tomografía computarizada (TC):" : language === "fr" ? "Imagerie par résonance magnétique (IRM) ou tomodensitométrie (TDM) :" : "Magnetic resonance imaging (MRI) or computed tomography (CT):"}</strong> {language === "es" ? "Para confirmar y estadificar el cáncer" : language === "fr" ? "Pour confirmer et stadifier le cancer" : "To confirm and stage the cancer"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Detección Temprana" : 
                 language === "fr" ? "Détection Précoce" : 
                 "Early Detection"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos de IA para analizar imágenes de ecografías, resonancias y tomografías para detectar lesiones sospechosas en el hígado con alta precisión." :
                 language === "fr" ? "Algorithmes d'IA pour analyser les images d'échographies, de résonances et de tomodensitométries afin de détecter les lésions suspectes dans le foie avec une grande précision." :
                 "AI algorithms to analyze images from ultrasounds, MRIs, and CT scans to detect suspicious lesions in the liver with high accuracy."}
              </p>
              <Badge className="w-full justify-center bg-yellow-100 text-yellow-800">98.5% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Análisis de Factores de Riesgo" : 
                 language === "fr" ? "Analyse des Facteurs de Risque" : 
                 "Risk Factor Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos de IA para evaluar el riesgo individual de desarrollar cáncer de hígado basados en historial médico, hábitos y pruebas de laboratorio." :
                 language === "fr" ? "Modèles d'IA pour évaluer le risque individuel de développer un cancer du foie en fonction des antécédents médicaux, des habitudes et des tests de laboratoire." :
                 "AI models to assess the individual risk of developing liver cancer based on medical history, habits, and laboratory tests."}
              </p>
              <Badge className="w-full justify-center bg-orange-100 text-orange-800">Evaluación Precisa</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Respuesta a Tratamiento" : 
                 language === "fr" ? "Prédiction de la Réponse au Traitement" : 
                 "Treatment Response Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos predictivos para determinar la probabilidad de éxito de diferentes terapias (cirugía, quimioterapia, inmunoterapia) según características del paciente y del tumor." :
                 language === "fr" ? "Algorithmes prédictifs pour déterminer la probabilité de succès de différentes thérapies (chirurgie, chimiothérapie, immunothérapie) en fonction des caractéristiques du patient et de la tumeur." :
                 "Predictive algorithms to determine the likelihood of success of different therapies (surgery, chemotherapy, immunotherapy) based on patient and tumor characteristics."}
              </p>
              <Badge className="w-full justify-center bg-amber-100 text-amber-800">Terapia Optimizada</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-yellow-600" />
              {language === "es" ? "Guías de Tratamiento" :
               language === "fr" ? "Guides de Traitement" :
               "Treatment Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Opciones Curativas" :
                   language === "fr" ? "Options Curatives" :
                   "Curative Options"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Resección quirúrgica:" : language === "fr" ? "Résection chirurgicale :" : "Surgical resection:"}</strong> {language === "es" ? "Extirpación del tumor si es operable" : language === "fr" ? "Ablation de la tumeur si elle est opérable" : "Removal of the tumor if operable"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trasplante de hígado:" : language === "fr" ? "Transplantation hépatique :" : "Liver transplantation:"}</strong> {language === "es" ? "Para pacientes con enfermedad hepática avanzada" : language === "fr" ? "Pour les patients atteints d'une maladie hépatique avancée" : "For patients with advanced liver disease"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Ablación por radiofrecuencia (RFA):" : language === "fr" ? "Ablation par radiofréquence (RFA) :" : "Radiofrequency ablation (RFA):"}</strong> {language === "es" ? "Destrucción del tumor con calor" : language === "fr" ? "Destruction de la tumeur par la chaleur" : "Destruction of the tumor with heat"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Opciones Paliativas" :
                   language === "fr" ? "Options Palliatives" :
                   "Palliative Options"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia:" : language === "fr" ? "Chimiothérapie :" : "Chemotherapy:"}</strong> {language === "es" ? "Para reducir el tamaño del tumor y controlar la enfermedad" : language === "fr" ? "Pour réduire la taille de la tumeur et contrôler la maladie" : "To reduce tumor size and control the disease"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Inmunoterapia:" : language === "fr" ? "Immunothérapie :" : "Immunotherapy:"}</strong> {language === "es" ? "Para estimular el sistema inmunológico a atacar el cáncer" : language === "fr" ? "Pour stimuler le système immunitaire à attaquer le cancer" : "To stimulate the immune system to attack the cancer"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia dirigida:" : language === "fr" ? "Thérapie ciblée :" : "Targeted therapy:"}</strong> {language === "es" ? "Medicamentos que atacan específicamente las células cancerosas" : language === "fr" ? "Médicaments qui attaquent spécifiquement les cellules cancéreuses" : "Drugs that specifically attack cancer cells"}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {language === "es" ? "Epidemiología Global del Cáncer de Hígado" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer du Foie" :
               "Global Liver Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">906K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos anuales (2020)" :
                   language === "fr" ? "Nouveaux cas annuels (2020)" :
                   "New cases annually (2020)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">830K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales globales" :
                   language === "fr" ? "Décès annuels mondiaux" :
                   "Global annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">18%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años" :
                   language === "fr" ? "Survie 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos relacionados con VHB/VHC" :
                   language === "fr" ? "Cas liés au VHB/VHC" :
                   "Cases related to HBV/HCV"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-yellow-50/30 to-orange-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Cáncer de Hígado" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour Cancer du Foie" : 
                 "Advanced Liver Cancer Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros 58+ modelos especializados de IA para detección temprana, estratificación de riesgo y optimización de tratamiento en cáncer de hígado. Tecnología validada clínicamente con 98.5% de precisión máxima." :
                 language === "fr" ? "Utilisez nos 58+ modèles spécialisés d'IA pour la détection précoce, la stratification des risques et l'optimisation du traitement du cancer du foie. Technologie validée cliniquement avec une précision maximale de 98,5 %." :
                 "Use our 58+ specialized AI models for early detection, risk stratification, and treatment optimization in liver cancer. Clinically validated technology with 98.5% maximum accuracy."}
              </p>
              <Button className="bg-yellow-600 hover:bg-yellow-700 rounded-2xl text-lg px-8 py-3">
                {language === 'es' ? 'Iniciar IA' : 
                 language === 'fr' ? 'Commencer IA' : 
                 'Start AI'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LiverCancer;
