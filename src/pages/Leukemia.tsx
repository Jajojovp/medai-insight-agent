import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Microscope, Activity, AlertTriangle, CheckCircle, Users, FileText, Stethoscope, TrendingUp } from "lucide-react";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Leukemia = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-white/30">
      <PublicNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="bg-purple-100/80 text-purple-800 rounded-full">
            {language === 'es' ? 'Leucemia' : 
             language === 'fr' ? 'Leucémie' : 
             'Leukemia'}
          </Badge>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'es' ? 'Detección de Leucemia' : 
             language === 'fr' ? 'Détection de Leucémie' : 
             'Leukemia Detection'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'es' ? 'Análisis predictivo avanzado para leucemia usando 5+ modelos especializados con imágenes microscópicas, citometría de flujo y análisis genético molecular' :
             language === 'fr' ? 'Analyse prédictive avancée pour leucémie utilisant 5+ modèles spécialisés avec images microscopiques, cytométrie de flux et analyse génétique moléculaire' :
             'Advanced predictive analysis for leukemia using 5+ specialized models with microscopic images, flow cytometry and molecular genetic analysis'}
          </p>
        </div>

        {/* Key Information Section */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <FileText className="h-6 w-6 mr-2 text-purple-600" />
              {language === "es" ? "Información Clave - Leucemia" :
               language === "fr" ? "Information Clé - Leucémie" :
               "Key Information - Leukemia"}
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  {language === "es" ? "Definición y Clasificación" :
                   language === "fr" ? "Définition et Classification" :
                   "Definition and Classification"}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "es" ? "La leucemia es un cáncer hematológico caracterizado por proliferación clonal anormal de células hematopoyéticas en médula ósea, sangre periférica y órganos linfoides. Se clasifica por linaje celular (linfoide vs mieloide) y curso clínico (aguda vs crónica). Representa 3.5% de todos los cánceres." :
                   language === "fr" ? "La leucémie est un cancer hématologique caractérisé par prolifération clonale anormale de cellules hématopoïétiques dans moelle osseuse, sang périphérique et organes lymphoïdes. Classifiée par lignage cellulaire (lymphoïde vs myéloïde) et cours clinique (aiguë vs chronique). Représente 3.5% de tous les cancers." :
                   "Leukemia is a hematological cancer characterized by abnormal clonal proliferation of hematopoietic cells in bone marrow, peripheral blood and lymphoid organs. Classified by cell lineage (lymphoid vs myeloid) and clinical course (acute vs chronic). Represents 3.5% of all cancers."}
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-sm text-purple-800">
                    <strong>
                      {language === "es" ? "Estadísticas Críticas:" :
                       language === "fr" ? "Statistiques Critiques:" :
                       "Critical Statistics:"}
                    </strong>
                    {language === "es" ? " 61,090 nuevos casos/año EE.UU. Supervivencia 5 años: 65% general. LLA pediátrica: 90% curación. LMA adultos: 30% curación." :
                     language === "fr" ? " 61,090 nouveaux cas/an USA. Survie 5 ans: 65% général. LLA pédiatrique: 90% guérison. LMA adultes: 30% guérison." :
                     " 61,090 new cases/year USA. 5-year survival: 65% overall. Pediatric ALL: 90% cure. Adult AML: 30% cure."}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-pink-700">
                  {language === "es" ? "Clasificación WHO 2022" :
                   language === "fr" ? "Classification OMS 2022" :
                   "WHO 2022 Classification"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LLA B:" : language === "fr" ? "LLA B:" : "B-ALL:"}</strong> {language === "es" ? "75% LLA, múltiples subtipos genéticos" : language === "fr" ? "75% LLA, multiples sous-types génétiques" : "75% ALL, multiple genetic subtypes"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-pink-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LLA T:" : language === "fr" ? "LLA T:" : "T-ALL:"}</strong> {language === "es" ? "25% LLA, curso más agresivo" : language === "fr" ? "25% LLA, cours plus agressif" : "25% ALL, more aggressive course"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LMA NOS:" : language === "fr" ? "LMA NOS:" : "AML NOS:"}</strong> {language === "es" ? "Sin alteraciones recurrentes específicas" : language === "fr" ? "Sans altérations récurrentes spécifiques" : "Without specific recurrent alterations"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LLC:" : language === "fr" ? "LLC:" : "CLL:"}</strong> {language === "es" ? "Leucemia linfocítica crónica, adultos >65 años" : language === "fr" ? "Leucémie lymphocytaire chronique, adultes >65 ans" : "Chronic lymphocytic leukemia, adults >65 years"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LMC:" : language === "fr" ? "LMC:" : "CML:"}</strong> {language === "es" ? "Cromosoma Filadelfia t(9;22), BCR-ABL1" : language === "fr" ? "Chromosome Philadelphie t(9;22), BCR-ABL1" : "Philadelphia chromosome t(9;22), BCR-ABL1"}
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
              {language === "es" ? "Factores de Riesgo y Biomarcadores" :
               language === "fr" ? "Facteurs de Risque et Biomarqueurs" :
               "Risk Factors and Biomarkers"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  {language === "es" ? "Factores Predisponentes" :
                   language === "fr" ? "Facteurs Prédisposants" :
                   "Predisposing Factors"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Síndromes genéticos:" : language === "fr" ? "Syndromes génétiques:" : "Genetic syndromes:"}</strong> {language === "es" ? "Síndrome Down (RR 20x LLA), Li-Fraumeni, Bloom" : language === "fr" ? "Syndrome Down (RR 20x LLA), Li-Fraumeni, Bloom" : "Down syndrome (RR 20x ALL), Li-Fraumeni, Bloom"}</li>
                  <li>• <strong>{language === "es" ? "Radiación ionizante:" : language === "fr" ? "Radiation ionisante:" : "Ionizing radiation:"}</strong> {language === "es" ? "Sobrevivientes bomba atómica, radioterapia previa" : language === "fr" ? "Survivants bombe atomique, radiothérapie antérieure" : "Atomic bomb survivors, prior radiotherapy"}</li>
                  <li>• <strong>{language === "es" ? "Quimioterapia previa:" : language === "fr" ? "Chimiothérapie antérieure:" : "Prior chemotherapy:"}</strong> {language === "es" ? "Agentes alquilantes, inhibidores topoisomerasa II" : language === "fr" ? "Agents alkylants, inhibiteurs topoisomérase II" : "Alkylating agents, topoisomerase II inhibitors"}</li>
                  <li>• <strong>{language === "es" ? "Trastornos hematológicos:" : language === "fr" ? "Troubles hématologiques:" : "Hematologic disorders:"}</strong> {language === "es" ? "SMD, anemia aplásica, trombocitemia esencial" : language === "fr" ? "SMD, anémie aplasique, thrombocytémie essentielle" : "MDS, aplastic anemia, essential thrombocythemia"}</li>
                  <li>• <strong>{language === "es" ? "Exposición química:" : language === "fr" ? "Exposition chimique:" : "Chemical exposure:"}</strong> {language === "es" ? "Benceno, formaldehído, pesticidas organofosforados" : language === "fr" ? "Benzène, formaldéhyde, pesticides organophosphorés" : "Benzene, formaldehyde, organophosphate pesticides"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  {language === "es" ? "Alteraciones Genéticas" :
                   language === "fr" ? "Altérations Génétiques" :
                   "Genetic Alterations"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>BCR-ABL1:</strong> {language === "es" ? "LMC 95%, LLA Ph+ 25% adultos, 5% niños" : language === "fr" ? "LMC 95%, LLA Ph+ 25% adultes, 5% enfants" : "CML 95%, Ph+ ALL 25% adults, 5% children"}</li>
                  <li>• <strong>MLL-rearranged:</strong> {language === "es" ? "LLA lactantes 80%, pronóstico adverso" : language === "fr" ? "LLA nourrissons 80%, pronostic défavorable" : "Infant ALL 80%, adverse prognosis"}</li>
                  <li>• <strong>ETV6-RUNX1:</strong> {language === "es" ? "LLA B pediátrica 25%, buen pronóstico" : language === "fr" ? "LLA B pédiatrique 25%, bon pronostic" : "Pediatric B-ALL 25%, good prognosis"}</li>
                  <li>• <strong>FLT3-ITD:</strong> {language === "es" ? "LMA 30%, factor pronóstico adverso" : language === "fr" ? "LMA 30%, facteur pronostique défavorable" : "AML 30%, adverse prognostic factor"}</li>
                  <li>• <strong>NPM1:</strong> {language === "es" ? "LMA 35%, favorable si FLT3 wild-type" : language === "fr" ? "LMA 35%, favorable si FLT3 wild-type" : "AML 35%, favorable if FLT3 wild-type"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {language === "es" ? "Biomarcadores Diagnósticos" :
                   language === "fr" ? "Biomarqueurs Diagnostiques" :
                   "Diagnostic Biomarkers"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>{language === "es" ? "Hemograma completo:" : language === "fr" ? "Hémogramme complet:" : "Complete blood count:"}</strong> {language === "es" ? "Blastos >20% médula ósea (LMA), leucocitosis/pancitopenia" : language === "fr" ? "Blastes >20% moelle osseuse (LMA), leucocytose/pancytopénie" : "Blasts >20% bone marrow (AML), leukocytosis/pancytopenia"}</li>
                  <li>• <strong>{language === "es" ? "Citometría de flujo:" : language === "fr" ? "Cytométrie de flux:" : "Flow cytometry:"}</strong> {language === "es" ? "Inmunofenotipo CD markers, detección EMR 10^-4" : language === "fr" ? "Immunophénotype CD markers, détection EMR 10^-4" : "Immunophenotype CD markers, MRD detection 10^-4"}</li>
                  <li>• <strong>{language === "es" ? "Cariotipo:" : language === "fr" ? "Caryotype:" : "Karyotype:"}</strong> {language === "es" ? "Aberraciones cromosómicas pronósticas específicas" : language === "fr" ? "Aberrations chromosomiques pronostiques spécifiques" : "Specific prognostic chromosomal aberrations"}</li>
                  <li>• <strong>NGS panel:</strong> {language === "es" ? "Mutaciones conductoras y resistencia terapéutica" : language === "fr" ? "Mutations conductrices et résistance thérapeutique" : "Driver mutations and therapeutic resistance"}</li>
                  <li>• <strong>LDH/Ácido úrico:</strong> {language === "es" ? "Marcadores turnover celular, síndrome lisis tumoral" : language === "fr" ? "Marqueurs turnover cellulaire, syndrome lyse tumorale" : "Cell turnover markers, tumor lysis syndrome"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Models Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Microscópico AI' : 
                 language === 'fr' ? 'Analyse Microscopique IA' : 
                 'AI Microscopic Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'CNN avanzadas para detectar leucemia linfoblástica aguda mediante análisis automático de imágenes microscópicas de sangre periférica y médula ósea con reconocimiento de blastos' :
                 language === 'fr' ? 'CNN avancées pour détecter leucémie lymphoblastique aiguë via analyse automatique d\'images microscopiques de sang périphérique et moelle osseuse avec reconnaissance de blastes' :
                 'Advanced CNNs to detect acute lymphoblastic leukemia through automatic analysis of peripheral blood and bone marrow microscopic images with blast recognition'}
              </p>
              <Badge className="w-full justify-center bg-purple-100 text-purple-800">Detección Blastos</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Citometría de Flujo' : 
                 language === 'fr' ? 'Cytométrie de Flux' : 
                 'Flow Cytometry'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'ML clásico y ensemble methods para clasificar leucemia mieloide aguda vs normal usando datos de citometría de flujo multiparamétrica con análisis de poblaciones celulares' :
                 language === 'fr' ? 'ML classique et ensemble methods pour classifier leucémie myéloïde aiguë vs normal utilisant données de cytométrie de flux multiparamétrique avec analyse de populations cellulaires' :
                 'Classic ML and ensemble methods to classify acute myeloid leukemia vs normal using multiparametric flow cytometry data with cellular population analysis'}
              </p>
              <Badge className="w-full justify-center bg-pink-100 text-pink-800">Análisis Multiparamétrico</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {language === 'es' ? 'Análisis Genético Molecular' : 
                 language === 'fr' ? 'Analyse Génétique Moléculaire' : 
                 'Molecular Genetic Analysis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                {language === 'es' ? 'Análisis de expresión génica, NGS y Random Forest para biomarcadores predictivos de leucemia linfocítica con identificación de mutaciones conductoras y resistencia' :
                 language === 'fr' ? 'Analyse d\'expression génique, NGS et Random Forest pour biomarqueurs prédictifs de leucémie lymphocytaire avec identification de mutations conductrices et résistance' :
                 'Gene expression analysis, NGS and Random Forest for predictive biomarkers of lymphocytic leukemia with driver mutation identification and resistance'}
              </p>
              <Badge className="w-full justify-center bg-indigo-100 text-indigo-800">Biomarcadores Moleculares</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Guidelines */}
        <Card className="mb-16 backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <Stethoscope className="h-6 w-6 mr-2 text-purple-600" />
              {language === "es" ? "Protocolos de Tratamiento por Subtipo" :
               language === "fr" ? "Protocoles de Traitement par Sous-type" :
               "Treatment Protocols by Subtype"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {language === "es" ? "Leucemias Agudas" :
                   language === "fr" ? "Leucémies Aiguës" :
                   "Acute Leukemias"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LLA pediátrica:" : language === "fr" ? "LLA pédiatrique:" : "Pediatric ALL:"}</strong> {language === "es" ? 'Protocolo "7+3" modificado, L-asparaginasa, consolidación prolongada' : language === "fr" ? 'Protocole "7+3" modifié, L-asparaginase, consolidation prolongée' : 'Modified "7+3" protocol, L-asparaginase, prolonged consolidation'}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LLA Ph+:" : language === "fr" ? "LLA Ph+:" : "Ph+ ALL:"}</strong> {language === "es" ? "ITK + quimioterapia, dasatinib/imatinib, alo-TCMH" : language === "fr" ? "ITK + chimiothérapie, dasatinib/imatinib, allo-TCMH" : "TKI + chemotherapy, dasatinib/imatinib, allo-HSCT"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LMA estándar:" : language === "fr" ? "LMA standard:" : "Standard AML:"}</strong> {language === "es" ? 'Inducción "7+3", consolidación citarabina alta dosis' : language === "fr" ? 'Induction "7+3", consolidation cytarabine haute dose' : 'Induction "7+3", high-dose cytarabine consolidation'}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                  {language === "es" ? "Leucemias Crónicas y Terapias Dirigidas" :
                   language === "fr" ? "Leucémies Chroniques et Thérapies Ciblées" :
                   "Chronic Leukemias & Targeted Therapies"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LMC:" : language === "fr" ? "LMC:" : "CML:"}</strong> {language === "es" ? "ITK primera línea: imatinib, dasatinib, nilotinib. Respuesta molecular profunda" : language === "fr" ? "ITK première ligne: imatinib, dasatinib, nilotinib. Réponse moléculaire profonde" : "First-line TKI: imatinib, dasatinib, nilotinib. Deep molecular response"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "LLC:" : language === "fr" ? "LLC:" : "CLL:"}</strong> {language === "es" ? "Ibrutinib, venetoclax + rituximab, FCR jóvenes fit" : language === "fr" ? "Ibrutinib, venetoclax + rituximab, FCR jeunes fit" : "Ibrutinib, venetoclax + rituximab, FCR young fit"}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{language === "es" ? "CAR-T cells:" : language === "fr" ? "Cellules CAR-T:" : "CAR-T cells:"}</strong> {language === "es" ? "LLA B refractaria, tisagenlecleucel, brexucabtagene" : language === "fr" ? "LLA B réfractaire, tisagenlecleucel, brexucabtagene" : "Refractory B-ALL, tisagenlecleucel, brexucabtagene"}
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
              {language === "es" ? "Epidemiología Global de Leucemia" :
               language === "fr" ? "Épidémiologie Mondiale de la Leucémie" :
               "Global Leukemia Epidemiology"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">474K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Casos globales/año" :
                   language === "fr" ? "Cas mondiaux/an" :
                   "Global cases/year"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">311K</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Muertes anuales" :
                   language === "fr" ? "Décès annuels" :
                   "Annual deaths"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">65%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "Supervivencia 5 años" :
                   language === "fr" ? "Survie 5 ans" :
                   "5-year survival"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3.5%</div>
                <div className="text-sm text-gray-600">
                  {language === "es" ? "% todos cánceres" :
                   language === "fr" ? "% tous cancers" :
                   "% all cancers"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-purple-50/30 to-pink-50/30 border-0 backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                {language === 'es' ? 'Diagnóstico Hematológico de Precisión' : 
                 language === 'fr' ? 'Diagnostic Hématologique de Précision' : 
                 'Precision Hematological Diagnosis'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                {language === 'es' ? 'Nuestros 5+ modelos especializados en leucemia integran análisis microscópico, citometría de flujo y genética molecular para diagnósticos precisos que guían la terapia dirigida.' :
                 language === 'fr' ? 'Nos 5+ modèles spécialisés en leucémie intègrent analyse microscopique, cytométrie de flux et génétique moléculaire pour diagnostics précis qui guident thérapie ciblée.' :
                 'Our 5+ specialized leukemia models integrate microscopic analysis, flow cytometry, and molecular genetics for precise diagnoses that guide targeted therapy.'}
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
