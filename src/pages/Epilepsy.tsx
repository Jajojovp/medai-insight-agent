
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Activity, Zap, AlertTriangle, CheckCircle, TrendingUp, FileText, Stethoscope, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Epilepsy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-indigo-100/80 text-indigo-800 rounded-full">
            {language === 'es' ? 'Epilepsia' : 
             language === 'fr' ? 'Épilepsie' : 
             'Epilepsy'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Predicción de Epilepsia' : 
             language === 'fr' ? 'Prédiction d\'Épilepsie' : 
             'Epilepsy Prediction'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para epilepsia usando 4+ modelos especializados con datos EEG y algoritmos de aprendizaje profundo' :
             language === 'fr' ? 'Analyse prédictive avancée pour épilepsie utilisant 4+ modèles spécialisés avec données EEG et algorithmes d\'apprentissage profond' :
             'Advanced predictive analysis for epilepsy using 4+ specialized models with EEG data and deep learning algorithms'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-indigo-600" />
              {language === "es" ? "Información Clave - Epilepsia" :
               language === "fr" ? "Information Clé - Épilepsie" :
               "Key Information - Epilepsy"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  {language === "es" ? "Definición y Epidemiología" :
                   language === "fr" ? "Définition et Épidémiologie" :
                   "Definition and Epidemiology"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "La epilepsia es un trastorno neurológico caracterizado por la predisposición a generar crisis epilépticas recurrentes. Afecta a ~50 millones de personas globalmente, siendo uno de los trastornos neurológicos más comunes. Se define por ≥2 crisis no provocadas separadas por >24 horas." :
                   language === "fr" ? "L'épilepsie est un trouble neurologique caractérisé par la prédisposition à générer des crises épileptiques récurrentes. Elle affecte ~50 millions de personnes mondialement, étant l'un des troubles neurologiques les plus courants. Elle est définie par ≥2 crises non provoquées séparées par >24 heures." :
                   "Epilepsy is a neurological disorder characterized by predisposition to generate recurrent epileptic seizures. It affects ~50 million people globally, being one of the most common neurological disorders. It's defined by ≥2 unprovoked seizures separated by >24 hours."}
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                  <p className="text-sm text-indigo-800">
                    <strong>
                      {language === "es" ? "Prevalencia Global:" :
                       language === "fr" ? "Prévalence Mondiale:" :
                       "Global Prevalence:"}
                    </strong>
                    {language === "es" ? " 0.5-1% de la población mundial. Incidencia: 50-70/100,000 personas/año. 80% vive en países de bajos ingresos." :
                     language === "fr" ? " 0.5-1% de la population mondiale. Incidence: 50-70/100,000 personnes/an. 80% vit dans pays à faibles revenus." :
                     " 0.5-1% of global population. Incidence: 50-70/100,000 people/year. 80% live in low-income countries."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  {language === "es" ? "Clasificación ILAE 2017" :
                   language === "fr" ? "Classification ILAE 2017" :
                   "ILAE 2017 Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Crisis Focales:</strong> {language === "es" ? "Inicio en una región cerebral. Con/sin alteración de consciencia" : language === "fr" ? "Début dans une région cérébrale. Avec/sans altération de conscience" : "Onset in one brain region. With/without consciousness impairment"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Crisis Generalizadas:</strong> {language === "es" ? "Ambos hemisferios desde el inicio. Tónico-clónicas, ausencias, mioclónicas" : language === "fr" ? "Deux hémisphères dès le début. Tonico-cloniques, absences, myocloniques" : "Both hemispheres from onset. Tonic-clonic, absence, myoclonic"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Crisis de Inicio Desconocido:</strong> {language === "es" ? "No suficiente información para clasificar" : language === "fr" ? "Information insuffisante pour classifier" : "Insufficient information to classify"}
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
              {language === "es" ? "Factores de Riesgo y Etiología" :
               language === "fr" ? "Facteurs de Risque et Étiologie" :
               "Risk Factors and Etiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {language === "es" ? "Factores Genéticos" :
                   language === "fr" ? "Facteurs Génétiques" :
                   "Genetic Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Síndromes genéticos:" : language === "fr" ? "Syndromes génétiques:" : "Genetic syndromes:"}</strong> {language === "es" ? "Síndrome de Dravet (SCN1A), GLUT1, Angelman" : language === "fr" ? "Syndrome de Dravet (SCN1A), GLUT1, Angelman" : "Dravet syndrome (SCN1A), GLUT1, Angelman"}</li>
                  <li>• <strong>{language === "es" ? "Canalopatías:" : language === "fr" ? "Canalopathies:" : "Channelopathies:"}</strong> {language === "es" ? "Mutaciones en canales Na+, K+, Ca2+ (SCN1A, KCNQ2/3)" : language === "fr" ? "Mutations canaux Na+, K+, Ca2+ (SCN1A, KCNQ2/3)" : "Na+, K+, Ca2+ channel mutations (SCN1A, KCNQ2/3)"}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Riesgo 2-4x mayor si familiares afectados" : language === "fr" ? "Risque 2-4x plus élevé si famille affectée" : "2-4x higher risk if family affected"}</li>
                  <li>• <strong>{language === "es" ? "Malformaciones corticales:" : language === "fr" ? "Malformations corticales:" : "Cortical malformations:"}</strong> Displasia focal, heterotopias</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Adquiridos" :
                   language === "fr" ? "Facteurs Acquis" :
                   "Acquired Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Trauma craneal:" : language === "fr" ? "Traumatisme crânien:" : "Head trauma:"}</strong> {language === "es" ? "Riesgo proporcional a severidad. PTE temprana vs tardía" : language === "fr" ? "Risque proportionnel à sévérité. ETP précoce vs tardive" : "Risk proportional to severity. Early vs late PTE"}</li>
                  <li>• <strong>{language === "es" ? "ACV:" : language === "fr" ? "AVC:" : "Stroke:"}</strong> {language === "es" ? "5-15% desarrolla epilepsia. Mayor riesgo con hemorragia" : language === "fr" ? "5-15% développe épilepsie. Risque plus élevé avec hémorragie" : "5-15% develop epilepsy. Higher risk with hemorrhage"}</li>
                  <li>• <strong>{language === "es" ? "Infecciones SNC:" : language === "fr" ? "Infections SNC:" : "CNS infections:"}</strong> {language === "es" ? "Encefalitis, meningitis, neurocisticercosis, malaria cerebral" : language === "fr" ? "Encéphalite, méningite, neurocysticercose, malaria cérébrale" : "Encephalitis, meningitis, neurocysticercosis, cerebral malaria"}</li>
                  <li>• <strong>{language === "es" ? "Tumores cerebrales:" : language === "fr" ? "Tumeurs cérébrales:" : "Brain tumors:"}</strong> {language === "es" ? "30-90% según tipo y localización" : language === "fr" ? "30-90% selon type et localisation" : "30-90% depending on type and location"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores EEG" :
                   language === "fr" ? "Biomarqueurs EEG" :
                   "EEG Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Actividad interictal:" : language === "fr" ? "Activité intercritique:" : "Interictal activity:"}</strong> {language === "es" ? "Espigas, ondas agudas, complejos espiga-onda" : language === "fr" ? "Pointes, ondes aiguës, complexes pointe-onde" : "Spikes, sharp waves, spike-wave complexes"}</li>
                  <li>• <strong>{language === "es" ? "Patrones ictales:" : language === "fr" ? "Patterns ictaux:" : "Ictal patterns:"}</strong> {language === "es" ? "Ritmos theta/delta, actividad beta, supresión" : language === "fr" ? "Rythmes theta/delta, activité bêta, suppression" : "Theta/delta rhythms, beta activity, suppression"}</li>
                  <li>• <strong>{language === "es" ? "Análisis espectral:" : language === "fr" ? "Analyse spectrale:" : "Spectral analysis:"}</strong> {language === "es" ? "Potencia, coherencia, conectividad funcional" : language === "fr" ? "Puissance, cohérence, connectivité fonctionnelle" : "Power, coherence, functional connectivity"}</li>
                  <li>• <strong>HFOs:</strong> {language === "es" ? "Oscilaciones de alta frecuencia (80-500 Hz)" : language === "fr" ? "Oscillations haute fréquence (80-500 Hz)" : "High frequency oscillations (80-500 Hz)"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'CNN + BiLSTM' : 
                 language === 'fr' ? 'CNN + BiLSTM' : 
                 'CNN + BiLSTM'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Arquitectura híbrida CNN-BiLSTM para predecir convulsiones con procesamiento de wavelet, spectral entropy y características temporales con sensibilidad del 95.2%' :
                 language === 'fr' ? 'Architecture hybride CNN-BiLSTM pour prédire les crises avec traitement de wavelets, entropie spectrale et caractéristiques temporelles avec sensibilité de 95.2%' :
                 'Hybrid CNN-BiLSTM architecture to predict seizures with wavelet processing, spectral entropy and temporal features with 95.2% sensitivity'}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">95.2% Sensibilidad</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis EEG' : 
                 language === 'fr' ? 'Analyse EEG' : 
                 'EEG Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'LSTM para detectar convulsiones en EEG multicanal con aprendizaje profundo sobre series temporales, análisis de conectividad y detección de patrones ictales precoces' :
                 language === 'fr' ? 'LSTM pour détecter les crises dans EEG multicanal avec apprentissage profond sur séries temporelles, analyse de connectivité et détection de patterns ictaux précoces' :
                 'LSTM to detect seizures in multichannel EEG with deep learning on time series, connectivity analysis and early ictal pattern detection'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Detección Temprana</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Datos Multimodales' : 
                 language === 'fr' ? 'Données Multimodales' : 
                 'Multimodal Data'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Predicción multivariable integrando EEG de wearables, parámetros fisiológicos, historial clínico y ML supervisado con modelos ensemble para mayor robustez' :
                 language === 'fr' ? 'Prédiction multivariable intégrant EEG de wearables, paramètres physiologiques, historique clinique et ML supervisé avec modèles ensemble pour plus de robustesse' :
                 'Multivariate prediction integrating wearable EEG, physiological parameters, clinical history and supervised ML with ensemble models for enhanced robustness'}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">Enfoque Holístico</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-indigo-600" />
              {language === "es" ? "Guías de Manejo de Epilepsia" :
               language === "fr" ? "Guides de Gestion de l'Épilepsie" :
               "Epilepsy Management Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Tratamiento Farmacológico" :
                   language === "fr" ? "Traitement Pharmacologique" :
                   "Pharmacological Treatment"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Crisis focales:" : language === "fr" ? "Crises focales:" : "Focal seizures:"}</strong> {language === "es" ? "Levetiracetam, carbamazepina, oxcarbazepina, lamotrigina, lacosamida como primera línea" : language === "fr" ? "Lévétiracétam, carbamazépine, oxcarbazépine, lamotrigine, lacosamide en première ligne" : "Levetiracetam, carbamazepine, oxcarbazepine, lamotrigine, lacosamide as first line"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Crisis generalizadas:" : language === "fr" ? "Crises généralisées:" : "Generalized seizures:"}</strong> {language === "es" ? "Valproato, levetiracetam, lamotrigina. Evitar carbamazepina en ausencias" : language === "fr" ? "Valproate, lévétiracétam, lamotrigine. Éviter carbamazépine dans absences" : "Valproate, levetiracetam, lamotrigine. Avoid carbamazepine in absence seizures"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Epilepsia refractaria:" : language === "fr" ? "Épilepsie réfractaire:" : "Refractory epilepsy:"}</strong> {language === "es" ? "Combinaciones: LEV+LTG, VPA+LTG, CBZ+CLB. Considerar cirugía si foco definido" : language === "fr" ? "Combinaisons: LEV+LTG, VPA+LTG, CBZ+CLB. Considérer chirurgie si foyer défini" : "Combinations: LEV+LTG, VPA+LTG, CBZ+CLB. Consider surgery if focus defined"}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
                  {language === "es" ? "Tratamientos Avanzados" :
                   language === "fr" ? "Traitements Avancés" :
                   "Advanced Treatments"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Cirugía resectiva:" : language === "fr" ? "Chirurgie résective:" : "Resective surgery:"}</strong> {language === "es" ? "Lobectomía temporal, lesionectomía. 60-80% libre de crisis a 2 años" : language === "fr" ? "Lobectomie temporale, lésionectomie. 60-80% libre de crises à 2 ans" : "Temporal lobectomy, lesionectomy. 60-80% seizure-free at 2 years"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Estimulación:" : language === "fr" ? "Stimulation:" : "Stimulation:"}</strong> {language === "es" ? "VNS, DBS talámico, estimulación responsiva (RNS). 50% reducción crisis" : language === "fr" ? "VNS, DBS thalamique, stimulation responsive (RNS). 50% réduction crises" : "VNS, thalamic DBS, responsive stimulation (RNS). 50% seizure reduction"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Dieta cetogénica:" : language === "fr" ? "Régime cétogène:" : "Ketogenic diet:"}</strong> {language === "es" ? "Especialmente en niños. 50% reducción en 50-60% pacientes" : language === "fr" ? "Surtout chez enfants. 50% réduction chez 50-60% patients" : "Especially in children. 50% reduction in 50-60% patients"}
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
              {language === "es" ? "Epidemiología Global de la Epilepsia" :
               language === "fr" ? "Épidémiologie Mondiale de l'Épilepsie" :
               "Global Epilepsy Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">50M</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Personas afectadas globalmente" :
                   language === "fr" ? "Personnes affectées mondialement" :
                   "People affected globally"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Controlable con medicación" :
                   language === "fr" ? "Contrôlable avec médication" :
                   "Controllable with medication"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">0.5-1%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Prevalencia poblacional" :
                   language === "fr" ? "Prévalence populationnelle" :
                   "Population prevalence"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "En países de bajos ingresos" :
                   language === "fr" ? "Dans pays à faibles revenus" :
                   "In low-income countries"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-indigo-50/30 to-purple-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Predicción Preventiva' : 
                 language === 'fr' ? 'Prédiction Préventive' : 
                 'Preventive Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 4+ modelos especializados en epilepsia utilizan análisis EEG avanzado y aprendizaje profundo para predecir convulsiones antes de que ocurran.' :
                 language === 'fr' ? 'Nos 4+ modèles spécialisés en épilepsie utilisent l\'analyse EEG avancée et l\'apprentissage profond pour prédire les crises avant qu\'elles ne surviennent.' :
                 'Our 4+ specialized epilepsy models use advanced EEG analysis and deep learning to predict seizures before they occur.'}
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-lg px-8 py-3">
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

export default Epilepsy;
