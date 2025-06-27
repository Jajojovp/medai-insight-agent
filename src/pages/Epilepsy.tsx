import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Epilepsy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-indigo-100/80 text-indigo-800 rounded-full">
            {language === "es" ? "Epilepsia" : 
             language === "fr" ? "Épilepsie" : 
             "Epilepsy"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Epilepsia" : 
             language === "fr" ? "Analyse Prédictive d'Épilepsie" : 
             "Epilepsy Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado de epilepsia con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et gestion personnalisée de l'épilepsie avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of epilepsy with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Información Clave - Epilepsia" :
               language === "fr" ? "Information Clé - Épilepsie" :
               "Key Information - Epilepsy"}
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
                  {language === "es" ? "La epilepsia es un trastorno neurológico crónico caracterizado por crisis recurrentes no provocadas. Afecta a personas de todas las edades, con una mayor incidencia en la infancia y en la edad avanzada." :
                   language === "fr" ? "L'épilepsie est un trouble neurologique chronique caractérisé par des crises récurrentes non provoquées. Elle touche des personnes de tous âges, avec une incidence plus élevée dans l'enfance et chez les personnes âgées." :
                   "Epilepsy is a chronic neurological disorder characterized by recurrent, unprovoked seizures. It affects people of all ages, with a higher incidence in childhood and old age."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " Aproximadamente 50 millones de personas en todo el mundo padecen epilepsia. Cada año se diagnostican alrededor de 2.4 millones de nuevos casos." :
                     language === "fr" ? " Environ 50 millions de personnes dans le monde souffrent d'épilepsie. Environ 2.4 millions de nouveaux cas sont diagnostiqués chaque année." :
                     " Approximately 50 million people worldwide have epilepsy. About 2.4 million new cases are diagnosed each year."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  {language === "es" ? "Clasificación de las Crisis" :
                   language === "fr" ? "Classification des Crises" :
                   "Seizure Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Crisis Focales:" : language === "fr" ? "Crises Focales:" : "Focal Seizures:"}</strong> {language === "es" ? "Comienzan en un área del cerebro. Pueden ser con o sin alteración de la conciencia." : language === "fr" ? "Débutent dans une zone du cerveau. Peuvent être avec ou sans altération de la conscience." : "Start in one area of the brain. Can be with or without alteration of consciousness."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Crisis Generalizadas:" : language === "fr" ? "Crises Généralisées:" : "Generalized Seizures:"}</strong> {language === "es" ? "Afectan ambos lados del cerebro desde el inicio. Incluyen crisis de ausencia, tónicas, clónicas, tónico-clónicas y atónicas." : language === "fr" ? "Affectent les deux côtés du cerveau dès le début. Incluent les crises d'absence, toniques, cloniques, tonico-cloniques et atoniques." : "Affect both sides of the brain from the start. Include absence, tonic, clonic, tonic-clonic, and atonic seizures."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Crisis de Inicio Desconocido:" : language === "fr" ? "Crises à Début Inconnu:" : "Seizures of Unknown Onset:"}</strong> {language === "es" ? "Cuando no se puede determinar dónde comenzó la crisis." : language === "fr" ? "Lorsque l'on ne peut déterminer où la crise a commencé." : "When it is not possible to determine where the seizure began."}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo en niños pequeños y adultos mayores." : language === "fr" ? "Risque accru chez les jeunes enfants et les personnes âgées." : "Increased risk in young children and older adults."}</li>
                  <li>• <strong>{language === "es" ? "Historia Familiar:" : language === "fr" ? "Antécédents Familiaux:" : "Family History:"}</strong> {language === "es" ? "Tener familiares con epilepsia aumenta el riesgo." : language === "fr" ? "Avoir des membres de la famille atteints d'épilepsie augmente le risque." : "Having family members with epilepsy increases the risk."}</li>
                  <li>• <strong>{language === "es" ? "Condiciones Genéticas:" : language === "fr" ? "Conditions Génétiques:" : "Genetic Conditions:"}</strong> {language === "es" ? "Algunos genes pueden aumentar la susceptibilidad a la epilepsia." : language === "fr" ? "Certains gènes peuvent augmenter la susceptibilité à l'épilepsie." : "Some genes can increase susceptibility to epilepsy."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Lesiones Cerebrales:" : language === "fr" ? "Lésions Cérébrales:" : "Brain Injuries:"}</strong> {language === "es" ? "Traumatismos craneoencefálicos pueden provocar epilepsia." : language === "fr" ? "Les traumatismes crâniens peuvent provoquer l'épilepsie." : "Traumatic brain injuries can lead to epilepsy."}</li>
                  <li>• <strong>{language === "es" ? "Infecciones:" : language === "fr" ? "Infections:" : "Infections:"}</strong> {language === "es" ? "Meningitis, encefalitis y otras infecciones cerebrales." : language === "fr" ? "Méningite, encéphalite et autres infections cérébrales." : "Meningitis, encephalitis, and other brain infections."}</li>
                  <li>• <strong>{language === "es" ? "Accidente Cerebrovascular:" : language === "fr" ? "Accident Vasculaire Cérébral:" : "Stroke:"}</strong> {language === "es" ? "Puede dañar el cerebro y causar epilepsia." : language === "fr" ? "Peut endommager le cerveau et provoquer l'épilepsie." : "Can damage the brain and cause epilepsy."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Evaluación Neurológica:" : language === "fr" ? "Évaluation Neurologique:" : "Neurological Evaluation:"}</strong> {language === "es" ? "Historia clínica detallada y examen neurológico." : language === "fr" ? "Antécédents médicaux détaillés et examen neurologique." : "Detailed medical history and neurological examination."}</li>
                  <li>• <strong>EEG:</strong> {language === "es" ? "Electroencefalograma para detectar actividad eléctrica anormal en el cerebro." : language === "fr" ? "Électroencéphalogramme pour détecter une activité électrique anormale dans le cerveau." : "Electroencephalogram to detect abnormal electrical activity in the brain."}</li>
                  <li>• <strong>{language === "es" ? "Resonancia Magnética:" : language === "fr" ? "Imagerie par Résonance Magnétique:" : "MRI:"}</strong> {language === "es" ? "Para identificar lesiones o anomalías estructurales en el cerebro." : language === "fr" ? "Pour identifier les lésions ou les anomalies structurelles du cerveau." : "To identify lesions or structural abnormalities in the brain."}</li>
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
                {language === "es" ? "Análisis de EEG" : 
                 language === "fr" ? "Analyse EEG" : 
                 "EEG Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos avanzados para detectar patrones de actividad eléctrica anormal en el EEG con alta precisión." :
                 language === "fr" ? "Algorithmes avancés pour détecter les schémas d'activité électrique anormale dans l'EEG avec une grande précision." :
                 "Advanced algorithms to detect patterns of abnormal electrical activity in the EEG with high precision."}
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
                {language === "es" ? "Predicción de Crisis" : 
                 language === "fr" ? "Prédiction des Crises" : 
                 "Seizure Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos predictivos para anticipar la ocurrencia de crisis epilépticas basados en datos clínicos y de EEG." :
                 language === "fr" ? "Modèles prédictifs pour anticiper la survenue de crises épileptiques basés sur des données cliniques et d'EEG." :
                 "Predictive models to anticipate the occurrence of epileptic seizures based on clinical and EEG data."}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">Predicción Precisa</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Optimización de Tratamiento" : 
                 language === "fr" ? "Optimisation du Traitement" : 
                 "Treatment Optimization"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos para personalizar el tratamiento farmacológico y mejorar el control de las crisis." :
                 language === "fr" ? "Algorithmes pour personnaliser le traitement pharmacologique et améliorer le contrôle des crises." :
                 "Algorithms to personalize pharmacological treatment and improve seizure control."}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Tratamiento Personalizado</Badge>
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
                  {language === "es" ? "Tratamiento Farmacológico" :
                   language === "fr" ? "Traitement Pharmacologique" :
                   "Pharmacological Treatment"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Medicamentos Antiepilépticos:" : language === "fr" ? "Médicaments Antiépileptiques:" : "Antiepileptic Drugs:"}</strong> {language === "es" ? "Selección basada en el tipo de crisis, edad y otros factores individuales." : language === "fr" ? "Sélection basée sur le type de crise, l'âge et d'autres facteurs individuels." : "Selection based on seizure type, age, and other individual factors."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Monoterapia vs Politerapia:" : language === "fr" ? "Monothérapie vs Polythérapie:" : "Monotherapy vs Polytherapy:"}</strong> {language === "es" ? "Iniciar con un solo medicamento y ajustar la dosis según sea necesario." : language === "fr" ? "Commencer avec un seul médicament et ajuster la dose si nécessaire." : "Start with a single medication and adjust the dose as needed."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Ajuste de Dosis:" : language === "fr" ? "Ajustement de la Dose:" : "Dose Adjustment:"}</strong> {language === "es" ? "Monitoreo regular de los niveles del medicamento en sangre." : language === "fr" ? "Surveillance régulière des niveaux du médicament dans le sang." : "Regular monitoring of drug levels in the blood."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Terapias No Farmacológicas" :
                   language === "fr" ? "Thérapies Non Pharmacologiques" :
                   "Non-Pharmacological Therapies"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Dieta Cetogénica:" : language === "fr" ? "Régime Cétogène:" : "Ketogenic Diet:"}</strong> {language === "es" ? "Alta en grasas y baja en carbohidratos para reducir las crisis." : language === "fr" ? "Riche en graisses et faible en glucides pour réduire les crises." : "High in fat and low in carbohydrates to reduce seizures."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Estimulación del Nervio Vago:" : language === "fr" ? "Stimulation du Nerf Vague:" : "Vagus Nerve Stimulation:"}</strong> {language === "es" ? "Dispositivo implantado para enviar impulsos eléctricos al nervio vago." : language === "fr" ? "Dispositif implanté pour envoyer des impulsions électriques au nerf vague." : "Implanted device to send electrical impulses to the vagus nerve."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cirugía:" : language === "fr" ? "Chirurgie:" : "Surgery:"}</strong> {language === "es" ? "Resección de la zona del cerebro donde se originan las crisis." : language === "fr" ? "Résection de la zone du cerveau où les crises prennent naissance." : "Resection of the area of the brain where seizures originate."}
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
              {language === "es" ? "Epidemiología Global de la Epilepsia" :
               language === "fr" ? "Épidémiologie Mondiale de l'Épilepsie" :
               "Global Epilepsy Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Personas con epilepsia" :
                   language === "fr" ? "Personnes atteintes d'épilepsie" :
                   "People with epilepsy"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Viven en países de bajos ingresos" :
                   language === "fr" ? "Vivent dans des pays à faible revenu" :
                   "Live in low-income countries"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Podrían vivir sin crisis con tratamiento" :
                   language === "fr" ? "Pourraient vivre sans crises avec un traitement" :
                   "Could live seizure-free with treatment"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2.4M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos cada año" :
                   language === "fr" ? "Nouveaux cas chaque année" :
                   "New cases each year"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-indigo-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Epilepsia" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour l'Épilepsie" : 
                 "Advanced Epilepsy Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros 62+ modelos especializados de IA para detección temprana, predicción de crisis y optimización de tratamiento en epilepsia. Tecnología validada clínicamente con 98.8% de precisión máxima." :
                 language === "fr" ? "Utilisez nos 62+ modèles spécialisés d'IA pour la détection précoce, la prédiction des crises et l'optimisation du traitement de l'épilepsie. Technologie validée cliniquement avec une précision maximale de 98.8%." :
                 "Use our 62+ specialized AI models for early detection, seizure prediction, and treatment optimization in epilepsy. Clinically validated technology with 98.8% maximum accuracy."}
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

export default Epilepsy;
