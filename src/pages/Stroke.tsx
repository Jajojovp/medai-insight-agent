import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Stroke = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full">
            {language === "es" ? "Accidente Cerebrovascular" : 
             language === "fr" ? "Accident Vasculaire Cérébral" : 
             "Stroke"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Accidente Cerebrovascular" : 
             language === "fr" ? "Analyse Prédictive d'Accident Vasculaire Cérébral" : 
             "Stroke Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado del accidente cerebrovascular con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et gestion personnalisée de l\\'accident vasculaire cérébral avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of stroke with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Información Clave - Accidente Cerebrovascular" :
               language === "fr" ? "Information Clé - Accident Vasculaire Cérébral" :
               "Key Information - Stroke"}
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
                  {language === "es" ? "El accidente cerebrovascular (ACV), también conocido como ictus, ocurre cuando se interrumpe el flujo sanguíneo al cerebro, ya sea por un bloqueo (isquémico) o por la ruptura de un vaso sanguíneo (hemorrágico). Es una emergencia médica que requiere atención inmediata." :
                   language === "fr" ? "L\\'accident vasculaire cérébral (AVC), également connu sous le nom d\\'ictus, se produit lorsque le flux sanguin vers le cerveau est interrompu, soit par un blocage (ischémique), soit par la rupture d\\'un vaisseau sanguin (hémorragique). C\\'est une urgence médicale qui nécessite une attention immédiate." :
                   "Stroke, also known as cerebrovascular accident (CVA), occurs when blood flow to the brain is interrupted, either by a blockage (ischemic) or by the rupture of a blood vessel (hemorrhagic). It is a medical emergency that requires immediate attention."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " Aproximadamente 15 millones de personas sufren un ACV cada año en todo el mundo. Es la segunda causa principal de muerte y una de las principales causas de discapacidad a largo plazo." :
                     language === "fr" ? " Environ 15 millions de personnes sont victimes d\\'un AVC chaque année dans le monde. C\\'est la deuxième cause principale de décès et l\\'une des principales causes d\\'invalidité à long terme." :
                     " Approximately 15 million people worldwide suffer a stroke each year. It is the second leading cause of death and a leading cause of long-term disability."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  {language === "es" ? "Tipos de ACV" :
                   language === "fr" ? "Types d'AVC" :
                   "Types of Stroke"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "ACV Isquémico:" : language === "fr" ? "AVC Ischémique:" : "Ischemic Stroke:"}</strong> {language === "es" ? " Ocurre cuando un vaso sanguíneo que irriga el cerebro se bloquea, a menudo por un coágulo de sangre." : language === "fr" ? " Se produit lorsqu\\'un vaisseau sanguin qui irrigue le cerveau est bloqué, souvent par un caillot sanguin." : " Occurs when a blood vessel supplying the brain is blocked, often by a blood clot."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "ACV Hemorrágico:" : language === "fr" ? "AVC Hémorragique:" : "Hemorrhagic Stroke:"}</strong> {language === "es" ? " Ocurre cuando un vaso sanguíneo en el cerebro se rompe y sangra en el tejido circundante." : language === "fr" ? " Se produit lorsqu\\'un vaisseau sanguin dans le cerveau se rompt et saigne dans les tissus environnants." : " Occurs when a blood vessel in the brain ruptures and bleeds into the surrounding tissue."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Ataque Isquémico Transitorio (AIT):" : language === "fr" ? "Accident Ischémique Transitoire (AIT):" : "Transient Ischemic Attack (TIA):"}</strong> {language === "es" ? " A menudo llamado 'mini-ACV', es una interrupción temporal del flujo sanguíneo al cerebro. Sirve como una señal de advertencia de un posible ACV futuro." : language === "fr" ? " Souvent appelé 'mini-AVC', il s\\'agit d\\'une interruption temporaire du flux sanguin vers le cerveau. Il sert de signal d\\'alarme pour un éventuel AVC futur." : " Often called a 'mini-stroke', it is a temporary disruption of blood flow to the brain. It serves as a warning sign of a potential future stroke."}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "El riesgo de ACV aumenta con la edad, especialmente después de los 55 años." : language === "fr" ? "Le risque d\\'AVC augmente avec l\\'âge, surtout après 55 ans." : "The risk of stroke increases with age, especially after age 55."}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Antécédents familiaux:" : "Family History:"}</strong> {language === "es" ? "Tener un familiar cercano que haya sufrido un ACV aumenta el riesgo." : language === "fr" ? "Avoir un parent proche qui a subi un AVC augmente le risque." : "Having a close relative who has had a stroke increases your risk."}</li>
                  <li>• <strong>{language === "es" ? "Etnia:" : language === "fr" ? "Origine ethnique:" : "Race/Ethnicity:"}</strong> {language === "es" ? "Ciertas etnias, como los afroamericanos, tienen un mayor riesgo de ACV." : language === "fr" ? "Certaines ethnies, comme les Afro-Américains, ont un risque plus élevé d\\'AVC." : "Certain ethnicities, such as African Americans, have a higher risk of stroke."}</li>
                  <li>• <strong>{language === "es" ? "Género:" : language === "fr" ? "Sexe:" : "Gender:"}</strong> {language === "es" ? "Los hombres tienen un mayor riesgo de ACV que las mujeres, pero las mujeres tienen más probabilidades de morir a causa de un ACV." : language === "fr" ? "Les hommes ont un risque plus élevé d\\'AVC que les femmes, mais les femmes sont plus susceptibles de mourir d\\'un AVC." : "Men have a higher risk of stroke than women, but women are more likely to die from a stroke."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Hipertensión:" : language === "fr" ? "Hypertension:" : "Hypertension:"}</strong> {language === "es" ? "La presión arterial alta es el factor de riesgo más importante para el ACV." : language === "fr" ? "L\\'hypertension artérielle est le facteur de risque le plus important pour l\\'AVC." : "High blood pressure is the most important risk factor for stroke."}</li>
                  <li>• <strong>{language === "es" ? "Colesterol alto:" : language === "fr" ? "Cholestérol élevé:" : "High Cholesterol:"}</strong> {language === "es" ? "Los niveles altos de colesterol pueden provocar la acumulación de placa en las arterias, lo que aumenta el riesgo de ACV." : language === "fr" ? "Un taux de cholestérol élevé peut entraîner une accumulation de plaque dans les artères, ce qui augmente le risque d\\'AVC." : "High cholesterol levels can lead to plaque buildup in the arteries, increasing the risk of stroke."}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Fumar daña los vasos sanguíneos y aumenta el riesgo de ACV." : language === "fr" ? "Fumer endommage les vaisseaux sanguins et augmente le risque d\\'AVC." : "Smoking damages blood vessels and increases the risk of stroke."}</li>
                  <li>• <strong>{language === "es" ? "Diabetes:" : language === "fr" ? "Diabète:" : "Diabetes:"}</strong> {language === "es" ? "La diabetes aumenta el riesgo de ACV." : language === "fr" ? "Le diabète augmente le risque d\\'AVC." : "Diabetes increases the risk of stroke."}</li>
                  <li>• <strong>{language === "es" ? "Enfermedad cardíaca:" : language === "fr" ? "Maladie cardiaque:" : "Heart Disease:"}</strong> {language === "es" ? "Las enfermedades cardíacas, como la fibrilación auricular, aumentan el riesgo de ACV." : language === "fr" ? "Les maladies cardiaques, telles que la fibrillation auriculaire, augmentent le risque d\\'AVC." : "Heart conditions, such as atrial fibrillation, increase the risk of stroke."}</li>
                  <li>• <strong>{language === "es" ? "Obesidad:" : language === "fr" ? "Obésité:" : "Obesity:"}</strong> {language === "es" ? "La obesidad aumenta el riesgo de ACV." : language === "fr" ? "L\\'obésité augmente le risque d\\'AVC." : "Obesity increases the risk of stroke."}</li>
                  <li>• <strong>{language === "es" ? "Estilo de vida sedentario:" : language === "fr" ? "Mode de vie sédentaire:" : "Sedentary Lifestyle:"}</strong> {language === "es" ? "La falta de actividad física aumenta el riesgo de ACV." : language === "fr" ? "Le manque d\\'activité physique augmente le risque d\\'AVC." : "Lack of physical activity increases the risk of stroke."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Examen físico y neurológico:" : language === "fr" ? "Examen physique et neurologique:" : "Physical and Neurological Exam:"}</strong> {language === "es" ? "Evaluación de la presión arterial, frecuencia cardíaca y función neurológica." : language === "fr" ? "Évaluation de la pression artérielle, de la fréquence cardiaque et de la fonction neurologique." : "Assessment of blood pressure, heart rate, and neurological function."}</li>
                  <li>• <strong>{language === "es" ? "Análisis de sangre:" : language === "fr" ? "Analyses sanguines:" : "Blood Tests:"}</strong> {language === "es" ? "Medición de los niveles de colesterol, glucosa en sangre y otros factores de riesgo." : language === "fr" ? "Mesure des taux de cholestérol, de glucose sanguin et d\\'autres facteurs de risque." : "Measurement of cholesterol levels, blood glucose, and other risk factors."}</li>
                  <li>• <strong>{language === "es" ? "Electrocardiograma (ECG):" : language === "fr" ? "Électrocardiogramme (ECG):" : "Electrocardiogram (ECG):"}</strong> {language === "es" ? "Detección de ritmos cardíacos irregulares, como la fibrilación auricular." : language === "fr" ? "Détection des rythmes cardiaques irréguliers, tels que la fibrillation auriculaire." : "Detection of irregular heart rhythms, such as atrial fibrillation."}</li>
                  <li>• <strong>{language === "es" ? "Imágenes cerebrales:" : language === "fr" ? "Imagerie cérébrale:" : "Brain Imaging:"}</strong> {language === "es" ? "Tomografía computarizada (TC) o resonancia magnética (RM) para identificar signos de ACV o daño cerebral." : language === "fr" ? "Tomodensitométrie (TDM) ou imagerie par résonance magnétique (IRM) pour identifier les signes d\\'AVC ou de lésions cérébrales." : "Computed tomography (CT) or magnetic resonance imaging (MRI) to identify signs of stroke or brain damage."}</li>
                  <li>• <strong>{language === "es" ? "Ecografía Doppler carotídea:" : language === "fr" ? "Échographie Doppler carotidienne:" : "Carotid Doppler Ultrasound:"}</strong> {language === "es" ? "Evaluación del flujo sanguíneo en las arterias carótidas para detectar estenosis." : language === "fr" ? "Évaluation du flux sanguin dans les artères carotides pour détecter un rétrécissement." : "Assessment of blood flow in the carotid arteries to detect narrowing."}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Riesgo de ACV" :
                 language === "fr" ? "Prédiction du Risque d'AVC" :
                 "Stroke Risk Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos de IA para predecir el riesgo de ACV basados en factores de riesgo individuales y datos clínicos." :
                 language === "fr" ? "Modèles d'IA pour prédire le risque d'AVC basés sur des facteurs de risque individuels et des données cliniques." :
                 "AI models to predict stroke risk based on individual risk factors and clinical data."}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">{language === "es" ? "Precisión Mejorada" : language === "fr" ? "Précision Améliorée" : "Improved Accuracy"}</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Detección Temprana de ACV" :
                 language === "fr" ? "Détection Précoce d'AVC" :
                 "Early Stroke Detection"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos para analizar imágenes cerebrales y detectar signos tempranos de ACV." :
                 language === "fr" ? "Algorithmes pour analyser les images cérébrales et détecter les signes précoces d'AVC." :
                 "Algorithms to analyze brain images and detect early signs of stroke."}
              </p>
              <Badge className="w-full justify-center bg-violet-100 text-violet-800">{language === "es" ? "Resultados Rápidos" : language === "fr" ? "Résultats Rapides" : "Fast Results"}</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Subtipificación de ACV" :
                 language === "fr" ? "Sous-typage d'AVC" :
                 "Stroke Subtyping"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos para clasificar el tipo de ACV (isquémico, hemorrágico) para guiar el tratamiento." :
                 language === "fr" ? "Modèles pour classer le type d'AVC (ischémique, hémorragique) pour guider le traitement." :
                 "Models to classify the type of stroke (ischemic, hemorrhagic) to guide treatment."}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">{language === "es" ? "Diagnóstico Preciso" : language === "fr" ? "Diagnostic Précis" : "Accurate Diagnosis"}</Badge>
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
                  {language === "es" ? "Tratamiento Agudo" :
                   language === "fr" ? "Traitement Aigu" :
                   "Acute Treatment"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "ACV Isquémico:" : language === "fr" ? "AVC Ischémique:" : "Ischemic Stroke:"}</strong> {language === "es" ? "Administración de activador tisular del plasminógeno (tPA) dentro de las primeras 4.5 horas del inicio de los síntomas." : language === "fr" ? "Administration d'activateur tissulaire du plasminogène (tPA) dans les 4,5 premières heures suivant l'apparition des symptômes." : "Administration of tissue plasminogen activator (tPA) within the first 4.5 hours of symptom onset."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "ACV Hemorrágico:" : language === "fr" ? "AVC Hémorragique:" : "Hemorrhagic Stroke:"}</strong> {language === "es" ? "Control de la presión arterial, reversión de anticoagulantes y posible intervención quirúrgica para evacuar la sangre." : language === "fr" ? "Contrôle de la pression artérielle, inversion des anticoagulants et éventuelle intervention chirurgicale pour évacuer le sang." : "Blood pressure control, reversal of anticoagulants, and possible surgical intervention to evacuate blood."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Prevención Secundaria" :
                   language === "fr" ? "Prévention Secondaire" :
                   "Secondary Prevention"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Antiplaquetarios:" : language === "fr" ? "Antiplaquettaires:" : "Antiplatelet Agents:"}</strong> {language === "es" ? "Aspirina, clopidogrel o ticagrelor para prevenir la formación de coágulos." : language === "fr" ? "Aspirine, clopidogrel ou ticagrelor pour prévenir la formation de caillots." : "Aspirin, clopidogrel, or ticagrelor to prevent clot formation."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Anticoagulantes:" : language === "fr" ? "Anticoagulants:" : "Anticoagulants:"}</strong> {language === "es" ? "Warfarina o anticoagulantes orales directos (ACOD) para pacientes con fibrilación auricular." : language === "fr" ? "Warfarine ou anticoagulants oraux directs (AOD) pour les patients atteints de fibrillation auriculaire." : "Warfarin or direct oral anticoagulants (DOACs) for patients with atrial fibrillation."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Control de factores de riesgo:" : language === "fr" ? "Contrôle des facteurs de risque:" : "Risk Factor Management:"}</strong> {language === "es" ? "Control de la presión arterial, colesterol y glucosa en sangre." : language === "fr" ? "Contrôle de la pression artérielle, du cholestérol et de la glycémie." : "Control of blood pressure, cholesterol, and blood glucose."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Modificación del estilo de vida:" : language === "fr" ? "Modification du style de vie:" : "Lifestyle Modification:"}</strong> {language === "es" ? "Dieta saludable, ejercicio regular, dejar de fumar y limitar el consumo de alcohol." : language === "fr" ? "Alimentation saine, exercice régulier, arrêt du tabac et limitation de la consommation d'alcool." : "Healthy diet, regular exercise, smoking cessation, and limiting alcohol consumption."}
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
              {language === "es" ? "Epidemiología Global del ACV" :
               language === "fr" ? "Épidémiologie Mondiale de l'AVC" :
               "Global Stroke Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">15M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos anuales" :
                   language === "fr" ? "Cas annuels" :
                   "Annual Cases"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5.5M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual Deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Discapacidad a largo plazo" :
                   language === "fr" ? "Invalidité à long terme" :
                   "Long-term Disability"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">1/4</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Recurrencia en 5 años" :
                   language === "fr" ? "Récidive en 5 ans" :
                   "Recurrence in 5 years"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-purple-50/30 to-violet-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para ACV" :
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour AVC" :
                 "Advanced Stroke Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros modelos especializados de IA para la predicción de riesgos, la detección temprana y la subtipificación de ACV. Mejore la atención al paciente y reduzca la discapacidad a largo plazo." :
                 language === "fr" ? "Utilisez nos modèles spécialisés d'IA pour la prédiction des risques, la détection précoce et le sous-typage d'AVC. Améliorez les soins aux patients et réduisez l'invalidité à long terme." :
                 "Use our specialized AI models for risk prediction, early detection, and stroke subtyping. Improve patient care and reduce long-term disability."}
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

export default Stroke;
