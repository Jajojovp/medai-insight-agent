
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scan, Brain, Activity, AlertTriangle, CheckCircle, TrendingUp, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const LiverCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-orange-100/80 text-orange-800 rounded-full">
            {language === 'es' ? 'Cáncer de Hígado' : 
             language === 'fr' ? 'Cancer du Foie' : 
             'Liver Cancer'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Cáncer Hepático' : 
             language === 'fr' ? 'Détection du Cancer Hépatique' : 
             'Liver Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para cáncer de hígado usando 5+ modelos especializados con imágenes CT multifásicas, biomarcadores séricos y análisis de riesgo en cirrosis' :
             language === 'fr' ? 'Analyse prédictive avancée pour cancer du foie utilisant 5+ modèles spécialisés avec images CT multiphasiques, biomarqueurs sériques et analyse de risque en cirrhose' :
             'Advanced predictive analysis for liver cancer using 5+ specialized models with multiphasic CT images, serum biomarkers and cirrhosis risk analysis'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-orange-600" />
              {language === "es" ? "Información Clave - Cáncer Hepático" :
               language === "fr" ? "Information Clé - Cancer Hépatique" :
               "Key Information - Liver Cancer"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "El carcinoma hepatocelular (CHC) representa 85-90% de cánceres hepáticos primarios. 6ta causa de cáncer globalmente, 4ta causa de muerte por cáncer. Estrechamente asociado con cirrosis (90% casos). Incidencia mayor en Asia-Pacífico y África por hepatitis B. Supervivencia 5 años: 20% general, 35% resecables." :
                   language === "fr" ? "Le carcinome hépatocellulaire (CHC) représente 85-90% des cancers hépatiques primaires. 6ème cause de cancer globalement, 4ème cause de décès par cancer. Étroitement associé à cirrhose (90% cas). Incidence élevée en Asie-Pacifique et Afrique par hépatite B. Survie 5 ans: 20% général, 35% résécables." :
                   "Hepatocellular carcinoma (HCC) represents 85-90% of primary liver cancers. 6th leading cancer globally, 4th leading cause of cancer death. Closely associated with cirrhosis (90% cases). Higher incidence in Asia-Pacific and Africa due to hepatitis B. 5-year survival: 20% overall, 35% resectable."}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm text-orange-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " 905,677 casos/año globalmente. 830,180 muertes/año. 42,230 nuevos casos EE.UU. 2023. Solo 25% diagnosticado en estadios tempranos." :
                     language === "fr" ? " 905,677 cas/an globalement. 830,180 décès/an. 42,230 nouveaux cas USA 2023. Seulement 25% diagnostiqué aux stades précoces." :
                     " 905,677 cases/year globally. 830,180 deaths/year. 42,230 new cases USA 2023. Only 25% diagnosed in early stages."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  {language === "es" ? "Clasificación BCLC (Barcelona)" :
                   language === "fr" ? "Classification BCLC (Barcelone)" :
                   "BCLC Classification (Barcelona)"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>BCLC 0:</strong> {language === "es" ? "Muy temprano, <2cm, función hepática normal" : language === "fr" ? "Très précoce, <2cm, fonction hépatique normale" : "Very early, <2cm, normal liver function"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>BCLC A:</strong> {language === "es" ? "Temprano, único <5cm o 3 nódulos <3cm" : language === "fr" ? "Précoce, unique <5cm ou 3 nodules <3cm" : "Early, single <5cm or 3 nodules <3cm"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>BCLC B:</strong> {language === "es" ? "Intermedio, multinodular, sin invasión vascular" : language === "fr" ? "Intermédiaire, multinodulaire, sans invasion vasculaire" : "Intermediate, multinodular, without vascular invasion"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>BCLC C:</strong> {language === "es" ? "Avanzado, invasión vascular o metástasis" : language === "fr" ? "Avancé, invasion vasculaire ou métastases" : "Advanced, vascular invasion or metastasis"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>BCLC D:</strong> {language === "es" ? "Terminal, Child-Pugh C, ECOG >2" : language === "fr" ? "Terminal, Child-Pugh C, ECOG >2" : "Terminal, Child-Pugh C, ECOG >2"}
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
              {language === "es" ? "Factores de Riesgo y Vigilancia" :
               language === "fr" ? "Facteurs de Risque et Surveillance" :
               "Risk Factors and Surveillance"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {language === "es" ? "Hepatitis Virales" :
                   language === "fr" ? "Hépatites Virales" :
                   "Viral Hepatitis"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Hepatitis B:" : language === "fr" ? "Hépatite B:" : "Hepatitis B:"}</strong> {language === "es" ? "Factor #1 mundial, RR 100x, integración ADN viral" : language === "fr" ? "Facteur #1 mondial, RR 100x, intégration ADN viral" : "Global factor #1, RR 100x, viral DNA integration"}</li>
                  <li>• <strong>{language === "es" ? "Hepatitis C:" : language === "fr" ? "Hépatite C:" : "Hepatitis C:"}</strong> {language === "es" ? "Principal causa occidental, RR 17x, fibrosis progresiva" : language === "fr" ? "Cause principale occidentale, RR 17x, fibrose progressive" : "Main Western cause, RR 17x, progressive fibrosis"}</li>
                  <li>• <strong>{language === "es" ? "Coinfección B+D:" : language === "fr" ? "Coinfection B+D:" : "B+D coinfection:"}</strong> {language === "es" ? "Progresión acelerada, mayor riesgo CHC" : language === "fr" ? "Progression accélérée, risque CHC élevé" : "Accelerated progression, higher HCC risk"}</li>
                  <li>• <strong>{language === "es" ? "Genotipo VHC:" : language === "fr" ? "Génotype VHC:" : "HCV genotype:"}</strong> {language === "es" ? "Tipo 1b mayor riesgo oncogénico" : language === "fr" ? "Type 1b risque oncogénique plus élevé" : "Type 1b higher oncogenic risk"}</li>
                  <li>• <strong>{language === "es" ? "Carga viral alta:" : language === "fr" ? "Charge virale élevée:" : "High viral load:"}</strong> {language === "es" ? ">10⁴ copias/mL, inflamación sostenida" : language === "fr" ? ">10⁴ copies/mL, inflammation soutenue" : ">10⁴ copies/mL, sustained inflammation"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Metabólicos" :
                   language === "fr" ? "Facteurs Métaboliques" :
                   "Metabolic Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>NAFLD/NASH:</strong> {language === "es" ? "Causa emergente, obesidad epidémica, fibrosis F3-F4" : language === "fr" ? "Cause émergente, épidémie obésité, fibrose F3-F4" : "Emerging cause, obesity epidemic, F3-F4 fibrosis"}</li>
                  <li>• <strong>{language === "es" ? "Diabetes tipo 2:" : language === "fr" ? "Diabète type 2:" : "Type 2 diabetes:"}</strong> {language === "es" ? "RR 2.5x, hiperinsulinemia, factores crecimiento" : language === "fr" ? "RR 2.5x, hyperinsulinémie, facteurs croissance" : "RR 2.5x, hyperinsulinemia, growth factors"}</li>
                  <li>• <strong>{language === "es" ? "Síndrome metabólico:" : language === "fr" ? "Syndrome métabolique:" : "Metabolic syndrome:"}</strong> {language === "es" ? "Cluster factores riesgo, inflamación crónica" : language === "fr" ? "Cluster facteurs risque, inflammation chronique" : "Risk factor cluster, chronic inflammation"}</li>
                  <li>• <strong>{language === "es" ? "Obesidad central:" : language === "fr" ? "Obésité centrale:" : "Central obesity:"}</strong> {language === "es" ? "IMC >30, adipocinas proinflamatorias" : language === "fr" ? "IMC >30, adipokines pro-inflammatoires" : "BMI >30, proinflammatory adipokines"}</li>
                  <li>• <strong>{language === "es" ? "Resistencia insulina:" : language === "fr" ? "Résistance insuline:" : "Insulin resistance:"}</strong> {language === "es" ? "HOMA-IR >2.5, proliferación hepatocitos" : language === "fr" ? "HOMA-IR >2.5, prolifération hépatocytes" : "HOMA-IR >2.5, hepatocyte proliferation"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores Vigilancia" :
                   language === "fr" ? "Biomarqueurs Surveillance" :
                   "Surveillance Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Alfafetoproteína:" : language === "fr" ? "Alpha-fœtoprotéine:" : "Alpha-fetoprotein:"}</strong> {language === "es" ? "AFP >20 ng/mL, sensibilidad 65%, falsos positivos" : language === "fr" ? "AFP >20 ng/mL, sensibilité 65%, faux positifs" : "AFP >20 ng/mL, sensitivity 65%, false positives"}</li>
                  <li>• <strong>AFP-L3:</strong> {language === "es" ? "Fracción específica CHC, mayor especificidad" : language === "fr" ? "Fraction spécifique CHC, spécificité élevée" : "HCC-specific fraction, higher specificity"}</li>
                  <li>• <strong>DCP/PIVKA-II:</strong> {language === "es" ? "Des-γ-carboxiprotrombina, detección temprana" : language === "fr" ? "Des-γ-carboxyprothrombine, détection précoce" : "Des-γ-carboxyprothrombin, early detection"}</li>
                  <li>• <strong>{language === "es" ? "Ecografía semestral:" : language === "fr" ? "Échographie semestrielle:" : "Biannual ultrasound:"}</strong> {language === "es" ? "Cirrosos, sensibilidad 84% nódulos >2cm" : language === "fr" ? "Cirrhotiques, sensibilité 84% nodules >2cm" : "Cirrhotic patients, 84% sensitivity >2cm nodules"}</li>
                  <li>• <strong>{language === "es" ? "RM dinámica:" : language === "fr" ? "IRM dynamique:" : "Dynamic MRI:"}</strong> {language === "es" ? "Gadolinio multifásico, caracterización lesiones" : language === "fr" ? "Gadolinium multiphasique, caractérisation lésions" : "Multiphasic gadolinium, lesion characterization"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Segmentación CT Avanzada' : 
                 language === 'fr' ? 'Segmentation CT Avancée' : 
                 'Advanced CT Segmentation'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'U-Net piramidal y arquitecturas transformer para segmentación automática de tumores hepáticos en imágenes CT multifásicas con análisis de perfusión arterial y portal' :
                 language === 'fr' ? 'U-Net pyramidal et architectures transformer pour segmentation automatique de tumeurs hépatiques en images CT multiphasiques avec analyse de perfusion artérielle et portale' :
                 'Pyramidal U-Net and transformer architectures for automatic liver tumor segmentation in multiphasic CT images with arterial and portal perfusion analysis'}
              </p>
              <Badge className="w-full justify-center bg-orange-100 text-orange-800">Segmentación 3D</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación Histológica' : 
                 language === 'fr' ? 'Classification Histologique' : 
                 'Histological Classification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'PCA + regresión logística + Random Forest para clasificar subtipos de cáncer hepático (CHC vs colangiocarcinoma vs metástasis) con análisis de características radiómicas' :
                 language === 'fr' ? 'PCA + régression logistique + Random Forest pour classifier sous-types de cancer hépatique (CHC vs cholangiocarcinome vs métastases) avec analyse de caractéristiques radiomiques' :
                 'PCA + logistic regression + Random Forest to classify liver cancer subtypes (HCC vs cholangiocarcinoma vs metastases) with radiomic feature analysis'}
              </p>
              <Badge className="w-full justify-center bg-yellow-100 text-yellow-800">Análisis Radiómico</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Riesgo en Cirrosis' : 
                 language === 'fr' ? 'Prédiction de Risque en Cirrhose' : 
                 'Cirrhosis Risk Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'DNN entrenado con 84 factores de riesgo clínicos (AUC 0.718) incluyendo Child-Pugh, MELD, biomarcadores virales y metabólicos para predecir desarrollo de CHC' :
                 language === 'fr' ? 'DNN entraîné avec 84 facteurs de risque cliniques (AUC 0.718) incluant Child-Pugh, MELD, biomarqueurs viraux et métaboliques pour prédire développement CHC' :
                 'DNN trained with 84 clinical risk factors (AUC 0.718) including Child-Pugh, MELD, viral and metabolic biomarkers to predict HCC development'}
              </p>
              <Badge className="w-full justify-center bg-red-100 text-red-800">Análisis Multifactorial</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-orange-600" />
              {language === "es" ? "Algoritmo Terapéutico BCLC" :
               language === "fr" ? "Algorithme Thérapeutique BCLC" :
               "BCLC Therapeutic Algorithm"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Estadios Tempranos (BCLC 0-A)" :
                   language === "fr" ? "Stades Précoces (BCLC 0-A)" :
                   "Early Stages (BCLC 0-A)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Resección hepática:" : language === "fr" ? "Résection hépatique:" : "Hepatic resection:"}</strong> {language === "es" ? "Función hepática preservada, anatomía favorable, margen R0" : language === "fr" ? "Fonction hépatique préservée, anatomie favorable, marge R0" : "Preserved liver function, favorable anatomy, R0 margin"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trasplante hepático:" : language === "fr" ? "Transplantation hépatique:" : "Liver transplantation:"}</strong> {language === "es" ? "Criterios Milán: nódulo único ≤5cm o ≤3 nódulos ≤3cm" : language === "fr" ? "Critères Milan: nodule unique ≤5cm ou ≤3 nodules ≤3cm" : "Milan criteria: single nodule ≤5cm or ≤3 nodules ≤3cm"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Ablación local:" : language === "fr" ? "Ablation locale:" : "Local ablation:"}</strong> {language === "es" ? "RFA, MWA para lesiones <3cm, inoperables" : language === "fr" ? "RFA, MWA pour lésions <3cm, inopérables" : "RFA, MWA for lesions <3cm, inoperable"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Estadios Avanzados (BCLC B-C)" :
                   language === "fr" ? "Stades Avancés (BCLC B-C)" :
                   "Advanced Stages (BCLC B-C)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "TACE/TAE:" : language === "fr" ? "TACE/TAE:" : "TACE/TAE:"}</strong> {language === "es" ? "Quimioembolización transarterial, enfermedad multinodular" : language === "fr" ? "Chimioembolisation transartérielle, maladie multinodulaire" : "Transarterial chemoembolization, multinodular disease"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Sorafenib/lenvatinib:" : language === "fr" ? "Sorafenib/lenvatinib:" : "Sorafenib/lenvatinib:"}</strong> {language === "es" ? "Inhibidores multiquinasa, primera línea sistémica" : language === "fr" ? "Inhibiteurs multikinase, première ligne systémique" : "Multikinase inhibitors, first-line systemic"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Inmunoterapia:" : language === "fr" ? "Immunothérapie:" : "Immunotherapy:"}</strong> {language === "es" ? "Atezolizumab + bevacizumab, nivolumab segunda línea" : language === "fr" ? "Atezolizumab + bevacizumab, nivolumab deuxième ligne" : "Atezolizumab + bevacizumab, nivolumab second-line"}
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
              {language === "es" ? "Epidemiología Global del Cáncer Hepático" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer Hépatique" :
               "Global Liver Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">906K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos globales/año" :
                   language === "fr" ? "Cas mondiaux/an" :
                   "Global cases/year"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">830K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">20%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años" :
                   language === "fr" ? "Survie 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">6ta</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Causa cáncer mundial" :
                   language === "fr" ? "Cause cancer mondiale" :
                   "Global cancer cause"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-orange-50/30 to-yellow-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección Hepática de Precisión' : 
                 language === 'fr' ? 'Détection Hépatique de Précision' : 
                 'Precision Liver Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer hepático integran análisis de imágenes CT multifásicas, biomarcadores séricos y evaluación de riesgo en cirrosis para detección temprana.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer hépatique intègrent analyse d\'images CT multiphasiques, biomarqueurs sériques et évaluation de risque en cirrhose pour détection précoce.' :
                 'Our 5+ specialized liver cancer models integrate multiphasic CT image analysis, serum biomarkers and cirrhosis risk evaluation for early detection.'}
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 rounded-2xl text-lg px-8 py-3">
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

export default LiverCancer;
