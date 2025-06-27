import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Activity, AlertTriangle, CheckCircle, TrendingUp, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const StomachCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-emerald-100/80 text-emerald-800 rounded-full">
            {language === "es" ? "Cáncer de Estómago" : 
             language === "fr" ? "Cancer de l'Estomac" : 
             "Stomach Cancer"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Cáncer de Estómago" : 
             language === "fr" ? "Analyse Prédictive du Cancer de l'Estomac" : 
             "Stomach Cancer Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es" ? 'Análisis predictivo avanzado para cáncer de estómago usando 5+ modelos especializados con imágenes histopatológicas, endoscopia y análisis de biomarcadores moleculares' :
             language === "fr" ? 'Analyse prédictive avancée pour cancer de l\'estomac utilisant 5+ modèles spécialisés avec images histopathologiques, endoscopie et analyse de biomarqueurs moléculaires' :
             'Advanced predictive analysis for stomach cancer using 5+ specialized models with histopathological images, endoscopy and molecular biomarker analysis'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-red-600" />
              {language === "es" ? "Información Clave - Cáncer Gástrico" :
               language === "fr" ? "Information Clé - Cancer Gastrique" :
               "Key Information - Gastric Cancer"}
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
                  {language === "es" ? "El adenocarcinoma gástrico representa 95% de cánceres de estómago. 5ta causa de cáncer mundialmente, 4ta causa de muerte por cáncer. Incidencia extremadamente variable geográficamente: alta en Asia Oriental (Corea, Japón, China) y baja en Norteamérica/Europa. Supervivencia 5 años: 35% general, 70% estadio I, 5% estadio IV." :
                   language === "fr" ? "L'adénocarcinome gastrique représente 95% des cancers d'estomac. 5ème cause de cancer mondialement, 4ème cause de décès par cancer. Incidence extrêmement variable géographiquement: élevée en Asie de l'Est (Corée, Japon, Chine) et faible en Amérique du Nord/Europe. Survie 5 ans: 35% général, 70% stade I, 5% stade IV." :
                   "Gastric adenocarcinoma represents 95% of stomach cancers. 5th leading cancer globally, 4th leading cause of cancer death. Extremely geographically variable incidence: high in East Asia (Korea, Japan, China) and low in North America/Europe. 5-year survival: 35% overall, 70% stage I, 5% stage IV."}
                </p>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm text-red-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " 1.09 millones casos/año globalmente. 769,000 muertes/año. 26,560 nuevos casos EE.UU. 2023. 70% diagnosticado en estadios avanzados." :
                     language === "fr" ? " 1.09 millions cas/an globalement. 769,000 décès/an. 26,560 nouveaux cas USA 2023. 70% diagnostiqué aux stades avancés." :
                     " 1.09 million cases/year globally. 769,000 deaths/year. 26,560 new cases USA 2023. 70% diagnosed in advanced stages."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  {language === "es" ? "Clasificación Lauren y WHO" :
                   language === "fr" ? "Classification Lauren et OMS" :
                   "Lauren and WHO Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Tipo Intestinal:" : language === "fr" ? "Type Intestinal:" : "Intestinal type:"}</strong> {language === "es" ? "54%, bien diferenciado, H. pylori asociado, mejor pronóstico" : language === "fr" ? "54%, bien différencié, H. pylori associé, meilleur pronostic" : "54%, well-differentiated, H. pylori associated, better prognosis"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Tipo Difuso:" : language === "fr" ? "Type Diffus:" : "Diffuse type:"}</strong> {language === "es" ? "32%, células en anillo sello, más agresivo, hereditario" : language === "fr" ? "32%, cellules en bague à chaton, plus agressif, héréditaire" : "32%, signet ring cells, more aggressive, hereditary"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Tipo Mixto:" : language === "fr" ? "Type Mixte:" : "Mixed type:"}</strong> {language === "es" ? "14%, características ambos tipos, pronóstico intermedio" : language === "fr" ? "14%, caractéristiques deux types, pronostic intermédiaire" : "14%, features of both types, intermediate prognosis"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>HER2+:</strong> {language === "es" ? "15-20% casos, trastuzumab elegible, mejor respuesta" : language === "fr" ? "15-20% cas, trastuzumab éligible, meilleure réponse" : "15-20% cases, trastuzumab eligible, better response"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>MSI-H:</strong> {language === "es" ? "8-10% casos, inmunoterapia sensible, Lynch asociado" : language === "fr" ? "8-10% cas, immunothérapie sensible, Lynch associé" : "8-10% cases, immunotherapy sensitive, Lynch associated"}
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
                  {language === "es" ? "Infección por H. pylori" :
                   language === "fr" ? "Infection H. pylori" :
                   "H. pylori Infection"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Factor principal:" : language === "fr" ? "Facteur principal:" : "Main factor:"}</strong> {language === "es" ? "85% asociación, RR 2-6x, carcinógeno clase I WHO" : language === "fr" ? "85% association, RR 2-6x, carcinogène classe I OMS" : "85% association, RR 2-6x, WHO class I carcinogen"}</li>
                  <li>• <strong>{language === "es" ? "Cepas CagA+:" : language === "fr" ? "Souches CagA+:" : "CagA+ strains:"}</strong> {language === "es" ? "Mayor virulencia, sistema secreción tipo IV" : language === "fr" ? "Virulence élevée, système sécrétion type IV" : "Higher virulence, type IV secretion system"}</li>
                  <li>• <strong>{language === "es" ? "Gastritis atrófica:" : language === "fr" ? "Gastrite atrophique:" : "Atrophic gastritis:"}</strong> {language === "es" ? "Progresión metaplasia → displasia → carcinoma" : language === "fr" ? "Progression métaplasie → dysplasie → carcinome" : "Progression metaplasia → dysplasia → carcinoma"}</li>
                  <li>• <strong>{language === "es" ? "Metaplasia intestinal:" : language === "fr" ? "Métaplasie intestinale:" : "Intestinal metaplasia:"}</strong> {language === "es" ? "Lesión precancerosa, vigilancia endoscópica" : language === "fr" ? "Lésion précancéreuse, surveillance endoscopique" : "Precancerous lesion, endoscopic surveillance"}</li>
                  <li>• <strong>{language === "es" ? "Erradicación beneficio:" : language === "fr" ? "Éradication bénéfice:" : "Eradication benefit:"}</strong> {language === "es" ? "Reduce riesgo 35-50% si no metaplasia establecida" : language === "fr" ? "Réduit risque 35-50% si pas métaplasie établie" : "Reduces risk 35-50% if no established metaplasia"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Genéticos y Familiares" :
                   language === "fr" ? "Facteurs Génétiques et Familiaux" :
                   "Genetic and Familial Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>CDH1:</strong> {language === "es" ? "Cáncer gástrico difuso hereditario, RR 100x, gastrectomía profiláctica" : language === "fr" ? "Cancer gastrique diffus héréditaire, RR 100x, gastrectomie prophylactique" : "Hereditary diffuse gastric cancer, RR 100x, prophylactic gastrectomy"}</li>
                  <li>• <strong>Lynch syndrome:</strong> {language === "es" ? "RR 19x, MSI-H, MLH1/MSH2/MSH6/PMS2" : language === "fr" ? "RR 19x, MSI-H, MLH1/MSH2/MSH6/PMS2" : "RR 19x, MSI-H, MLH1/MSH2/MSH6/PMS2"}</li>
                  <li>• <strong>{language === "es" ? "Poliposis familiar:" : language === "fr" ? "Polypose familiale:" : "Familial polyposis:"}</strong> {language === "es" ? "FAP, Peutz-Jeghers, riesgo gástrico elevado" : language === "fr" ? "FAP, Peutz-Jeghers, risque gastrique élevé" : "FAP, Peutz-Jeghers, elevated gastric risk"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Antécédents familiaux:" : "Family history:"}</strong> {language === "es" ? "Parientes 1er grado, RR 2-3x, agregación familiar" : language === "fr" ? "Parents 1er degré, RR 2-3x, agrégation familiale" : "First-degree relatives, RR 2-3x, familial clustering"}</li>
                  <li>• <strong>{language === "es" ? "Grupo sanguíneo A:" : language === "fr" ? "Groupe sanguin A:" : "Blood group A:"}</strong> {language === "es" ? "RR 1.2x, asociación débil pero consistente" : language === "fr" ? "RR 1.2x, association faible mais cohérente" : "RR 1.2x, weak but consistent association"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores y Cribado" :
                   language === "fr" ? "Biomarqueurs et Dépistage" :
                   "Biomarkers and Screening"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Pepsinógeno I/II:" : language === "fr" ? "Pepsinogène I/II:" : "Pepsinogen I/II:"}</strong> {language === "es" ? "Ratio <3 indica gastritis atrófica, cribado sérico" : language === "fr" ? "Ratio <3 indique gastrite atrophique, dépistage sérique" : "Ratio <3 indicates atrophic gastritis, serum screening"}</li>
                  <li>• <strong>{language === "es" ? "Gastrina-17:" : language === "fr" ? "Gastrine-17:" : "Gastrin-17:"}</strong> {language === "es" ? "Elevada en gastritis antral, baja en atrofia corporal" : language === "fr" ? "Élevée en gastrite antrale, basse en atrophie corporale" : "Elevated in antral gastritis, low in corpus atrophy"}</li>
                  <li>• <strong>{language === "es" ? "Endoscopia alta:" : language === "fr" ? "Endoscopie haute:" : "Upper endoscopy:"}</strong> {language === "es" ? "Estándar oro diagnóstico, biopsia dirigida" : language === "fr" ? "Standard or diagnostique, biopsie dirigée" : "Diagnostic gold standard, targeted biopsy"}</li>
                  <li>• <strong>{language === "es" ? "Cromoscopia:" : language === "fr" ? "Chromoscopy:" : "Chromoscopy:"}</strong> {language === "es" ? "Azul metileno, índigo carmín, detección temprana" : language === "fr" ? "Bleu méthylène, indigo carmin, détection précoce" : "Methylene blue, indigo carmine, early detection"}</li>
                  <li>• <strong>NBI/FICE:</strong> {language === "es" ? "Imagen banda estrecha, caracterización lesiones" : language === "fr" ? "Image bande étroite, caractérisation lésions" : "Narrow band imaging, lesion characterization"}</li>
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
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Histopatológico IA' : 
                 language === 'fr' ? 'Analyse Histopathologique IA' : 
                 'AI Histopathological Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'EfficientNetV2B0 + CatBoost para análisis automatizado de imágenes histopatológicas de la base de datos GasHisSDB con visualización Grad-CAM y análisis dimensional t-SNE' :
                 language === 'fr' ? 'EfficientNetV2B0 + CatBoost pour analyse automatisée d\'images histopathologiques de la base de données GasHisSDB avec visualisation Grad-CAM et analyse dimensionnelle t-SNE' :
                 'EfficientNetV2B0 + CatBoost for automated histopathological image analysis from GasHisSDB database with Grad-CAM visualization and t-SNE dimensional analysis'}
              </p>
              <Badge className="w-full justify-center bg-red-100 text-red-800">Análisis Automatizado</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Detección Endoscópica' : 
                 language === 'fr' ? 'Détection Endoscopique' : 
                 'Endoscopic Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Visión por computador avanzada para detectar tejidos cancerosos en imágenes endoscópicas gástricas con clasificación automática y segmentación de lesiones tempranas' :
                 language === 'fr' ? 'Vision par ordinateur avancée pour détecter tissus cancéreux dans images endoscopiques gastriques avec classification automatique et segmentation de lésions précoces' :
                 'Advanced computer vision to detect cancerous tissues in gastric endoscopic images with automatic classification and early lesion segmentation'}
              </p>
              <Badge className="w-full justify-center bg-orange-100 text-orange-800">Detección Temprana</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Metástasis' : 
                 language === 'fr' ? 'Prédiction des Métastases' : 
                 'Metastasis Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'ML clásico (SVM, Random Forest, XGBoost) para predecir metástasis en ganglios linfáticos usando datos clínicos validados en población asiática con alta precisión' :
                 language === 'fr' ? 'ML classique (SVM, Random Forest, XGBoost) pour prédire métastases dans ganglions lymphatiques utilisant données cliniques validées en population asiatique avec haute précision' :
                 'Classic ML (SVM, Random Forest, XGBoost) to predict lymph node metastasis using clinical data validated in Asian population with high accuracy'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Estadificación Precisa</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-red-600" />
              {language === "es" ? "Algoritmo Terapéutico Multimodal" :
               language === "fr" ? "Algorithme Thérapeutique Multimodal" :
               "Multimodal Therapeutic Algorithm"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Enfermedad Localizada/Regional" :
                   language === "fr" ? "Maladie Localisée/Régionale" :
                   "Localized/Regional Disease"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Resección temprana:" : language === "fr" ? "Résection précoce:" : "Early resection:"}</strong> {language === "es" ? "ESD/EMR para lesiones mucosa/submucosa superficial" : language === "fr" ? "ESD/EMR pour lésions muqueuse/sous-muqueuse superficielle" : "ESD/EMR for superficial mucosal/submucosal lesions"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Gastrectomía D2:" : language === "fr" ? "Gastrectomie D2:" : "D2 gastrectomy:"}</strong> {language === "es" ? "Linfadenectomía extendida, estándar asiático adoptado occidente" : language === "fr" ? "Lymphadénectomie étendue, standard asiatique adopté occident" : "Extended lymphadenectomy, Asian standard adopted in West"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia perioperatoria:" : language === "fr" ? "Chimiothérapie périopératoire:" : "Perioperative chemotherapy:"}</strong> {language === "es" ? "FLOT (5-FU, leucovorina, oxaliplatino, docetaxel) estándar Europa" : language === "fr" ? "FLOT (5-FU, leucovorine, oxaliplatine, docétaxel) standard Europe" : "FLOT (5-FU, leucovorin, oxaliplatin, docetaxel) European standard"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Enfermedad Metastásica/Avanzada" :
                   language === "fr" ? "Maladie Métastatique/Avancée" :
                   "Metastatic/Advanced Disease"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>HER2+:</strong> {language === "es" ? "Trastuzumab + quimioterapia, T-DXd segunda línea" : language === "fr" ? "Trastuzumab + chimiothérapie, T-DXd deuxième ligne" : "Trastuzumab + chemotherapy, T-DXd second-line"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>MSI-H:</strong> {language === "es" ? "Pembrolizumab primera línea, nivolumab alternativa" : language === "fr" ? "Pembrolizumab première ligne, nivolumab alternative" : "Pembrolizumab first-line, nivolumab alternative"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia estándar:" : language === "fr" ? "Chimiothérapie standard:" : "Standard chemotherapy:"}</strong> {language === "es" ? "FOLFOX, CAPOX, ECF según función renal/hepática" : language === "fr" ? "FOLFOX, CAPOX, ECF selon fonction rénale/hépatique" : "FOLFOX, CAPOX, ECF based on renal/hepatic function"}
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
              {language === "es" ? "Epidemiología Global del Cáncer Gástrico" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer Gastrique" :
               "Global Gastric Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">1.09M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos globales/año" :
                   language === "fr" ? "Cas mondiaux/an" :
                   "Global cases/year"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">769K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años" :
                   language === "fr" ? "Survie 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5ta</div>
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
          <Card className="bg-gradient-to-br from-emerald-50/30 to-orange-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección Gástrica Temprana Vital' : 
                 language === 'fr' ? 'Détection Gastrique Précoce Vitale' : 
                 'Vital Early Gastric Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer gástrico integran análisis histopatológico, endoscopia IA y predicción de metástasis para detección temprana que salva vidas.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer gastrique intègrent analyse histopathologique, endoscopie IA et prédiction de métastases pour détection précoce qui sauve des vies.' :
                 'Our 5+ specialized gastric cancer models integrate histopathological analysis, AI endoscopy and metastasis prediction for life-saving early detection.'}
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

export default StomachCancer;
