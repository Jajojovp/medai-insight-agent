
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Scan, Activity, AlertTriangle, CheckCircle, TrendingUp, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const LungCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Cáncer de Pulmón' : 
             language === 'fr' ? 'Cancer du Poumon' : 
             'Lung Cancer'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Cáncer Pulmonar' : 
             language === 'fr' ? 'Détection du Cancer Pulmonaire' : 
             'Lung Cancer Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para cáncer de pulmón usando 5+ modelos especializados con imágenes CT de tórax, análisis histopatológico y biomarcadores moleculares' :
             language === 'fr' ? 'Analyse prédictive avancée pour cancer du poumon utilisant 5+ modèles spécialisés avec images CT thoraciques, analyse histopathologique et biomarqueurs moléculaires' :
             'Advanced predictive analysis for lung cancer using 5+ specialized models with chest CT images, histopathological analysis and molecular biomarkers'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Información Clave - Cáncer de Pulmón" :
               language === "fr" ? "Information Clé - Cancer du Poumon" :
               "Key Information - Lung Cancer"}
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
                  {language === "es" ? "El cáncer de pulmón es la primera causa de muerte por cáncer mundialmente. Se divide en NSCLC (85%: adenocarcinoma 50%, escamoso 30%, células grandes 5%) y SCLC (15%). Fuertemente asociado al tabaquismo (85% casos). Supervivencia 5 años: 22% general, 63% estadio IA, 7% estadio IV." :
                   language === "fr" ? "Le cancer du poumon est la première cause de décès par cancer mondialement. Divisé en NSCLC (85%: adénocarcinome 50%, squameux 30%, grandes cellules 5%) et SCLC (15%). Fortement associé au tabagisme (85% cas). Survie 5 ans: 22% général, 63% stade IA, 7% stade IV." :
                   "Lung cancer is the leading cause of cancer death worldwide. Divided into NSCLC (85%: adenocarcinoma 50%, squamous 30%, large cell 5%) and SCLC (15%). Strongly associated with smoking (85% cases). 5-year survival: 22% overall, 63% stage IA, 7% stage IV."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " 2.2 millones casos/año globalmente. 1.8 millones muertes/año. 235,760 nuevos casos EE.UU. 2023. Solo 23% se diagnostica en estadios I-II." :
                     language === "fr" ? " 2.2 millions cas/an globalement. 1.8 millions décès/an. 235,760 nouveaux cas USA 2023. Seulement 23% diagnostiqué aux stades I-II." :
                     " 2.2 million cases/year globally. 1.8 million deaths/year. 235,760 new cases USA 2023. Only 23% diagnosed in stages I-II."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">
                  {language === "es" ? "Clasificación TNM (8va Edición)" :
                   language === "fr" ? "Classification TNM (8ème Édition)" :
                   "TNM Classification (8th Edition)"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T1a:</strong> {language === "es" ? "≤1cm, mínimamente invasivo" : language === "fr" ? "≤1cm, minimalement invasif" : "≤1cm, minimally invasive"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T2a:</strong> {language === "es" ? ">3-4cm o invasión pleura visceral" : language === "fr" ? ">3-4cm ou invasion plèvre viscérale" : ">3-4cm or visceral pleural invasion"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T3:</strong> {language === "es" ? ">5-7cm o nódulo separado mismo lóbulo" : language === "fr" ? ">5-7cm ou nodule séparé même lobe" : ">5-7cm or separate nodule same lobe"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>T4:</strong> {language === "es" ? ">7cm o invasión mediastino, corazón" : language === "fr" ? ">7cm ou invasion médiastin, cœur" : ">7cm or mediastinal, heart invasion"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>M1c:</strong> {language === "es" ? "Múltiples nódulos múltiples órganos" : language === "fr" ? "Multiples nodules multiples organes" : "Multiple nodules multiple organs"}
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
              {language === "es" ? "Factores de Riesgo y Detección Temprana" :
               language === "fr" ? "Facteurs de Risque et Détection Précoce" :
               "Risk Factors and Early Detection"}
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
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Factor #1, RR 10-30x, 85% casos atribuibles. Paquetes-año >20" : language === "fr" ? "Facteur #1, RR 10-30x, 85% cas attribuables. Paquets-année >20" : "Factor #1, RR 10-30x, 85% attributable cases. Pack-years >20"}</li>
                  <li>• <strong>{language === "es" ? "Exposición radón:" : language === "fr" ? "Exposition radon:" : "Radon exposure:"}</strong> {language === "es" ? "2da causa no fumadores, gas radiactivo natural" : language === "fr" ? "2ème cause non-fumeurs, gaz radioactif naturel" : "2nd cause non-smokers, natural radioactive gas"}</li>
                  <li>• <strong>{language === "es" ? "Exposición asbesto:" : language === "fr" ? "Exposition amiante:" : "Asbestos exposure:"}</strong> {language === "es" ? "RR 5x, mesotelioma pleural, sinergismo tabaco" : language === "fr" ? "RR 5x, mésothéliome pleural, synergisme tabac" : "RR 5x, pleural mesothelioma, tobacco synergism"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Antécédents familiaux:" : "Family history:"}</strong> {language === "es" ? "Parientes 1er grado, RR 1.5-2x, genes susceptibilidad" : language === "fr" ? "Parents 1er degré, RR 1.5-2x, gènes susceptibilité" : "First-degree relatives, RR 1.5-2x, susceptibility genes"}</li>
                  <li>• <strong>{language === "es" ? "EPOC preexistente:" : language === "fr" ? "BPCO préexistante:" : "Pre-existing COPD:"}</strong> {language === "es" ? "RR 2-6x, inflamación crónica, mismo factor etiológico" : language === "fr" ? "RR 2-6x, inflammation chronique, même facteur étiologique" : "RR 2-6x, chronic inflammation, same etiologic factor"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Criterios Cribado LDCT" :
                   language === "fr" ? "Critères Dépistage LDCT" :
                   "LDCT Screening Criteria"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Edad 50-80 años:" : language === "fr" ? "Âge 50-80 ans:" : "Age 50-80 years:"}</strong> {language === "es" ? "Recomendación USPSTF 2021, previamente 55-80" : language === "fr" ? "Recommandation USPSTF 2021, précédemment 55-80" : "USPSTF 2021 recommendation, previously 55-80"}</li>
                  <li>• <strong>{language === "es" ? "≥20 paquetes-año:" : language === "fr" ? "≥20 paquets-année:" : "≥20 pack-years:"}</strong> {language === "es" ? "Historia acumulativa tabaquismo significativa" : language === "fr" ? "Histoire cumulative tabagisme significative" : "Significant cumulative smoking history"}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo activo:" : language === "fr" ? "Tabagisme actif:" : "Current smoking:"}</strong> {language === "es" ? "O cesación <15 años, riesgo persistente" : language === "fr" ? "Ou cessation <15 ans, risque persistant" : "Or quit <15 years, persistent risk"}</li>
                  <li>• <strong>{language === "es" ? "Ausencia comorbilidades:" : language === "fr" ? "Absence comorbidités:" : "No prohibitive comorbidities:"}</strong> {language === "es" ? "Expectativa vida >10 años, candidato cirugía" : language === "fr" ? "Espérance vie >10 ans, candidat chirurgie" : "Life expectancy >10 years, surgical candidate"}</li>
                  <li>• <strong>{language === "es" ? "Seguimiento LungRADS:" : language === "fr" ? "Suivi LungRADS:" : "LungRADS follow-up:"}</strong> {language === "es" ? "Sistema estandarizado reporte e intervención" : language === "fr" ? "Système standardisé rapport et intervention" : "Standardized reporting and intervention system"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores Moleculares" :
                   language === "fr" ? "Biomarqueurs Moléculaires" :
                   "Molecular Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>EGFR:</strong> {language === "es" ? "Mutaciones 15% NSCLC, osimertinib primera línea" : language === "fr" ? "Mutations 15% NSCLC, osimertinib première ligne" : "Mutations 15% NSCLC, osimertinib first-line"}</li>
                  <li>• <strong>ALK:</strong> {language === "es" ? "Reordenamientos 3-5%, alectinib, brigatinib" : language === "fr" ? "Réarrangements 3-5%, alectinib, brigatinib" : "Rearrangements 3-5%, alectinib, brigatinib"}</li>
                  <li>• <strong>ROS1:</strong> {language === "es" ? "Fusiones 1-2%, crizotinib, entrectinib" : language === "fr" ? "Fusions 1-2%, crizotinib, entrectinib" : "Fusions 1-2%, crizotinib, entrectinib"}</li>
                  <li>• <strong>PD-L1:</strong> {language === "es" ? "Expresión ≥50% pembrolizumab monoterapia" : language === "fr" ? "Expression ≥50% pembrolizumab monothérapie" : "Expression ≥50% pembrolizumab monotherapy"}</li>
                  <li>• <strong>TMB-H:</strong> {language === "es" ? "≥10 mutaciones/Mb, respuesta inmunoterapia" : language === "fr" ? "≥10 mutations/Mb, réponse immunothérapie" : "≥10 mutations/Mb, immunotherapy response"}</li>
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
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación CNN Avanzada' : 
                 language === 'fr' ? 'Classification CNN Avancée' : 
                 'Advanced CNN Classification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'CNN con aprendizaje por transferencia para clasificar subtipos histológicos de cáncer de pulmón (adenocarcinoma, escamoso, células grandes) mediante imágenes médicas con arquitecturas ResNet y DenseNet' :
                 language === 'fr' ? 'CNN avec apprentissage par transfert pour classifier sous-types histologiques de cancer du poumon (adénocarcinome, squameux, grandes cellules) via images médicales avec architectures ResNet et DenseNet' :
                 'CNN with transfer learning to classify histological subtypes of lung cancer (adenocarcinoma, squamous, large cell) through medical images with ResNet and DenseNet architectures'}
              </p>
              <Badge className="w-full justify-center bg-blue-100 text-blue-800">Clasificación Histológica</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Detección CT Pulmonar' : 
                 language === 'fr' ? 'Détection CT Pulmonaire' : 
                 'Pulmonary CT Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'ML + visión por computador para detección automática de nódulos pulmonares en CT de tórax con sistema LungRADS, análisis de características radiómicas y diferenciación benigno/maligno' :
                 language === 'fr' ? 'ML + vision par ordinateur pour détection automatique de nodules pulmonaires en CT thoracique avec système LungRADS, analyse de caractéristiques radiomiques et différenciation bénin/malin' :
                 'ML + computer vision for automatic pulmonary nodule detection in chest CT with LungRADS system, radiomic feature analysis and benign/malignant differentiation'}
              </p>
              <Badge className="w-full justify-center bg-cyan-100 text-cyan-800">Sistema LungRADS</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Clínico Multimodal' : 
                 language === 'fr' ? 'Analyse Clinique Multimodale' : 
                 'Multimodal Clinical Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Múltiples modelos (RF, SVM, XGBoost) sobre datos clínicos integrando características demográficas, síntomas, historia tabáquica, biomarcadores séricos y perfil genético' :
                 language === 'fr' ? 'Multiples modèles (RF, SVM, XGBoost) sur données cliniques intégrant caractéristiques démographiques, symptômes, histoire tabagique, biomarqueurs sériques et profil génétique' :
                 'Multiple models (RF, SVM, XGBoost) on clinical data integrating demographic features, symptoms, smoking history, serum biomarkers and genetic profile'}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">Análisis Integrado</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-blue-600" />
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
                  {language === "es" ? "Enfermedad Localizada (I-II)" :
                   language === "fr" ? "Maladie Localisée (I-II)" :
                   "Localized Disease (I-II)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cirugía estándar oro:" : language === "fr" ? "Chirurgie standard or:" : "Surgery gold standard:"}</strong> {language === "es" ? "Lobectomía, bilobectomía, neumonectomía + linfadenectomía mediastinal" : language === "fr" ? "Lobectomie, bilobectomie, pneumonectomie + lymphadénectomie médiastinale" : "Lobectomy, bilobectomy, pneumonectomy + mediastinal lymphadenectomy"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia adyuvante:" : language === "fr" ? "Chimiothérapie adjuvante:" : "Adjuvant chemotherapy:"}</strong> {language === "es" ? "Estadio IB-III, cisplatino + vinorelbina/pemetrexed/docetaxel" : language === "fr" ? "Stade IB-III, cisplatine + vinorelbine/pemetrexed/docetaxel" : "Stage IB-III, cisplatin + vinorelbine/pemetrexed/docetaxel"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Radioterapia estereotáctica:" : language === "fr" ? "Radiothérapie stéréotaxique:" : "Stereotactic radiotherapy:"}</strong> {language === "es" ? "SBRT para inoperables, tumores periféricos <5cm" : language === "fr" ? "SBRT pour inopérables, tumeurs périphériques <5cm" : "SBRT for inoperable, peripheral tumors <5cm"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Enfermedad Avanzada (III-IV)" :
                   language === "fr" ? "Maladie Avancée (III-IV)" :
                   "Advanced Disease (III-IV)"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia dirigida:" : language === "fr" ? "Thérapie ciblée:" : "Targeted therapy:"}</strong> {language === "es" ? "EGFR+ osimertinib, ALK+ alectinib, ROS1+ entrectinib" : language === "fr" ? "EGFR+ osimertinib, ALK+ alectinib, ROS1+ entrectinib" : "EGFR+ osimertinib, ALK+ alectinib, ROS1+ entrectinib"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Inmunoterapia:" : language === "fr" ? "Immunothérapie:" : "Immunotherapy:"}</strong> {language === "es" ? "PD-L1 ≥50% pembrolizumab, combinación atezolizumab + QT" : language === "fr" ? "PD-L1 ≥50% pembrolizumab, combinaison atezolizumab + CT" : "PD-L1 ≥50% pembrolizumab, combination atezolizumab + CT"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia:" : language === "fr" ? "Chimiothérapie:" : "Chemotherapy:"}</strong> {language === "es" ? "Cisplatino/carboplatino + pemetrexed (no escamoso) o paclitaxel" : language === "fr" ? "Cisplatine/carboplatine + pemetrexed (non squameux) ou paclitaxel" : "Cisplatin/carboplatin + pemetrexed (non-squamous) or paclitaxel"}
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
              {language === "es" ? "Epidemiología Global del Cáncer de Pulmón" :
               language === "fr" ? "Épidémiologie Mondiale du Cancer du Poumon" :
               "Global Lung Cancer Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2.2M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos globales/año" :
                   language === "fr" ? "Cas mondiaux/an" :
                   "Global cases/year"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">1.8M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">22%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años" :
                   language === "fr" ? "Survie 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Asociado tabaquismo" :
                   language === "fr" ? "Associé tabagisme" :
                   "Smoking-related"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-cyan-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Detección Temprana Crítica' : 
                 language === 'fr' ? 'Détection Précoce Critique' : 
                 'Critical Early Detection'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en cáncer pulmonar integran análisis de imágenes CT, histopatología y biomarcadores moleculares para detección temprana que puede salvar vidas.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en cancer pulmonaire intègrent analyse d\'images CT, histopathologie et biomarqueurs moléculaires pour détection précoce qui peut sauver des vies.' :
                 'Our 5+ specialized lung cancer models integrate CT image analysis, histopathology and molecular biomarkers for early detection that can save lives.'}
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

export default LungCancer;
