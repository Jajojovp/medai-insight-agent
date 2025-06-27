
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Activity, TrendingUp, AlertTriangle, CheckCircle, Users, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Stroke = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-violet-100/80 text-violet-800 rounded-full">
            {language === 'es' ? 'Accidente Cerebrovascular' : 
             language === 'fr' ? 'Accident Vasculaire Cérébral' : 
             'Stroke Risk'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Predicción de Riesgo de ACV' : 
             language === 'fr' ? 'Prédiction du Risque d\'AVC' : 
             'Stroke Risk Prediction'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de riesgo de accidente cerebrovascular con 5+ modelos especializados que alcanzan 91.3% de precisión usando escalas clínicas validadas' :
             language === 'fr' ? 'Analyse prédictive du risque d\'accident vasculaire cérébral avec 5+ modèles spécialisés atteignant 91.3% de précision utilisant échelles cliniques validées' :
             'Stroke risk predictive analysis with 5+ specialized models achieving 91.3% accuracy using validated clinical scales'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-violet-600" />
              {language === "es" ? "Información Clave - Accidente Cerebrovascular" :
               language === "fr" ? "Information Clé - Accident Vasculaire Cérébral" :
               "Key Information - Stroke"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-violet-700">
                  {language === "es" ? "Definición y Fisiopatología" :
                   language === "fr" ? "Définition et Physiopathologie" :
                   "Definition and Pathophysiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El ACV se define como un déficit neurológico focal de inicio súbito causado por interrupción del flujo sanguíneo cerebral. 87% son isquémicos (tromboembólicos), 10% hemorrágicos intracerebral, 3% hemorragia subaracnoidea. La ventana terapéutica de 4.5 horas para trombólisis es crítica." :
                   language === "fr" ? "L'AVC se définit comme déficit neurologique focal d'début soudain causé par interruption du flux sanguin cérébral. 87% sont ischémiques (thromboemboliques), 10% hémorragiques intracérébraux, 3% hémorragie sous-arachnoïdienne. Fenêtre thérapeutique de 4.5 heures pour thrombolyse est critique." :
                   "Stroke is defined as a sudden-onset focal neurological deficit caused by cerebral blood flow interruption. 87% are ischemic (thromboembolic), 10% intracerebral hemorrhage, 3% subarachnoid hemorrhage. The 4.5-hour therapeutic window for thrombolysis is critical."}
                </p>
                <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-400">
                  <p className="text-sm text-violet-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " 795,000 casos/año en EE.UU. 1 cada 4 minutos. 5ta causa de muerte. 185,000 son recurrentes. Costo anual $46 mil millones." :
                     language === "fr" ? " 795,000 cas/an aux USA. 1 chaque 4 minutes. 5ème cause de décès. 185,000 sont récurrents. Coût annuel $46 milliards." :
                     " 795,000 cases/year in USA. 1 every 4 minutes. 5th leading cause of death. 185,000 are recurrent. Annual cost $46 billion."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  {language === "es" ? "Clasificación TOAST" :
                   language === "fr" ? "Classification TOAST" :
                   "TOAST Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Aterosclerosis arterias grandes:" : language === "fr" ? "Athérosclérose grandes artères:" : "Large artery atherosclerosis:"}</strong> {language === "es" ? "25% casos, carótida, vertebrobasilar" : language === "fr" ? "25% cas, carotide, vertébrobasilaire" : "25% cases, carotid, vertebrobasilar"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cardioembólico:" : language === "fr" ? "Cardioembolique:" : "Cardioembolic:"}</strong> {language === "es" ? "25% casos, fibrilación auricular, valvulopatías" : language === "fr" ? "25% cas, fibrillation auriculaire, valvulopathies" : "25% cases, atrial fibrillation, valvular disease"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Enfermedad vaso pequeño:" : language === "fr" ? "Maladie petit vaisseau:" : "Small vessel disease:"}</strong> {language === "es" ? "20% casos, lacunar, microangiopatía" : language === "fr" ? "20% cas, lacunaire, microangiopathie" : "20% cases, lacunar, microangiopathy"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Causa determinada:" : language === "fr" ? "Cause déterminée:" : "Other determined cause:"}</strong> {language === "es" ? "5% casos, disección, vasculitis" : language === "fr" ? "5% cas, dissection, vascularite" : "5% cases, dissection, vasculitis"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Indeterminado:" : language === "fr" ? "Indéterminé:" : "Undetermined:"}</strong> {language === "es" ? "25% casos, criptogénico, múltiples causas" : language === "fr" ? "25% cas, cryptogénique, causes multiples" : "25% cases, cryptogenic, multiple causes"}
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
              {language === "es" ? "Factores de Riesgo y Escalas Predictivas" :
               language === "fr" ? "Facteurs de Risque et Échelles Prédictives" :
               "Risk Factors and Predictive Scales"}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Riesgo dobla cada década >55 años" : language === "fr" ? "Risque double chaque décennie >55 ans" : "Risk doubles every decade >55 years"}</li>
                  <li>• <strong>{language === "es" ? "Sexo masculino:" : language === "fr" ? "Sexe masculin:" : "Male gender:"}</strong> {language === "es" ? "RR 1.25, mayor en <75 años" : language === "fr" ? "RR 1.25, plus élevé <75 ans" : "RR 1.25, higher in <75 years"}</li>
                  <li>• <strong>{language === "es" ? "Raza/etnia:" : language === "fr" ? "Race/ethnicité:" : "Race/ethnicity:"}</strong> {language === "es" ? "Afroamericanos RR 2x, hispanos 1.5x" : language === "fr" ? "Afro-américains RR 2x, hispaniques 1.5x" : "African Americans RR 2x, Hispanics 1.5x"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Antécédents familiaux:" : "Family history:"}</strong> {language === "es" ? "Parientes 1er grado, RR 1.3-1.7" : language === "fr" ? "Parents 1er degré, RR 1.3-1.7" : "First-degree relatives, RR 1.3-1.7"}</li>
                  <li>• <strong>{language === "es" ? "ACV/AIT previo:" : language === "fr" ? "AVC/AIT antérieur:" : "Prior stroke/TIA:"}</strong> {language === "es" ? "Riesgo recurrencia 10-15% primer año" : language === "fr" ? "Risque récurrence 10-15% première année" : "Recurrence risk 10-15% first year"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables Mayores" :
                   language === "fr" ? "Facteurs Modifiables Majeurs" :
                   "Major Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Hipertensión:" : language === "fr" ? "Hypertension:" : "Hypertension:"}</strong> {language === "es" ? "Factor #1, RR 2-4x, 54% atribuible" : language === "fr" ? "Facteur #1, RR 2-4x, 54% attribuable" : "Factor #1, RR 2-4x, 54% attributable"}</li>
                  <li>• <strong>{language === "es" ? "Fibrilación auricular:" : language === "fr" ? "Fibrillation auriculaire:" : "Atrial fibrillation:"}</strong> {language === "es" ? "RR 5x, 15% de ACV isquémicos" : language === "fr" ? "RR 5x, 15% d'AVC ischémiques" : "RR 5x, 15% of ischemic strokes"}</li>
                  <li>• <strong>{language === "es" ? "Diabetes mellitus:" : language === "fr" ? "Diabète sucré:" : "Diabetes mellitus:"}</strong> {language === "es" ? "RR 1.8-3x, acelera aterosclerosis" : language === "fr" ? "RR 1.8-3x, accélère athérosclérose" : "RR 1.8-3x, accelerates atherosclerosis"}</li>
                  <li>• <strong>{language === "es" ? "Dislipidemia:" : language === "fr" ? "Dyslipidémie:" : "Dyslipidemia:"}</strong> {language === "es" ? "LDL >160 mg/dL, RR 1.8-2.6x" : language === "fr" ? "LDL >160 mg/dL, RR 1.8-2.6x" : "LDL >160 mg/dL, RR 1.8-2.6x"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "RR 2-4x, trombosis y vasoconstricción" : language === "fr" ? "RR 2-4x, thrombose et vasoconstriction" : "RR 2-4x, thrombosis and vasoconstriction"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Escalas Predictivas Validadas" :
                   language === "fr" ? "Échelles Prédictives Validées" :
                   "Validated Predictive Scales"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>CHA₂DS₂-VASc:</strong> {language === "es" ? "Fibrilación auricular, anticoagulación" : language === "fr" ? "Fibrillation auriculaire, anticoagulation" : "Atrial fibrillation, anticoagulation"}</li>
                  <li>• <strong>ABCD²:</strong> {language === "es" ? "Post-AIT, riesgo ACV 48h-7días" : language === "fr" ? "Post-AIT, risque AVC 48h-7jours" : "Post-TIA, stroke risk 48h-7days"}</li>
                  <li>• <strong>{language === "es" ? "Escala Framingham:" : language === "fr" ? "Échelle Framingham:" : "Framingham Stroke Scale:"}</strong> {language === "es" ? "Riesgo 10 años población general" : language === "fr" ? "Risque 10 ans population générale" : "10-year risk general population"}</li>
                  <li>• <strong>NIHSS:</strong> {language === "es" ? "Severidad neurológica aguda" : language === "fr" ? "Sévérité neurologique aiguë" : "Acute neurological severity"}</li>
                  <li>• <strong>mRS:</strong> {language === "es" ? "Discapacidad funcional post-ACV" : language === "fr" ? "Handicap fonctionnel post-AVC" : "Functional disability post-stroke"}</li>
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
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Evaluación Neurológica' : 
                 language === 'fr' ? 'Évaluation Neurologique' : 
                 'Neurological Assessment'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Análisis de función cerebral, historial de AIT, síntomas neurológicos focales y deterioro cognitivo usando escalas NIHSS y mRS con 91.3% precisión predictiva' :
                 language === 'fr' ? 'Analyse de fonction cérébrale, historique d\'AIT, symptômes neurologiques focaux et détérioration cognitive utilisant échelles NIHSS et mRS avec 91.3% précision prédictive' :
                 'Brain function analysis, TIA history, focal neurological symptoms and cognitive deterioration using NIHSS and mRS scales with 91.3% predictive accuracy'}
              </p>
              <Badge className="w-full justify-center bg-violet-100 text-violet-800">91.3% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Factores Cerebrovasculares' : 
                 language === 'fr' ? 'Facteurs Cérébrovasculaires' : 
                 'Cerebrovascular Factors'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Evaluación integral de hipertensión, fibrilación auricular, diabetes, dislipidemia, estenosis carotídea y factores protrombóticos para estratificación de riesgo' :
                 language === 'fr' ? 'Évaluation intégrale d\'hypertension, fibrillation auriculaire, diabète, dyslipidémie, sténose carotidienne et facteurs prothrombotiques pour stratification du risque' :
                 'Comprehensive evaluation of hypertension, atrial fibrillation, diabetes, dyslipidemia, carotid stenosis and prothrombotic factors for risk stratification'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Análisis Multifactorial</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Prevención Primaria/Secundaria' : 
                 language === 'fr' ? 'Prévention Primaire/Secondaire' : 
                 'Primary/Secondary Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Identificación de pacientes de alto riesgo para intervención preventiva intensiva, anticoagulación en fibrilación auricular y control de factores modificables' :
                 language === 'fr' ? 'Identification de patients à haut risque pour intervention préventive intensive, anticoagulation en fibrillation auriculaire et contrôle facteurs modifiables' :
                 'High-risk patient identification for intensive preventive intervention, anticoagulation in atrial fibrillation and modifiable risk factor control'}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">Prevención Dirigida</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-violet-600" />
              {language === "es" ? "Guías de Manejo y Prevención" :
               language === "fr" ? "Guides de Prise en Charge et Prévention" :
               "Management and Prevention Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Prevención Primaria" :
                   language === "fr" ? "Prévention Primaire" :
                   "Primary Prevention"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Control tensional:" : language === "fr" ? "Contrôle tensionnel:" : "Blood pressure control:"}</strong> {language === "es" ? "<140/90 mmHg general, <130/80 diabéticos/ERC" : language === "fr" ? "<140/90 mmHg général, <130/80 diabétiques/IRC" : "<140/90 mmHg general, <130/80 diabetics/CKD"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Anticoagulación FA:" : language === "fr" ? "Anticoagulation FA:" : "AF anticoagulation:"}</strong> {language === "es" ? "CHA₂DS₂-VASc ≥2 (♂) o ≥3 (♀), DOACs primera línea" : language === "fr" ? "CHA₂DS₂-VASc ≥2 (♂) ou ≥3 (♀), AOD première ligne" : "CHA₂DS₂-VASc ≥2 (♂) or ≥3 (♀), DOACs first line"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Manejo lipídico:" : language === "fr" ? "Gestion lipidique:" : "Lipid management:"}</strong> {language === "es" ? "Estatinas alta intensidad, LDL <70 mg/dL alto riesgo" : language === "fr" ? "Statines haute intensité, LDL <70 mg/dL haut risque" : "High-intensity statins, LDL <70 mg/dL high risk"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Manejo Agudo y Prevención Secundaria" :
                   language === "fr" ? "Prise en Charge Aiguë et Prévention Secondaire" :
                   "Acute Management & Secondary Prevention"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trombólisis IV:" : language === "fr" ? "Thrombolyse IV:" : "IV thrombolysis:"}</strong> {language === "es" ? "rtPA 0.9 mg/kg <4.5h síntomas, tenecteplasa alternativa" : language === "fr" ? "rtPA 0.9 mg/kg <4.5h symptômes, ténectéplase alternative" : "rtPA 0.9 mg/kg <4.5h symptoms, tenecteplase alternative"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trombectomía mecánica:" : language === "fr" ? "Thrombectomie mécanique:" : "Mechanical thrombectomy:"}</strong> {language === "es" ? "<6h oclusión vaso grande, hasta 24h seleccionados" : language === "fr" ? "<6h occlusion gros vaisseau, jusqu'à 24h sélectionnés" : "<6h large vessel occlusion, up to 24h selected"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Antiagregación:" : language === "fr" ? "Antiagrégation:" : "Antiplatelet therapy:"}</strong> {language === "es" ? "ASA 75-100 mg/día, clopidogrel alternativa, terapia dual temporal" : language === "fr" ? "ASA 75-100 mg/jour, clopidogrel alternative, thérapie duale temporaire" : "ASA 75-100 mg/day, clopidogrel alternative, temporary dual therapy"}
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
              {language === "es" ? "Epidemiología Global del Accidente Cerebrovascular" :
               language === "fr" ? "Épidémiologie Mondiale de l'Accident Vasculaire Cérébral" :
               "Global Stroke Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">795K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos anuales EE.UU." :
                   language === "fr" ? "Cas annuels USA" :
                   "Annual cases USA"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6.2M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes globales/año" :
                   language === "fr" ? "Décès mondiaux/an" :
                   "Global deaths/year"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4min</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Frecuencia en EE.UU." :
                   language === "fr" ? "Fréquence aux USA" :
                   "Frequency in USA"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5ta</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Causa muerte EE.UU." :
                   language === "fr" ? "Cause décès USA" :
                   "Death cause USA"}
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
                {language === 'es' ? 'Prevención Cerebrovascular Avanzada' : 
                 language === 'fr' ? 'Prévention Cérébrovasculaire Avancée' : 
                 'Advanced Cerebrovascular Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en ACV utilizan escalas clínicas validadas y análisis multifactorial para predecir y prevenir accidentes cerebrovasculares antes de que ocurran.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en AVC utilisent échelles cliniques validées et analyse multifactorielle pour prédire et prévenir accidents cérébrovasculaires avant qu\'ils ne surviennent.' :
                 'Our 5+ specialized stroke models use validated clinical scales and multifactorial analysis to predict and prevent cerebrovascular accidents before they occur.'}
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700 rounded-2xl text-lg px-8 py-3">
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
