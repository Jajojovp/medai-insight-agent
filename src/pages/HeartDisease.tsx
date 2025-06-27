import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, TrendingUp, AlertTriangle, CheckCircle, Users, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const HeartDisease = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full">
            {language === "es" ? "Enfermedad Cardíaca" : 
             language === "fr" ? "Maladie Cardiaque" : 
             "Heart Disease"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Enfermedad Cardíaca" : 
             language === "fr" ? "Analyse Prédictive de Maladie Cardiaque" : 
             "Heart Disease Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es" ? 'Análisis predictivo de riesgo cardiovascular con 5+ modelos especializados que alcanzan 93.7% de precisión' :
             language === "fr" ? 'Analyse prédictive du risque cardiovasculaire avec 5+ modèles spécialisés atteignant 93.7% de précision' :
             'Cardiovascular risk predictive analysis with 5+ specialized models achieving 93.7% accuracy'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-red-600" />
              {language === "es" ? "Información Clave - Enfermedades Cardiovasculares" :
               language === "fr" ? "Information Clé - Maladies Cardiovasculaires" :
               "Key Information - Cardiovascular Disease"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "Las enfermedades cardiovasculares incluyen cardiopatía coronaria, enfermedad cerebrovascular, arteriopatía periférica, cardiopatía reumática, cardiopatía congénita, trombosis venosa profunda y embolia pulmonar. Son la principal causa de muerte global." :
                   language === "fr" ? "Les maladies cardiovasculaires incluent cardiopathie coronaire, maladie cérébrovasculaire, artériopathie périphérique, cardiopathie rhumatismale, cardiopathie congénitale, thrombose veineuse profonde et embolie pulmonaire. Elles sont la principale cause de décès mondiale." :
                   "Cardiovascular diseases include coronary heart disease, cerebrovascular disease, peripheral arterial disease, rheumatic heart disease, congenital heart disease, deep vein thrombosis and pulmonary embolism. They are the leading cause of death globally."}
                </p>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm text-red-800">
                    <strong>
                      {language === "es" ? "Estadísticas Globales:" :
                       language === "fr" ? "Statistiques Mondiales:" :
                       "Global Statistics:"}
                    </strong>
                    {language === "es" ? " 17.9 millones de muertes anuales (32% del total). 85% por infarto y ACV. 80% en países de ingresos bajos-medios." :
                     language === "fr" ? " 17.9 millions de décès annuels (32% du total). 85% par infarctus et AVC. 80% dans pays revenus faibles-moyens." :
                     " 17.9 million deaths annually (32% of total). 85% from heart attack and stroke. 80% in low-middle income countries."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-700">
                  {language === "es" ? "Clasificación de Riesgo (ACC/AHA)" :
                   language === "fr" ? "Classification du Risque (ACC/AHA)" :
                   "Risk Classification (ACC/AHA)"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Bajo:</strong> {language === "es" ? "<5% riesgo a 10 años" : language === "fr" ? "<5% risque à 10 ans" : "<5% 10-year risk"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Limítrofe:</strong> {language === "es" ? "5-7.5% riesgo a 10 años" : language === "fr" ? "5-7.5% risque à 10 ans" : "5-7.5% 10-year risk"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Intermedio:</strong> {language === "es" ? "7.5-20% riesgo a 10 años" : language === "fr" ? "7.5-20% risque à 10 ans" : "7.5-20% 10-year risk"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Riesgo Alto:</strong> {language === "es" ? "≥20% riesgo a 10 años" : language === "fr" ? "≥20% risque à 10 ans" : "≥20% 10-year risk"}
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
              {language === "es" ? "Factores de Riesgo Cardiovascular" :
               language === "fr" ? "Facteurs de Risque Cardiovasculaire" :
               "Cardiovascular Risk Factors"}
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
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Hombres ≥45 años, mujeres ≥55 años" : language === "fr" ? "Hommes ≥45 ans, femmes ≥55 ans" : "Men ≥45 years, women ≥55 years"}</li>
                  <li>• <strong>{language === "es" ? "Sexo:" : language === "fr" ? "Sexe:" : "Gender:"}</strong> {language === "es" ? "Hombres mayor riesgo hasta menopausia" : language === "fr" ? "Hommes risque plus élevé jusqu'à ménopause" : "Men higher risk until menopause"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "ECV prematura en familiares de 1er grado" : language === "fr" ? "MCV prématurée chez parents 1er degré" : "Premature CVD in 1st degree relatives"}</li>
                  <li>• <strong>{language === "es" ? "Genética:" : language === "fr" ? "Génétique:" : "Genetics:"}</strong> {language === "es" ? "Polimorfismos en 9p21, LDLR, PCSK9" : language === "fr" ? "Polymorphismes en 9p21, LDLR, PCSK9" : "Polymorphisms in 9p21, LDLR, PCSK9"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Mayores Modificables" :
                   language === "fr" ? "Facteurs Majeurs Modifiables" :
                   "Major Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Hipertensión:" : language === "fr" ? "Hypertension:" : "Hypertension:"}</strong> {language === "es" ? "≥140/90 mmHg, RR 2.0-4.0" : language === "fr" ? "≥140/90 mmHg, RR 2.0-4.0" : "≥140/90 mmHg, RR 2.0-4.0"}</li>
                  <li>• <strong>{language === "es" ? "Dislipidemia:" : language === "fr" ? "Dyslipidémie:" : "Dyslipidemia:"}</strong> {language === "es" ? "LDL >100 mg/dL, HDL <40/50 mg/dL" : language === "fr" ? "LDL >100 mg/dL, HDL <40/50 mg/dL" : "LDL >100 mg/dL, HDL <40/50 mg/dL"}</li>
                  <li>• <strong>{language === "es" ? "Diabetes mellitus:" : language === "fr" ? "Diabète mellitus:" : "Diabetes mellitus:"}</strong> {language === "es" ? "HbA1c ≥6.5%, RR 2.0-4.0" : language === "fr" ? "HbA1c ≥6.5%, RR 2.0-4.0" : "HbA1c ≥6.5%, RR 2.0-4.0"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "RR 2.0-3.0, reversible con cesación" : language === "fr" ? "RR 2.0-3.0, réversible avec arrêt" : "RR 2.0-3.0, reversible with cessation"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Marcadores Emergentes" :
                   language === "fr" ? "Marqueurs Émergents" :
                   "Emerging Markers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>hs-CRP:</strong> {language === "es" ? ">3 mg/L asociado con mayor riesgo" : language === "fr" ? ">3 mg/L associé avec risque accru" : ">3 mg/L associated with increased risk"}</li>
                  <li>• <strong>Lp(a):</strong> {language === "es" ? ">50 mg/dL factor de riesgo independiente" : language === "fr" ? ">50 mg/dL facteur de risque indépendant" : ">50 mg/dL independent risk factor"}</li>
                  <li>• <strong>CAC score:</strong> {language === "es" ? ">100 reclasifica riesgo intermedio" : language === "fr" ? ">100 reclassifie risque intermédiaire" : ">100 reclassifies intermediate risk"}</li>
                  <li>• <strong>NT-proBNP:</strong> {language === "es" ? "Marcador de disfunción ventricular" : language === "fr" ? "Marqueur de dysfonction ventriculaire" : "Marker of ventricular dysfunction"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Perfil Cardiovascular' : 
                 language === 'fr' ? 'Profil Cardiovasculaire' : 
                 'Cardiovascular Profile'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Evaluación integral de presión arterial, perfil lipídico, glicemia, ECG, ecocardiograma y biomarcadores cardíacos con algoritmos de estratificación de riesgo validados' :
                 language === 'fr' ? 'Évaluation intégrale de pression artérielle, profil lipidique, glycémie, ECG, échocardiogramme et biomarqueurs cardiaques avec algorithmes de stratification du risque validés' :
                 'Comprehensive evaluation of blood pressure, lipid profile, glycemia, ECG, echocardiogram and cardiac biomarkers with validated risk stratification algorithms'}
              </p>
              <Badge className="w-full justify-center bg-red-100 text-red-800">93.7% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Factores de Riesgo' : 
                 language === 'fr' ? 'Facteurs de Risque' : 
                 'Risk Factors'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Análisis multivariado de edad, sexo, diabetes, hipertensión, dislipidemia, tabaquismo, obesidad, sedentarismo y antecedentes familiares con calculadoras de riesgo ACC/AHA y SCORE2' :
                 language === 'fr' ? 'Analyse multivariée d\'âge, sexe, diabète, hypertension, dyslipidémie, tabagisme, obésité, sédentarité et antécédents familiaux avec calculatrices de risque ACC/AHA et SCORE2' :
                 'Multivariate analysis of age, gender, diabetes, hypertension, dyslipidemia, smoking, obesity, sedentary lifestyle and family history with ACC/AHA and SCORE2 risk calculators'}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">Análisis Multifactorial</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Prevención Personalizada' : 
                 language === 'fr' ? 'Prévention Personnalisée' : 
                 'Personalized Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Recomendaciones específicas de modificación de estilo de vida, terapia farmacológica (estatinas, IECA, antiagregantes) y seguimiento preventivo basado en guías AHA/ESC actualizadas' :
                 language === 'fr' ? 'Recommandations spécifiques de modification de mode de vie, thérapie pharmacologique (statines, IECA, antiagrégants) et suivi préventif basé sur guides AHA/ESC actualisées' :
                 'Specific lifestyle modification recommendations, pharmacological therapy (statins, ACE inhibitors, antiplatelet agents) and preventive follow-up based on updated AHA/ESC guidelines'}
              </p>
              <Badge className="w-full justify-center bg-orange-100 text-orange-800">Intervención Temprana</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-red-600" />
              {language === "es" ? "Guías de Prevención Cardiovascular" :
               language === "fr" ? "Guides de Prévention Cardiovasculaire" :
               "Cardiovascular Prevention Guidelines"}
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
                      <strong>{language === "es" ? "Modificación de estilo de vida:" : language === "fr" ? "Modification du mode de vie:" : "Lifestyle modification:"}</strong> {language === "es" ? "Dieta mediterránea, ejercicio 150 min/semana, cesación tabáquica, IMC 18.5-24.9" : language === "fr" ? "Régime méditerranéen, exercice 150 min/semaine, arrêt tabac, IMC 18.5-24.9" : "Mediterranean diet, exercise 150 min/week, smoking cessation, BMI 18.5-24.9"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Control de HTA:" : language === "fr" ? "Contrôle HTA:" : "Hypertension control:"}</strong> {language === "es" ? "Objetivo <130/80 mmHg. IECA/ARA-II, diuréticos tiazídicos, CCB como primera línea" : language === "fr" ? "Objectif <130/80 mmHg. IECA/ARA-II, diurétiques thiazidiques, CCB en première ligne" : "Target <130/80 mmHg. ACE inhibitors/ARBs, thiazide diuretics, CCBs as first line"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Manejo de dislipidemia:" : language === "fr" ? "Gestion dyslipidémie:" : "Dyslipidemia management:"}</strong> {language === "es" ? "Estatinas de alta intensidad si LDL >190 o riesgo >7.5%. Objetivo LDL <70-100 mg/dL según riesgo" : language === "fr" ? "Statines haute intensité si LDL >190 ou risque >7.5%. Objectif LDL <70-100 mg/dL selon risque" : "High-intensity statins if LDL >190 or risk >7.5%. LDL target <70-100 mg/dL based on risk"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Prevención Secundaria" :
                   language === "fr" ? "Prévention Secondaire" :
                   "Secondary Prevention"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Antiagregación:" : language === "fr" ? "Antiagrégation:" : "Antiplatelet therapy:"}</strong> {language === "es" ? "AAS 75-100 mg/día indefinidamente. Clopidogrel si intolerancia. Terapia dual si SCA reciente" : language === "fr" ? "AAS 75-100 mg/jour indéfiniment. Clopidogrel si intolérance. Thérapie duale si SCA récent" : "Aspirin 75-100 mg/day indefinitely. Clopidogrel if intolerant. Dual therapy if recent ACS"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Estatinas de alta intensidad:" : language === "fr" ? "Statines haute intensité:" : "High-intensity statins:"}</strong> {language === "es" ? "Atorvastatina 40-80 mg o rosuvastatina 20-40 mg. Objetivo LDL <70 mg/dL (<55 si muy alto riesgo)" : language === "fr" ? "Atorvastatine 40-80 mg ou rosuvastatine 20-40 mg. Objectif LDL <70 mg/dL (<55 si très haut risque)" : "Atorvastatin 40-80 mg or rosuvastatin 20-40 mg. LDL target <70 mg/dL (<55 if very high risk)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "IECA/ARA-II:" : language === "fr" ? "IECA/ARA-II:" : "ACE inhibitors/ARBs:"}</strong> {language === "es" ? "Especialmente si disfunción VI, DM o IRC. Betabloqueadores si disfunción VI o antecedente de IAM" : language === "fr" ? "Surtout si dysfonction VG, DM ou IRC. Bêta-bloquants si dysfonction VG ou antécédent IDM" : "Especially if LV dysfunction, DM or CKD. Beta-blockers if LV dysfunction or prior MI"}
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
              {language === "es" ? "Epidemiología Global de Enfermedades Cardiovasculares" :
               language === "fr" ? "Épidémiologie Mondiale des Maladies Cardiovasculaires" :
               "Global Cardiovascular Disease Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">17.9M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales globales" :
                   language === "fr" ? "Décès annuels mondiaux" :
                   "Global annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">32%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "De todas las muertes" :
                   language === "fr" ? "De tous les décès" :
                   "Of all deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Prevenible con cambios" :
                   language === "fr" ? "Évitable avec changements" :
                   "Preventable with changes"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">655K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes/año en USA" :
                   language === "fr" ? "Décès/an aux USA" :
                   "Deaths/year in USA"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-red-50/30 to-pink-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Prevención Cardiovascular Inteligente' : 
                 language === 'fr' ? 'Prévention Cardiovasculaire Intelligente' : 
                 'Intelligent Cardiovascular Prevention'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en enfermedades cardíacas utilizan datos clínicos validados para predecir y prevenir eventos cardiovasculares antes de que ocurran.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en maladies cardiaques utilisent des données cliniques validées pour prédire et prévenir les événements cardiovasculaires avant qu\'ils ne surviennent.' :
                 'Our 5+ specialized heart disease models use validated clinical data to predict and prevent cardiovascular events before they occur.'}
              </p>
              <Button className="bg-red-600 hover:bg-red-700 rounded-2xl text-lg px-8 py-3">
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

export default HeartDisease;
