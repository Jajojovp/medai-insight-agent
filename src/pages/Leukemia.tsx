import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Brain, Stethoscope, FileText, Microscope } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Leukemia = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-red-100/80 text-red-800 rounded-full">
            {language === "es" ? "Leucemia" : 
             language === "fr" ? "Leucémie" : 
             "Leukemia"}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            {language === "es" ? "Análisis Predictivo de Leucemia" : 
             language === "fr" ? "Analyse Prédictive de Leucémie" : 
             "Leukemia Predictive Analysis"}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === "es" ? "Plataforma médica con 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y manejo personalizado de la leucemia con 98.8% de precisión máxima" :
             language === "fr" ? "Plateforme médicale avec 62+ modèles spécialisés d\\'IA pour détection précoce, stratification du risque et gestion personnalisée de la leucémie avec 98.8% de précision maximale" :
             "Medical platform with 62+ specialized AI models for early detection, risk stratification and personalized management of leukemia with 98.8% maximum accuracy"}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Información Clave - Leucemia" :
               language === "fr" ? "Information Clé - Leucémie" :
               "Key Information - Leukemia"}
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
                  {language === "es" ? "La leucemia es un tipo de cáncer que afecta la sangre y la médula ósea. Se caracteriza por la producción descontrolada de glóbulos blancos anormales. Es más común en adultos mayores de 55 años, pero también puede ocurrir en niños." :
                   language === "fr" ? "La leucémie est un type de cancer qui affecte le sang et la moelle osseuse. Elle se caractérise par la production incontrôlée de globules blancs anormaux. Elle est plus fréquente chez les adultes de plus de 55 ans, mais peut également survenir chez les enfants." :
                   "Leukemia is a type of cancer that affects the blood and bone marrow. It is characterized by the uncontrolled production of abnormal white blood cells. It is more common in adults over 55, but can also occur in children."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>
                      {language === "es" ? "Incidencia Global:" :
                       language === "fr" ? "Incidence Mondiale:" :
                       "Global Incidence:"}
                    </strong>
                    {language === "es" ? " Aproximadamente 474,000 nuevos casos diagnosticados globalmente cada año. La leucemia representa el 2.5% de todos los cánceres." :
                     language === "fr" ? " Environ 474 000 nouveaux cas diagnostiqués mondialement chaque année. La leucémie représente 2,5 % de tous les cancers." :
                     " Approximately 474,000 new cases diagnosed globally each year. Leukemia accounts for 2.5% of all cancers."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                  {language === "es" ? "Clasificación de Riesgo" :
                   language === "fr" ? "Classification du Risque" :
                   "Risk Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Leucemia Aguda:" : language === "fr" ? "Leucémie Aiguë:" : "Acute Leukemia:"}</strong> {language === "es" ? "Progresión rápida, requiere tratamiento inmediato." : language === "fr" ? "Progression rapide, nécessite un traitement immédiat." : "Rapid progression, requires immediate treatment."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Leucemia Crónica:" : language === "fr" ? "Leucémie Chronique:" : "Chronic Leukemia:"}</strong> {language === "es" ? "Progresión lenta, puede no requerir tratamiento inmediato." : language === "fr" ? "Progression lente, peut ne pas nécessiter un traitement immédiat." : "Slow progression, may not require immediate treatment."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Leucemia Linfocítica:" : language === "fr" ? "Leucémie Lymphoïde:" : "Lymphocytic Leukemia:"}</strong> {language === "es" ? "Afecta los linfocitos." : language === "fr" ? "Affecte les lymphocytes." : "Affects lymphocytes."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Leucemia Mieloide:" : language === "fr" ? "Leucémie Myéloïde:" : "Myeloid Leukemia:"}</strong> {language === "es" ? "Afecta las células mieloides." : language === "fr" ? "Affecte les cellules myéloïdes." : "Affects myeloid cells."}
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
                  {language === "es" ? "Factores No Modificables" :
                   language === "fr" ? "Facteurs Non Modifiables" :
                   "Non-Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Edad:" : language === "fr" ? "Âge:" : "Age:"}</strong> {language === "es" ? "Mayor riesgo en adultos mayores de 55 años." : language === "fr" ? "Risque accru chez les adultes de plus de 55 ans." : "Increased risk in adults over 55."}</li>
                  <li>• <strong>{language === "es" ? "Género:" : language === "fr" ? "Genre:" : "Gender:"}</strong> {language === "es" ? "Algunos tipos son más comunes en hombres." : language === "fr" ? "Certains types sont plus fréquents chez les hommes." : "Some types are more common in men."}</li>
                  <li>• <strong>{language === "es" ? "Historia familiar:" : language === "fr" ? "Histoire familiale:" : "Family history:"}</strong> {language === "es" ? "Antecedentes familiares de leucemia." : language === "fr" ? "Antécédents familiaux de leucémie." : "Family history of leukemia."}</li>
                  <li>• <strong>{language === "es" ? "Síndromes genéticos:" : language === "fr" ? "Syndromes génétiques:" : "Genetic syndromes:"}</strong> {language === "es" ? "Síndrome de Down, síndrome de Klinefelter." : language === "fr" ? "Syndrome de Down, syndrome de Klinefelter." : "Down syndrome, Klinefelter syndrome."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Factores Modificables" :
                   language === "fr" ? "Facteurs Modifiables" :
                   "Modifiable Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Exposición a químicos:" : language === "fr" ? "Exposition à des produits chimiques:" : "Chemical exposure:"}</strong> {language === "es" ? "Benceno, formaldehído." : language === "fr" ? "Benzène, formaldéhyde." : "Benzene, formaldehyde."}</li>
                  <li>• <strong>{language === "es" ? "Radiación:" : language === "fr" ? "Rayonnement:" : "Radiation:"}</strong> {language === "es" ? "Exposición a altos niveles de radiación." : language === "fr" ? "Exposition à des niveaux élevés de rayonnement." : "Exposure to high levels of radiation."}</li>
                  <li>• <strong>{language === "es" ? "Tabaquismo:" : language === "fr" ? "Tabagisme:" : "Smoking:"}</strong> {language === "es" ? "Aumenta el riesgo de leucemia mieloide aguda." : language === "fr" ? "Augmente le risque de leucémie myéloïde aiguë." : "Increases the risk of acute myeloid leukemia."}</li>
                  <li>• <strong>{language === "es" ? "Tratamientos previos contra el cáncer:" : language === "fr" ? "Traitements antérieurs contre le cancer:" : "Previous cancer treatments:"}</strong> {language === "es" ? "Quimioterapia, radioterapia." : language === "fr" ? "Chimiothérapie, radiothérapie." : "Chemotherapy, radiotherapy."}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Protocolo de Detección" :
                   language === "fr" ? "Protocole de Détection" :
                   "Screening Protocol"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Examen físico:" : language === "fr" ? "Examen physique:" : "Physical exam:"}</strong> {language === "es" ? "Búsqueda de signos como palidez, fatiga, sangrado." : language === "fr" ? "Recherche de signes tels que pâleur, fatigue, saignement." : "Looking for signs like paleness, fatigue, bleeding."}</li>
                  <li>• <strong>{language === "es" ? "Análisis de sangre:" : language === "fr" ? "Analyse de sang:" : "Blood tests:"}</strong> {language === "es" ? "Conteo sanguíneo completo (CSC) para evaluar los niveles de glóbulos blancos, glóbulos rojos y plaquetas." : language === "fr" ? "Numération formule sanguine (NFS) pour évaluer les niveaux de globules blancs, de globules rouges et de plaquettes." : "Complete blood count (CBC) to evaluate white blood cell, red blood cell, and platelet levels."}</li>
                  <li>• <strong>{language === "es" ? "Biopsia de médula ósea:" : language === "fr" ? "Biopsie de moelle osseuse:" : "Bone marrow biopsy:"}</strong> {language === "es" ? "Para confirmar el diagnóstico y determinar el tipo de leucemia." : language === "fr" ? "Pour confirmer le diagnostic et déterminer le type de leucémie." : "To confirm the diagnosis and determine the type of leukemia."}</li>
                  <li>• <strong>{language === "es" ? "Pruebas genéticas:" : language === "fr" ? "Tests génétiques:" : "Genetic tests:"}</strong> {language === "es" ? "Para identificar mutaciones genéticas específicas." : language === "fr" ? "Pour identifier des mutations génétiques spécifiques." : "To identify specific genetic mutations."}</li>
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
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Análisis de Células Sanguíneas" : 
                 language === "fr" ? "Analyse des Cellules Sanguines" : 
                 "Blood Cell Analysis"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Algoritmos avanzados para identificar células leucémicas en muestras de sangre y médula ósea con alta precisión." :
                 language === "fr" ? "Algorithmes avancés pour identifier les cellules leucémiques dans les échantillons de sang et de moelle osseuse avec une grande précision." :
                 "Advanced algorithms to identify leukemic cells in blood and bone marrow samples with high accuracy."}
              </p>
              <Badge className="w-full justify-center bg-red-100 text-red-800">98.8% Precisión</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Clasificación de Riesgo" : 
                 language === "fr" ? "Classification du Risque" : 
                 "Risk Classification"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Sistemas de clasificación automática en grupos de riesgo (bajo, intermedio, alto) basados en factores clínicos y genéticos." :
                 language === "fr" ? "Systèmes de classification automatique en groupes de risque (faible, intermédiaire, élevé) basés sur des facteurs cliniques et génétiques." :
                 "Automatic classification systems into risk groups (low, intermediate, high) based on clinical and genetic factors."}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">Clasificación Precisa</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === "es" ? "Predicción de Respuesta al Tratamiento" : 
                 language === "fr" ? "Prédiction de la Réponse au Traitement" : 
                 "Treatment Response Prediction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === "es" ? "Modelos predictivos de respuesta a la quimioterapia y otros tratamientos basados en el perfil genético del paciente." :
                 language === "fr" ? "Modèles prédictifs de réponse à la chimiothérapie et à d'autres traitements basés sur le profil génétique du patient." :
                 "Predictive models for response to chemotherapy and other treatments based on the patient's genetic profile."}
              </p>
              <Badge className="w-full justify-center bg-rose-100 text-rose-800">Tratamiento Personalizado</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-blue-600" />
              {language === "es" ? "Guías de Tratamiento" :
               language === "fr" ? "Guides de Traitement" :
               "Treatment Guidelines"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Leucemia Aguda" :
                   language === "fr" ? "Leucémie Aiguë" :
                   "Acute Leukemia"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia:" : language === "fr" ? "Chimiothérapie:" : "Chemotherapy:"}</strong> {language === "es" ? "Inducción, consolidación y mantenimiento." : language === "fr" ? "Induction, consolidation et maintenance." : "Induction, consolidation, and maintenance."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Trasplante de médula ósea:" : language === "fr" ? "Greffe de moelle osseuse:" : "Bone marrow transplant:"}</strong> {language === "es" ? "Autólogo o alogénico." : language === "fr" ? "Autologue ou allogénique." : "Autologous or allogeneic."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia dirigida:" : language === "fr" ? "Thérapie ciblée:" : "Targeted therapy:"}</strong> {language === "es" ? "Inhibidores de tirosina quinasa." : language === "fr" ? "Inhibiteurs de tyrosine kinase." : "Tyrosine kinase inhibitors."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Leucemia Crónica" :
                   language === "fr" ? "Leucémie Chronique" :
                   "Chronic Leukemia"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Observación y espera:" : language === "fr" ? "Observation et attente:" : "Watch and wait:"}</strong> {language === "es" ? "Monitoreo regular sin tratamiento inmediato." : language === "fr" ? "Surveillance régulière sans traitement immédiat." : "Regular monitoring without immediate treatment."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Terapia dirigida:" : language === "fr" ? "Thérapie ciblée:" : "Targeted therapy:"}</strong> {language === "es" ? "Inhibidores de tirosina quinasa, anticuerpos monoclonales." : language === "fr" ? "Inhibiteurs de tyrosine kinase, anticorps monoclonaux." : "Tyrosine kinase inhibitors, monoclonal antibodies."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "Quimioterapia:" : language === "fr" ? "Chimiothérapie:" : "Chemotherapy:"}</strong> {language === "es" ? "En casos avanzados o agresivos." : language === "fr" ? "Dans les cas avancés ou agressifs." : "In advanced or aggressive cases."}
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
              {language === "es" ? "Epidemiología Global de la Leucemia" :
               language === "fr" ? "Épidémiologie Mondiale de la Leucémie" :
               "Global Leukemia Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">474K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Nuevos casos anuales" :
                   language === "fr" ? "Nouveaux cas annuels" :
                   "New cases annually"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">311K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia a 5 años (niños)" :
                   language === "fr" ? "Survie à 5 ans (enfants)" :
                   "5-year survival (children)"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2.5%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "De todos los cánceres" :
                   language === "fr" ? "De tous les cancers" :
                   "Of all cancers"}
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
                {language === "es" ? "Plataforma de Diagnóstico Avanzado para Leucemia" : 
                 language === "fr" ? "Plateforme de Diagnostic Avancé pour la Leucémie" : 
                 "Advanced Leukemia Diagnostic Platform"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === "es" ? "Utilice nuestros 62+ modelos especializados de IA para detección temprana, estratificación de riesgo y optimización de tratamiento en leucemia. Tecnología validada clínicamente con 98.8% de precisión máxima." :
                 language === "fr" ? "Utilisez nos 62+ modèles spécialisés d'IA pour la détection précoce, la stratification du risque et l'optimisation du traitement de la leucémie. Technologie validée cliniquement avec une précision maximale de 98,8 %." :
                 "Use our 62+ specialized AI models for early detection, risk stratification and treatment optimization in leukemia. Clinically validated technology with 98.8% maximum accuracy."}
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

export default Leukemia;
