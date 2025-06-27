import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const BreastCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-pink-100/80 text-pink-800 rounded-full">
            {language === "es" ? "Cáncer de Mama" : 
             language === "fr" ? "Cancer du Sein" : 
             "Breast Cancer"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Cáncer de Mama" : 
             language === "fr" ? "Analyse Prédictive du Cancer du Sein" : 
             "Breast Cancer Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado del cáncer de mama con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d'IA pour détection précoce, stratification du risque et gestion personnalisée du cancer du sein avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of breast cancer with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-pink-600" />
              {language === "es" ? "Información Clave - Cáncer de Mama" :
               language === "fr" ? "Information Clé - Cancer du Sein" :
               "Key Information - Breast Cancer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El cáncer de mama es una neoplasia maligna que se origina en las células de la mama, principalmente en los conductos o lóbulos. Es el cáncer más común en mujeres a nivel mundial, con más de 2.2 millones de nuevos casos anuales." :
                   language === "fr" ? "Le cancer du sein est une néoplasie maligne qui prend naissance dans les cellules du sein, principalement dans les canaux ou les lobules. C'est le cancer le plus courant chez les femmes dans le monde, avec plus de 2.2 millions de nouveaux cas annuels." :
                   "Breast cancer is a malignant neoplasm that originates in the cells of the breast, mainly in the ducts or lobules. It is the most common cancer in women worldwide, with over 2.2 million new cases annually."}
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                  <p className="text-sm text-pink-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " 1 de cada 8 mujeres desarrollará cáncer de mama durante su vida. Tasa de supervivencia a 5 años: 90% si se detecta en etapas tempranas." :
                     language === "fr" ? " 1 femme sur 8 développera un cancer du sein au cours de sa vie. Taux de survie à 5 ans: 90% si détecté à un stade précoce." :
                     " 1 in 8 women will develop breast cancer during their lifetime. 5-year survival rate: 90% if detected in early stages."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-rose-700">
                  {language === "es" ? "Clasificación de Riesgo" :
                   language === "fr" ? "Classification du Risque" :
                   "Risk Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Bajo:</strong> {language === "es" ? "Tumores pequeños, receptores hormonales positivos, sin afectación ganglionar" : language === "fr" ? "Petites tumeurs, récepteurs hormonaux positifs, sans atteinte ganglionnaire" : "Small tumors, hormone receptor positive, no lymph node involvement"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Intermedio:</strong> {language === "es" ? "Tumores de tamaño moderado, algunos receptores hormonales negativos, posible afectación de pocos ganglios" : language === "fr" ? "Tumeurs de taille modérée, certains récepteurs hormonaux négatifs, atteinte possible de quelques ganglions" : "Moderately sized tumors, some hormone receptors negative, possible involvement of few nodes"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Alto:</strong> {language === "es" ? "Tumores grandes, receptores hormonales negativos, afectación significativa de ganglios, cáncer inflamatorio" : language === "fr" ? "Grosses tumeurs, récepteurs hormonaux négatifs, atteinte ganglionnaire importante, cancer inflammatoire" : "Large tumors, hormone receptors negative, significant lymph node involvement, inflammatory cancer"}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo con la edad, especialmente después de los 50 años" : language === "fr" ? "Risque accru avec l'âge, surtout après 50 ans" : "Increased risk with age, especially after 50"}</li>
                  <li>• <strong>{language === "es" ? "Genética:" : language === "fr" ? "Génétique:" : "Genetics:"}</strong> {language === "es" ? "Mutaciones en genes BRCA1 y BRCA2 aumentan significativamente el riesgo" : language === "fr" ? "Mutations des gènes BRCA1 et BRCA2 augmentent significativement le risque" : "Mutations in BRCA1 and BRCA2 genes significantly increase risk"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Tener familiares cercanos con cáncer de mama aumenta el riesgo" : language === "fr" ? "Avoir des proches atteints d'un cancer du sein augmente le risque" : "Having close relatives with breast cancer increases risk"}</li>
                  <li>• <strong>{language === "es" ? "Historia personal:" : language === "fr" ? "Antécédents personnels:" : "Personal history:"}</strong> {language === "es" ? "Antecedentes de ciertas enfermedades benignas de la mama" : language === "fr" ? "Antécédents de certaines maladies bénignes du sein" : "History of certain benign breast diseases"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Terapia hormonal:" : language === "fr" ? "Hormonothérapie:" : "Hormone therapy:"}</strong> {language === "es" ? "Uso prolongado de terapia hormonal sustitutiva" : language === "fr" ? "Utilisation prolongée d'un traitement hormonal substitutif" : "Prolonged use of hormone replacement therapy"}</li>
                  <li>• <strong>{language === "es" ? "Obesidad:" : language === "fr" ? "Obésité:" : "Obesity:"}</strong> {language === "es" ? "El sobrepeso y la obesidad, especialmente después de la menopausia" : language === "fr" ? "Le surpoids et l'obésité, surtout après la ménopause" : "Overweight and obesity, especially after menopause"}</li>
                  <li>• <strong>{language === "es" ? "Estilo de vida:" : language === "fr" ? "Style de vie:" : "Lifestyle:"}</strong> {language === "es" ? "Consumo de alcohol, tabaquismo y falta de actividad física" : language === "fr" ? "Consommation d'alcool, tabagisme et manque d'activité physique" : "Alcohol consumption, smoking, and lack of physical activity"}</li>
                  <li>• <strong>{language === "es" ? "Exposición a radiación:" : language === "fr" ? "Exposition aux radiations:" : "Radiation exposure:"}</strong> {language === "es" ? "Exposición a radiación en el pecho a una edad temprana" : language === "fr" ? "Exposition à des radiations à la poitrine à un jeune âge" : "Exposure to radiation to the chest at a young age"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Autoexamen mamario:" : language === "fr" ? "Auto-examen mammaire:" : "Breast self-exam:"}</strong> {language === "es" ? "Mensual para familiarizarse con la normalidad de sus senos" : language === "fr" ? "Mensuel pour se familiariser avec la normalité de vos seins" : "Monthly to become familiar with the normal state of your breasts"}</li>
                  <li>• <strong>{language === "es" ? "Examen clínico:" : language === "fr" ? "Examen clinique:" : "Clinical exam:"}</strong> {language === "es" ? "Realizado por un profesional de la salud" : language === "fr" ? "Réalisé par un professionnel de la santé" : "Performed by a healthcare professional"}</li>
                  <li>• <strong>{language === "es" ? "Mamografía:" : language === "fr" ? "Mammographie:" : "Mammography:"}</strong> {language === "es" ? "Anual a partir de los 40 años, o antes si hay factores de riesgo" : language === "fr" ? "Annuelle à partir de 40 ans, ou plus tôt s'il existe des facteurs de risque" : "Annual starting at age 40, or earlier if there are risk factors"}</li>
                  <li>• <strong>{language === "es" ? "Resonancia magnética:" : language === "fr" ? "Imagerie par résonance magnétique:" : "Magnetic resonance imaging:"}</strong> {language === "es" ? "Para mujeres con alto riesgo" : language === "fr" ? "Pour les femmes à haut risque" : "For women at high risk"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Análisis de Mamografías" : 
                 language === "fr" ? "Analyse des Mammographies" : 
                 "Mammography Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos avanzados para detectar microcalcificaciones y masas sospechosas con alta precisión" :
                 language === "fr" ? "Algorithmes avancés pour détecter les microcalcifications et les masses suspectes avec une grande précision" :
                 "Advanced algorithms to detect microcalcifications and suspicious masses with high accuracy"}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">98.8% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Riesgo Genético" : 
                 language === "fr" ? "Prédiction du Risque Génétique" : 
                 "Genetic Risk Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos de IA para predecir el riesgo genético basado en historial familiar y marcadores genéticos" :
                 language === "fr" ? "Modèles d'IA pour prédire le risque génétique basé sur les antécédents familiaux et les marqueurs génétiques" :
                 "AI models to predict genetic risk based on family history and genetic markers"}
              </p>
              <Badge className="w-full justify-center bg-rose-100 text-rose-800">Alta Sensibilidad</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Respuesta a Tratamiento" : 
                 language === "fr" ? "Réponse au Traitement" : 
                 "Treatment Response"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Predicción de la respuesta a quimioterapia y terapia hormonal basada en características del tumor" :
                 language === "fr" ? "Prédiction de la réponse à la chimiothérapie et à l'hormonothérapie basée sur les caractéristiques de la tumeur" :
                 "Prediction of response to chemotherapy and hormone therapy based on tumor characteristics"}
              </p>
              <Badge className="w-full justify-center bg-red-100 text-red-800">Personalización</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-pink-600" />
              {language === "es" ? "Guías de Tratamiento por Etapa" :
               language === "fr" ? "Guides de Traitement par Stade" :
               "Stage-Based Treatment Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Etapa Temprana (0-I)" :
                   language === "fr" ? "Stade Précoce (0-I)" :
                   "Early Stage (0-I)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cirugía:" : language === "fr" ? "Chirurgie:" : "Surgery:"}</strong> {language === "es" ? "Lumpectomía o mastectomía con biopsia del ganglio centinela" : language === "fr" ? "Lumpectomie ou mastectomie avec biopsie du ganglion sentinelle" : "Lumpectomy or mastectomy with sentinel node biopsy"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Radioterapia:" : language === "fr" ? "Radiothérapie:" : "Radiation therapy:"}</strong> {language === "es" ? "Después de la lumpectomía para destruir células cancerosas restantes" : language === "fr" ? "Après la tumorectomie pour détruire les cellules cancéreuses restantes" : "After lumpectomy to destroy remaining cancer cells"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia hormonal:" : language === "fr" ? "Hormonothérapie:" : "Hormone therapy:"}</strong> {language === "es" ? "Para tumores con receptores hormonales positivos" : language === "fr" ? "Pour les tumeurs avec des récepteurs hormonaux positifs" : "For tumors with positive hormone receptors"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Etapa Avanzada (II-IV)" :
                   language === "fr" ? "Stade Avancé (II-IV)" :
                   "Advanced Stage (II-IV)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia:" : language === "fr" ? "Chimiothérapie:" : "Chemotherapy:"}</strong> {language === "es" ? "Antes o después de la cirugía para reducir o destruir el cáncer" : language === "fr" ? "Avant ou après la chirurgie pour réduire ou détruire le cancer" : "Before or after surgery to reduce or destroy cancer"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia dirigida:" : language === "fr" ? "Thérapie ciblée:" : "Targeted therapy:"}</strong> {language === "es" ? "Medicamentos que atacan células cancerosas específicas" : language === "fr" ? "Médicaments qui attaquent des cellules cancéreuses spécifiques" : "Drugs that target specific cancer cells"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Inmunoterapia:" : language === "fr" ? "Immunothérapie:" : "Immunotherapy:"}</strong> {language === "es" ? "Para estimular el sistema inmunológico a combatir el cáncer" : language === "fr" ? "Pour stimuler le système immunitaire à combattre le cancer" : "To stimulate the immune system to fight cancer"}
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
              {language === "es" ? "Epidemiología Global del Cáncer de Mama" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer du Sein" :
               "Global Breast Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">2.2M+</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos anuales" :
                   language === "fr" ? "Nouveaux cas annuels" :
                   "New cases annually"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">685K+</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales globales" :
                   language === "fr" ? "Décès annuels mondiaux" :
                   "Global annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años (temprano)" :
                   language === "fr" ? "Survie 5 ans (précoce)" :
                   "5-year survival (early)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">13%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Riesgo de por vida" :
                   language === "fr" ? "Risque à vie" :
                   "Lifetime risk"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-pink-50/30 to-rose-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Cáncer de Mama" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour Cancer du Sein" : 
                 "Advanced Breast Cancer Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y optimización de tratamiento en cáncer de mama. Tecnología validada clínicamente con 98.8% de precisión máxima." :
                 language === "fr" ? "Utilisez nos 62+ modèles spécialisés d'IA pour la détection précoce, la stratification des risques et l'optimisation du traitement du cancer du sein. Technologie validée cliniquement avec une précision maximale de 98,8 %." :
                 "Use our 62+ specialized AI models for early detection, risk stratification and treatment optimization in breast cancer. Clinically validated technology with 98.8% maximum accuracy."}
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 rounded-2xl text-lg px-8 py-3">
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

export default BreastCancer;
