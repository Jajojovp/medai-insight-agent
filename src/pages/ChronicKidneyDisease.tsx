
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Users, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ChronicKidneyDisease = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-teal-100/80 text-teal-800 rounded-full">
            {language === 'es' ? 'Enfermedad Renal Crónica' : 
             language === 'fr' ? 'Maladie Rénale Chronique' : 
             'Chronic Kidney Disease'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección Temprana de Enfermedad Renal' : 
             language === 'fr' ? 'Détection Précoce de Maladie Rénale' : 
             'Early Kidney Disease Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de enfermedad renal crónica con 5+ modelos especializados que alcanzan 97.5% de precisión usando biomarcadores séricos y urinarios' :
             language === 'fr' ? 'Analyse prédictive de maladie rénale chronique avec 5+ modèles spécialisés atteignant 97.5% de précision utilisant biomarqueurs sériques et urinaires' :
             'Chronic kidney disease predictive analysis with 5+ specialized models achieving 97.5% accuracy using serum and urinary biomarkers'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-teal-600" />
              {language === "es" ? "Información Clave - Enfermedad Renal Crónica" :
               language === "fr" ? "Information Clé - Maladie Rénale Chronique" :
               "Key Information - Chronic Kidney Disease"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-700">
                  {language === "es" ? "Definición y Fisiopatología" :
                   language === "fr" ? "Définition et Physiopathologie" :
                   "Definition and Pathophysiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "La ERC se define como anormalidades estructurales o funcionales del riñón presentes por >3 meses con implicaciones para la salud. Caracterizada por TFG <60 mL/min/1.73m² o marcadores de daño renal (albuminuria >30 mg/g, alteraciones en sedimento urinario, electrolitos, histología o imágenes)." :
                   language === "fr" ? "L'IRC se définit comme des anomalies structurelles ou fonctionnelles du rein présentes >3 mois avec implications pour la santé. Caractérisée par DFG <60 mL/min/1.73m² ou marqueurs de dommage rénal (albuminurie >30 mg/g, altérations sédiment urinaire, électrolytes, histologie ou images)." :
                   "CKD is defined as structural or functional kidney abnormalities present for >3 months with health implications. Characterized by GFR <60 mL/min/1.73m² or markers of kidney damage (albuminuria >30 mg/g, urinary sediment abnormalities, electrolyte disorders, histology or imaging abnormalities)."}
                </p>
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                  <p className="text-sm text-teal-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " Prevalencia global 11-13%. En EE.UU. afecta 37 millones (15% adultos). 90% no sabe que la tiene. Progresión a ERT: 1-3% anual." :
                     language === "fr" ? " Prévalence mondiale 11-13%. Aux USA affecte 37 millions (15% adultes). 90% ne savent pas qu'ils l'ont. Progression vers ERT: 1-3% annuel." :
                     " Global prevalence 11-13%. In USA affects 37 million (15% adults). 90% don't know they have it. Progression to ESRD: 1-3% annually."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">
                  {language === "es" ? "Clasificación KDIGO (Estadios)" :
                   language === "fr" ? "Classification KDIGO (Stades)" :
                   "KDIGO Classification (Stages)"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>G1:</strong> {language === "es" ? "TFG ≥90 con daño renal" : language === "fr" ? "DFG ≥90 avec dommage rénal" : "GFR ≥90 with kidney damage"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>G2:</strong> {language === "es" ? "TFG 60-89 con daño renal" : language === "fr" ? "DFG 60-89 avec dommage rénal" : "GFR 60-89 with kidney damage"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>G3a:</strong> {language === "es" ? "TFG 45-59 (moderada)" : language === "fr" ? "DFG 45-59 (modérée)" : "GFR 45-59 (moderate)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>G4:</strong> {language === "es" ? "TFG 15-29 (severa)" : language === "fr" ? "DFG 15-29 (sévère)" : "GFR 15-29 (severe)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>G5:</strong> {language === "es" ? "TFG <15 (falla renal)" : language === "fr" ? "DFG <15 (insuffisance rénale)" : "GFR <15 (kidney failure)"}
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
                  {language === "es" ? "Factores de Riesgo Primarios" :
                   language === "fr" ? "Facteurs de Risque Primaires" :
                   "Primary Risk Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Diabetes mellitus:" : language === "fr" ? "Diabète sucré:" : "Diabetes mellitus:"}</strong> {language === "es" ? "Causa #1 de ERC (44% casos), nefropatía diabética" : language === "fr" ? "Cause #1 d'IRC (44% cas), néphropathie diabétique" : "Cause #1 of CKD (44% cases), diabetic nephropathy"}</li>
                  <li>• <strong>{language === "es" ? "Hipertensión:" : language === "fr" ? "Hypertension:" : "Hypertension:"}</strong> {language === "es" ? "Causa #2 (28% casos), nefroesclerosis hipertensiva" : language === "fr" ? "Cause #2 (28% cas), néphrosclérose hypertensive" : "Cause #2 (28% cases), hypertensive nephrosclerosis"}</li>
                  <li>• <strong>{language === "es" ? "Glomerulonefritis:" : language === "fr" ? "Glomérulonéphrite:" : "Glomerulonephritis:"}</strong> {language === "es" ? "Primaria/secundaria, inflamación glomerular" : language === "fr" ? "Primaire/secondaire, inflammation glomérulaire" : "Primary/secondary, glomerular inflammation"}</li>
                  <li>• <strong>{language === "es" ? "Edad avanzada:" : language === "fr" ? "Âge avancé:" : "Advanced age:"}</strong> {language === "es" ? ">65 años, declinación TFG 1 mL/min/año" : language === "fr" ? ">65 ans, déclin DFG 1 mL/min/an" : ">65 years, GFR decline 1 mL/min/year"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Antécédents familiaux:" : "Family history:"}</strong> {language === "es" ? "ERC, nefropatía hereditaria, quística" : language === "fr" ? "IRC, néphropathie héréditaire, kystique" : "CKD, hereditary, cystic nephropathy"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Obesidad:" : language === "fr" ? "Obésité:" : "Obesity:"}</strong> {language === "es" ? "IMC >30, hiperfiltración glomerular" : language === "fr" ? "IMC >30, hyperfiltration glomérulaire" : "BMI >30, glomerular hyperfiltration"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Daño vascular renal, progresión acelerada" : language === "fr" ? "Dommage vasculaire rénal, progression accélérée" : "Renal vascular damage, accelerated progression"}</li>
                  <li>• <strong>{language === "es" ? "Nefrotoxinas:" : language === "fr" ? "Néphrotoxines:" : "Nephrotoxins:"}</strong> {language === "es" ? "AINEs, aminoglucósidos, contrastes" : language === "fr" ? "AINS, aminoglycosides, contrastes" : "NSAIDs, aminoglycosides, contrast agents"}</li>
                  <li>• <strong>{language === "es" ? "Dieta alta en sodio:" : language === "fr" ? "Régime riche en sodium:" : "High sodium diet:"}</strong> {language === "es" ? ">2.3g/día, hipertensión secundaria" : language === "fr" ? ">2.3g/jour, hypertension secondaire" : ">2.3g/day, secondary hypertension"}</li>
                  <li>• <strong>{language === "es" ? "Infecciones urinarias:" : language === "fr" ? "Infections urinaires:" : "Urinary infections:"}</strong> {language === "es" ? "Recurrentes, pielonefritis crónica" : language === "fr" ? "Récurrentes, pyélonéphrite chronique" : "Recurrent, chronic pyelonephritis"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores Diagnósticos" :
                   language === "fr" ? "Biomarqueurs Diagnostiques" :
                   "Diagnostic Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Creatinina sérica:" : language === "fr" ? "Créatinine sérique:" : "Serum creatinine:"}</strong> {language === "es" ? "Ecuación CKD-EPI para TFG estimada" : language === "fr" ? "Équation CKD-EPI pour DFG estimé" : "CKD-EPI equation for estimated GFR"}</li>
                  <li>• <strong>{language === "es" ? "Albuminuria:" : language === "fr" ? "Albuminurie:" : "Albuminuria:"}</strong> {language === "es" ? "RAC >30 mg/g, marcador temprano" : language === "fr" ? "RAC >30 mg/g, marqueur précoce" : "ACR >30 mg/g, early marker"}</li>
                  <li>• <strong>{language === "es" ? "Cistatina C:" : language === "fr" ? "Cystatine C:" : "Cystatin C:"}</strong> {language === "es" ? "Menos variable que creatinina" : language === "fr" ? "Moins variable que créatinine" : "Less variable than creatinine"}</li>
                  <li>• <strong>{language === "es" ? "BUN/Urea:" : language === "fr" ? "BUN/Urée:" : "BUN/Urea:"}</strong> {language === "es" ? "Índice BUN/Cr >20:1 sugiere prerrenal" : language === "fr" ? "Indice BUN/Cr >20:1 suggère prérénale" : "BUN/Cr ratio >20:1 suggests prerenal"}</li>
                  <li>• <strong>NGAL:</strong> {language === "es" ? "Lipocalina neutrofílica, daño tubular" : language === "fr" ? "Lipocaline neutrophilique, dommage tubulaire" : "Neutrophil gelatinase lipocalin, tubular damage"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Función Renal Predictiva' : 
                 language === 'fr' ? 'Fonction Rénale Prédictive' : 
                 'Predictive Kidney Function'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Análisis de creatinina sérica, cistatina C, BUN y TFG estimada usando ecuaciones CKD-EPI para detectar deterioro renal temprano con 97.5% precisión' :
                 language === 'fr' ? 'Analyse de créatinine sérique, cystatine C, BUN et DFG estimé utilisant équations CKD-EPI pour détecter détérioration rénale précoce avec 97.5% précision' :
                 'Analysis of serum creatinine, cystatin C, BUN and estimated GFR using CKD-EPI equations to detect early kidney deterioration with 97.5% accuracy'}
              </p>
              <Badge className="w-full justify-center bg-teal-100 text-teal-800">97.5% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Biomarcadores Urinarios' : 
                 language === 'fr' ? 'Biomarqueurs Urinaires' : 
                 'Urinary Biomarkers'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Evaluación de albuminuria, proteinuria, hematuria, leucocituria y NGAL para detección de daño glomerular y tubular antes de síntomas clínicos' :
                 language === 'fr' ? 'Évaluation d\'albuminurie, protéinurie, hématurie, leucocyturie et NGAL pour détection de dommage glomérulaire et tubulaire avant symptômes cliniques' :
                 'Evaluation of albuminuria, proteinuria, hematuria, leukocyturia and NGAL for detection of glomerular and tubular damage before clinical symptoms'}
              </p>
              <Badge className="w-full justify-center bg-cyan-100 text-cyan-800">Detección Temprana</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Progresión y Pronóstico' : 
                 language === 'fr' ? 'Progression et Pronostic' : 
                 'Progression & Prognosis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Modelos de supervivencia y regresión para predecir progresión a enfermedad renal terminal, necesidad de diálisis y riesgo cardiovascular asociado' :
                 language === 'fr' ? 'Modèles de survie et régression pour prédire progression vers maladie rénale terminale, besoin de dialyse et risque cardiovasculaire associé' :
                 'Survival and regression models to predict progression to end-stage renal disease, dialysis need and associated cardiovascular risk'}
              </p>
              <Badge className="w-full justify-center bg-blue-100 text-blue-800">Pronóstico Preciso</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-teal-600" />
              {language === "es" ? "Guías Clínicas de Manejo" :
               language === "fr" ? "Guides Cliniques de Prise en Charge" :
               "Clinical Management Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Estadios Tempranos (G1-G3a)" :
                   language === "fr" ? "Stades Précoces (G1-G3a)" :
                   "Early Stages (G1-G3a)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Control glucémico:" : language === "fr" ? "Contrôle glycémique:" : "Glycemic control:"}</strong> {language === "es" ? "HbA1c <7% en diabéticos, previene nefropatía diabética" : language === "fr" ? "HbA1c <7% chez diabétiques, prévient néphropathie diabétique" : "HbA1c <7% in diabetics, prevents diabetic nephropathy"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Control tensional:" : language === "fr" ? "Contrôle tensionnel:" : "Blood pressure control:"}</strong> {language === "es" ? "<130/80 mmHg, IECA/ARA II primera línea" : language === "fr" ? "<130/80 mmHg, IECA/ARA II première ligne" : "<130/80 mmHg, ACE-I/ARB first line"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Modificación dietética:" : language === "fr" ? "Modification diététique:" : "Dietary modification:"}</strong> {language === "es" ? "Proteína 0.8-1.0 g/kg/día, sodio <2.3g/día" : language === "fr" ? "Protéine 0.8-1.0 g/kg/jour, sodium <2.3g/jour" : "Protein 0.8-1.0 g/kg/day, sodium <2.3g/day"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Estadios Avanzados (G4-G5)" :
                   language === "fr" ? "Stades Avancés (G4-G5)" :
                   "Advanced Stages (G4-G5)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Preparación para TRS:" : language === "fr" ? "Préparation pour TSR:" : "RRT preparation:"}</strong> {language === "es" ? "Acceso vascular, educación, derivación nefrología" : language === "fr" ? "Accès vasculaire, éducation, dérivation néphrologie" : "Vascular access, education, nephrology referral"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Complicaciones MRC:" : language === "fr" ? "Complications IRC:" : "CKD complications:"}</strong> {language === "es" ? "Anemia (EPO), osteodistrofia (PTH), acidosis" : language === "fr" ? "Anémie (EPO), ostéodystrophie (PTH), acidose" : "Anemia (EPO), osteodystrophy (PTH), acidosis"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Modalidad de TRS:" : language === "fr" ? "Modalité de TSR:" : "RRT modality:"}</strong> {language === "es" ? "Hemodiálisis, diálisis peritoneal, trasplante renal" : language === "fr" ? "Hémodialyse, dialyse péritonéale, transplantation rénale" : "Hemodialysis, peritoneal dialysis, kidney transplant"}
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
              {language === "es" ? "Epidemiología Global de Enfermedad Renal Crónica" :
               language === "fr" ? "Épidémiologie Mondiale de la Maladie Rénale Chronique" :
               "Global Chronic Kidney Disease Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">850M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Afectados mundialmente" :
                   language === "fr" ? "Affectés mondialement" :
                   "Affected worldwide"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">2.6M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">37M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos en EE.UU." :
                   language === "fr" ? "Cas aux USA" :
                   "Cases in USA"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "No diagnosticados" :
                   language === "fr" ? "Non diagnostiqués" :
                   "Undiagnosed"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-teal-50/30 to-cyan-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Protección Renal Avanzada' : 
                 language === 'fr' ? 'Protection Rénale Avancée' : 
                 'Advanced Kidney Protection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en enfermedad renal crónica detectan deterioro renal años antes de síntomas clínicos, permitiendo intervención temprana que preserva la función renal.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en maladie rénale chronique détectent détérioration rénale des années avant symptômes cliniques, permettant intervention précoce qui préserve fonction rénale.' :
                 'Our 5+ specialized chronic kidney disease models detect kidney deterioration years before clinical symptoms, enabling early intervention that preserves kidney function.'}
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 rounded-2xl text-lg px-8 py-3">
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

export default ChronicKidneyDisease;
