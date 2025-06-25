
import { AnalysisResult, ModelResult, PatientData } from "@/types/chat";

export const generateMockAnalysis = (language: string): AnalysisResult => {
  const modelSources: ModelResult[] = [
    {
      name: 'Diabetes Prediction SystemV3',
      url: 'https://github.com/MorsalinIslamShapon/Diabetes-Prediction-SystemV3',
      confidence: 94,
      prediction: language === 'es' ? 'Alto Riesgo' : language === 'fr' ? 'Risque Élevé' : 'High Risk'
    },
    {
      name: 'Advanced ML Diabetes Model',
      url: 'https://github.com/JitKrNaskar/Diabetes-Prediction',
      confidence: 87,
      prediction: language === 'es' ? 'Riesgo Moderado' : language === 'fr' ? 'Risque Modéré' : 'Moderate Risk'
    },
    {
      name: 'Comprehensive Prediction Model',
      url: 'https://github.com/MYoussef885/Diabetes_Prediction',
      confidence: 96,
      prediction: language === 'es' ? 'Positivo' : language === 'fr' ? 'Positif' : 'Positive'
    },
    {
      name: 'ML-Based Diabetes Detection',
      url: 'https://github.com/aravinda-1402/Diabetes-Prediction-using-Machine-Learning',
      confidence: 91,
      prediction: language === 'es' ? 'Diabetes Tipo 2' : language === 'fr' ? 'Diabète Type 2' : 'Type 2 Diabetes'
    },
    {
      name: 'Kaggle Diabetes Predictor',
      url: 'https://www.kaggle.com/code/mvanshika/diabetes-prediction',
      confidence: 89,
      prediction: language === 'es' ? 'Alta Prioridad' : language === 'fr' ? 'Haute Priorité' : 'High Priority'
    },
    {
      name: 'Advanced ML Implementation',
      url: 'https://www.kaggle.com/code/isilguler/diabetes-prediction-with-machine-learning',
      confidence: 88,
      prediction: language === 'es' ? 'Riesgo Elevado' : language === 'fr' ? 'Risque Élevé' : 'Elevated Risk'
    },
    {
      name: 'Optimized ML Model',
      url: 'https://www.kaggle.com/code/ahmetcankaraolan/diabetes-prediction-using-machine-learning',
      confidence: 90,
      prediction: language === 'es' ? 'Diagnóstico Positivo' : language === 'fr' ? 'Diagnostic Positif' : 'Positive Diagnosis'
    },
    {
      name: 'PyCaret Implementation',
      url: 'https://www.analyticsvidhya.com/blog/2021/07/diabetes-prediction-with-pycaret/',
      confidence: 93,
      prediction: language === 'es' ? 'Síndrome Metabólico' : language === 'fr' ? 'Syndrome Métabolique' : 'Metabolic Syndrome'
    },
    {
      name: 'Deep Learning Model',
      url: 'https://github.com/jarred13/Deeplearning_and_Diabetes',
      confidence: 95,
      prediction: language === 'es' ? 'Diabetes Confirmada' : language === 'fr' ? 'Diabète Confirmé' : 'Diabetes Confirmed'
    }
  ];

  const diagnosisTexts = {
    es: 'Diabetes Tipo 2 con Síndrome Metabólico',
    en: 'Type 2 Diabetes with Metabolic Syndrome',
    fr: 'Diabète Type 2 avec Syndrome Métabolique'
  };

  const riskFactorsTexts = {
    es: [
      'Niveles elevados de glucosa',
      'IMC >30',
      'Antecedentes familiares de diabetes',
      'Estilo de vida sedentario'
    ],
    en: [
      'Elevated glucose levels',
      'BMI >30',
      'Family history of diabetes',
      'Sedentary lifestyle'
    ],
    fr: [
      'Niveaux de glucose élevés',
      'IMC >30',
      'Antécédents familiaux de diabète',
      'Mode de vie sédentaire'
    ]
  };

  const recommendationsTexts = {
    es: [
      'Monitoreo inmediato de glucosa',
      'Consulta nutricional',
      'Inicio de programa de ejercicio',
      'Seguimiento en 2 semanas'
    ],
    en: [
      'Immediate glucose monitoring',
      'Nutritional consultation',
      'Start exercise program',
      'Follow-up in 2 weeks'
    ],
    fr: [
      'Surveillance immédiate du glucose',
      'Consultation nutritionnelle',
      'Début du programme d\'exercice',
      'Suivi dans 2 semaines'
    ]
  };

  return {
    diagnosis: diagnosisTexts[language as keyof typeof diagnosisTexts],
    confidence: 92,
    riskFactors: riskFactorsTexts[language as keyof typeof riskFactorsTexts],
    recommendations: recommendationsTexts[language as keyof typeof recommendationsTexts],
    modelResults: modelSources
  };
};

export const generateEmailReport = (analysisResults: AnalysisResult, patientData: PatientData, language: string): string => {
  const emailTemplates = {
    es: `
REPORTE DE ANÁLISIS MÉDICO - MedAI Platform

Estimado/a Doctor/a,

Se ha completado el análisis predictivo para el paciente utilizando 9 modelos avanzados de Machine Learning.

=== RESUMEN DEL ANÁLISIS ===
Diagnóstico Principal: ${analysisResults.diagnosis}
Nivel de Confianza: ${analysisResults.confidence}%

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

Dear Doctor,

Predictive analysis for the patient has been completed using 9 advanced Machine Learning models.

=== ANALYSIS SUMMARY ===
Primary Diagnosis: ${analysisResults.diagnosis}
Confidence Level: ${analysisResults.confidence}%

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

Cher Docteur,

L'analyse prédictive pour le patient a été complétée en utilisant 9 modèles d'apprentissage automatique avancés.

=== RÉSUMÉ DE L'ANALYSE ===
Diagnostic Principal: ${analysisResults.diagnosis}
Niveau de Confiance: ${analysisResults.confidence}%

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
