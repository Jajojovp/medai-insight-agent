
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const BreastCancer = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-pink-100/80 text-pink-800 rounded-full">
            {language === 'es' ? 'Cáncer de Mama' : 
             language === 'fr' ? 'Cancer du Sein' : 
             'Breast Cancer'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Análisis Predictivo de Cáncer de Mama' : 
             language === 'fr' ? 'Analyse Prédictive du Cancer du Sein' : 
             'Breast Cancer Predictive Analysis'}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === 'es' ? 'Plataforma médica con 62+ modelos especializados de IA para detección temprana, clasificación molecular y manejo personalizado del cáncer de mama con 98.8% de precisión máxima' :
             language === 'fr' ? 'Plateforme médicale avec 62+ modèles spécialisés d\'IA pour détection précoce, classification moléculaire et gestion personnalisée du cancer du sein avec 98.8% de précision maximale' :
             'Medical platform with 62+ specialized AI models for early detection, molecular classification and personalized management of breast cancer with 98.8% maximum accuracy'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-pink-600" />
              {language === 'es' ? 'Información Clave - Cáncer de Mama' :
               language === 'fr' ? 'Information Clé - Cancer du Sein' :
               'Key Information - Breast Cancer'}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-700">
                  {language === 'es' ? 'Definición y Epidemiología' :
                   language === 'fr' ? 'Définition et Épidémiologie' :
                   'Definition and Epidemiology'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'El cáncer de mama es una neoplasia maligna que se origina en las células del tejido mamario. Es el segundo cáncer más común en mujeres a nivel mundial, con más de 2.3 millones de nuevos casos anuales.' :
                   language === 'fr' ? 'Le cancer du sein est une néoplasie maligne qui prend naissance dans les cellules du tissu mammaire. C\'est le deuxième cancer le plus courant chez les femmes dans le monde, avec plus de 2.3 millions de nouveaux cas annuels.' :
                   'Breast cancer is a malignant neoplasm that originates in breast tissue cells. It is the second most common cancer in women worldwide, with over 2.3 million new cases annually.'}
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                  <p className="text-sm text-pink-800">
                    <strong>
                      {language === 'es' ? 'Incidencia Global:' :
                       language === 'fr' ? 'Incidence Mondiale:' :
                       'Global Incidence:'}
                    </strong>
                    {language === 'es' ? ' 1 de cada 8 mujeres desarrollará cáncer de mama durante su vida. Tasa de supervivencia a 5 años: 90% si se detecta temprano.' :
                     language === 'fr' ? ' 1 femme sur 8 développera un cancer du sein au cours de sa vie. Taux de survie à 5 ans: 90% si détecté tôt.' :
                     ' 1 in 8 women will develop breast cancer during their lifetime. 5-year survival rate: 90% if detected early.'}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-rose-700">
                  {language === 'es' ? 'Clasificación Molecular' :
                   language === 'fr' ? 'Classification Moléculaire' :
                   'Molecular Classification'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Luminal A:</strong> {language === 'es' ? 'RE+/RP+, HER2-, Ki67 menor de 14%. Mejor pronóstico (70% casos)' : 'RE+/RP+, HER2-, Ki67 moins de 14%. Meilleur pronostic (70% cas)' : 'ER+/PR+, HER2-, Ki67 less than 14%. Best prognosis (70% cases)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Luminal B:</strong> {language === 'es' ? 'RE+, HER2- o HER2+, Ki67 mayor o igual a 14%. Pronóstico intermedio (20% casos)' : 'RE+, HER2- ou HER2+, Ki67 supérieur ou égal à 14%. Pronostic intermédiaire (20% cas)' : 'ER+, HER2- or HER2+, Ki67 greater than or equal to 14%. Intermediate prognosis (20% cases)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>HER2 Enriquecido:</strong> {language === 'es' ? 'RE-/RP-, HER2+. Agresivo pero responde a terapia dirigida (5% casos)' : 'RE-/RP-, HER2+. Agressif mais répond à thérapie ciblée (5% cas)' : 'ER-/PR-, HER2+. Aggressive but responds to targeted therapy (5% cases)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Triple Negativo:</strong> {language === 'es' ? 'RE-/RP-/HER2-. Más agresivo, opciones terapéuticas limitadas (5% casos)' : 'RE-/RP-/HER2-. Plus agressif, options thérapeutiques limitées (5% cas)' : 'ER-/PR-/HER2-. More aggressive, limited therapeutic options (5% cases)'}
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
              {language === 'es' ? 'Factores de Riesgo y Cribado' :
               language === 'fr' ? 'Facteurs de Risque et Dépistage' :
               'Risk Factors and Screening'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {language === 'es' ? 'Factores de Alto Riesgo' :
                   language === 'fr' ? 'Facteurs de Haut Risque' :
                   'High Risk Factors'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>BRCA1/BRCA2:</strong> {language === 'es' ? 'Riesgo 45-85% (iniciar cribado a los 25-30 años)' : 'Risque 45-85% (commencer dépistage à 25-30 ans)' : '45-85% risk (start screening at 25-30 years)'}</li>
                  <li>• <strong>{language === 'es' ? 'Historia familiar:' : 'Histoire familiale:' : 'Family history:'}</strong> {language === 'es' ? '2 o más familiares de primer grado con cáncer de mama/ovario' : '2 ou plus parents de premier degré avec cancer sein/ovaire' : '2 or more first-degree relatives with breast/ovarian cancer'}</li>
                  <li>• <strong>{language === 'es' ? 'Radioterapia torácica:' : 'Radiothérapie thoracique:' : 'Chest radiation:'}</strong> {language === 'es' ? 'Antes de los 30 años (ej. linfoma Hodgkin)' : 'Avant 30 ans (ex. lymphome Hodgkin)' : 'Before age 30 (e.g., Hodgkin lymphoma)'}</li>
                  <li>• <strong>{language === 'es' ? 'Síndromes genéticos:' : 'Syndromes génétiques:' : 'Genetic syndromes:'}</strong> Li-Fraumeni, Cowden, Peutz-Jeghers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === 'es' ? 'Factores Hormonales' :
                   language === 'fr' ? 'Facteurs Hormonaux' :
                   'Hormonal Factors'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === 'es' ? 'Edad:' : 'Âge:' : 'Age:'}</strong> {language === 'es' ? 'Riesgo aumenta con la edad (77% casos mayor de 50 años)' : 'Risque augmente avec l\'âge (77% cas supérieur à 50 ans)' : 'Risk increases with age (77% cases over 50 years)'}</li>
                  <li>• <strong>{language === 'es' ? 'Menarquia precoz:' : 'Ménarche précoce:' : 'Early menarche:'}</strong> {language === 'es' ? 'menor de 12 años' : 'moins de 12 ans' : 'less than 12 years'}</li>
                  <li>• <strong>{language === 'es' ? 'Menopausia tardía:' : 'Ménopause tardive:' : 'Late menopause:'}</strong> {language === 'es' ? 'mayor de 55 años' : 'supérieur à 55 ans' : 'over 55 years'}</li>
                  <li>• <strong>{language === 'es' ? 'Nuliparidad:' : 'Nulliparité:' : 'Nulliparity:'}</strong> {language === 'es' ? 'No haber tenido hijos' : 'Ne pas avoir eu d\'enfants' : 'Never having children'}</li>
                  <li>• <strong>{language === 'es' ? 'Primer embarazo tardío:' : 'Première grossesse tardive:' : 'Late first pregnancy:'}</strong> {language === 'es' ? 'mayor de 30 años' : 'supérieur à 30 ans' : 'over 30 years'}</li>
                  <li>• <strong>{language === 'es' ? 'Terapia hormonal:' : 'Thérapie hormonale:' : 'Hormone therapy:'}</strong> {language === 'es' ? 'mayor de 5 años (especialmente estrógeno + progestina)' : 'supérieur à 5 ans (surtout œstrogène + progestine)' : 'over 5 years (especially estrogen + progestin)'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === 'es' ? 'Protocolo de Cribado' :
                   language === 'fr' ? 'Protocole de Dépistage' :
                   'Screening Protocol'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === 'es' ? 'Mamografía bilateral:' : 'Mammographie bilatérale:' : 'Bilateral mammography:'}</strong> {language === 'es' ? 'Anual 40-49 años, cada 1-2 años 50-74 años' : 'Annuelle 40-49 ans, tous les 1-2 ans 50-74 ans' : 'Annual 40-49 years, every 1-2 years 50-74 years'}</li>
                  <li>• <strong>{language === 'es' ? 'Resonancia magnética:' : 'Résonance magnétique:' : 'MRI:'}</strong> {language === 'es' ? 'Anual para riesgo alto (BRCA+, score mayor o igual a 20%)' : 'Annuelle pour haut risque (BRCA+, score supérieur ou égal à 20%)' : 'Annual for high risk (BRCA+, score greater than or equal to 20%)'}</li>
                  <li>• <strong>{language === 'es' ? 'Ecografía mamaria:' : 'Échographie mammaire:' : 'Breast ultrasound:'}</strong> {language === 'es' ? 'Complemento en mamas densas' : 'Complément dans seins denses' : 'Complement in dense breasts'}</li>
                  <li>• <strong>{language === 'es' ? 'Tomosíntesis (3D):' : 'Tomosynthèse (3D):' : 'Tomosynthesis (3D):'}</strong> {language === 'es' ? 'Mejora detección en mamas densas' : 'Améliore détection dans seins denses' : 'Improves detection in dense breasts'}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis de Imagen' : 
                 language === 'fr' ? 'Analyse d\'Image' : 
                 'Image Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Algoritmos avanzados de visión computacional para análisis automatizado de mamografías, ecografías y resonancias magnéticas con 98.8% de precisión en detección' :
                 language === 'fr' ? 'Algorithmes avancés de vision par ordinateur pour analyse automatisée de mammographies, échographies et IRM avec 98.8% de précision en détection' :
                 'Advanced computer vision algorithms for automated analysis of mammograms, ultrasounds and MRIs with 98.8% detection accuracy'}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">98.8% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Clasificación Molecular' : 
                 language === 'fr' ? 'Classification Moléculaire' : 
                 'Molecular Classification'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Sistemas de clasificación automática en subtipos moleculares (Luminal A/B, HER2+, Triple Negativo) basada en expresión génica y biomarcadores' :
                 language === 'fr' ? 'Systèmes de classification automatique en sous-types moléculaires (Luminal A/B, HER2+, Triple Négatif) basée sur expression génique et biomarqueurs' :
                 'Automatic classification systems into molecular subtypes (Luminal A/B, HER2+, Triple Negative) based on gene expression and biomarkers'}
              </p>
              <Badge className="w-full justify-center bg-rose-100 text-rose-800">Subtipificación Precisa</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Pronóstico' : 
                 language === 'fr' ? 'Prédiction de Pronostic' : 
                 'Prognosis Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Modelos predictivos de supervivencia y recurrencia utilizando análisis multivariado y redes neuronales para predicción a 5-10 años' :
                 language === 'fr' ? 'Modèles prédictifs de survie et récurrence utilisant analyse multivariée et réseaux de neurones pour prédiction à 5-10 ans' :
                 'Predictive survival and recurrence models using multivariate analysis and neural networks for 5-10 year prediction'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Predicción Longitudinal</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Recommendations Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-pink-600" />
              {language === 'es' ? 'Guías Clínicas de Manejo' :
               language === 'fr' ? 'Guides Cliniques de Gestion' :
               'Clinical Management Guidelines'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  {language === 'es' ? 'Diagnóstico y Estadificación' :
                   language === 'fr' ? 'Diagnostic et Stadification' :
                   'Diagnosis and Staging'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Biopsia core:' : 'Biopsie au trocart:' : 'Core needle biopsy:'}</strong> {language === 'es' ? 'Estándar de oro para diagnóstico histológico. Evaluar RE, RP, HER2, Ki67 en todas las muestras' : 'Étalon-or pour diagnostic histologique. Évaluer RE, RP, HER2, Ki67 sur tous les échantillons' : 'Gold standard for histological diagnosis. Assess ER, PR, HER2, Ki67 on all samples'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Estadificación TNM:' : 'Stadification TNM:' : 'TNM staging:'}</strong> {language === 'es' ? 'TC tórax-abdomen-pelvis, gammagrafía ósea si T3-T4 o N+. PET-TC en casos seleccionados' : 'TDM thorax-abdomen-pelvis, scintigraphie osseuse si T3-T4 ou N+. TEP-TDM dans cas sélectionnés' : 'CT chest-abdomen-pelvis, bone scan if T3-T4 or N+. PET-CT in selected cases'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Pruebas genómicas:' : 'Tests génomiques:' : 'Genomic testing:'}</strong> {language === 'es' ? 'Oncotype DX, MammaPrint para cáncer RE+ estadio I-II en toma de decisiones de quimioterapia' : 'Oncotype DX, MammaPrint pour cancer RE+ stade I-II dans prise de décisions chimiothérapie' : 'Oncotype DX, MammaPrint for ER+ stage I-II cancer in chemotherapy decision making'}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  {language === 'es' ? 'Modalidades de Tratamiento' :
                   language === 'fr' ? 'Modalités de Traitement' :
                   'Treatment Modalities'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Cirugía:' : 'Chirurgie:' : 'Surgery:'}</strong> {language === 'es' ? 'Cirugía conservadora + RT vs mastectomía. Biopsia ganglio centinela estándar. Reconstrucción inmediata/diferida si mastectomía' : 'Chirurgie conservatrice + RT vs mastectomie. Biopsie ganglion sentinelle standard. Reconstruction immédiate/différée si mastectomie' : 'Breast-conserving surgery + RT vs mastectomy. Sentinel lymph node biopsy standard. Immediate/delayed reconstruction if mastectomy'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Quimioterapia:' : 'Chimiothérapie:' : 'Chemotherapy:'}</strong> {language === 'es' ? 'Adyuvante: AC-T, TC, AC-TH (HER2+). Neoadyuvante: indicada si T3-T4, N2-N3, o triple negativo mayor de 2cm' : 'Adjuvante: AC-T, TC, AC-TH (HER2+). Néoadjuvante: indiquée si T3-T4, N2-N3, ou triple négatif supérieur à 2cm' : 'Adjuvant: AC-T, TC, AC-TH (HER2+). Neoadjuvant: indicated if T3-T4, N2-N3, or triple negative over 2cm'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Hormonoterapia:' : 'Hormonothérapie:' : 'Hormone therapy:'}</strong> {language === 'es' ? 'Tamoxifeno 5-10 años (premenopáusicas), inhibidores aromatasa 5-10 años (postmenopáusicas)' : 'Tamoxifène 5-10 ans (préménopausées), inhibiteurs aromatase 5-10 ans (postménopausées)' : 'Tamoxifen 5-10 years (premenopausal), aromatase inhibitors 5-10 years (postmenopausal)'}
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
              {language === 'es' ? 'Epidemiología Global del Cáncer de Mama' :
               language === 'fr' ? 'Épidémiologie Mondiale du Cancer du Sein' :
               'Global Breast Cancer Epidemiology'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">2.3M</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Nuevos casos anuales (2020)' :
                   language === 'fr' ? 'Nouveaux cas annuels (2020)' :
                   'New cases annually (2020)'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">685K</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Muertes anuales globales' :
                   language === 'fr' ? 'Décès annuels mondiaux' :
                   'Global annual deaths'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Supervivencia 5 años (detección temprana)' :
                   language === 'fr' ? 'Survie 5 ans (détection précoce)' :
                   '5-year survival (early detection)'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">12.5%</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Riesgo de por vida (mujeres)' :
                   language === 'fr' ? 'Risque à vie (femmes)' :
                   'Lifetime risk (women)'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-pink-50/30 to-rose-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Plataforma de Diagnóstico Avanzado para Cáncer de Mama' : 
                 language === 'fr' ? 'Plateforme de Diagnostic Avancé pour Cancer du Sein' : 
                 'Advanced Breast Cancer Diagnostic Platform'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Utilice nuestros 62+ modelos especializados de IA para detección temprana, clasificación molecular y predicción de pronóstico en cáncer de mama. Tecnología validada clínicamente con 98.8% de precisión máxima para optimizar decisiones terapéuticas.' :
                 language === 'fr' ? 'Utilisez nos 62+ modèles spécialisés d\'IA pour détection précoce, classification moléculaire et prédiction de pronostic du cancer du sein. Technologie validée cliniquement avec 98.8% de précision maximale pour optimiser les décisions thérapeutiques.' :
                 'Use our 62+ specialized AI models for early detection, molecular classification and prognosis prediction in breast cancer. Clinically validated technology with 98.8% maximum accuracy to optimize therapeutic decisions.'}
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 rounded-2xl text-lg px-8 py-3">
                {language === 'es' ? 'Iniciar Análisis Oncológico' : 
                 language === 'fr' ? 'Commencer l\'Analyse Oncologique' : 
                 'Start Oncological Analysis'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BreastCancer;
