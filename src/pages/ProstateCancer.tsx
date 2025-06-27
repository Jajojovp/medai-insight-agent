
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ProstateCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === "es" ? "Cáncer de Próstata" : 
             language === "fr" ? "Cancer de la Prostate" : 
             "Prostate Cancer"}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Cáncer de Próstata" : 
             language === "fr" ? "Analyse Prédictive du Cancer de la Prostate" : 
             "Prostate Cancer Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado del cáncer de próstata con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et gestion personnalisée du cancer de la prostate avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of prostate cancer with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Información Clave - Cáncer de Próstata" :
               language === "fr" ? "Information Clé - Cancer de la Prostate" :
               "Key Information - Prostate Cancer"}
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
                  {language === "es" ? "El cáncer de próstata es una neoplasia maligna que se origina en las células glandulares de la próstata. Es el segundo cáncer más común en hombres a nivel mundial, con más de 1.4 millones de nuevos casos anuales." :
                   language === "fr" ? "Le cancer de la prostate est une néoplasie maligne qui prend naissance dans les cellules glandulaires de la prostate. C\\'est le deuxième cancer le plus courant chez les hommes dans le monde, avec plus de 1.4 million de nouveaux cas annuels." :
                   "Prostate cancer is a malignant neoplasm that originates in the glandular cells of the prostate. It is the second most common cancer in men worldwide, with over 1.4 million new cases annually."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " 1 de cada 8 hombres desarrollará cáncer de próstata durante su vida. Tasa de supervivencia a 5 años: 98% si se detecta localmente." :
                     language === "fr" ? " 1 homme sur 8 développera un cancer de la prostate au cours de sa vie. Taux de survie à 5 ans: 98% si détecté localement." :
                     " 1 in 8 men will develop prostate cancer during their lifetime. 5-year survival rate: 98% if detected locally."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  {language === "es" ? "Clasificación de Riesgo" :
                   language === "fr" ? "Classification du Risque" :
                   "Risk Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Muy Bajo:</strong> {language === "es" ? "PSA menor de 10, Gleason 6, T1c, menos de 3 cilindros positivos" : language === "fr" ? "PSA moins de 10, Gleason 6, T1c, moins de 3 cylindres positifs" : "PSA less than 10, Gleason 6, T1c, fewer than 3 positive cores"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Bajo:</strong> {language === "es" ? "PSA menor de 10, Gleason 6, T1-T2a" : language === "fr" ? "PSA moins de 10, Gleason 6, T1-T2a" : "PSA less than 10, Gleason 6, T1-T2a"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Intermedio:</strong> {language === "es" ? "PSA 10-20 o Gleason 7 o T2b-T2c" : language === "fr" ? "PSA 10-20 ou Gleason 7 ou T2b-T2c" : "PSA 10-20 or Gleason 7 or T2b-T2c"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Alto:</strong> {language === "es" ? "PSA mayor de 20 o Gleason 8-10 o T3a" : language === "fr" ? "PSA supérieur à 20 ou Gleason 8-10 ou T3a" : "PSA over 20 or Gleason 8-10 or T3a"}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo después de los 50 años. 80% de casos en mayores de 65 años" : language === "fr" ? "Risque accru après 50 ans. 80% des cas chez les plus de 65 ans" : "Increased risk after 50 years. 80% of cases in those over 65"}</li>
                  <li>• <strong>{language === "es" ? "Etnia:" : language === "fr" ? "Origine ethnique:" : "Race/Ethnicity:"}</strong> {language === "es" ? "Hombres afroamericanos tienen mayor riesgo (60% más alto)" : language === "fr" ? "Hommes afro-américains ont risque plus élevé (60% plus haut)" : "African American men have higher risk (60% higher)"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Riesgo duplicado si padre/hermano afectado. Triple si múltiples familiares" : language === "fr" ? "Risque doublé si père/frère affecté. Triple si multiples membres famille" : "Risk doubled if father/brother affected. Triple if multiple family members"}</li>
                  <li>• <strong>{language === "es" ? "Genética:" : language === "fr" ? "Génétique:" : "Genetics:"}</strong> BRCA2, HOXB13, Lynch syndrome</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Dieta:" : language === "fr" ? "Régime:" : "Diet:"}</strong> {language === "es" ? "Dieta alta en grasas saturadas y carnes rojas aumenta riesgo" : language === "fr" ? "Régime riche en graisses saturées et viandes rouges augmente risque" : "Diet high in saturated fats and red meat increases risk"}</li>
                  <li>• <strong>{language === "es" ? "Obesidad:" : language === "fr" ? "Obésité:" : "Obesity:"}</strong> {language === "es" ? "IMC mayor de 30 asociado con cáncer más agresivo" : language === "fr" ? "IMC supérieur à 30 associé avec cancer plus agressif" : "BMI over 30 associated with more aggressive cancer"}</li>
                  <li>• <strong>{language === "es" ? "Actividad física:" : language === "fr" ? "Activité physique:" : "Physical activity:"}</strong> {language === "es" ? "Ejercicio regular reduce riesgo en 10-30%" : language === "fr" ? "Exercice régulier réduit risque de 10-30%" : "Regular exercise reduces risk by 10-30%"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Aumenta riesgo de cáncer agresivo y mortalidad" : language === "fr" ? "Augmente risque de cancer agressif et mortalité" : "Increases risk of aggressive cancer and mortality"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>PSA + Tacto rectal:</strong> {language === "es" ? "Anual desde los 50 años (45 si alto riesgo)" : language === "fr" ? "Annuel dès 50 ans (45 si haut risque)" : "Annual from age 50 (45 if high risk)"}</li>
                  <li>• <strong>Resonancia multiparamétrica:</strong> {language === "es" ? "Si PSA elevado antes de biopsia" : language === "fr" ? "Si PSA élevé avant biopsie" : "If elevated PSA before biopsy"}</li>
                  <li>• <strong>Biopsia transrectal:</strong> {language === "es" ? "12 cilindros estándar, dirigida por RM si disponible" : language === "fr" ? "12 cylindres standard, dirigée par IRM si disponible" : "12 core standard, MRI-targeted if available"}</li>
                  <li>• <strong>Biomarcadores:</strong> PHI, 4Kscore, PCA3, SelectMDx</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Análisis de PSA" : 
                 language === "fr" ? "Analyse PSA" : 
                 "PSA Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos avanzados para interpretación de PSA total, libre, densidad y velocidad con análisis de tendencias temporales y 98.8% de precisión" :
                 language === "fr" ? "Algorithmes avancés pour interprétation PSA total, libre, densité et vélocité avec analyse tendances temporelles et 98.8% de précision" :
                 "Advanced algorithms for PSA total, free, density and velocity interpretation with temporal trend analysis and 98.8% accuracy"}
              </p>
              <Badge className="w-full justify-center bg-blue-100 text-blue-800">98.8% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Estratificación de Riesgo" : 
                 language === "fr" ? "Stratification du Risque" : 
                 "Risk Stratification"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Sistemas de clasificación automática en grupos de riesgo (muy bajo, bajo, intermedio, alto) basados en PSA, Gleason y estadio clínico" :
                 language === "fr" ? "Systèmes de classification automatique en groupes de risque (très bas, bas, intermédiaire, haut) basés sur PSA, Gleason et stade clinique" :
                 "Automatic classification systems into risk groups (very low, low, intermediate, high) based on PSA, Gleason and clinical stage"}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">Clasificación Precisa</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Progresión" : 
                 language === "fr" ? "Prédiction de Progression" : 
                 "Progression Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos predictivos de progresión bioquímica y metástasis utilizando análisis multivariado para optimizar decisiones de vigilancia activa" :
                 language === "fr" ? "Modèles prédictifs de progression biochimique et métastases utilisant analyse multivariée pour optimiser décisions surveillance active" :
                 "Predictive models for biochemical progression and metastasis using multivariate analysis to optimize active surveillance decisions"}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Vigilancia Optimizada</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Guías de Tratamiento por Riesgo" :
               language === "fr" ? "Guides de Traitement par Risque" :
               "Risk-Based Treatment Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Riesgo Bajo-Intermedio" :
                   language === "fr" ? "Risque Bas-Intermédiaire" :
                   "Low-Intermediate Risk"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Vigilancia activa:" : language === "fr" ? "Surveillance active:" : "Active surveillance:"}</strong> {language === "es" ? "PSA cada 6 meses, tacto rectal anual, biopsia cada 1-3 años" : language === "fr" ? "PSA tous les 6 mois, toucher rectal annuel, biopsie tous les 1-3 ans" : "PSA every 6 months, digital rectal exam annually, biopsy every 1-3 years"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Prostatectomía radical:" : language === "fr" ? "Prostatectomie radicale:" : "Radical prostatectomy:"}</strong> {language === "es" ? "Abierta, laparoscópica o robótica. Preservación nerviosa si factible" : language === "fr" ? "Ouverte, laparoscopique ou robotique. Préservation nerveuse si faisable" : "Open, laparoscopic or robotic. Nerve-sparing if feasible"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Radioterapia externa:" : language === "fr" ? "Radiothérapie externe:" : "External beam radiation:"}</strong> {language === "es" ? "IMRT/VMAT 76-80 Gy. Hipofraccionamiento moderado alternativa" : language === "fr" ? "RCMI/VMAT 76-80 Gy. Hypofractionnement modéré alternatif" : "IMRT/VMAT 76-80 Gy. Moderate hypofractionation alternative"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Riesgo Alto-Muy Alto" :
                   language === "fr" ? "Risque Haut-Très Haut" :
                   "High-Very High Risk"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Tratamiento multimodal:" : language === "fr" ? "Traitement multimodal:" : "Multimodal treatment:"}</strong> {language === "es" ? "RT + terapia hormonal 18-36 meses, o prostatectomía + linfadenectomía" : language === "fr" ? "RT + hormonothérapie 18-36 mois, ou prostatectomie + lymphadénectomie" : "RT + hormone therapy 18-36 months, or prostatectomy + lymphadenectomy"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia hormonal:" : language === "fr" ? "Hormonothérapie:" : "Hormone therapy:"}</strong> {language === "es" ? "Agonistas LHRH (leuprolida, goserelina) + antiandrogenos (bicalutamida)" : language === "fr" ? "Agonistes LHRH (leuprolide, goséréline) + antiandrogènes (bicalutamide)" : "LHRH agonists (leuprolide, goserelin) + antiandrogens (bicalutamide)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Seguimiento intensivo:" : language === "fr" ? "Suivi intensif:" : "Intensive follow-up:"}</strong> {language === "es" ? "PSA cada 3-6 meses, imagen si progresión bioquímica" : language === "fr" ? "PSA tous les 3-6 mois, imagerie si progression biochimique" : "PSA every 3-6 months, imaging if biochemical progression"}
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
              {language === "es" ? "Epidemiología Global del Cáncer de Próstata" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer de la Prostate" :
               "Global Prostate Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1.4M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos anuales (2020)" :
                   language === "fr" ? "Nouveaux cas annuels (2020)" :
                   "New cases annually (2020)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">375K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales globales" :
                   language === "fr" ? "Décès annuels mondiaux" :
                   "Global annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años (localizado)" :
                   language === "fr" ? "Survie 5 ans (localisé)" :
                   "5-year survival (localized)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">12%</div>
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
          <Card className="bg-gradient-to-br from-blue-50/30 to-indigo-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Cáncer de Próstata" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour Cancer de la Prostate" : 
                 "Advanced Prostate Cancer Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y optimización de tratamiento en cáncer de próstata. Tecnología validada clínicamente con 98.8% de precisión máxima." :
                 language === "fr" ? "Utilisez nos 62+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et optimisation du traitement du cancer de la prostate. Technologie validée cliniquement avec 98.8% de précision maximale." :
                 "Use our 62+ specialized AI models for early detection, risk stratification and treatment optimization in prostate cancer. Clinically validated technology with 98.8% maximum accuracy."}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg px-8 py-3">
                {language === "es" ? "Iniciar Análisis Prostático" : 
                 language === "fr" ? "Commencer l\\'Analyse Prostatique" : 
                 "Start Prostate Analysis"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProstateCancer;
