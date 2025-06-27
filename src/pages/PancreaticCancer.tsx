
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Activity, TrendingUp, AlertTriangle, CheckCircle, Users, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PancreaticCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-amber-100/80 text-amber-800 rounded-full">
            {language === 'es' ? 'Cáncer de Páncreas' : 
             language === 'fr' ? 'Cancer du Pancréas' : 
             'Pancreatic Cancer'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección del "Asesino Silencioso"' : 
             language === 'fr' ? 'Détection du "Tueur Silencieux"' : 
             'Detection of the "Silent Killer"'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo de cáncer pancreático con 4+ modelos especializados que alcanzan 87.4% de precisión usando biomarcadores urinarios' :
             language === 'fr' ? 'Analyse prédictive du cancer pancréatique avec 4+ modèles spécialisés atteignant 87.4% de précision utilisant biomarqueurs urinaires' :
             'Pancreatic cancer predictive analysis with 4+ specialized models achieving 87.4% accuracy using urinary biomarkers'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-amber-600" />
              {language === "es" ? "Información Clave - Cáncer de Páncreas" :
               language === "fr" ? "Information Clé - Cancer du Pancréas" :
               "Key Information - Pancreatic Cancer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El adenocarcinoma ductal pancreático (PDAC) representa el 95% de los cánceres pancreáticos. Es la 4ta causa de muerte por cáncer, con supervivencia a 5 años del 5%. La mayoría se diagnostica en estadios avanzados debido a síntomas tardíos." :
                   language === "fr" ? "L'adénocarcinome canalaire pancréatique (PDAC) représente 95% des cancers pancréatiques. C'est la 4ème cause de décès par cancer, avec survie à 5 ans de 5%. La majorité est diagnostiquée aux stades avancés en raison de symptômes tardifs." :
                   "Pancreatic ductal adenocarcinoma (PDAC) represents 95% of pancreatic cancers. It's the 4th leading cause of cancer death, with 5-year survival of 5%. Most are diagnosed at advanced stages due to late symptoms."}
                </p>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <p className="text-sm text-amber-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " Solo 20% es resecable al diagnóstico. Supervivencia mediana: 6 meses (metastásico), 11 meses (localmente avanzado), 28 meses (resecable)." :
                     language === "fr" ? " Seulement 20% est résécable au diagnostic. Survie médiane: 6 mois (métastatique), 11 mois (localement avancé), 28 mois (résécable)." :
                     " Only 20% is resectable at diagnosis. Median survival: 6 months (metastatic), 11 months (locally advanced), 28 months (resectable)."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  {language === "es" ? "Clasificación TNM (8va Edición)" :
                   language === "fr" ? "Classification TNM (8ème Édition)" :
                   "TNM Classification (8th Edition)"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T1:</strong> {language === "es" ? "≤2cm limitado al páncreas" : language === "fr" ? "≤2cm limité au pancréas" : "≤2cm limited to pancreas"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T2:</strong> {language === "es" ? ">2cm pero ≤4cm limitado al páncreas" : language === "fr" ? ">2cm mais ≤4cm limité au pancréas" : ">2cm but ≤4cm limited to pancreas"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T3:</strong> {language === "es" ? ">4cm limitado al páncreas" : language === "fr" ? ">4cm limité au pancréas" : ">4cm limited to pancreas"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T4:</strong> {language === "es" ? "Invasión de tronco celíaco, AMS o arteria hepática común" : language === "fr" ? "Invasion du tronc cœliaque, AMS ou artère hépatique commune" : "Invasion of celiac axis, SMA or common hepatic artery"}
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
                  {language === "es" ? "Factores de Riesgo Mayores" :
                   language === "fr" ? "Facteurs de Risque Majeurs" :
                   "Major Risk Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "90% >55 años, pico a los 70-80 años" : language === "fr" ? "90% >55 ans, pic à 70-80 ans" : "90% >55 years, peak at 70-80 years"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "RR 2.2, 25% de casos atribuibles" : language === "fr" ? "RR 2.2, 25% de cas attribuables" : "RR 2.2, 25% attributable cases"}</li>
                  <li>• <strong>{language === "es" ? "Diabetes tipo 2:" : language === "fr" ? "Diabète type 2:" : "Type 2 diabetes:"}</strong> {language === "es" ? "RR 1.8, especialmente si <4 años diagnóstico" : language === "fr" ? "RR 1.8, surtout si <4 ans diagnostic" : "RR 1.8, especially if <4 years diagnosis"}</li>
                  <li>• <strong>{language === "es" ? "Pancreatitis crónica:" : language === "fr" ? "Pancréatite chronique:" : "Chronic pancreatitis:"}</strong> {language === "es" ? "RR 13.3, riesgo acumulativo 4%" : language === "fr" ? "RR 13.3, risque cumulatif 4%" : "RR 13.3, cumulative risk 4%"}</li>
                  <li>• <strong>{language === "es" ? "Obesidad:" : language === "fr" ? "Obésité:" : "Obesity:"}</strong> {language === "es" ? "IMC >30, RR 1.2-1.5" : language === "fr" ? "IMC >30, RR 1.2-1.5" : "BMI >30, RR 1.2-1.5"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Síndromes Hereditarios" :
                   language === "fr" ? "Syndromes Héréditaires" :
                   "Hereditary Syndromes"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>BRCA1/2:</strong> {language === "es" ? "RR 3-10x, especialmente BRCA2" : language === "fr" ? "RR 3-10x, surtout BRCA2" : "RR 3-10x, especially BRCA2"}</li>
                  <li>• <strong>Lynch syndrome:</strong> {language === "es" ? "RR 8.6x, asociado MLH1, MSH2" : language === "fr" ? "RR 8.6x, associé MLH1, MSH2" : "RR 8.6x, associated MLH1, MSH2"}</li>
                  <li>• <strong>CDKN2A (p16):</strong> {language === "es" ? "RR 13-22x, melanoma familiar" : language === "fr" ? "RR 13-22x, mélanome familial" : "RR 13-22x, familial melanoma"}</li>
                  <li>• <strong>STK11 (Peutz-Jeghers):</strong> {language === "es" ? "RR 132x, riesgo 36% a los 70 años" : language === "fr" ? "RR 132x, risque 36% à 70 ans" : "RR 132x, 36% risk by age 70"}</li>
                  <li>• <strong>PALB2:</strong> {language === "es" ? "RR 4-6x, cofactor BRCA2" : language === "fr" ? "RR 4-6x, cofacteur BRCA2" : "RR 4-6x, BRCA2 partner"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores Diagnósticos" :
                   language === "fr" ? "Biomarqueurs Diagnostiques" :
                   "Diagnostic Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>CA 19-9:</strong> {language === "es" ? "Elevado en 70-90%, sensibilidad 70%" : language === "fr" ? "Élevé chez 70-90%, sensibilité 70%" : "Elevated in 70-90%, sensitivity 70%"}</li>
                  <li>• <strong>CEA:</strong> {language === "es" ? "Elevado en 40-50%, menos específico" : language === "fr" ? "Élevé chez 40-50%, moins spécifique" : "Elevated in 40-50%, less specific"}</li>
                  <li>• <strong>LYVE1 urinario:</strong> {language === "es" ? "Biomarcador prometedor no invasivo" : language === "fr" ? "Biomarqueur prometteur non invasif" : "Promising non-invasive biomarker"}</li>
                  <li>• <strong>REG1B/TFF1:</strong> {language === "es" ? "Panel urinario para detección temprana" : language === "fr" ? "Panel urinaire pour détection précoce" : "Urinary panel for early detection"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Biomarcadores Urinarios' : 
                 language === 'fr' ? 'Biomarqueurs Urinaires' : 
                 'Urinary Biomarkers'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Análisis de LYVE1, REG1B, TFF1 y creatinina urinaria para detección no invasiva del cáncer pancreático con especificidad del 99.5%' :
                 language === 'fr' ? 'Analyse de LYVE1, REG1B, TFF1 et créatinine urinaire pour détection non invasive du cancer pancréatique avec spécificité de 99.5%' :
                 'Analysis of LYVE1, REG1B, TFF1 and urinary creatinine for non-invasive pancreatic cancer detection with 99.5% specificity'}
              </p>
              <Badge className="w-full justify-center bg-amber-100 text-amber-800">87.4% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Detección Temprana Crítica' : 
                 language === 'fr' ? 'Détection Précoce Critique' : 
                 'Critical Early Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Identificación en etapas I-II cuando la resección quirúrgica es posible, mejorando supervivencia de 6 meses a 28 meses mediana' :
                 language === 'fr' ? 'Identification aux stades I-II quand résection chirurgicale est possible, améliorant survie de 6 mois à 28 mois médiane' :
                 'Identification in stages I-II when surgical resection is possible, improving survival from 6 months to 28 months median'}
              </p>
              <Badge className="w-full justify-center bg-orange-100 text-orange-800">Ventana Terapéutica</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis de Supervivencia' : 
                 language === 'fr' ? 'Analyse de Survie' : 
                 'Survival Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Modelos Cox de supervivencia integrando edad, estadio, CA19-9, performance status y comorbilidades para pronóstico personalizado' :
                 language === 'fr' ? 'Modèles Cox de survie intégrant âge, stade, CA19-9, performance status et comorbidités pour pronostic personnalisé' :
                 'Cox survival models integrating age, stage, CA19-9, performance status and comorbidities for personalized prognosis'}
              </p>
              <Badge className="w-full justify-center bg-red-100 text-red-800">Pronóstico Preciso</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-amber-600" />
              {language === "es" ? "Guías de Tratamiento por Estadio" :
               language === "fr" ? "Guides de Traitement par Stade" :
               "Stage-Based Treatment Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Enfermedad Resecable" :
                   language === "fr" ? "Maladie Résécable" :
                   "Resectable Disease"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia neoadyuvante:" : language === "fr" ? "Chimiothérapie néoadjuvante:" : "Neoadjuvant chemotherapy:"}</strong> {language === "es" ? "FOLFIRINOX x6 ciclos o Gemcitabina/nab-paclitaxel x3 ciclos" : language === "fr" ? "FOLFIRINOX x6 cycles ou Gemcitabine/nab-paclitaxel x3 cycles" : "FOLFIRINOX x6 cycles or Gemcitabine/nab-paclitaxel x3 cycles"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cirugía:" : language === "fr" ? "Chirurgie:" : "Surgery:"}</strong> {language === "es" ? "Pancreaticoduodenectomía (Whipple) o pancreatectomía distal + linfadenectomía" : language === "fr" ? "Pancréaticoduodénectomie (Whipple) ou pancréatectomie distale + lymphadénectomie" : "Pancreaticoduodenectomy (Whipple) or distal pancreatectomy + lymphadenectomy"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia adyuvante:" : language === "fr" ? "Chimiothérapie adjuvante:" : "Adjuvant chemotherapy:"}</strong> {language === "es" ? "Gemcitabina/capecitabina x6 meses o FOLFIRINOX modificado" : language === "fr" ? "Gemcitabine/capécitabine x6 mois ou FOLFIRINOX modifié" : "Gemcitabine/capecitabine x6 months or modified FOLFIRINOX"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Enfermedad Avanzada" :
                   language === "fr" ? "Maladie Avancée" :
                   "Advanced Disease"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Primera línea:" : language === "fr" ? "Première ligne:" : "First line:"}</strong> {language === "es" ? "FOLFIRINOX (PS 0-1) o Gemcitabina/nab-paclitaxel (PS 0-2)" : language === "fr" ? "FOLFIRINOX (PS 0-1) ou Gemcitabine/nab-paclitaxel (PS 0-2)" : "FOLFIRINOX (PS 0-1) or Gemcitabine/nab-paclitaxel (PS 0-2)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Segunda línea:" : language === "fr" ? "Deuxième ligne:" : "Second line:"}</strong> {language === "es" ? "Nal-IRI + 5-FU/LV + oxaliplatino o pembrolizumab (dMMR/MSI-H)" : language === "fr" ? "Nal-IRI + 5-FU/LV + oxaliplatine ou pembrolizumab (dMMR/MSI-H)" : "Nal-IRI + 5-FU/LV + oxaliplatin or pembrolizumab (dMMR/MSI-H)"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapias dirigidas:" : language === "fr" ? "Thérapies ciblées:" : "Targeted therapies:"}</strong> {language === "es" ? "Olaparib (BRCA+), selpercatinib (NTRK+), entrectinib (ROS1+)" : language === "fr" ? "Olaparib (BRCA+), selpercatinib (NTRK+), entrectinib (ROS1+)" : "Olaparib (BRCA+), selpercatinib (NTRK+), entrectinib (ROS1+)"}
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
                <div className="text-3xl font-bold text-amber-600 mb-2">496K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos anuales (2020)" :
                   language === "fr" ? "Nouveaux cas annuels (2020)" :
                   "New cases annually (2020)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">466K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales globales" :
                   language === "fr" ? "Décès annuels mondiaux" :
                   "Global annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">5%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años" :
                   language === "fr" ? "Survie 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4ta</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Causa muerte cáncer" :
                   language === "fr" ? "Cause décès cancer" :
                   "Cancer death cause"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-amber-50/30 to-orange-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Combatiendo el Cáncer Más Letal' : 
                 language === 'fr' ? 'Combattre le Cancer le Plus Mortel' : 
                 'Fighting the Deadliest Cancer'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 4+ modelos especializados en cáncer pancreático utilizan análisis de biomarcadores urinarios para detectar esta enfermedad letal en etapas tratables.' :
                 language === 'fr' ? 'Nos 4+ modèles spécialisés en cancer pancréatique utilisent analyse de biomarqueurs urinaires pour détecter cette maladie mortelle aux stades traitables.' :
                 'Our 4+ specialized pancreatic cancer models use urinary biomarker analysis to detect this lethal disease in treatable stages.'}
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 rounded-2xl text-lg px-8 py-3">
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
