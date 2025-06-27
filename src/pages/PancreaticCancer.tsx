import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PancreaticCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-violet-100/80 text-violet-800 rounded-full">
            {language === "es" ? "Cáncer de Páncreas" : 
             language === "fr" ? "Cancer du Pancréas" : 
             "Pancreatic Cancer"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Cáncer de Páncreas" : 
             language === "fr" ? "Analyse Prédictive du Cancer du Pancréas" : 
             "Pancreatic Cancer Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado del cáncer de páncreas con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d'IA pour détection précoce, stratification du risque et gestion personnalisée du cancer du pancréas avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of pancreatic cancer with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Información Clave - Cáncer de Páncreas" :
               language === "fr" ? "Information Clé - Cancer du Pancréas" :
               "Key Information - Pancreatic Cancer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El cáncer de páncreas es una enfermedad en la que se forman células malignas en los tejidos del páncreas, un órgano vital para la digestión y la regulación del azúcar en sangre. Es conocido por su alta tasa de mortalidad debido a la dificultad en la detección temprana." :
                   language === "fr" ? "Le cancer du pancréas est une maladie dans laquelle des cellules malignes se forment dans les tissus du pancréas, un organe vital pour la digestion et la régulation du sucre dans le sang. Il est connu pour son taux de mortalité élevé en raison de la difficulté de la détection précoce." :
                   "Pancreatic cancer is a disease in which malignant cells form in the tissues of the pancreas, an organ vital for digestion and blood sugar regulation. It is known for its high mortality rate due to the difficulty in early detection."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " Aproximadamente 495,000 nuevos casos diagnosticados globalmente cada año. La tasa de supervivencia a 5 años es inferior al 10%." :
                     language === "fr" ? " Environ 495 000 nouveaux cas diagnostiqués mondialement chaque année. Le taux de survie à 5 ans est inférieur à 10%." :
                     " Approximately 495,000 new cases diagnosed globally each year. The 5-year survival rate is less than 10%."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  {language === "es" ? "Clasificación y Tipos" :
                   language === "fr" ? "Classification et Types" :
                   "Classification and Types"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Adenocarcinoma ductal:</strong> {language === "es" ? "Representa el 90% de los casos. Se origina en las células que recubren los conductos pancreáticos." : language === "fr" ? "Représente 90% des cas. Se développe à partir des cellules qui tapissent les canaux pancréatiques." : "Represents 90% of cases. Originates in the cells lining the pancreatic ducts."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Tumores neuroendocrinos:</strong> {language === "es" ? "Menos comunes. Se desarrollan a partir de las células productoras de hormonas del páncreas." : language === "fr" ? "Moins courants. Se développent à partir des cellules productrices d'hormones du pancréas." : "Less common. Develop from the hormone-producing cells of the pancreas."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Tumores quísticos:</strong> {language === "es" ? "Incluyen cistoadenomas serosos y mucinosos, y neoplasias quísticas mucinosas papilares intraductales (IPMN)." : language === "fr" ? "Comprennent les cystadénomes séreux et mucineux, et les néoplasies kystiques mucineuses papillaires intraductales (IPMN)." : "Include serous and mucinous cystadenomas, and intraductal papillary mucinous neoplasms (IPMN)."}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo después de los 65 años." : language === "fr" ? "Risque accru après 65 ans." : "Increased risk after 65 years."}</li>
                  <li>• <strong>{language === "es" ? "Etnia:" : language === "fr" ? "Origine ethnique:" : "Race/Ethnicity:"}</strong> {language === "es" ? "Afroamericanos tienen una tasa ligeramente más alta." : language === "fr" ? "Les Afro-Américains ont un taux légèrement plus élevé." : "African Americans have a slightly higher rate."}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Riesgo aumentado si hay antecedentes de cáncer de páncreas." : language === "fr" ? "Risque accru en cas d'antécédents de cancer du pancréas." : "Increased risk if there is a history of pancreatic cancer."}</li>
                  <li>• <strong>{language === "es" ? "Genética:" : language === "fr" ? "Génétique:" : "Genetics:"}</strong> BRCA1/2, síndrome de Peutz-Jeghers, síndrome de Lynch.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Principal factor de riesgo modificable. Aumenta el riesgo 2-3 veces." : language === "fr" ? "Principal facteur de risque modifiable. Augmente le risque de 2 à 3 fois." : "Main modifiable risk factor. Increases risk 2-3 times."}</li>
                  <li>• <strong>{language === "es" ? "Diabetes:" : language === "fr" ? "Diabète:" : "Diabetes:"}</strong> {language === "es" ? "Especialmente la diabetes de inicio reciente en adultos." : language === "fr" ? "Surtout le diabète d'apparition récente chez les adultes." : "Especially newly diagnosed diabetes in adults."}</li>
                  <li>• <strong>{language === "es" ? "Obesidad:" : language === "fr" ? "Obésité:" : "Obesity:"}</strong> {language === "es" ? "IMC alto se asocia con mayor riesgo." : language === "fr" ? "Un IMC élevé est associé à un risque accru." : "High BMI is associated with increased risk."}</li>
                  <li>• <strong>{language === "es" ? "Dieta:" : language === "fr" ? "Régime:" : "Diet:"}</strong> {language === "es" ? "Alta en grasas y carnes rojas, baja en frutas y verduras." : language === "fr" ? "Riche en graisses et viandes rouges, faible en fruits et légumes." : "High in fats and red meats, low in fruits and vegetables."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "No hay detección temprana generalizada:" : language === "fr" ? "Pas de dépistage précoce généralisé:" : "No widespread early detection:"}</strong> {language === "es" ? "Debido a la baja prevalencia y la falta de pruebas efectivas." : language === "fr" ? "En raison de la faible prévalence et du manque de tests efficaces." : "Due to low prevalence and lack of effective tests."}</li>
                  <li>• <strong>{language === "es" ? "Vigilancia en alto riesgo:" : language === "fr" ? "Surveillance chez les personnes à haut risque:" : "Surveillance in high-risk individuals:"}</strong> {language === "es" ? "RM, ecoendoscopia para personas con mutaciones genéticas conocidas o fuertes antecedentes familiares." : language === "fr" ? "IRM, écho-endoscopie pour les personnes ayant des mutations génétiques connues ou de forts antécédents familiaux." : "MRI, endoscopic ultrasound for individuals with known genetic mutations or strong family history."}</li>
                  <li>• <strong>{language === "es" ? "Biomarcadores:" : language === "fr" ? "Biomarqueurs:" : "Biomarkers:"}</strong> CA 19-9 (limitado por baja sensibilidad y especificidad).</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Análisis de Imágenes" : 
                 language === "fr" ? "Analyse d'Images" : 
                 "Image Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos para detectar cambios sutiles en la estructura del páncreas a partir de imágenes de TC y RM." :
                 language === "fr" ? "Algorithmes pour détecter des changements subtils dans la structure du pancréas à partir d'images de scanner et d'IRM." :
                 "Algorithms to detect subtle changes in the structure of the pancreas from CT and MRI images."}
              </p>
              <Badge className="w-full justify-center bg-violet-100 text-violet-800">Detección Temprana</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Riesgo" : 
                 language === "fr" ? "Prédiction du Risque" : 
                 "Risk Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos predictivos que evalúan el riesgo individual basado en factores genéticos, historial médico y estilo de vida." :
                 language === "fr" ? "Modèles prédictifs qui évaluent le risque individuel basé sur des facteurs génétiques, des antécédents médicaux et le style de vie." :
                 "Predictive models that assess individual risk based on genetic factors, medical history, and lifestyle."}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Evaluación Personalizada</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Respuesta al Tratamiento" : 
                 language === "fr" ? "Réponse au Traitement" : 
                 "Treatment Response"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Análisis para predecir la respuesta a quimioterapia y terapias dirigidas, optimizando las decisiones de tratamiento." :
                 language === "fr" ? "Analyse pour prédire la réponse à la chimiothérapie et aux thérapies ciblées, optimisant les décisions de traitement." :
                 "Analysis to predict response to chemotherapy and targeted therapies, optimizing treatment decisions."}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">Medicina de Precisión</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-blue-600" />
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
                  {language === "es" ? "Enfermedad Resecable" :
                   language === "fr" ? "Maladie Résécable" :
                   "Resectable Disease"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cirugía:" : language === "fr" ? "Chirurgie:" : "Surgery:"}</strong> {language === "es" ? "Pancreatoduodenectomía (Whipple) o pancreatectomía distal, dependiendo de la ubicación del tumor." : language === "fr" ? "Duodénopancréatectomie céphalique (Whipple) ou pancréatectomie distale, selon l'emplacement de la tumeur." : "Pancreatoduodenectomy (Whipple) or distal pancreatectomy, depending on the location of the tumor."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia adyuvante:" : language === "fr" ? "Chimiothérapie adjuvante:" : "Adjuvant chemotherapy:"}</strong> {language === "es" ? "Gemcitabina o FOLFIRINOX después de la cirugía para mejorar la supervivencia." : language === "fr" ? "Gemcitabine ou FOLFIRINOX après la chirurgie pour améliorer la survie." : "Gemcitabine or FOLFIRINOX after surgery to improve survival."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Enfermedad Avanzada" :
                   language === "fr" ? "Maladie Avancée" :
                   "Advanced Disease"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia paliativa:" : language === "fr" ? "Chimiothérapie palliative:" : "Palliative chemotherapy:"}</strong> {language === "es" ? "FOLFIRINOX, gemcitabina + nab-paclitaxel, o gemcitabina sola para controlar el crecimiento del tumor y aliviar los síntomas." : language === "fr" ? "FOLFIRINOX, gemcitabine + nab-paclitaxel, ou gemcitabine seule pour contrôler la croissance tumorale et soulager les symptômes." : "FOLFIRINOX, gemcitabine + nab-paclitaxel, or gemcitabine alone to control tumor growth and relieve symptoms."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapias dirigidas:" : language === "fr" ? "Thérapies ciblées:" : "Targeted therapies:"}</strong> {language === "es" ? "Para pacientes con mutaciones específicas (ej., inhibidores de PARP para BRCA mutado)." : language === "fr" ? "Pour les patients présentant des mutations spécifiques (par exemple, inhibiteurs de PARP pour BRCA muté)." : "For patients with specific mutations (e.g., PARP inhibitors for BRCA mutated)."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cuidados paliativos:" : language === "fr" ? "Soins palliatifs:" : "Palliative care:"}</strong> {language === "es" ? "Manejo del dolor, soporte nutricional y apoyo emocional." : language === "fr" ? "Gestion de la douleur, soutien nutritionnel et soutien émotionnel." : "Pain management, nutritional support, and emotional support."}
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
              {language === "es" ? "Epidemiología Global del Cáncer de Páncreas" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer du Pancréas" :
               "Global Pancreatic Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">495K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos anuales" :
                   language === "fr" ? "Nouveaux cas annuels" :
                   "New cases annually"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">466K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2"><10%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia a 5 años" :
                   language === "fr" ? "Survie à 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3.2%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "De todos los cánceres" :
                   language === "fr" ? "De tous les cancers" :
                   "Of all cancers"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-violet-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Cáncer de Páncreas" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour le Cancer du Pancréas" : 
                 "Advanced Diagnostic Platform for Pancreatic Cancer"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros modelos especializados de IA para la detección temprana, la evaluación del riesgo y la optimización del tratamiento del cáncer de páncreas. Tecnología validada clínicamente con un 98,8% de precisión máxima." :
                 language === "fr" ? "Utilisez nos modèles spécialisés d'IA pour la détection précoce, l'évaluation des risques et l'optimisation du traitement du cancer du pancréas. Technologie validée cliniquement avec une précision maximale de 98,8 %." :
                 "Use our specialized AI models for early detection, risk assessment, and treatment optimization of pancreatic cancer. Clinically validated technology with 98.8% maximum accuracy."}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg px-8 py-3">
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

export default PancreaticCancer;
