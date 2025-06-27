
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Wind, 
  Shield, 
  Activity, 
  Stethoscope,
  Eye,
  Bone,
  Droplets,
  Zap,
  ArrowRight,
  Download,
  Utensils,
  Users,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const HealthRecommendations = () => {
  const { language } = useLanguage();

  const recommendations = [
    {
      disease: {
        es: 'Cáncer de Mama',
        en: 'Breast Cancer',
        fr: 'Cancer du Sein'
      },
      icon: Heart,
      color: 'pink',
      recommendation: {
        es: 'Screening anual con mamografía desde los 40 años. Mujeres con mutaciones BRCA1/BRCA2 requieren seguimiento desde los 25-30 años con resonancia magnética. Autoexamen mensual post-menstrual. Factores de riesgo: nuliparidad, menarquia temprana, menopausia tardía, terapia hormonal >5 años.',
        en: 'Annual mammography screening from age 40. Women with BRCA1/BRCA2 mutations require follow-up from 25-30 years with MRI. Monthly self-examination post-menstrual. Risk factors: nulliparity, early menarche, late menopause, hormone therapy >5 years.',
        fr: 'Dépistage mammographique annuel dès 40 ans. Femmes avec mutations BRCA1/BRCA2 nécessitent suivi dès 25-30 ans avec IRM. Auto-examen mensuel post-menstruel. Facteurs risque: nulliparité, ménarche précoce, ménopause tardive, hormonothérapie >5 ans.'
      },
      stats: {
        es: '1 de cada 8 mujeres • Supervivencia 90% si detección temprana',
        en: '1 in 8 women • 90% survival with early detection',
        fr: '1 femme sur 8 • 90% survie avec détection précoce'
      }
    },
    {
      disease: {
        es: 'Cáncer de Próstata',
        en: 'Prostate Cancer',
        fr: 'Cancer de la Prostate'
      },
      icon: Users,
      color: 'blue',
      recommendation: {
        es: 'PSA anual desde los 50 años (45 si factor de riesgo familiar). Valores normales <4 ng/mL, pero velocidad de crecimiento >0.75 ng/mL/año es significativa. Tacto rectal complementario. Biopsia si PSA >10 o ratio PSA libre/total <15%. Vigilancia activa en tumores de bajo riesgo (Gleason ≤6).',
        en: 'Annual PSA from age 50 (45 if family risk factor). Normal values <4 ng/mL, but growth velocity >0.75 ng/mL/year is significant. Complementary digital rectal exam. Biopsy if PSA >10 or free/total PSA ratio <15%. Active surveillance in low-risk tumors (Gleason ≤6).',
        fr: 'PSA annuel dès 50 ans (45 si facteur risque familial). Valeurs normales <4 ng/mL, mais vitesse croissance >0.75 ng/mL/an significative. Toucher rectal complémentaire. Biopsie si PSA >10 ou ratio PSA libre/total <15%. Surveillance active tumeurs bas risque (Gleason ≤6).'
      },
      stats: {
        es: '1 de cada 9 hombres • Supervivencia 98% localizado',
        en: '1 in 9 men • 98% survival when localized',
        fr: '1 homme sur 9 • 98% survie si localisé'
      }
    },
    {
      disease: {
        es: 'Diabetes Tipo 2',
        en: 'Type 2 Diabetes',
        fr: 'Diabète Type 2'
      },
      icon: Droplets,
      color: 'green',
      recommendation: {
        es: 'HbA1c objetivo <7% (53 mmol/mol). Glucosa preprandial 80-130 mg/dL, postprandial <180 mg/dL. Screening anual con HbA1c ≥5.7%. Metformina primera línea. Control lipídico: LDL <100 mg/dL (<70 si riesgo cardiovascular alto). Presión arterial <140/90 mmHg. Examen oftalmológico anual.',
        en: 'HbA1c target <7% (53 mmol/mol). Preprandial glucose 80-130 mg/dL, postprandial <180 mg/dL. Annual screening with HbA1c ≥5.7%. Metformin first-line. Lipid control: LDL <100 mg/dL (<70 if high cardiovascular risk). Blood pressure <140/90 mmHg. Annual eye exam.',
        fr: 'HbA1c objectif <7% (53 mmol/mol). Glycémie préprandiale 80-130 mg/dL, postprandiale <180 mg/dL. Dépistage annuel HbA1c ≥5.7%. Metformine première ligne. Contrôle lipidique: LDL <100 mg/dL (<70 si risque cardiovasculaire élevé). Tension <140/90 mmHg. Examen ophtalmologique annuel.'
      },
      stats: {
        es: '537M adultos mundial • Complicaciones evitables 80%',
        en: '537M adults worldwide • 80% preventable complications',
        fr: '537M adultes mondial • 80% complications évitables'
      }
    },
    {
      disease: {
        es: 'Enfermedad Cardíaca',
        en: 'Heart Disease',
        fr: 'Maladie Cardiaque'
      },
      icon: Heart,
      color: 'red',
      recommendation: {
        es: 'Calculadora de riesgo ACC/AHA cada 4-6 años (40-79 años). LDL <100 mg/dL (<70 alto riesgo, <55 muy alto). Presión arterial <130/80 mmHg. Estatinas si riesgo ≥7.5% a 10 años. Aspirina 81mg prevención primaria si riesgo ≥10% y bajo riesgo hemorrágico. ECG basal, ecocardiograma si indicado.',
        en: 'ACC/AHA risk calculator every 4-6 years (40-79 years). LDL <100 mg/dL (<70 high risk, <55 very high). Blood pressure <130/80 mmHg. Statins if risk ≥7.5% at 10 years. Aspirin 81mg primary prevention if risk ≥10% and low bleeding risk. Baseline ECG, echocardiogram if indicated.',
        fr: 'Calculateur risque ACC/AHA tous 4-6 ans (40-79 ans). LDL <100 mg/dL (<70 haut risque, <55 très haut). Tension <130/80 mmHg. Statines si risque ≥7.5% à 10 ans. Aspirine 81mg prévention primaire si risque ≥10% et faible risque hémorragique. ECG basal, échocardiogramme si indiqué.'
      },
      stats: {
        es: 'Causa #1 muerte • Reducción riesgo 80% con prevención',
        en: '#1 cause of death • 80% risk reduction with prevention',
        fr: 'Cause #1 décès • 80% réduction risque avec prévention'
      }
    },
    {
      disease: {
        es: 'ACV (Accidente Cerebrovascular)',
        en: 'Stroke',
        fr: 'AVC'
      },
      icon: Brain,
      color: 'purple',
      recommendation: {
        es: 'Control hipertensión <140/90 mmHg (objetivo principal). Anticoagulación si fibrilación auricular (CHA2DS2-VASc ≥2). Estatinas si aterosclerosis. Reconocimiento FAST: Face drooping, Arm weakness, Speech difficulty, Time critical. Ventana terapéutica: tPA <4.5h, trombectomía <24h en casos seleccionados.',
        en: 'Hypertension control <140/90 mmHg (main target). Anticoagulation if atrial fibrillation (CHA2DS2-VASc ≥2). Statins if atherosclerosis. FAST recognition: Face drooping, Arm weakness, Speech difficulty, Time critical. Therapeutic window: tPA <4.5h, thrombectomy <24h in selected cases.',
        fr: 'Contrôle hypertension <140/90 mmHg (objectif principal). Anticoagulation si fibrillation auriculaire (CHA2DS2-VASc ≥2). Statines si athérosclérose. Reconnaissance FAST: Face drooping, Arm weakness, Speech difficulty, Time critical. Fenêtre thérapeutique: tPA <4.5h, thrombectomie <24h cas sélectionnés.'
      },
      stats: {
        es: '2da causa muerte • 90% prevenibles con control factores',
        en: '2nd cause of death • 90% preventable with factor control',
        fr: '2e cause décès • 90% évitables avec contrôle facteurs'
      }
    },
    {
      disease: {
        es: 'Enfermedad Renal Crónica',
        en: 'Chronic Kidney Disease',
        fr: 'Maladie Rénale Chronique'
      },
      icon: Droplets,
      color: 'teal',
      recommendation: {
        es: 'Screening anual con creatinina y albuminuria en diabéticos/hipertensos. TFG <60 mL/min/1.73m² = ERC estadio 3+. IECA/ARA-II si albuminuria >30 mg/g. Objetivo PA <140/90 mmHg (<130/80 si proteinuria). Dieta: proteína 0.8 g/kg/día, sodio <2.3g/día, fósforo limitado estadios 3-5.',
        en: 'Annual screening with creatinine and albuminuria in diabetics/hypertensives. GFR <60 mL/min/1.73m² = CKD stage 3+. ACE-I/ARB if albuminuria >30 mg/g. BP target <140/90 mmHg (<130/80 if proteinuria). Diet: protein 0.8 g/kg/day, sodium <2.3g/day, limited phosphorus stages 3-5.',
        fr: 'Dépistage annuel créatinine et albuminurie diabétiques/hypertendus. DFG <60 mL/min/1.73m² = MRC stade 3+. IEC/ARA-II si albuminurie >30 mg/g. Objectif TA <140/90 mmHg (<130/80 si protéinurie). Régime: protéine 0.8 g/kg/jour, sodium <2.3g/jour, phosphore limité stades 3-5.'
      },
      stats: {
        es: '850M personas • Progresión evitable 60% casos',
        en: '850M people • 60% cases preventable progression',
        fr: '850M personnes • 60% cas progression évitable'
      }
    },
    {
      disease: {
        es: 'Cáncer de Pulmón',
        en: 'Lung Cancer',
        fr: 'Cancer du Poumon'
      },
      icon: Wind,
      color: 'gray',
      recommendation: {
        es: 'Screening con TC dosis baja anual: 50-80 años, fumadores ≥20 paquetes-año, fumado últimos 15 años. Cesación tabáquica reduce riesgo 50% en 10 años. Síntomas alarma: tos persistente >3 semanas, hemoptisis, disnea inexplicada, dolor torácico. Radón segunda causa: medición domiciliaria recomendada.',
        en: 'Low-dose CT screening annually: 50-80 years, smokers ≥20 pack-years, smoked within last 15 years. Smoking cessation reduces risk 50% in 10 years. Alarm symptoms: persistent cough >3 weeks, hemoptysis, unexplained dyspnea, chest pain. Radon second cause: home measurement recommended.',
        fr: 'Dépistage TDM faible dose annuel: 50-80 ans, fumeurs ≥20 paquets-année, fumé derniers 15 ans. Sevrage tabagique réduit risque 50% en 10 ans. Symptômes alarme: toux persistante >3 semaines, hémoptysie, dyspnée inexpliquée, douleur thoracique. Radon deuxième cause: mesure domiciliaire recommandée.'
      },
      stats: {
        es: '2.2M casos/año • Mortalidad 85% - prevención clave',
        en: '2.2M cases/year • 85% mortality - prevention key',
        fr: '2.2M cas/an • 85% mortalité - prévention clé'
      }
    },
    {
      disease: {
        es: 'Cáncer de Páncreas',
        en: 'Pancreatic Cancer',
        fr: 'Cancer du Pancréas'
      },
      icon: AlertTriangle,
      color: 'orange',
      recommendation: {
        es: 'Screening en síndromes hereditarios (BRCA1/2, Lynch, Peutz-Jeghers) desde 50 años o 10 años antes caso familiar más joven. Diabetes de novo >50 años requiere evaluación. Síntomas: dolor epigástrico irradiado, pérdida peso inexplicada, diabetes súbita. CA 19-9 elevado inespecífico. Evitar tabaco, alcohol moderado.',
        en: 'Screening in hereditary syndromes (BRCA1/2, Lynch, Peutz-Jeghers) from age 50 or 10 years before youngest family case. New-onset diabetes >50 years requires evaluation. Symptoms: epigastric pain radiating, unexplained weight loss, sudden diabetes. Elevated CA 19-9 nonspecific. Avoid tobacco, moderate alcohol.',
        fr: 'Dépistage syndromes héréditaires (BRCA1/2, Lynch, Peutz-Jeghers) dès 50 ans ou 10 ans avant cas familial plus jeune. Diabète nouveau >50 ans nécessite évaluation. Symptômes: douleur épigastrique irradiée, perte poids inexpliquée, diabète soudain. CA 19-9 élevé non spécifique. Éviter tabac, alcool modéré.'
      },
      stats: {
        es: '495K casos/año • Supervivencia 5% - detección crucial',
        en: '495K cases/year • 5% survival - detection crucial',
        fr: '495K cas/an • 5% survie - détection cruciale'
      }
    },
    {
      disease: {
        es: 'Cáncer de Hígado',
        en: 'Liver Cancer',
        fr: 'Cancer du Foie'
      },
      icon: Shield,
      color: 'yellow',
      recommendation: {
        es: 'Screening semestral con ecografía + AFP en cirrosis o hepatitis B crónica. Vacunación hepatitis B universal. Tratamiento hepatitis C (SVR >95% con DAA). Evitar alcohol, control peso (NASH). Aflatoxinas: almacenamiento adecuado alimentos. AFP >400 ng/mL altamente sugestivo, pero 40% tumores pequeños AFP normal.',
        en: 'Biannual screening with ultrasound + AFP in cirrhosis or chronic hepatitis B. Universal hepatitis B vaccination. Hepatitis C treatment (SVR >95% with DAA). Avoid alcohol, weight control (NASH). Aflatoxins: proper food storage. AFP >400 ng/mL highly suggestive, but 40% small tumors normal AFP.',
        fr: 'Dépistage semestriel échographie + AFP en cirrhose ou hépatite B chronique. Vaccination hépatite B universelle. Traitement hépatite C (RVS >95% avec AAD). Éviter alcool, contrôle poids (NASH). Aflatoxines: stockage approprié aliments. AFP >400 ng/mL très évocateur, mais 40% petites tumeurs AFP normale.'
      },
      stats: {
        es: '906K casos/año • Prevención efectiva 70% casos',
        en: '906K cases/year • 70% cases effectively preventable',
        fr: '906K cas/an • 70% cas effectivement évitables'
      }
    },
    {
      disease: {
        es: 'Cáncer de Estómago',
        en: 'Stomach Cancer',
        fr: 'Cancer de l\'Estomac'
      },
      icon: Utensils,
      color: 'indigo',
      recommendation: {
        es: 'Screening H. pylori y erradicación (test urea, serología, antígeno fecal). Dieta: reducir sal <5g/día, aumentar frutas/verduras, evitar ahumados/procesados. Screening endoscópico en áreas alta incidencia >40 años. Síntomas alarma: disfagia, pérdida peso, vómitos persistentes, anemia ferropénica inexplicada.',
        en: 'H. pylori screening and eradication (urea test, serology, stool antigen). Diet: reduce salt <5g/day, increase fruits/vegetables, avoid smoked/processed foods. Endoscopic screening in high-incidence areas >40 years. Alarm symptoms: dysphagia, weight loss, persistent vomiting, unexplained iron deficiency anemia.',
        fr: 'Dépistage H. pylori et éradication (test urée, sérologie, antigène fécal). Régime: réduire sel <5g/jour, augmenter fruits/légumes, éviter fumés/transformés. Dépistage endoscopique zones haute incidence >40 ans. Symptômes alarme: dysphagie, perte poids, vomissements persistants, anémie ferriprive inexpliquée.'
      },
      stats: {
        es: '1.1M casos/año • Reducción incidencia 60% con prevención',
        en: '1.1M cases/year • 60% incidence reduction with prevention',
        fr: '1.1M cas/an • 60% réduction incidence avec prévention'
      }
    },
    {
      disease: {
        es: 'Leucemia',
        en: 'Leukemia',
        fr: 'Leucémie'
      },
      icon: Droplets,
      color: 'red',
      recommendation: {
        es: 'No screening rutinario población general. Evitar exposición benceno, radiación ionizante, quimioterapia previa. Síntomas alarma: fatiga inexplicada, fiebre recurrente, sangrado/moretones fáciles, infecciones frecuentes, adenopatías, pérdida peso. Hemograma con diferencial si sospecha. Genética: síndrome Down, anemia Fanconi, otros.',
        en: 'No routine screening general population. Avoid benzene exposure, ionizing radiation, previous chemotherapy. Alarm symptoms: unexplained fatigue, recurrent fever, easy bleeding/bruising, frequent infections, lymphadenopathy, weight loss. CBC with differential if suspected. Genetics: Down syndrome, Fanconi anemia, others.',
        fr: 'Pas dépistage routinier population générale. Éviter exposition benzène, radiation ionisante, chimiothérapie antérieure. Symptômes alarme: fatigue inexpliquée, fièvre récurrente, saignements/ecchymoses faciles, infections fréquentes, adénopathies, perte poids. NFS avec formule si suspicion. Génétique: syndrome Down, anémie Fanconi, autres.'
      },
      stats: {
        es: '474K casos/año • Supervivencia 65% mejora continua',
        en: '474K cases/year • 65% survival continuous improvement',
        fr: '474K cas/an • 65% survie amélioration continue'
      }
    },
    {
      disease: {
        es: 'Epilepsia',
        en: 'Epilepsy',
        fr: 'Épilepsie'
      },
      icon: Zap,
      color: 'violet',
      recommendation: {
        es: 'Diagnóstico tras 2+ crisis no provocadas separadas >24h o 1 crisis con alto riesgo recurrencia (>60%). EEG inicial y de sueño si normal. RM cerebral estándar oro. Antiepiléptico: monoterapia inicial, objetivo libre crisis 2+ años. Adherencia crucial. Evitar desencadenantes: privación sueño, alcohol, estrés, luces intermitentes.',
        en: 'Diagnosis after 2+ unprovoked seizures separated >24h or 1 seizure with high recurrence risk (>60%). Initial EEG and sleep EEG if normal. Brain MRI gold standard. Antiepileptic: initial monotherapy, target seizure-free 2+ years. Adherence crucial. Avoid triggers: sleep deprivation, alcohol, stress, flashing lights.',
        fr: 'Diagnostic après 2+ crises non provoquées séparées >24h ou 1 crise risque récurrence élevé (>60%). EEG initial et sommeil si normal. IRM cérébrale gold standard. Antiépileptique: monothérapie initiale, objectif libre crises 2+ ans. Adhérence cruciale. Éviter déclencheurs: privation sommeil, alcool, stress, lumières clignotantes.'
      },
      stats: {
        es: '50M personas • Control 70% con medicación apropiada',
        en: '50M people • 70% control with appropriate medication',
        fr: '50M personnes • 70% contrôle avec médication appropriée'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-green-50/30">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Recomendaciones Clínicas Detalladas' :
             language === 'fr' ? 'Recommandations Cliniques Détaillées' :
             'Detailed Clinical Recommendations'}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === 'es' ? 'Guías médicas especializadas basadas en evidencia científica y protocolos clínicos actualizados para las 12 enfermedades críticas analizadas por nuestra IA médica avanzada' :
             language === 'fr' ? 'Guides médicaux spécialisés basés sur preuves scientifiques et protocoles cliniques actualisés pour les 12 maladies critiques analysées par notre IA médicale avancée' :
             'Specialized medical guides based on scientific evidence and updated clinical protocols for the 12 critical diseases analyzed by our advanced medical AI'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {recommendations.map((item, index) => {
            const IconComponent = item.icon;
            const colorClasses = {
              pink: 'from-pink-500 to-rose-500 border-pink-200',
              blue: 'from-blue-500 to-cyan-500 border-blue-200',
              green: 'from-green-500 to-emerald-500 border-green-200',
              red: 'from-red-500 to-pink-500 border-red-200',
              purple: 'from-purple-500 to-violet-500 border-purple-200',
              teal: 'from-teal-500 to-cyan-500 border-teal-200',
              gray: 'from-gray-500 to-slate-500 border-gray-200',
              orange: 'from-orange-500 to-amber-500 border-orange-200',
              yellow: 'from-yellow-500 to-orange-500 border-yellow-200',
              indigo: 'from-indigo-500 to-blue-500 border-indigo-200',
              violet: 'from-violet-500 to-purple-500 border-violet-200'
            };

            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {item.disease[language as keyof typeof item.disease]}
                      </CardTitle>
                      <Badge variant="secondary" className={`bg-${item.color}-100 text-${item.color}-800 border-${item.color}-200`}>
                        {item.stats[language as keyof typeof item.stats]}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {item.recommendation[language as keyof typeof item.recommendation]}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons Section - Fixed colors and shortened text */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'es' ? 'Herramientas IA Médicas' :
             language === 'fr' ? 'Outils IA Médicaux' :
             'Medical AI Tools'}
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'es' ? 'Acceda a diagnóstico IA avanzado y descargue guías clínicas completas' :
             language === 'fr' ? 'Accéder au diagnostic IA avancé et télécharger guides cliniques' :
             'Access advanced AI diagnosis and download complete clinical guides'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                {language === 'es' ? 'Iniciar IA' :
                 language === 'fr' ? 'Démarrer IA' :
                 'Start AI'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/resources">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white border-2 border-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                {language === 'es' ? 'Descargar' :
                 language === 'fr' ? 'Télécharger' :
                 'Download'}
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* General Wellness Section */}
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === 'es' ? 'Medicina Preventiva Integral' :
             language === 'fr' ? 'Médecine Préventive Intégrale' :
             'Comprehensive Preventive Medicine'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-800">
                  {language === 'es' ? 'Nutrición Clínica' :
                   language === 'fr' ? 'Nutrition Clinique' :
                   'Clinical Nutrition'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• {language === 'es' ? 'Patrón mediterráneo: aceite oliva, pescado, frutos secos' : 'Mediterranean pattern: olive oil, fish, nuts'}</li>
                  <li>• {language === 'es' ? 'Omega-3 EPA/DHA 1-2g/día cardioprotección' : 'Omega-3 EPA/DHA 1-2g/day cardioprotection'}</li>
                  <li>• {language === 'es' ? 'Fibra 25-35g/día: prebióticos, control glucémico' : 'Fiber 25-35g/day: prebiotics, glycemic control'}</li>
                  <li>• {language === 'es' ? 'Azúcar <10% calorías totales, <5% óptimo OMS' : 'Sugar <10% total calories, <5% WHO optimal'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-800">
                  {language === 'es' ? 'Ejercicio Terapéutico' :
                   language === 'fr' ? 'Exercice Thérapeutique' :
                   'Therapeutic Exercise'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• {language === 'es' ? 'Aeróbico: 150min moderado o 75min vigoroso/semana' : 'Aerobic: 150min moderate or 75min vigorous/week'}</li>
                  <li>• {language === 'es' ? 'Resistencia: 2+ días/semana, grupos musculares principales' : 'Resistance: 2+ days/week, major muscle groups'}</li>
                  <li>• {language === 'es' ? 'Flexibilidad: 2-3 días/semana, 60seg/estiramiento' : 'Flexibility: 2-3 days/week, 60sec/stretch'}</li>
                  <li>• {language === 'es' ? 'Equilibrio: >65 años, prevención caídas específica' : 'Balance: >65 years, specific fall prevention'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-800">
                  {language === 'es' ? 'Salud Mental Clínica' :
                   language === 'fr' ? 'Santé Mentale Clinique' :
                   'Clinical Mental Health'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>• {language === 'es' ? 'Estrés: técnicas cognitivo-conductuales validadas' : 'Stress: validated cognitive-behavioral techniques'}</li>
                  <li>• {language === 'es' ? 'Sueño: higiene específica, 7-9h adultos, continuidad' : 'Sleep: specific hygiene, 7-9h adults, continuity'}</li>
                  <li>• {language === 'es' ? 'Mindfulness: 8 semanas MBSR, reducción cortisol' : 'Mindfulness: 8-week MBSR, cortisol reduction'}</li>
                  <li>• {language === 'es' ? 'Red social: soporte estructurado, intervención profesional' : 'Social network: structured support, professional intervention'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HealthRecommendations;
