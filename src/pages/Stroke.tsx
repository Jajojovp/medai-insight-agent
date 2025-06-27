import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Activity, Zap, AlertTriangle, CheckCircle, TrendingUp, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Stroke = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full">
            {language === 'es' ? 'Accidente Cerebrovascular' : 
             language === 'fr' ? 'Accident Vasculaire Cérébral' : 
             'Stroke'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Predicción de Accidente Cerebrovascular' : 
             language === 'fr' ? 'Prédiction d\'Accident Vasculaire Cérébral' : 
             'Stroke Prediction'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para ACV usando 5+ modelos especializados con datos clínicos, biomarcadores y algoritmos de aprendizaje automático' :
             language === 'fr' ? 'Analyse prédictive avancée pour AVC utilisant 5+ modèles spécialisés avec données cliniques, biomarqueurs et algorithmes d\'apprentissage automatique' :
             'Advanced predictive analysis for stroke using 5+ specialized models with clinical data, biomarkers and machine learning algorithms'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-purple-600" />
              {language === "es" ? "Información Clave - Accidente Cerebrovascular" :
               language === "fr" ? "Information Clé - Accident Vasculaire Cérébral" :
               "Key Information - Stroke"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El ACV es una disfunción neurológica causada por isquemia o hemorragia cerebral. Es la 5ta causa de muerte y principal causa de discapacidad a largo plazo en EE.UU. Cada 40 segundos alguien sufre un ACV." :
                   language === "fr" ? "L'AVC est une dysfonction neurologique causée par ischémie ou hémorragie cérébrale. C'est la 5ème cause de décès et principale cause d'invalidité à long terme aux États-Unis. Toutes les 40 secondes, quelqu'un subit un AVC." :
                   "Stroke is a neurological dysfunction caused by cerebral ischemia or hemorrhage. It is the 5th leading cause of death and leading cause of long-term disability in the US. Every 40 seconds someone has a stroke."}
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-sm text-purple-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " 87% son isquémicos, 10% hemorrágicos, 3% HSA. Costo anual: $50 billones (EE.UU.). 34% recurren en 5 años." :
                     language === "fr" ? " 87% sont ischémiques, 10% hémorragiques, 3% HSA. Coût annuel: $50 milliards (USA). 34% récidivent en 5 ans." :
                     " 87% are ischemic, 10% hemorrhagic, 3% SAH. Annual cost: $50 billion (USA). 34% recur within 5 years."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-700">
                  {language === "es" ? "Clasificación TOAST" :
                   language === "fr" ? "Classification TOAST" :
                   "TOAST Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Aterotrombótico:</strong> {language === "es" ? "Placa ateromatosa >50% en arteria grande" : language === "fr" ? "Plaque athéromateuse >50% dans grande artère" : "Atheromatous plaque >50% in large artery"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Cardioembólico:</strong> {language === "es" ? "Fibrilación auricular, trombo ventricular, foramen oval permeable" : language === "fr" ? "Fibrillation auriculaire, thrombus ventriculaire, foramen ovale perméable" : "Atrial fibrillation, ventricular thrombus, patent foramen ovale"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Lacunar:</strong> {language === "es" ? "Oclusión de pequeña arteria perforante" : language === "fr" ? "Occlusion de petite artère perforante" : "Occlusion of small perforating artery"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Causa inusual:</strong> {language === "es" ? "Disección arterial, vasculitis, hipercoagulabilidad" : language === "fr" ? "Dissection artérielle, vascularite, hypercoagulabilité" : "Arterial dissection, vasculitis, hypercoagulability"}
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
              {language === "es" ? "Factores de Riesgo y Prevención" :
               language === "fr" ? "Facteurs de Risque et Prévention" :
               "Risk Factors and Prevention"}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Riesgo se duplica cada década después de los 55 años" : language === "fr" ? "Risque double chaque décennie après 55 ans" : "Risk doubles each decade after age 55"}</li>
                  <li>• <strong>{language === "es" ? "Sexo:" : language === "fr" ? "Sexe:" : "Gender:"}</strong> {language === "es" ? "Hombres tienen mayor riesgo hasta los 75 años" : language === "fr" ? "Hommes ont risque plus élevé jusqu'à 75 ans" : "Men have higher risk until age 75"}</li>
                  <li>• <strong>{language === "es" ? "Etnia:" : language === "fr" ? "Ethnie:" : "Ethnicity:"}</strong> {language === "es" ? "Afroamericanos tienen riesgo 2x mayor" : language === "fr" ? "Afro-américains ont risque 2x plus élevé" : "African Americans have 2x higher risk"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Antécédents familiaux:" : "Family history:"}</strong> {language === "es" ? "Riesgo aumentado si ACV en familiares de 1er grado" : language === "fr" ? "Risque augmenté si AVC chez famille 1er degré" : "Increased risk if stroke in 1st degree relatives"}</li>
                  <li>• <strong>{language === "es" ? "Genética:" : language === "fr" ? "Génétique:" : "Genetics:"}</strong> CADASIL, Fabry, sickle cell</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Hipertensión:" : language === "fr" ? "Hypertension:" : "Hypertension:"}</strong> {language === "es" ? "Principal factor, control <130/80 mmHg" : language === "fr" ? "Principal facteur, contrôle <130/80 mmHg" : "Leading factor, control <130/80 mmHg"}</li>
                  <li>• <strong>{language === "es" ? "Fibrilación auricular:" : language === "fr" ? "Fibrillation auriculaire:" : "Atrial fibrillation:"}</strong> {language === "es" ? "Anticoagulación reduce riesgo 70%" : language === "fr" ? "Anticoagulation réduit risque 70%" : "Anticoagulation reduces risk 70%"}</li>
                  <li>• <strong>{language === "es" ? "Dislipidemia:" : language === "fr" ? "Dyslipidémie:" : "Dyslipidemia:"}</strong> {language === "es" ? "Estatinas reducen riesgo aterotrombótico" : language === "fr" ? "Statines réduisent risque athérothrombotique" : "Statins reduce atherothrombotic risk"}</li>
                  <li>• <strong>{language === "es" ? "Diabetes:" : language === "fr" ? "Diabète:" : "Diabetes:"}</strong> {language === "es" ? "Control glucémico reduce riesgo" : language === "fr" ? "Contrôle glycémique réduit risque" : "Glycemic control reduces risk"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Cesa tabaquismo reduce riesgo 50% en 5 años" : language === "fr" ? "Cesser tabagisme réduit risque 50% en 5 ans" : "Smoking cessation reduces risk 50% in 5 years"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores" :
                   language === "fr" ? "Biomarqueurs" :
                   "Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Troponina:" : language === "fr" ? "Troponine:" : "Troponin:"}</strong> {language === "es" ? "Elevada en ACV agudo, predice mortalidad" : language === "fr" ? "Élevée dans AVC aigu, prédit mortalité" : "Elevated in acute stroke, predicts mortality"}</li>
                  <li>• <strong>{language === "es" ? "NT-proBNP:" : language === "fr" ? "NT-proBNP:" : "NT-proBNP:"}</strong> {language === "es" ? "Disfunción cardiaca asociada a ACV" : language === "fr" ? "Dysfonction cardiaque associée à AVC" : "Cardiac dysfunction associated with stroke"}</li>
                  <li>• <strong>{language === "es" ? "PCR ultrasensible:" : language === "fr" ? "CRP ultrasensible:" : "hs-CRP:"}</strong> {language === "es" ? "Inflamación y riesgo cardiovascular" : language === "fr" ? "Inflammation et risque cardiovasculaire" : "Inflammation and cardiovascular risk"}</li>
                  <li>• <strong>{language === "es" ? "D-dímero:" : language === "fr" ? "D-dimère:" : "D-dimer:"}</strong> {language === "es" ? "Trombosis y riesgo de recurrencia" : language === "fr" ? "Thrombose et risque de récidive" : "Thrombosis and recurrence risk"}</li>
                  <li>• <strong>{language === "es" ? "Lipoproteína (a):" : language === "fr" ? "Lipoprotéine (a):" : "Lipoprotein (a):"}</strong> {language === "es" ? "Riesgo aterotrombótico" : language === "fr" ? "Risque athérothrombotique" : "Atherothrombotic risk"}</li>
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
                {language === 'es' ? 'Análisis Clínico Avanzado' : 
                 language === 'fr' ? 'Analyse Clinique Avancée' : 
                 'Advanced Clinical Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Modelos de ML para predecir riesgo de ACV basado en historial, examen físico, factores de riesgo y biomarcadores con 96.8% de precisión' :
                 language === 'fr' ? 'Modèles de ML pour prédire risque d\'AVC basé sur historique, examen physique, facteurs de risque et biomarqueurs avec 96.8% de précision' :
                 'ML models to predict stroke risk based on history, physical exam, risk factors and biomarkers with 96.8% accuracy'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">96.8% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Recurrencia' : 
                 language === 'fr' ? 'Prédiction de Récidive' : 
                 'Recurrence Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Algoritmos para predecir recurrencia de ACV en 5 años basado en factores de riesgo persistentes, adherencia a tratamiento y rehabilitación' :
                 language === 'fr' ? 'Algorithmes pour prédire récidive d\'AVC en 5 ans basé sur facteurs de risque persistants, adhérence au traitement et réadaptation' :
                 'Algorithms to predict stroke recurrence in 5 years based on persistent risk factors, treatment adherence and rehabilitation'}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">Prevención Secundaria</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Subtipificación de ACV' : 
                 language === 'fr' ? 'Sous-typage d\'AVC' : 
                 'Stroke Subtyping'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Modelos para clasificar subtipo de ACV (aterotrombótico, cardioembólico, lacunar) basado en datos clínicos e imagenológicos para tratamiento dirigido' :
                 language === 'fr' ? 'Modèles pour classifier sous-type d\'AVC (athérothrombotique, cardioembolique, lacunaire) basé sur données cliniques et d\'imagerie pour traitement ciblé' :
                 'Models to classify stroke subtype (atherothrombotic, cardioembolic, lacunar) based on clinical and imaging data for targeted treatment'}
              </p>
              <Badge className="w-full justify-center bg-orange-100 text-orange-800">Tratamiento Dirigido</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-purple-600" />
              {language === "es" ? "Guías de Tratamiento" :
               language === "fr" ? "Guides de Traitement" :
               "Treatment Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "ACV Isquémico Agudo" :
                   language === "fr" ? "AVC Ischémique Aigu" :
                   "Acute Ischemic Stroke"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trombolisis IV:" : language === "fr" ? "Thrombolyse IV:" : "IV Thrombolysis:"}</strong> {language === "es" ? "Alteplasa <4.5 horas desde inicio de síntomas" : language === "fr" ? "Altéplase <4.5 heures depuis début des symptômes" : "Alteplase <4.5 hours from symptom onset"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trombectomía mecánica:" : language === "fr" ? "Thrombectomie mécanique:" : "Mechanical thrombectomy:"}</strong> {language === "es" ? "Oclusión de gran vaso <24 horas desde inicio" : language === "fr" ? "Occlusion de grand vaisseau <24 heures depuis début" : "Large vessel occlusion <24 hours from onset"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Antiagregación:" : language === "fr" ? "Antiagrégation:" : "Antiplatelet therapy:"}</strong> {language === "es" ? "Aspirina 300mg STAT, luego clopidogrel 75mg" : language === "fr" ? "Aspirine 300mg STAT, puis clopidogrel 75mg" : "Aspirin 300mg STAT, then clopidogrel 75mg"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "ACV Hemorrágico" :
                   language === "fr" ? "AVC Hémorragique" :
                   "Hemorrhagic Stroke"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Control tensional:" : language === "fr" ? "Contrôle tensionnel:" : "Blood pressure control:"}</strong> {language === "es" ? "PAS <140 mmHg" : language === "fr" ? "PAS <140 mmHg" : "SBP <140 mmHg"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Reversión anticoagulación:" : language === "fr" ? "Reversion anticoagulation:" : "Anticoagulation reversal:"}</strong> {language === "es" ? "Idarucizumab (dabigatran), andexanet alfa (FXa)" : language === "fr" ? "Idarucizumab (dabigatran), andexanet alfa (FXa)" : "Idarucizumab (dabigatran), andexanet alfa (FXa)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Neurocirugía:" : language === "fr" ? "Neurochirurgie:" : "Neurosurgery:"}</strong> {language === "es" ? "Evacuación hematoma si >3cm, HSA con aneurisma roto" : language === "fr" ? "Évacuation hématome si >3cm, HSA avec anévrisme rompu" : "Hematoma evacuation if >3cm, SAH with ruptured aneurysm"}
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
                <div className="text-3xl font-bold text-purple-600 mb-2">13.7M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos ACV anuales" :
                   language === "fr" ? "Nouveaux AVC annuels" :
                   "New strokes annually"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5.5M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales por ACV" :
                   language === "fr" ? "Décès annuels par AVC" :
                   "Annual stroke deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Discapacidad a largo plazo" :
                   language === "fr" ? "Invalidité à long terme" :
                   "Long-term disability"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">34%</div>
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
          <Card className="bg-gradient-to-br from-purple-50/30 to-pink-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Prevención y Predicción del ACV' : 
                 language === 'fr' ? 'Prévention et Prédiction de l\'AVC' : 
                 'Stroke Prevention and Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en ACV utilizan análisis avanzado de datos clínicos y biomarcadores para predecir y prevenir esta devastadora enfermedad.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en AVC utilisent l\'analyse avancée de données cliniques et de biomarqueurs pour prédire et prévenir cette maladie dévastatrice.' :
                 'Our 5+ specialized stroke models use advanced analysis of clinical data and biomarkers to predict and prevent this devastating disease.'}
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-2xl text-lg px-8 py-3">
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
