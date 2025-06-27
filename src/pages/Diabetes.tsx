
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Diabetes = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full">
            {language === 'es' ? 'Diabetes Tipo 2' : 
             language === 'fr' ? 'Diabète Type 2' : 
             'Type 2 Diabetes'}
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Análisis Predictivo de Diabetes Tipo 2' : 
             language === 'fr' ? 'Analyse Prédictive du Diabète Type 2' : 
             'Type 2 Diabetes Predictive Analysis'}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === 'es' ? 'Plataforma médica con 62+ modelos especializados de machine learning para detección temprana y manejo clínico de diabetes tipo 2 con 98.8% de precisión máxima' :
             language === 'fr' ? 'Plateforme médicale avec 62+ modèles spécialisés de machine learning pour détection précoce et gestion clinique du diabète type 2 avec 98.8% de précision maximale' :
             'Medical platform with 62+ specialized machine learning models for early detection and clinical management of type 2 diabetes with 98.8% maximum accuracy'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === 'es' ? 'Información Clave - Diabetes Tipo 2' :
               language === 'fr' ? 'Information Clé - Diabète Type 2' :
               'Key Information - Type 2 Diabetes'}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {language === 'es' ? 'Definición Médica' :
                   language === 'fr' ? 'Définition Médicale' :
                   'Medical Definition'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'La diabetes tipo 2 es una enfermedad crónica que afecta la forma en que el cuerpo procesa el azúcar (glucosa) en la sangre. Se caracteriza por resistencia a la insulina o producción insuficiente de insulina por parte del páncreas.' :
                   language === 'fr' ? 'Le diabète type 2 est une maladie chronique qui affecte la façon dont le corps traite le sucre (glucose) dans le sang. Il se caractérise par une résistance à l\'insuline ou une production insuffisante d\'insuline par le pancréas.' :
                   'Type 2 diabetes is a chronic disease that affects how the body processes sugar (glucose) in the blood. It is characterized by insulin resistance or insufficient insulin production by the pancreas.'}
                </p>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm text-red-800">
                    <strong>
                      {language === 'es' ? 'Impacto Global:' :
                       language === 'fr' ? 'Impact Mondial:' :
                       'Global Impact:'}
                    </strong>
                    {language === 'es' ? ' Afecta a más de 537 millones de adultos mundialmente y es la séptima causa principal de muerte.' :
                     language === 'fr' ? ' Affecte plus de 537 millions d\'adultes mondialement et est la septième cause principale de décès.' :
                     ' Affects more than 537 million adults worldwide and is the seventh leading cause of death.'}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  {language === 'es' ? 'Fisiopatología' :
                   language === 'fr' ? 'Physiopathologie' :
                   'Pathophysiology'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    {language === 'es' ? 'Resistencia periférica a la insulina en músculos y tejido adiposo' :
                     language === 'fr' ? 'Résistance périphérique à l\'insuline dans les muscles et le tissu adipeux' :
                     'Peripheral insulin resistance in muscles and adipose tissue'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    {language === 'es' ? 'Disfunción progresiva de células beta pancreáticas' :
                     language === 'fr' ? 'Dysfonction progressive des cellules bêta pancréatiques' :
                     'Progressive dysfunction of pancreatic beta cells'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    {language === 'es' ? 'Aumento de la producción hepática de glucosa' :
                     language === 'fr' ? 'Augmentation de la production hépatique de glucose' :
                     'Increased hepatic glucose production'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    {language === 'es' ? 'Alteraciones en la secreción de incretinas (GLP-1, GIP)' :
                     language === 'fr' ? 'Altérations dans la sécrétion d\'incrétines (GLP-1, GIP)' :
                     'Alterations in incretin secretion (GLP-1, GIP)'}
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
              {language === 'es' ? 'Factores de Riesgo y Detección Temprana' :
               language === 'fr' ? 'Facteurs de Risque et Détection Précoce' :
               'Risk Factors and Early Detection'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {language === 'es' ? 'Factores No Modificables' :
                   language === 'fr' ? 'Facteurs Non Modifiables' :
                   'Non-Modifiable Factors'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'es' ? 'Edad mayor o igual a 45 años' : 'Âge supérieur ou égal à 45 ans' : 'Age greater than or equal to 45 years'}</li>
                  <li>• {language === 'es' ? 'Historia familiar de diabetes' : 'Histoire familiale de diabète' : 'Family history of diabetes'}</li>
                  <li>• {language === 'es' ? 'Etnicidad (hispanos, afroamericanos, asiáticos)' : 'Ethnicité (hispaniques, afro-américains, asiatiques)' : 'Ethnicity (Hispanic, African American, Asian)'}</li>
                  <li>• {language === 'es' ? 'Diabetes gestacional previa' : 'Diabète gestationnel antérieur' : 'Previous gestational diabetes'}</li>
                  <li>• {language === 'es' ? 'Síndrome de ovario poliquístico' : 'Syndrome des ovaires polykystiques' : 'Polycystic ovary syndrome'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === 'es' ? 'Factores Modificables' :
                   language === 'fr' ? 'Facteurs Modifiables' :
                   'Modifiable Factors'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'es' ? 'IMC mayor o igual a 25 kg/m² (mayor o igual a 23 en asiáticos)' : 'IMC supérieur ou égal à 25 kg/m² (supérieur ou égal à 23 chez les asiatiques)' : 'BMI greater than or equal to 25 kg/m² (greater than or equal to 23 in Asians)'}</li>
                  <li>• {language === 'es' ? 'Sedentarismo' : 'Sédentarité' : 'Physical inactivity'}</li>
                  <li>• {language === 'es' ? 'Hipertensión arterial (mayor o igual a 140/90 mmHg)' : 'Hypertension artérielle (supérieur ou égal à 140/90 mmHg)' : 'Hypertension (greater than or equal to 140/90 mmHg)'}</li>
                  <li>• {language === 'es' ? 'Dislipidemia (HDL menor de 35 mg/dL, TG mayor de 250 mg/dL)' : 'Dyslipidémie (HDL moins de 35 mg/dL, TG supérieur à 250 mg/dL)' : 'Dyslipidemia (HDL less than 35 mg/dL, TG greater than 250 mg/dL)'}</li>
                  <li>• {language === 'es' ? 'Dieta rica en azúcares refinados' : 'Régime riche en sucres raffinés' : 'Diet high in refined sugars'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === 'es' ? 'Criterios de Cribado' :
                   language === 'fr' ? 'Critères de Dépistage' :
                   'Screening Criteria'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'es' ? 'Glucosa en ayunas mayor o igual a 126 mg/dL' : 'Glucose à jeun supérieur ou égal à 126 mg/dL' : 'Fasting glucose greater than or equal to 126 mg/dL'}</li>
                  <li>• {language === 'es' ? 'HbA1c mayor o igual a 6.5%' : 'HbA1c supérieur ou égal à 6.5%' : 'HbA1c greater than or equal to 6.5%'}</li>
                  <li>• {language === 'es' ? 'Glucosa 2h post-OGTT mayor o igual a 200 mg/dL' : 'Glucose 2h post-OGTT supérieur ou égal à 200 mg/dL' : '2h post-OGTT glucose greater than or equal to 200 mg/dL'}</li>
                  <li>• {language === 'es' ? 'Glucosa aleatoria mayor o igual a 200 mg/dL + síntomas' : 'Glucose aléatoire supérieur ou égal à 200 mg/dL + symptômes' : 'Random glucose greater than or equal to 200 mg/dL + symptoms'}</li>
                  <li>• {language === 'es' ? 'Cribado cada 3 años si normal' : 'Dépistage tous les 3 ans si normal' : 'Screen every 3 years if normal'}</li>
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
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Modelos de Clasificación' : 
                 language === 'fr' ? 'Modèles de Classification' : 
                 'Classification Models'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Random Forest, XGBoost y redes neuronales profundas con precisión hasta 98.8% para clasificación binaria usando biomarcadores clínicos y genéticos' :
                 language === 'fr' ? 'Random Forest, XGBoost et réseaux de neurones profonds avec précision jusqu\'à 98.8% pour classification binaire utilisant des biomarqueurs cliniques et génétiques' :
                 'Random Forest, XGBoost and deep neural networks with accuracy up to 98.8% for binary classification using clinical and genetic biomarkers'}
              </p>
              <Badge className="w-full justify-center bg-blue-100 text-blue-800">98.8% Precisión Máxima</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis de Riesgo' : 
                 language === 'fr' ? 'Analyse de Risque' : 
                 'Risk Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Algoritmos de ensemble y deep learning para estratificación de riesgo multifactorial basada en 47+ variables clínicas, genéticas y de estilo de vida' :
                 language === 'fr' ? 'Algorithmes d\'ensemble et deep learning pour stratification du risque multifactoriel basée sur 47+ variables cliniques, génétiques et de style de vie' :
                 'Ensemble algorithms and deep learning for multifactorial risk stratification based on 47+ clinical, genetic and lifestyle variables'}
              </p>
              <Badge className="w-full justify-center bg-green-100 text-green-800">Estratificación Avanzada</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Predicción de Progresión' : 
                 language === 'fr' ? 'Prédiction de Progression' : 
                 'Progression Prediction'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Modelos LSTM, GRU y Transformer para predecir progresión de prediabetes a diabetes tipo 2 con ventana temporal de 5-10 años' :
                 language === 'fr' ? 'Modèles LSTM, GRU et Transformer pour prédire la progression du prédiabète au diabète type 2 avec fenêtre temporelle de 5-10 ans' :
                 'LSTM, GRU and Transformer models to predict progression from prediabetes to type 2 diabetes with 5-10 year time window'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Predicción Temporal</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Recommendations Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-blue-600" />
              {language === 'es' ? 'Recomendaciones Clínicas Basadas en Evidencia' :
               language === 'fr' ? 'Recommandations Cliniques Basées sur l\'Évidence' :
               'Evidence-Based Clinical Recommendations'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  {language === 'es' ? 'Monitoreo y Seguimiento' :
                   language === 'fr' ? 'Surveillance et Suivi' :
                   'Monitoring and Follow-up'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>HbA1c:</strong> {language === 'es' ? 'Cada 3 meses si HbA1c mayor de 7%, cada 6 meses si estable menor de 7%. Meta: menor de 7% (53 mmol/mol) en adultos sanos' : 'Tous les 3 mois si HbA1c supérieur à 7%, tous les 6 mois si stable inférieur à 7%. Objectif: inférieur à 7% (53 mmol/mol) chez adultes sains' : 'Every 3 months if HbA1c greater than 7%, every 6 months if stable less than 7%. Target: less than 7% (53 mmol/mol) in healthy adults'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Automonitoreo:' : 'Auto-surveillance:' : 'Self-monitoring:'}</strong> {language === 'es' ? 'CGM o glucómetros para pacientes en insulina. SMBG 1-2 veces/día en tratamiento oral' : 'CGM ou glucomètres pour patients sous insuline. SMBG 1-2 fois/jour en traitement oral' : 'CGM or glucometers for patients on insulin. SMBG 1-2 times/day on oral treatment'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Perfil lipídico:' : 'Profil lipidique:' : 'Lipid profile:'}</strong> {language === 'es' ? 'Anual si controlado, cada 3-6 meses si no controlado. Meta LDL menor de 100 mg/dL (menor de 70 si riesgo CV alto)' : 'Annuel si contrôlé, tous les 3-6 mois si non contrôlé. Objectif LDL inférieur à 100 mg/dL (inférieur à 70 si risque CV élevé)' : 'Annual if controlled, every 3-6 months if uncontrolled. LDL target less than 100 mg/dL (less than 70 if high CV risk)'}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  {language === 'es' ? 'Manejo Farmacológico' :
                   language === 'fr' ? 'Gestion Pharmacologique' :
                   'Pharmacological Management'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Primera línea:' : 'Première ligne:' : 'First line:'}</strong> {language === 'es' ? 'Metformina 500-2000 mg/día + cambios de estilo de vida. Contraindicada si eGFR menor de 30 mL/min/1.73m²' : 'Metformine 500-2000 mg/jour + changements de style de vie. Contre-indiquée si eGFR inférieur à 30 mL/min/1.73m²' : 'Metformin 500-2000 mg/day + lifestyle changes. Contraindicated if eGFR less than 30 mL/min/1.73m²'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Segunda línea:' : 'Deuxième ligne:' : 'Second line:'}</strong> {language === 'es' ? 'iSGLT2 (si enfermedad CV/renal), agonistas GLP-1 (si obesidad), sulfonilureas (si costo es factor)' : 'iSGLT2 (si maladie CV/rénale), agonistes GLP-1 (si obésité), sulfamides (si coût est facteur)' : 'SGLT2i (if CV/kidney disease), GLP-1 agonists (if obesity), sulfonylureas (if cost is factor)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Insulina:' : 'Insuline:' : 'Insulin:'}</strong> {language === 'es' ? 'Considerar si HbA1c mayor de 9%, síntomas de hiperglucemia severa, o falla a combinación oral tras 3-6 meses' : 'Considérer si HbA1c supérieur à 9%, symptômes d\'hyperglycémie sévère, ou échec à combinaison orale après 3-6 mois' : 'Consider if HbA1c greater than 9%, severe hyperglycemia symptoms, or failure of oral combination after 3-6 months'}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention of Complications */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Shield className="h-6 w-6 mr-2 text-orange-500" />
              {language === 'es' ? 'Prevención y Manejo de Complicaciones' :
               language === 'fr' ? 'Prévention et Gestion des Complications' :
               'Complication Prevention and Management'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">
                  {language === 'es' ? 'Retinopatía Diabética' :
                   language === 'fr' ? 'Rétinopathie Diabétique' :
                   'Diabetic Retinopathy'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {language === 'es' ? 'Examen oftalmológico anual con dilatación' : 'Examen ophtalmologique annuel avec dilatation' : 'Annual dilated eye exam'}</li>
                  <li>• {language === 'es' ? 'Más frecuente si retinopatía presente' : 'Plus fréquent si rétinopathie présente' : 'More frequent if retinopathy present'}</li>
                  <li>• {language === 'es' ? 'Control estricto de glucosa y PA' : 'Contrôle strict glucose et PA' : 'Strict glucose and BP control'}</li>
                  <li>• {language === 'es' ? 'Derivar a oftalmólogo si proliferativa' : 'Référer à ophtalmologue si proliférative' : 'Refer to ophthalmologist if proliferative'}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">
                  {language === 'es' ? 'Nefropatía Diabética' :
                   language === 'fr' ? 'Néphropathie Diabétique' :
                   'Diabetic Nephropathy'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {language === 'es' ? 'eGFR y albuminuria anual' : 'eGFR et albuminurie annuelle' : 'Annual eGFR and albuminuria'}</li>
                  <li>• {language === 'es' ? 'Meta PA menor de 130/80 mmHg' : 'Objectif PA inférieur à 130/80 mmHg' : 'BP target less than 130/80 mmHg'}</li>
                  <li>• {language === 'es' ? 'IECA/ARA II si proteinuria' : 'IECA/ARA II si protéinurie' : 'ACEi/ARB if proteinuria'}</li>
                  <li>• {language === 'es' ? 'iSGLT2 para protección renal' : 'iSGLT2 pour protection rénale' : 'SGLT2i for renal protection'}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">
                  {language === 'es' ? 'Neuropatía Diabética' :
                   language === 'fr' ? 'Neuropathie Diabétique' :
                   'Diabetic Neuropathy'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• {language === 'es' ? 'Examen de pies cada visita' : 'Examen des pieds à chaque visite' : 'Foot exam every visit'}</li>
                  <li>• {language === 'es' ? 'Monofilamento 10g anual' : 'Monofilament 10g annuel' : 'Annual 10g monofilament'}</li>
                  <li>• {language === 'es' ? 'Educación sobre cuidado de pies' : 'Éducation sur soins des pieds' : 'Foot care education'}</li>
                  <li>• {language === 'es' ? 'Derivar podólogo si deformidades' : 'Référer podologue si déformités' : 'Refer podiatrist if deformities'}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lifestyle Management */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Brain className="h-6 w-6 mr-2 text-purple-600" />
              {language === 'es' ? 'Manejo Integral del Estilo de Vida' :
               language === 'fr' ? 'Gestion Intégrale du Style de Vie' :
               'Comprehensive Lifestyle Management'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  {language === 'es' ? 'Intervención Nutricional' :
                   language === 'fr' ? 'Intervention Nutritionnelle' :
                   'Nutritional Intervention'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Patrón alimentario:' : 'Modèle alimentaire:' : 'Dietary pattern:'}</strong> {language === 'es' ? 'Dieta mediterránea, DASH o baja en carbohidratos (según preferencia del paciente)' : 'Régime méditerranéen, DASH ou faible en glucides (selon préférence du patient)' : 'Mediterranean, DASH or low-carb diet (based on patient preference)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Control de porciones:' : 'Contrôle des portions:' : 'Portion control:'}</strong> {language === 'es' ? '45-65g carbohidratos por comida (método del plato: 1/2 vegetales, 1/4 proteína, 1/4 carbohidratos)' : '45-65g glucides par repas (méthode de l\'assiette: 1/2 légumes, 1/4 protéine, 1/4 glucides)' : '45-65g carbs per meal (plate method: 1/2 vegetables, 1/4 protein, 1/4 carbs)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Pérdida de peso:' : 'Perte de poids:' : 'Weight loss:'}</strong> {language === 'es' ? '5-10% del peso corporal inicial (déficit calórico 500-750 kcal/día)' : '5-10% du poids corporel initial (déficit calorique 500-750 kcal/jour)' : '5-10% of initial body weight (caloric deficit 500-750 kcal/day)'}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {language === 'es' ? 'Prescripción de Ejercicio' :
                   language === 'fr' ? 'Prescription d\'Exercice' :
                   'Exercise Prescription'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Ejercicio aeróbico:' : 'Exercice aérobique:' : 'Aerobic exercise:'}</strong> {language === 'es' ? 'mayor o igual a 150 min/semana intensidad moderada (50-70% FC máx) o mayor o igual a 75 min intensidad vigorosa' : 'supérieur ou égal à 150 min/semaine intensité modérée (50-70% FC max) ou supérieur ou égal à 75 min intensité vigoureuse' : 'greater than or equal to 150 min/week moderate intensity (50-70% max HR) or greater than or equal to 75 min vigorous intensity'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Ejercicio de resistencia:' : 'Exercice de résistance:' : 'Resistance exercise:'}</strong> {language === 'es' ? 'mayor o igual a 2 sesiones/semana, trabajando grandes grupos musculares (8-10 ejercicios, 1-3 series, 8-15 repeticiones)' : 'supérieur ou égal à 2 séances/semaine, travaillant grands groupes musculaires (8-10 exercices, 1-3 séries, 8-15 répétitions)' : 'greater than or equal to 2 sessions/week, working major muscle groups (8-10 exercises, 1-3 sets, 8-15 reps)'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === 'es' ? 'Precauciones:' : 'Précautions:' : 'Precautions:'}</strong> {language === 'es' ? 'Evaluación CV previa, evitar ejercicio si glucosa mayor de 300 mg/dL, vigilar hipoglucemias en insulina/secretagogos' : 'Évaluation CV préalable, éviter exercice si glucose supérieur à 300 mg/dL, surveiller hypoglycémies sous insuline/sécrétagogues' : 'Prior CV evaluation, avoid exercise if glucose greater than 300 mg/dL, monitor hypoglycemia on insulin/secretagogues'}
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
              {language === 'es' ? 'Epidemiología y Estadísticas Clínicas' :
               language === 'fr' ? 'Épidémiologie et Statistiques Cliniques' :
               'Epidemiology and Clinical Statistics'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">537M</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Adultos con diabetes (2021)' :
                   language === 'fr' ? 'Adultes avec diabète (2021)' :
                   'Adults with diabetes (2021)'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Casos son diabetes tipo 2' :
                   language === 'fr' ? 'Cas sont diabète type 2' :
                   'Cases are type 2 diabetes'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">6.7M</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Muertes relacionadas (2021)' :
                   language === 'fr' ? 'Décès liés (2021)' :
                   'Related deaths (2021)'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Casos no diagnosticados' :
                   language === 'fr' ? 'Cas non diagnostiqués' :
                   'Undiagnosed cases'}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 text-blue-800">
                {language === 'es' ? 'Proyecciones Futuras (IDF Atlas 2021)' :
                 language === 'fr' ? 'Projections Futures (Atlas IDF 2021)' :
                 'Future Projections (IDF Atlas 2021)'}
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>2030:</strong> {language === 'es' ? '643 millones de adultos con diabetes' : 'fr' ? '643 millions d\'adultes avec diabète' : '643 million adults with diabetes'}
                </div>
                <div>
                  <strong>2045:</strong> {language === 'es' ? '783 millones de adultos con diabetes' : 'fr' ? '783 millions d\'adultes avec diabète' : '783 million adults with diabetes'}
                </div>
                <div>
                  <strong>{language === 'es' ? 'Costo global:' : 'Coût global:' : 'Global cost:'}</strong> {language === 'es' ? '$966 mil millones USD (2021)' : '$966 milliards USD (2021)' : '$966 billion USD (2021)'}
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
                {language === 'es' ? 'Plataforma de Diagnóstico Predictivo Avanzado' : 
                 language === 'fr' ? 'Plateforme de Diagnostic Prédictif Avancé' : 
                 'Advanced Predictive Diagnostic Platform'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Utilice nuestros 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado de diabetes tipo 2. Tecnología validada clínicamente con 98.8% de precisión máxima para profesionales de la salud.' :
                 language === 'fr' ? 'Utilisez nos 62+ modèles spécialisés d\'IA pour détection précoce, stratification du risque et gestion personnalisée du diabète type 2. Technologie validée cliniquement avec 98.8% de précision maximale pour professionnels de santé.' :
                 'Use our 62+ specialized AI models for early detection, risk stratification and personalized management of type 2 diabetes. Clinically validated technology with 98.8% maximum accuracy for healthcare professionals.'}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg px-8 py-3">
                {language === 'es' ? 'Iniciar Análisis Clínico Avanzado' : 
                 language === 'fr' ? 'Commencer l\'Analyse Clinique Avancée' : 
                 'Start Advanced Clinical Analysis'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Diabetes;
