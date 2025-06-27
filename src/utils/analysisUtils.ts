import { AnalysisResult, ModelResult, PatientData, DiseaseType } from "@/types/chat";

const diseaseModels = {
  diabetes: [
    { name: 'Diabetes Prediction SystemV3', url: 'https://github.com/MorsalinIslamShapon/Diabetes-Prediction-SystemV3', base: 'Advanced ML Diabetes Model' },
    { name: 'Advanced ML Diabetes Model', url: 'https://github.com/JitKrNaskar/Diabetes-Prediction', base: 'Comprehensive Prediction Model' },
    { name: 'Comprehensive Prediction Model', url: 'https://github.com/MYoussef885/Diabetes_Prediction', base: 'ML-Based Diabetes Detection' },
    { name: 'ML-Based Diabetes Detection', url: 'https://github.com/aravinda-1402/Diabetes-Prediction-using-Machine-Learning', base: 'Kaggle Diabetes Predictor' },
    { name: 'Kaggle Diabetes Predictor', url: 'https://www.kaggle.com/code/mvanshika/diabetes-prediction', base: 'Advanced ML Implementation' }
  ],
  'breast-cancer': [
    { name: 'Breast Cancer Prediction (Mahsa)', url: 'https://www.kaggle.com/code/mahsamirzazadeh/breast-cancer-prediction', base: 'Wisconsin Breast Cancer ML' },
    { name: 'Breast Cancer ML (Aditya)', url: 'https://www.kaggle.com/code/adityasharma007/breast-cancer-prediction-machine-learning', base: 'Karthik Breast Cancer ML' },
    { name: 'Karthik Breast Cancer ML', url: 'https://github.com/karthik-muralidharan/Breast-Cancer-Prediction-Using-Machine-Learning', base: 'Breast Cancer ANN Model' },
    { name: 'Breast Cancer ANN Model', url: 'https://github.com/kawsara/Breast-Cancer-Prediction-ANN', base: 'DK Breast Cancer Prediction' },
    { name: 'DK Breast Cancer Prediction', url: 'https://github.com/dkmurali/Breast-Cancer-Prediction', base: 'WDBC Classification Model' }
  ],
  'prostate-cancer': [
    { name: 'Prostate Cancer Prediction (Uzair)', url: 'https://www.kaggle.com/code/muhammaduzair7860/prostate-cancer-prediction', base: 'Prostate Analysis (Hritik)' },
    { name: 'Prostate Analysis (Hritik)', url: 'https://www.kaggle.com/code/hritik007/prostate-cancer-prediction-analysis', base: 'Priyanka Prostate ML' },
    { name: 'Priyanka Prostate ML', url: 'https://github.com/Priyanka-Mishra01/Prostate-Cancer-Prediction', base: 'Kush Prostate Prediction' },
    { name: 'Kush Prostate Prediction', url: 'https://github.com/Kush-K/Prostate-Cancer-Prediction', base: 'Deep Learning Prostate Model' },
    { name: 'Deep Learning Prostate Model', url: 'https://github.com/dileepreddy-s/Prostate-Cancer-Prediction-using-Deep-Learning', base: 'Advanced Prostate Analytics' }
  ],
  'heart-disease': [
    { name: 'Heart Disease Prediction (Rishabh)', url: 'https://www.kaggle.com/code/rishabhanand1/heart-disease-prediction-98-accuracy', base: 'Heart Disease ML (Harsh)' },
    { name: 'Heart Disease ML (Harsh)', url: 'https://www.kaggle.com/code/harshgupta09/heart-disease-prediction-using-machine-learning', base: 'MDH Heart Disease ML' },
    { name: 'MDH Heart Disease ML', url: 'https://github.com/iammdhk/Heart-Disease-Prediction-Machine-Learning', base: 'Deep Learning Heart Model' },
    { name: 'Deep Learning Heart Model', url: 'https://github.com/Priyanshu73/Heart-Disease-Prediction-Using-Deep-Learning', base: 'Flask Heart Disease App' },
    { name: 'Flask Heart Disease App', url: 'https://github.com/Ankushprasad0/Heart-Disease-Prediction-Flask', base: 'Cardiovascular Risk Assessment' }
  ],
  stroke: [
    { name: 'Stroke Prediction (Prashant)', url: 'https://www.kaggle.com/code/prashant111/stroke-prediction-a-comprehensive-analysis', base: 'Ensemble Stroke Learning' },
    { name: 'Ensemble Stroke Learning', url: 'https://www.kaggle.com/code/arindam1609/stroke-prediction-with-ensemble-learning', base: 'Dharun Stroke ML' },
    { name: 'Dharun Stroke ML', url: 'https://github.com/Dharun19/Stroke-Prediction-Machine-Learning', base: 'Kritagya Stroke Prediction' },
    { name: 'Kritagya Stroke Prediction', url: 'https://github.com/KritagyaJain/Stroke-Prediction', base: 'Adithya Stroke ML' },
    { name: 'Adithya Stroke ML', url: 'https://github.com/AdithyaVardhan-R/Stroke-Prediction-using-ML', base: 'Advanced Stroke Analytics' }
  ],
  'kidney-disease': [
    { name: 'Chronic Kidney Disease (Harsh)', url: 'https://www.kaggle.com/code/singhharsh/chronic-kidney-disease-prediction', base: 'Kidney Disease (Sarita)' },
    { name: 'Kidney Disease (Sarita)', url: 'https://www.kaggle.com/code/saritasingh/chronic-kidney-disease-prediction', base: 'Siddhantsardana Kidney ML' },
    { name: 'Siddhantsardana Kidney ML', url: 'https://github.com/siddhantsardana/Chronic-Kidney-Disease-Prediction', base: 'Yash Kidney Disease ML' },
    { name: 'Yash Kidney Disease ML', url: 'https://github.com/yashgarg444/Chronic-Kidney-Disease-Prediction-ML', base: 'Dharun Kidney ML' },
    { name: 'Dharun Kidney ML', url: 'https://github.com/dharun19/Chronic-Kidney-Disease-Prediction-using-Machine-Learning', base: 'Renal Function Assessment' }
  ],
  'pancreatic-cancer': [
    { name: 'Pancreatic Cancer (Prachi)', url: 'https://www.kaggle.com/code/prachibhave/pancreatic-cancer-prediction', base: 'Pancreatic Risk (Merve)' },
    { name: 'Pancreatic Risk (Merve)', url: 'https://www.kaggle.com/code/mervenur/pancreatic-cancer-risk-prediction', base: 'Pranav Pancreatic ML' },
    { name: 'Pranav Pancreatic ML', url: 'https://github.com/pranavgarg/Pancreatic-Cancer-Prediction-using-Machine-Learning', base: 'Rajesh Pancreatic Prediction' },
    { name: 'Rajesh Pancreatic Prediction', url: 'https://github.com/rajesh-saini/Pancreatic-Cancer-Prediction', base: 'Dharun Pancreatic ML' },
    { name: 'Dharun Pancreatic ML', url: 'https://github.com/dharun19/Pancreatic-Cancer-Prediction-ML', base: 'Advanced Pancreatic Analytics' }
  ]
};

export const generateMockAnalysis = (language: string, diseaseType: DiseaseType): AnalysisResult => {
  const models = diseaseModels[diseaseType] || diseaseModels.diabetes;
  
  const modelSources: ModelResult[] = models.map((model, index) => ({
    name: model.name,
    url: model.url,
    confidence: Math.floor(Math.random() * 15) + 85, // 85-99%
    prediction: generatePrediction(language, diseaseType, index)
  }));

  const diagnosisData = getDiagnosisData(language, diseaseType);
  const riskFactorsData = getRiskFactorsData(language, diseaseType);
  const recommendationsData = getRecommendationsData(language, diseaseType);

  return {
    diagnosis: diagnosisData[Math.floor(Math.random() * diagnosisData.length)],
    confidence: Math.floor(Math.random() * 10) + 88, // 88-97%
    riskFactors: riskFactorsData,
    recommendations: recommendationsData,
    modelResults: modelSources,
    diseaseType
  };
};

const generatePrediction = (language: string, diseaseType: DiseaseType, index: number): string => {
  const predictions = {
    diabetes: {
      es: ['Alto Riesgo', 'Riesgo Moderado', 'Positivo', 'Diabetes Tipo 2', 'Alta Prioridad'],
      en: ['High Risk', 'Moderate Risk', 'Positive', 'Type 2 Diabetes', 'High Priority'],
      fr: ['Risque Élevé', 'Risque Modéré', 'Positif', 'Diabète Type 2', 'Haute Priorité']
    },
    'breast-cancer': {
      es: ['Maligno', 'Alto Riesgo', 'Benigno', 'Sospechoso', 'Requiere Biopsia'],
      en: ['Malignant', 'High Risk', 'Benign', 'Suspicious', 'Biopsy Required'],
      fr: ['Malin', 'Risque Élevé', 'Bénin', 'Suspect', 'Biopsie Requise']
    },
    'prostate-cancer': {
      es: ['PSA Elevado', 'Riesgo Alto', 'Moderado', 'Biopsia Recomendada', 'Vigilancia'],
      en: ['Elevated PSA', 'High Risk', 'Moderate', 'Biopsy Recommended', 'Surveillance'],
      fr: ['PSA Élevé', 'Risque Élevé', 'Modéré', 'Biopsie Recommandée', 'Surveillance']
    },
    'heart-disease': {
      es: ['Riesgo Cardíaco Alto', 'Enfermedad Coronaria', 'Riesgo Moderado', 'Hipertensión', 'Arritmia'],
      en: ['High Cardiac Risk', 'Coronary Disease', 'Moderate Risk', 'Hypertension', 'Arrhythmia'],
      fr: ['Risque Cardiaque Élevé', 'Maladie Coronaire', 'Risque Modéré', 'Hypertension', 'Arythmie']
    },
    stroke: {
      es: ['Alto Riesgo ACV', 'Riesgo Moderado', 'Fibrilación Auricular', 'Hipertensión', 'Trombosis'],
      en: ['High Stroke Risk', 'Moderate Risk', 'Atrial Fibrillation', 'Hypertension', 'Thrombosis'],
      fr: ['Risque AVC Élevé', 'Risque Modéré', 'Fibrillation Auriculaire', 'Hypertension', 'Thrombose']
    },
    'kidney-disease': {
      es: ['ERC Estadio 3', 'Insuficiencia Renal', 'Riesgo Alto', 'Proteinuria', 'Creatinina Elevada'],
      en: ['CKD Stage 3', 'Renal Insufficiency', 'High Risk', 'Proteinuria', 'Elevated Creatinine'],
      fr: ['IRC Stade 3', 'Insuffisance Rénale', 'Risque Élevé', 'Protéinurie', 'Créatinine Élevée']
    },
    'pancreatic-cancer': {
      es: ['Alto Riesgo', 'Masa Sospechosa', 'Marcadores Elevados', 'Biopsia Urgente', 'Seguimiento'],
      en: ['High Risk', 'Suspicious Mass', 'Elevated Markers', 'Urgent Biopsy', 'Follow-up'],
      fr: ['Risque Élevé', 'Masse Suspecte', 'Marqueurs Élevés', 'Biopsie Urgente', 'Suivi']
    }
  };

  const langPredictions = predictions[diseaseType]?.[language as keyof typeof predictions[typeof diseaseType]] || predictions.diabetes.en;
  return langPredictions[index % langPredictions.length];
};

const getDiagnosisData = (language: string, diseaseType: DiseaseType): string[] => {
  const diagnoses = {
    diabetes: {
      es: ['Diabetes Tipo 2 con Síndrome Metabólico', 'Prediabetes con Resistencia a la Insulina', 'Diabetes Mellitus Tipo 2'],
      en: ['Type 2 Diabetes with Metabolic Syndrome', 'Prediabetes with Insulin Resistance', 'Type 2 Diabetes Mellitus'],
      fr: ['Diabète Type 2 avec Syndrome Métabolique', 'Prédiabète avec Résistance à l\'Insuline', 'Diabète Sucré Type 2']
    },
    'breast-cancer': {
      es: ['Carcinoma Ductal Invasivo', 'Neoplasia Mamaria de Alto Riesgo', 'Carcinoma Lobular Infiltrante'],
      en: ['Invasive Ductal Carcinoma', 'High-Risk Breast Neoplasia', 'Infiltrating Lobular Carcinoma'],
      fr: ['Carcinome Canalaire Invasif', 'Néoplasie Mammaire à Haut Risque', 'Carcinome Lobulaire Infiltrant']
    },
    'prostate-cancer': {
      es: ['Adenocarcinoma de Próstata', 'Neoplasia Prostática Intraepitelial', 'Cáncer de Próstata Localizado'],
      en: ['Prostate Adenocarcinoma', 'Prostatic Intraepithelial Neoplasia', 'Localized Prostate Cancer'],
      fr: ['Adénocarcinome de la Prostate', 'Néoplasie Intraépithéliale Prostatique', 'Cancer de la Prostate Localisé']
    },
    'heart-disease': {
      es: ['Enfermedad Coronaria Multivaso', 'Cardiopatía Isquémica', 'Insuficiencia Cardíaca Congestiva'],
      en: ['Multi-vessel Coronary Disease', 'Ischemic Heart Disease', 'Congestive Heart Failure'],
      fr: ['Maladie Coronaire Multi-vaisseaux', 'Cardiopathie Ischémique', 'Insuffisance Cardiaque Congestive']
    },
    stroke: {
      es: ['Alto Riesgo de Accidente Cerebrovascular', 'Isquemia Cerebral Transitoria', 'Riesgo de ACV Embólico'],
      en: ['High Stroke Risk', 'Transient Cerebral Ischemia', 'Embolic Stroke Risk'],
      fr: ['Risque Élevé d\'AVC', 'Ischémie Cérébrale Transitoire', 'Risque d\'AVC Embolique']
    },
    'kidney-disease': {
      es: ['Enfermedad Renal Crónica Estadio 3', 'Nefropatía Diabética', 'Insuficiencia Renal Moderada'],
      en: ['Chronic Kidney Disease Stage 3', 'Diabetic Nephropathy', 'Moderate Renal Insufficiency'],
      fr: ['Maladie Rénale Chronique Stade 3', 'Néphropathie Diabétique', 'Insuffisance Rénale Modérée']
    },
    'pancreatic-cancer': {
      es: ['Adenocarcinoma Pancreático', 'Neoplasia Pancreática de Alto Riesgo', 'Tumor Pancreático Sospechoso'],
      en: ['Pancreatic Adenocarcinoma', 'High-Risk Pancreatic Neoplasia', 'Suspicious Pancreatic Tumor'],
      fr: ['Adénocarcinome Pancréatique', 'Néoplasie Pancréatique à Haut Risque', 'Tumeur Pancréatique Suspecte']
    }
  };

  return diagnoses[diseaseType]?.[language as keyof typeof diagnoses[typeof diseaseType]] || diagnoses.diabetes.en;
};

const getRiskFactorsData = (language: string, diseaseType: DiseaseType): string[] => {
  const riskFactors = {
    diabetes: {
      es: ['Niveles elevados de glucosa', 'IMC >30', 'Antecedentes familiares de diabetes', 'Estilo de vida sedentario'],
      en: ['Elevated glucose levels', 'BMI >30', 'Family history of diabetes', 'Sedentary lifestyle'],
      fr: ['Niveaux de glucose élevés', 'IMC >30', 'Antécédents familiaux de diabète', 'Mode de vie sédentaire']
    },
    'breast-cancer': {
      es: ['Mutaciones BRCA1/BRCA2', 'Edad >50 años', 'Densidad mamaria alta', 'Terapia hormonal prolongada'],
      en: ['BRCA1/BRCA2 mutations', 'Age >50 years', 'High breast density', 'Prolonged hormone therapy'],
      fr: ['Mutations BRCA1/BRCA2', 'Âge >50 ans', 'Densité mammaire élevée', 'Thérapie hormonale prolongée']
    },
    'prostate-cancer': {
      es: ['PSA elevado >4 ng/ml', 'Edad >65 años', 'Antecedentes familiares', 'Dieta alta en grasas'],
      en: ['Elevated PSA >4 ng/ml', 'Age >65 years', 'Family history', 'High-fat diet'],
      fr: ['PSA élevé >4 ng/ml', 'Âge >65 ans', 'Antécédents familiaux', 'Régime riche en graisses']
    },
    'heart-disease': {
      es: ['Colesterol LDL >130 mg/dl', 'Presión arterial >140/90', 'Tabaquismo activo', 'Diabetes mellitus'],
      en: ['LDL cholesterol >130 mg/dl', 'Blood pressure >140/90', 'Active smoking', 'Diabetes mellitus'],
      fr: ['Cholestérol LDL >130 mg/dl', 'Tension artérielle >140/90', 'Tabagisme actif', 'Diabète sucré']
    },
    stroke: {
      es: ['Fibrilación auricular', 'Hipertensión no controlada', 'Estenosis carotídea', 'Anticoagulación inadecuada'],
      en: ['Atrial fibrillation', 'Uncontrolled hypertension', 'Carotid stenosis', 'Inadequate anticoagulation'],
      fr: ['Fibrillation auriculaire', 'Hypertension non contrôlée', 'Sténose carotidienne', 'Anticoagulation inadéquate']
    },
    'kidney-disease': {
      es: ['Creatinina sérica elevada', 'Proteinuria persistente', 'Hipertensión refractaria', 'Diabetes no controlada'],
      en: ['Elevated serum creatinine', 'Persistent proteinuria', 'Refractory hypertension', 'Uncontrolled diabetes'],
      fr: ['Créatinine sérique élevée', 'Protéinurie persistante', 'Hypertension réfractaire', 'Diabète non contrôlé']
    },
    'pancreatic-cancer': {
      es: ['CA 19-9 elevado', 'Pérdida de peso inexplicada', 'Dolor abdominal persistente', 'Diabetes de inicio reciente'],
      en: ['Elevated CA 19-9', 'Unexplained weight loss', 'Persistent abdominal pain', 'New-onset diabetes'],
      fr: ['CA 19-9 élevé', 'Perte de poids inexpliquée', 'Douleur abdominale persistante', 'Diabète d\'apparition récente']
    }
  };

  return riskFactors[diseaseType]?.[language as keyof typeof riskFactors[typeof diseaseType]] || riskFactors.diabetes.en;
};

const getRecommendationsData = (language: string, diseaseType: DiseaseType): string[] => {
  const recommendations = {
    diabetes: {
      es: ['Monitoreo inmediato de glucosa', 'Consulta nutricional', 'Inicio de programa de ejercicio', 'Seguimiento en 2 semanas'],
      en: ['Immediate glucose monitoring', 'Nutritional consultation', 'Start exercise program', 'Follow-up in 2 weeks'],
      fr: ['Surveillance immédiate du glucose', 'Consultation nutritionnelle', 'Début du programme d\'exercice', 'Suivi dans 2 semaines']
    },
    'breast-cancer': {
      es: ['Mamografía diagnóstica urgente', 'Biopsia con aguja gruesa', 'Consulta oncológica', 'Estudio genético BRCA'],
      en: ['Urgent diagnostic mammography', 'Core needle biopsy', 'Oncology consultation', 'BRCA genetic testing'],
      fr: ['Mammographie diagnostique urgente', 'Biopsie à l\'aiguille', 'Consultation oncologique', 'Test génétique BRCA']
    },
    'prostate-cancer': {
      es: ['Biopsia prostática guiada', 'Resonancia magnética pélvica', 'Consulta urológica especializada', 'Monitoreo PSA mensual'],
      en: ['Guided prostate biopsy', 'Pelvic MRI', 'Specialized urology consultation', 'Monthly PSA monitoring'],
      fr: ['Biopsie prostatique guidée', 'IRM pelvienne', 'Consultation urologique spécialisée', 'Surveillance PSA mensuelle']
    },
    'heart-disease': {
      es: ['Cateterismo cardíaco', 'Ecocardiograma de estrés', 'Control lipídico estricto', 'Rehabilitación cardíaca'],
      en: ['Cardiac catheterization', 'Stress echocardiogram', 'Strict lipid control', 'Cardiac rehabilitation'],
      fr: ['Cathétérisme cardiaque', 'Échocardiogramme de stress', 'Contrôle lipidique strict', 'Réhabilitation cardiaque']
    },
    stroke: {
      es: ['Anticoagulación inmediata', 'Doppler carotídeo', 'Control de presión arterial', 'Consulta neurológica urgente'],
      en: ['Immediate anticoagulation', 'Carotid Doppler', 'Blood pressure control', 'Urgent neurology consultation'],
      fr: ['Anticoagulation immédiate', 'Doppler carotidien', 'Contrôle de la tension artérielle', 'Consultation neurologique urgente']
    },
    'kidney-disease': {
      es: ['Restricción proteica', 'Control de fósforo y potasio', 'Preparación para diálisis', 'Consulta nefrológica'],
      en: ['Protein restriction', 'Phosphorus and potassium control', 'Dialysis preparation', 'Nephrology consultation'],
      fr: ['Restriction protéique', 'Contrôle du phosphore et potassium', 'Préparation à la dialyse', 'Consultation néphrologique']
    },
    'pancreatic-cancer': {
      es: ['TC abdominal con contraste', 'Marcadores tumorales seriados', 'Consulta oncológica urgente', 'Evaluación quirúrgica'],
      en: ['Contrast-enhanced abdominal CT', 'Serial tumor markers', 'Urgent oncology consultation', 'Surgical evaluation'],
      fr: ['Scanner abdominal avec contraste', 'Marqueurs tumoraux sériés', 'Consultation oncologique urgente', 'Évaluation chirurgicale']
    }
  };

  return recommendations[diseaseType]?.[language as keyof typeof recommendations[typeof diseaseType]] || recommendations.diabetes.en;
};

export const generateEmailReport = (analysisResults: AnalysisResult, patientData: PatientData, language: string): string => {
  const emailTemplates = {
    es: `
REPORTE DE ANÁLISIS MÉDICO - MedAI Platform
Tipo de Análisis: ${analysisResults.diseaseType.toUpperCase()}

Estimado/a Doctor/a,

Se ha completado el análisis predictivo para ${analysisResults.diseaseType} utilizando 5 modelos avanzados de Machine Learning.

=== RESUMEN DEL ANÁLISIS ===
Diagnóstico Principal: ${analysisResults.diagnosis}
Nivel de Confianza: ${analysisResults.confidence}%
Tipo de Enfermedad: ${analysisResults.diseaseType}

=== SÍNTOMAS REPORTADOS ===
${patientData.symptoms.join(', ')}

=== RESULTADOS DE LABORATORIO ===
${patientData.labResults.join(', ')}

=== FACTORES DE RIESGO IDENTIFICADOS ===
${analysisResults.riskFactors.map((factor: string, index: number) => `${index + 1}. ${factor}`).join('\n')}

=== RECOMENDACIONES MÉDICAS ===
${analysisResults.recommendations.map((rec: string, index: number) => `${index + 1}. ${rec}`).join('\n')}

=== RESULTADOS POR MODELO ===
${analysisResults.modelResults.map((result: any, index: number) => 
  `${index + 1}. ${result.name}: ${result.prediction} (${result.confidence}% confianza)`
).join('\n')}

Este reporte ha sido generado automáticamente por MedAI Platform.
Para más información, visite: https://medai.platform

Saludos cordiales,
Sistema MedAI
    `,
    en: `
MEDICAL ANALYSIS REPORT - MedAI Platform
Analysis Type: ${analysisResults.diseaseType.toUpperCase()}

Dear Doctor,

Predictive analysis for ${analysisResults.diseaseType} has been completed using 5 advanced Machine Learning models.

=== ANALYSIS SUMMARY ===
Primary Diagnosis: ${analysisResults.diagnosis}
Confidence Level: ${analysisResults.confidence}%
Disease Type: ${analysisResults.diseaseType}

=== REPORTED SYMPTOMS ===
${patientData.symptoms.join(', ')}

=== LABORATORY RESULTS ===
${patientData.labResults.join(', ')}

=== IDENTIFIED RISK FACTORS ===
${analysisResults.riskFactors.map((factor: string, index: number) => `${index + 1}. ${factor}`).join('\n')}

=== MEDICAL RECOMMENDATIONS ===
${analysisResults.recommendations.map((rec: string, index: number) => `${index + 1}. ${rec}`).join('\n')}

=== RESULTS BY MODEL ===
${analysisResults.modelResults.map((result: any, index: number) => 
  `${index + 1}. ${result.name}: ${result.prediction} (${result.confidence}% confidence)`
).join('\n')}

This report has been automatically generated by MedAI Platform.
For more information, visit: https://medai.platform

Best regards,
MedAI System
    `,
    fr: `
RAPPORT D'ANALYSE MÉDICALE - Plateforme MedAI
Type d'Analyse: ${analysisResults.diseaseType.toUpperCase()}

Cher Docteur,

L'analyse prédictive pour ${analysisResults.diseaseType} a été complétée en utilisant 5 modèles d'apprentissage automatique avancés.

=== RÉSUMÉ DE L'ANALYSE ===
Diagnostic Principal: ${analysisResults.diagnosis}
Niveau de Confiance: ${analysisResults.confidence}%
Type de Maladie: ${analysisResults.diseaseType}

=== SYMPTÔMES RAPPORTÉS ===
${patientData.symptoms.join(', ')}

=== RÉSULTATS DE LABORATOIRE ===
${patientData.labResults.join(', ')}

=== FACTEURS DE RISQUE IDENTIFIÉS ===
${analysisResults.riskFactors.map((factor: string, index: number) => `${index + 1}. ${factor}`).join('\n')}

=== RECOMMANDATIONS MÉDICALES ===
${analysisResults.recommendations.map((rec: string, index: number) => `${index + 1}. ${rec}`).join('\n')}

=== RÉSULTATS PAR MODÈLE ===
${analysisResults.modelResults.map((result: any, index: number) => 
  `${index + 1}. ${result.name}: ${result.prediction} (${result.confidence}% confiance)`
).join('\n')}

Ce rapport a été généré automatiquement par la Plateforme MedAI.
Pour plus d'informations, visitez: https://medai.platform

Cordialement,
Système MedAI
    `
  };

  return emailTemplates[language as keyof typeof emailTemplates];
};

export const parseDemographics = (input: string) => {
  const demographics: any = {};
  const ageMatch = input.match(/(\d+)\s*(?:years?|yrs?|y\.o\.?|años?|ans?)/i);
  if (ageMatch) demographics.age = parseInt(ageMatch[1]);
  
  const genderMatch = input.match(/\b(male|female|m|f|masculino|femenino|homme|femme)\b/i);
  if (genderMatch) demographics.gender = genderMatch[1].toLowerCase();
  
  const weightMatch = input.match(/(\d+(?:\.\d+)?)\s*(?:kg|lbs?|pounds?|libras?)/i);
  if (weightMatch) demographics.weight = parseFloat(weightMatch[1]);
  
  return demographics;
};
