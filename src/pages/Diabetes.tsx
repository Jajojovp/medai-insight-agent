
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield } from "lucide-react";
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
            {language === 'es' ? 'Plataforma médica con 9+ modelos especializados de machine learning para detección temprana y manejo clínico de diabetes tipo 2 con 94% de precisión máxima' :
             language === 'fr' ? 'Plateforme médicale avec 9+ modèles spécialisés de machine learning pour détection précoce et gestion clinique du diabète type 2 avec 94% de précision maximale' :
             'Medical platform with 9+ specialized machine learning models for early detection and clinical management of type 2 diabetes with 94% maximum accuracy'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {language === 'es' ? 'Información Clave - Diabetes Tipo 2' :
               language === 'fr' ? 'Information Clé - Diabète Type 2' :
               'Key Information - Type 2 Diabetes'}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              {language === 'es' ? 'La diabetes tipo 2 es una enfermedad crónica que afecta la forma en que el cuerpo procesa el azúcar (glucosa) en la sangre. Se caracteriza por resistencia a la insulina o producción insuficiente de insulina. Afecta a más de 422 millones de personas mundialmente y es la séptima causa principal de muerte.' :
               language === 'fr' ? 'Le diabète type 2 est une maladie chronique qui affecte la façon dont le corps traite le sucre (glucose) dans le sang. Il se caractérise par une résistance à l\'insuline ou une production insuffisante d\'insuline. Il affecte plus de 422 millions de personnes dans le monde et est la septième cause principale de décès.' :
               'Type 2 diabetes is a chronic disease that affects how the body processes sugar (glucose) in the blood. It is characterized by insulin resistance or insufficient insulin production. It affects more than 422 million people worldwide and is the seventh leading cause of death.'}
            </p>
          </CardContent>
        </div>

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
                {language === 'es' ? 'Random Forest, SVM y Regresión Logística con precisión hasta 94% para clasificación binaria de diabetes usando 8 características clínicas principales' :
                 language === 'fr' ? 'Random Forest, SVM et Régression Logistique avec précision jusqu\'à 94% pour classification binaire du diabète utilisant 8 caractéristiques cliniques principales' :
                 'Random Forest, SVM and Logistic Regression with accuracy up to 94% for binary diabetes classification using 8 main clinical features'}
              </p>
              <Badge className="w-full justify-center bg-blue-100 text-blue-800">94% Precisión</Badge>
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
                {language === 'es' ? 'XGBoost y redes neuronales para estratificación de riesgo basada en glucosa, IMC, edad, historia familiar y factores de estilo de vida' :
                 language === 'fr' ? 'XGBoost et réseaux de neurones pour stratification du risque basée sur glucose, IMC, âge, histoire familiale et facteurs de style de vie' :
                 'XGBoost and neural networks for risk stratification based on glucose, BMI, age, family history and lifestyle factors'}
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
                {language === 'es' ? 'Modelos LSTM y ensemble para predecir progresión de prediabetes a diabetes tipo 2 con ventana temporal de 3-5 años' :
                 language === 'fr' ? 'Modèles LSTM et ensemble pour prédire la progression du prédiabète au diabète type 2 avec fenêtre temporelle de 3-5 ans' :
                 'LSTM and ensemble models to predict progression from prediabetes to type 2 diabetes with 3-5 year time window'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Predicción Temporal</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Recommendations Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {language === 'es' ? 'Recomendaciones Clínicas para Profesionales' :
               language === 'fr' ? 'Recommandations Cliniques pour Professionnels' :
               'Clinical Recommendations for Professionals'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  {language === 'es' ? 'Monitoreo y Detección' :
                   language === 'fr' ? 'Surveillance et Détection' :
                   'Monitoring and Detection'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                    {language === 'es' ? 'Monitoreo continuo de glucosa (CGM) para pacientes de alto riesgo' :
                     language === 'fr' ? 'Surveillance continue du glucose (CGM) pour patients à haut risque' :
                     'Continuous glucose monitoring (CGM) for high-risk patients'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                    {language === 'es' ? 'HbA1c cada 3-6 meses según control glucémico' :
                     language === 'fr' ? 'HbA1c tous les 3-6 mois selon contrôle glycémique' :
                     'HbA1c every 3-6 months based on glycemic control'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                    {language === 'es' ? 'Cribado en adultos ≥35 años con factores de riesgo' :
                     language === 'fr' ? 'Dépistage chez adultes ≥35 ans avec facteurs de risque' :
                     'Screening in adults ≥35 years with risk factors'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  {language === 'es' ? 'Manejo Integral' :
                   language === 'fr' ? 'Gestion Intégrale' :
                   'Comprehensive Management'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                    {language === 'es' ? 'Derivación a nutricionista para plan alimentario personalizado' :
                     language === 'fr' ? 'Référence à nutritionniste pour plan alimentaire personnalisé' :
                     'Referral to nutritionist for personalized meal plan'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                    {language === 'es' ? 'Programa de ejercicio adaptado (150 min/semana mínimo)' :
                     language === 'fr' ? 'Programme d\'exercice adapté (150 min/semaine minimum)' :
                     'Adapted exercise program (150 min/week minimum)'}
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                    {language === 'es' ? 'Educación continua del paciente sobre autocuidado' :
                     language === 'fr' ? 'Éducation continue du patient sur l\'auto-soin' :
                     'Continuous patient education on self-care'}
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
              {language === 'es' ? 'Prevención de Complicaciones' :
               language === 'fr' ? 'Prévention des Complications' :
               'Complication Prevention'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'es' ? 'Retinopatía' :
                   language === 'fr' ? 'Rétinopathie' :
                   'Retinopathy'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Examen oftalmológico anual con dilatación pupilar' :
                   language === 'fr' ? 'Examen ophtalmologique annuel avec dilatation pupillaire' :
                   'Annual eye exam with pupil dilation'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'es' ? 'Nefropatía' :
                   language === 'fr' ? 'Néphropathie' :
                   'Nephropathy'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Creatinina sérica y albuminuria cada 6-12 meses' :
                   language === 'fr' ? 'Créatinine sérique et albuminurie tous les 6-12 mois' :
                   'Serum creatinine and albuminuria every 6-12 months'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'es' ? 'Neuropatía' :
                   language === 'fr' ? 'Neuropathie' :
                   'Neuropathy'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Examen anual de pies y evaluación neurológica' :
                   language === 'fr' ? 'Examen annuel des pieds et évaluation neurologique' :
                   'Annual foot exam and neurological assessment'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {language === 'es' ? 'Estadísticas Médicas Globales' :
               language === 'fr' ? 'Statistiques Médicales Mondiales' :
               'Global Medical Statistics'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">422M</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Personas con diabetes mundialmente' :
                   language === 'fr' ? 'Personnes avec diabète mondialement' :
                   'People with diabetes globally'}
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
                <div className="text-3xl font-bold text-red-600 mb-2">1.6M</div>
                <div className="text-sm text-gray-600">
                  {language === 'es' ? 'Muertes directas anuales' :
                   language === 'fr' ? 'Décès directs annuels' :
                   'Direct annual deaths'}
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
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-blue-50/30 to-cyan-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Diagnóstico Predictivo Avanzado' : 
                 language === 'fr' ? 'Diagnostic Prédictif Avancé' : 
                 'Advanced Predictive Diagnosis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Utilice nuestros 9+ modelos especializados para detección temprana, estratificación de riesgo y manejo personalizado de diabetes tipo 2. Tecnología validada clínicamente para profesionales de la salud.' :
                 language === 'fr' ? 'Utilisez nos 9+ modèles spécialisés pour détection précoce, stratification du risque et gestion personnalisée du diabète type 2. Technologie validée cliniquement pour professionnels de santé.' :
                 'Use our 9+ specialized models for early detection, risk stratification and personalized management of type 2 diabetes. Clinically validated technology for healthcare professionals.'}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-lg px-8 py-3">
                {language === 'es' ? 'Iniciar Análisis Clínico' : 
                 language === 'fr' ? 'Commencer l\'Analyse Clinique' : 
                 'Start Clinical Analysis'}
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
