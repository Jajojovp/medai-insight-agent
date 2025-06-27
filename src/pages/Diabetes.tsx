import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Diabetes = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-green-100/80 text-green-800 rounded-full">
            {language === "es" ? "Diabetes" : 
             language === "fr" ? "Diabète" : 
             "Diabetes"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Diabetes" : 
             language === "fr" ? "Analyse Prédictive du Diabète" : 
             "Diabetes Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado de la diabetes con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et gestion personnalisée du diabète avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of diabetes with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-green-600" />
              {language === "es" ? "Información Clave - Diabetes" :
               language === "fr" ? "Information Clé - Diabète" :
               "Key Information - Diabetes"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "La diabetes es una enfermedad crónica que se produce cuando el páncreas no produce suficiente insulina o cuando el organismo no puede utilizar eficazmente la insulina que produce. La insulina es una hormona que regula el azúcar en la sangre." :
                   language === "fr" ? "Le diabète est une maladie chronique qui survient lorsque le pancréas ne produit pas suffisamment d'insuline ou lorsque l'organisme ne peut pas utiliser efficacement l'insuline qu'il produit. L'insuline est une hormone qui régule le sucre dans le sang." :
                   "Diabetes is a chronic disease that occurs when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces. Insulin is a hormone that regulates blood sugar."}
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm text-green-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " 537 millones de adultos viven con diabetes en todo el mundo. Se espera que esta cifra aumente a 700 millones para 2045." :
                     language === "fr" ? " 537 millions d'adultes vivent avec le diabète dans le monde. Ce chiffre devrait passer à 700 millions d'ici 2045." :
                     " 537 million adults are living with diabetes worldwide. This number is expected to rise to 700 million by 2045."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-700">
                  {language === "es" ? "Tipos de Diabetes" :
                   language === "fr" ? "Types de Diabète" :
                   "Types of Diabetes"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Diabetes Tipo 1:" : language === "fr" ? "Diabète de Type 1:" : "Type 1 Diabetes:"}</strong> {language === "es" ? "El cuerpo no produce insulina. Generalmente diagnosticada en niños y adultos jóvenes." : language === "fr" ? "Le corps ne produit pas d'insuline. Généralement diagnostiqué chez les enfants et les jeunes adultes." : "The body does not produce insulin. Usually diagnosed in children and young adults."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Diabetes Tipo 2:" : language === "fr" ? "Diabète de Type 2:" : "Type 2 Diabetes:"}</strong> {language === "es" ? "El cuerpo no utiliza la insulina de manera eficaz. Asociada con la obesidad, inactividad física y edad avanzada." : language === "fr" ? "Le corps n'utilise pas l'insuline efficacement. Associé à l'obésité, à l'inactivité physique et à l'âge avancé." : "The body does not use insulin effectively. Associated with obesity, physical inactivity, and older age."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Diabetes Gestacional:" : language === "fr" ? "Diabète Gestationnel:" : "Gestational Diabetes:"}</strong> {language === "es" ? "Se desarrolla durante el embarazo. Generalmente desaparece después del parto, pero aumenta el riesgo de diabetes tipo 2." : language === "fr" ? "Se développe pendant la grossesse. Généralement disparaît après l'accouchement, mais augmente le risque de diabète de type 2." : "Develops during pregnancy. Usually disappears after childbirth but increases the risk of type 2 diabetes."}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo con la edad, especialmente después de los 45 años." : language === "fr" ? "Risque accru avec l'âge, surtout après 45 ans." : "Increased risk with age, especially after age 45."}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Tener un padre, hermano o hermana con diabetes aumenta el riesgo." : language === "fr" ? "Avoir un parent, un frère ou une sœur atteint de diabète augmente le risque." : "Having a parent, brother, or sister with diabetes increases the risk."}</li>
                  <li>• <strong>{language === "es" ? "Etnia:" : language === "fr" ? "Origine ethnique:" : "Race/Ethnicity:"}</strong> {language === "es" ? "Ciertas etnias tienen mayor riesgo, incluyendo afroamericanos, hispanos, nativos americanos, asiáticos americanos e isleños del Pacífico." : language === "fr" ? "Certaines ethnies présentent un risque plus élevé, notamment les Afro-Américains, les Hispaniques, les Amérindiens, les Asiatiques américains et les insulaires du Pacifique." : "Certain ethnicities have a higher risk, including African Americans, Hispanics, Native Americans, Asian Americans, and Pacific Islanders."}</li>
                  <li>• <strong>{language === "es" ? "Diabetes gestacional previa:" : language === "fr" ? "Antécédents de diabète gestationnel:" : "Previous gestational diabetes:"}</strong> {language === "es" ? "Si tuvo diabetes gestacional, tiene un mayor riesgo de desarrollar diabetes tipo 2 más adelante." : language === "fr" ? "Si vous avez eu un diabète gestationnel, vous courez un risque accru de développer un diabète de type 2 plus tard." : "If you had gestational diabetes, you have a higher risk of developing type 2 diabetes later."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Sobrepeso u obesidad:" : language === "fr" ? "Surpoids ou obésité:" : "Overweight or obesity:"}</strong> {language === "es" ? "El exceso de peso, especialmente alrededor del abdomen, aumenta la resistencia a la insulina." : language === "fr" ? "L'excès de poids, surtout autour de l'abdomen, augmente la résistance à l'insuline." : "Excess weight, especially around the abdomen, increases insulin resistance."}</li>
                  <li>• <strong>{language === "es" ? "Inactividad física:" : language === "fr" ? "Inactivité physique:" : "Physical inactivity:"}</strong> {language === "es" ? "Cuanto menos activo sea, mayor será su riesgo. La actividad física ayuda a controlar el peso, utiliza la glucosa como energía y hace que las células sean más sensibles a la insulina." : language === "fr" ? "Moins vous êtes actif, plus votre risque est élevé. L'activité physique aide à contrôler le poids, utilise le glucose comme énergie et rend les cellules plus sensibles à l'insuline." : "The less active you are, the greater your risk. Physical activity helps control weight, uses glucose for energy, and makes cells more sensitive to insulin."}</li>
                  <li>• <strong>{language === "es" ? "Presión arterial alta:" : language === "fr" ? "Hypertension artérielle:" : "High blood pressure:"}</strong> {language === "es" ? "Tener presión arterial alta (140/90 mm Hg o superior) está relacionado con un mayor riesgo de diabetes tipo 2." : language === "fr" ? "Avoir une pression artérielle élevée (140/90 mm Hg ou plus) est lié à un risque accru de diabète de type 2." : "Having high blood pressure (140/90 mm Hg or higher) is linked to an increased risk of type 2 diabetes."}</li>
                  <li>• <strong>{language === "es" ? "Niveles anormales de colesterol y triglicéridos:" : language === "fr" ? "Taux anormaux de cholestérol et de triglycérides:" : "Abnormal cholesterol and triglyceride levels:"}</strong> {language === "es" ? "Tener niveles bajos de colesterol HDL ("bueno") y niveles altos de triglicéridos aumenta el riesgo." : language === "fr" ? "Avoir de faibles taux de cholestérol HDL (« bon ») et des taux élevés de triglycérides augmente le risque." : "Having low levels of HDL cholesterol ("good") and high levels of triglycerides increases the risk."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Prueba de glucosa en plasma en ayunas (GPA):" : language === "fr" ? "Test de glycémie à jeun (GAJ):" : "Fasting plasma glucose (FPG) test:"}</strong> {language === "es" ? "Mide el nivel de glucosa en sangre después de un ayuno de al menos ocho horas." : language === "fr" ? "Mesure le taux de glucose dans le sang après un jeûne d'au moins huit heures." : "Measures blood glucose level after fasting for at least eight hours."}</li>
                  <li>• <strong>{language === "es" ? "Prueba de tolerancia a la glucosa oral (PTGO):" : language === "fr" ? "Test de tolérance au glucose par voie orale (TTGO):" : "Oral glucose tolerance test (OGTT):"}</strong> {language === "es" ? "Mide el nivel de glucosa en sangre dos horas después de beber un líquido que contiene glucosa." : language === "fr" ? "Mesure le taux de glucose dans le sang deux heures après avoir bu un liquide contenant du glucose." : "Measures blood glucose level two hours after drinking a liquid containing glucose."}</li>
                  <li>• <strong>{language === "es" ? "Prueba de hemoglobina A1c (HbA1c):" : language === "fr" ? "Test d'hémoglobine A1c (HbA1c):" : "Hemoglobin A1c (HbA1c) test:"}</strong> {language === "es" ? "Mide el nivel promedio de glucosa en sangre durante los últimos dos o tres meses." : language === "fr" ? "Mesure le taux moyen de glucose dans le sang au cours des deux ou trois derniers mois." : "Measures average blood glucose level over the past two to three months."}</li>
                  <li>• <strong>{language === "es" ? "Prueba aleatoria de glucosa en plasma:" : language === "fr" ? "Test aléatoire de glycémie:" : "Random plasma glucose test:"}</strong> {language === "es" ? "Mide el nivel de glucosa en sangre en cualquier momento del día, sin tener en cuenta cuándo comió por última vez." : language === "fr" ? "Mesure le taux de glucose dans le sang à tout moment de la journée, sans tenir compte du moment où vous avez mangé pour la dernière fois." : "Measures blood glucose level at any time of day, regardless of when you last ate."}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Análisis de Glucosa" : 
                 language === "fr" ? "Analyse de Glucose" : 
                 "Glucose Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos avanzados para interpretación de niveles de glucosa en sangre, incluyendo GPA, PTGO y HbA1c con análisis de tendencias temporales y 98.8% de precisión" :
                 language === "fr" ? "Algorithmes avancés pour l'interprétation des taux de glucose dans le sang, y compris GPA, PTGO et HbA1c avec analyse des tendances temporelles et une précision de 98,8%" :
                 "Advanced algorithms for interpretation of blood glucose levels, including FPG, OGTT, and HbA1c with temporal trend analysis and 98.8% accuracy"}
              </p>
              <Badge className="w-full justify-center bg-green-100 text-green-800">98.8% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                {language === "es" ? "Sistemas de clasificación automática en grupos de riesgo (bajo, moderado, alto) basados en niveles de glucosa, factores de riesgo y historial clínico" :
                 language === "fr" ? "Systèmes de classification automatique en groupes de risque (faible, modéré, élevé) basés sur les taux de glucose, les facteurs de risque et les antécédents cliniques" :
                 "Automatic classification systems into risk groups (low, moderate, high) based on glucose levels, risk factors, and clinical history"}
              </p>
              <Badge className="w-full justify-center bg-emerald-100 text-emerald-800">Clasificación Precisa</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Complicaciones" : 
                 language === "fr" ? "Prédiction des Complications" : 
                 "Complications Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos predictivos de complicaciones diabéticas (enfermedad cardiovascular, nefropatía, retinopatía) utilizando análisis multivariado para optimizar decisiones de tratamiento" :
                 language === "fr" ? "Modèles prédictifs des complications diabétiques (maladies cardiovasculaires, néphropathie, rétinopathie) utilisant une analyse multivariée pour optimiser les décisions de traitement" :
                 "Predictive models of diabetic complications (cardiovascular disease, nephropathy, retinopathy) using multivariate analysis to optimize treatment decisions"}
              </p>
              <Badge className="w-full justify-center bg-teal-100 text-teal-800">Tratamiento Optimo</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-green-600" />
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
                  {language === "es" ? "Riesgo Bajo-Moderado" :
                   language === "fr" ? "Risque Faible-Modéré" :
                   "Low-Moderate Risk"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cambios en el estilo de vida:" : language === "fr" ? "Changements de style de vie:" : "Lifestyle changes:"}</strong> {language === "es" ? "Dieta saludable, ejercicio regular y control del peso." : language === "fr" ? "Alimentation saine, exercice régulier et contrôle du poids." : "Healthy diet, regular exercise, and weight management."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Monitoreo de glucosa:" : language === "fr" ? "Surveillance du glucose:" : "Glucose monitoring:"}</strong> {language === "es" ? "Medición regular de los niveles de glucosa en sangre." : language === "fr" ? "Mesure régulière des taux de glucose dans le sang." : "Regular measurement of blood glucose levels."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Medicamentos orales:" : language === "fr" ? "Médicaments oraux:" : "Oral medications:"}</strong> {language === "es" ? "Metformina, sulfonilureas, inhibidores de la DPP-4, etc." : language === "fr" ? "Metformine, sulfonylurées, inhibiteurs de la DPP-4, etc." : "Metformin, sulfonylureas, DPP-4 inhibitors, etc."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Riesgo Alto" :
                   language === "fr" ? "Risque Élevé" :
                   "High Risk"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia con insulina:" : language === "fr" ? "Insulinothérapie:" : "Insulin therapy:"}</strong> {language === "es" ? "Inyecciones de insulina o bomba de insulina para controlar los niveles de glucosa." : language === "fr" ? "Injections d'insuline ou pompe à insuline pour contrôler les taux de glucose." : "Insulin injections or insulin pump to control glucose levels."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Monitoreo continuo de glucosa (MCG):" : language === "fr" ? "Surveillance continue du glucose (SCG):" : "Continuous glucose monitoring (CGM):"}</strong> {language === "es" ? "Dispositivo que mide los niveles de glucosa en tiempo real." : language === "fr" ? "Dispositif qui mesure les taux de glucose en temps réel." : "Device that measures glucose levels in real-time."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Medicamentos adicionales:" : language === "fr" ? "Médicaments supplémentaires:" : "Additional medications:"}</strong> {language === "es" ? "Inhibidores de SGLT2, agonistas del receptor GLP-1, etc." : language === "fr" ? "Inhibiteurs de SGLT2, agonistes des récepteurs GLP-1, etc." : "SGLT2 inhibitors, GLP-1 receptor agonists, etc."}
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
              {language === "es" ? "Epidemiología Global de la Diabetes" :
               language === "fr" ? "Épidémiologie Mondiale du Diabète" :
               "Global Diabetes Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">537M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Adultos con diabetes (2021)" :
                   language === "fr" ? "Adultes atteints de diabète (2021)" :
                   "Adults with diabetes (2021)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6.7M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes relacionadas con la diabetes (2021)" :
                   language === "fr" ? "Décès liés au diabète (2021)" :
                   "Diabetes-related deaths (2021)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">46%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos sin diagnosticar" :
                   language === "fr" ? "Cas non diagnostiqués" :
                   "Undiagnosed cases"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$966B</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Gasto mundial en diabetes (2021)" :
                   language === "fr" ? "Dépenses mondiales pour le diabète (2021)" :
                   "Worldwide spending on diabetes (2021)"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-green-50/30 to-emerald-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Diabetes" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour le Diabète" : 
                 "Advanced Diabetes Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y optimización de tratamiento en diabetes. Tecnología validada clínicamente con 98.8% de precisión máxima." :
                 language === "fr" ? "Utilisez nos 62+ modèles spécialisés d'IA pour la détection précoce, la stratification des risques et l'optimisation du traitement du diabète. Technologie validée cliniquement avec une précision maximale de 98,8 %." :
                 "Use our 62+ specialized AI models for early detection, risk stratification, and treatment optimization in diabetes. Clinically validated technology with 98.8% maximum accuracy."}
              </p>
              <Button className="bg-green-600 hover:bg-green-700 rounded-2xl text-lg px-8 py-3">
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

export default Diabetes;
