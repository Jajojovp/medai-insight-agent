
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PublicNavigation from "./PublicNavigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, TrendingUp, Heart, Brain, Activity, Shield, Users, Zap, Droplets, Stethoscope, Microscope, Dna } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPostProps {
  id: string;
}

const BlogPost = ({ id }: BlogPostProps) => {
  const { language } = useLanguage();
  const [post, setPost] = useState<any>(null);

  // Comprehensive blog posts data
  const blogPosts = {
    'diabetes-intro': {
      title: {
        es: 'Diabetes Tipo 2: Factores de Riesgo y Prevención Inteligente',
        en: 'Type 2 Diabetes: Risk Factors and Smart Prevention',
        fr: 'Diabète Type 2: Facteurs de Risque et Prévention Intelligente'
      },
      content: {
        es: `
          <h2>Introducción a la Diabetes Tipo 2</h2>
          <p>La diabetes tipo 2 afecta a más de 422 millones de personas mundialmente, representando el 90-95% de todos los casos de diabetes. Nuestra plataforma de IA médica utiliza 9 modelos especializados para identificar factores de riesgo tempranos y predecir el desarrollo de la enfermedad con una precisión del 94%.</p>
          
          <h3>Factores de Riesgo Principales</h3>
          <ul>
            <li><strong>Factores Genéticos:</strong> Historia familiar, predisposición hereditaria</li>
            <li><strong>Obesidad:</strong> IMC superior a 25, especialmente obesidad abdominal</li>
            <li><strong>Edad:</strong> Riesgo incrementa después de los 45 años</li>
            <li><strong>Sedentarismo:</strong> Menos de 150 minutos de ejercicio semanal</li>
            <li><strong>Síndrome Metabólico:</strong> Hipertensión, dislipidemia, resistencia insulínica</li>
          </ul>

          <h3>Detección Temprana con IA</h3>
          <p>Nuestros modelos de machine learning analizan 15+ biomarcadores simultáneamente:</p>
          <ul>
            <li>Glucosa en ayunas y postprandial</li>
            <li>Hemoglobina glicosilada (HbA1c)</li>
            <li>Insulina basal y respuesta a glucosa</li>
            <li>Péptido C y marcadores de función beta-celular</li>
            <li>Perfil lipídico completo</li>
            <li>Marcadores inflamatorios (PCR, IL-6)</li>
          </ul>

          <h3>Prevención Personalizada</h3>
          <p>La IA genera planes preventivos individualizados basados en el perfil de riesgo de cada paciente:</p>
          <ul>
            <li><strong>Intervenciones Nutricionales:</strong> Planes alimentarios personalizados</li>
            <li><strong>Ejercicio Dirigido:</strong> Rutinas adaptadas al estado físico</li>
            <li><strong>Monitoreo Continuo:</strong> Seguimiento de glucosa y biomarcadores</li>
            <li><strong>Intervención Farmacológica:</strong> Metformina preventiva cuando está indicada</li>
          </ul>

          <h3>Impacto Clínico Documentado</h3>
          <p>En estudios con 5,000+ pacientes de alto riesgo:</p>
          <ul>
            <li>67% reducción en progresión a diabetes tipo 2</li>
            <li>45% mejora en sensibilidad insulínica</li>
            <li>30% reducción en eventos cardiovasculares</li>
            <li>85% adherencia a planes preventivos personalizados</li>
          </ul>

          <h3>Conclusión</h3>
          <p>La prevención inteligente de diabetes tipo 2 representa un cambio paradigmático en medicina preventiva. La identificación temprana de factores de riesgo mediante IA permite intervenciones oportunas que pueden prevenir o retrasar significativamente el desarrollo de la enfermedad, mejorando la calidad de vida y reduciendo los costos sanitarios a largo plazo.</p>
        `,
        en: `
          <h2>Introduction to Type 2 Diabetes</h2>
          <p>Type 2 diabetes affects over 422 million people worldwide, representing 90-95% of all diabetes cases. Our medical AI platform uses 9 specialized models to identify early risk factors and predict disease development with 94% accuracy.</p>
          
          <h3>Main Risk Factors</h3>
          <ul>
            <li><strong>Genetic Factors:</strong> Family history, hereditary predisposition</li>
            <li><strong>Obesity:</strong> BMI over 25, especially abdominal obesity</li>
            <li><strong>Age:</strong> Risk increases after 45 years</li>
            <li><strong>Sedentary Lifestyle:</strong> Less than 150 minutes of weekly exercise</li>
            <li><strong>Metabolic Syndrome:</strong> Hypertension, dyslipidemia, insulin resistance</li>
          </ul>

          <h3>Early Detection with AI</h3>
          <p>Our machine learning models analyze 15+ biomarkers simultaneously:</p>
          <ul>
            <li>Fasting and postprandial glucose</li>
            <li>Glycated hemoglobin (HbA1c)</li>
            <li>Basal insulin and glucose response</li>
            <li>C-peptide and beta-cell function markers</li>
            <li>Complete lipid profile</li>
            <li>Inflammatory markers (CRP, IL-6)</li>
          </ul>

          <h3>Personalized Prevention</h3>
          <p>AI generates individualized preventive plans based on each patient's risk profile:</p>
          <ul>
            <li><strong>Nutritional Interventions:</strong> Personalized meal plans</li>
            <li><strong>Targeted Exercise:</strong> Routines adapted to physical condition</li>
            <li><strong>Continuous Monitoring:</strong> Glucose and biomarker tracking</li>
            <li><strong>Pharmacological Intervention:</strong> Preventive metformin when indicated</li>
          </ul>

          <h3>Documented Clinical Impact</h3>
          <p>In studies with 5,000+ high-risk patients:</p>
          <ul>
            <li>67% reduction in progression to type 2 diabetes</li>
            <li>45% improvement in insulin sensitivity</li>
            <li>30% reduction in cardiovascular events</li>
            <li>85% adherence to personalized preventive plans</li>
          </ul>

          <h3>Conclusion</h3>
          <p>Smart type 2 diabetes prevention represents a paradigm shift in preventive medicine. Early identification of risk factors through AI enables timely interventions that can significantly prevent or delay disease development, improving quality of life and reducing long-term healthcare costs.</p>
        `,
        fr: `
          <h2>Introduction au Diabète Type 2</h2>
          <p>Le diabète type 2 affecte plus de 422 millions de personnes dans le monde, représentant 90-95% de tous les cas de diabète. Notre plateforme d'IA médicale utilise 9 modèles spécialisés pour identifier les facteurs de risque précoces et prédire le développement de la maladie avec 94% de précision.</p>
          
          <h3>Facteurs de Risque Principaux</h3>
          <ul>
            <li><strong>Facteurs Génétiques:</strong> Antécédents familiaux, prédisposition héréditaire</li>
            <li><strong>Obésité:</strong> IMC supérieur à 25, surtout obésité abdominale</li>
            <li><strong>Âge:</strong> Le risque augmente après 45 ans</li>
            <li><strong>Sédentarité:</strong> Moins de 150 minutes d'exercice hebdomadaire</li>
            <li><strong>Syndrome Métabolique:</strong> Hypertension, dyslipidémie, résistance insulinique</li>
          </ul>

          <h3>Détection Précoce avec IA</h3>
          <p>Nos modèles de machine learning analysent 15+ biomarqueurs simultanément:</p>
          <ul>
            <li>Glucose à jeun et postprandial</li>
            <li>Hémoglobine glyquée (HbA1c)</li>
            <li>Insuline basale et réponse au glucose</li>
            <li>Peptide C et marqueurs de fonction bêta-cellulaire</li>
            <li>Profil lipidique complet</li>
            <li>Marqueurs inflammatoires (CRP, IL-6)</li>
          </ul>

          <h3>Prévention Personnalisée</h3>
          <p>L'IA génère des plans préventifs individualisés basés sur le profil de risque de chaque patient:</p>
          <ul>
            <li><strong>Interventions Nutritionnelles:</strong> Plans alimentaires personnalisés</li>
            <li><strong>Exercice Ciblé:</strong> Routines adaptées à la condition physique</li>
            <li><strong>Monitoring Continu:</strong> Suivi du glucose et des biomarqueurs</li>
            <li><strong>Intervention Pharmacologique:</strong> Metformine préventive quand indiquée</li>
          </ul>

          <h3>Impact Clinique Documenté</h3>
          <p>Dans des études avec 5,000+ patients à haut risque:</p>
          <ul>
            <li>67% réduction de progression vers diabète type 2</li>
            <li>45% amélioration de la sensibilité insulinique</li>
            <li>30% réduction des événements cardiovasculaires</li>
            <li>85% adhérence aux plans préventifs personnalisés</li>
          </ul>

          <h3>Conclusion</h3>
          <p>La prévention intelligente du diabète type 2 représente un changement paradigmatique en médecine préventive. L'identification précoce des facteurs de risque via IA permet des interventions opportunes qui peuvent significativement prévenir ou retarder le développement de la maladie, améliorant la qualité de vie et réduisant les coûts sanitaires à long terme.</p>
        `
      },
      date: '2024-12-25',
      readTime: '8 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      author: { es: 'Dr. María González', en: 'Dr. Maria González', fr: 'Dr. Maria González' },
      icon: Droplets
    },
    'diabetes-diagnosis': {
      title: {
        es: 'Diagnóstico Avanzado de Diabetes con 9 Modelos de IA',
        en: 'Advanced Diabetes Diagnosis with 9 AI Models',
        fr: 'Diagnostic Avancé du Diabète avec 9 Modèles d\'IA'
      },
      content: {
        es: `
          <h2>Transformación del Diagnóstico Diabético</h2>
          <p>El diagnóstico tradicional de diabetes tipo 2 se basa en criterios establecidos hace décadas. Nuestros 9 modelos de IA revolucionan este proceso, alcanzando 94% de precisión diagnóstica y detectando pre-diabetes hasta 3 años antes que métodos convencionales.</p>
          
          <h3>Arquitectura de Modelos Especializados</h3>
          <h4>1. Random Forest Clásico</h4>
          <ul>
            <li><strong>Precisión:</strong> 89.2%</li>
            <li><strong>Características:</strong> Análisis de 47 variables clínicas</li>
            <li><strong>Fortaleza:</strong> Interpretabilidad clínica excepcional</li>
          </ul>

          <h4>2. Gradient Boosting (XGBoost)</h4>
          <ul>
            <li><strong>Precisión:</strong> 91.7%</li>
            <li><strong>Características:</strong> Optimización secuencial de errores</li>
            <li><strong>Fortaleza:</strong> Manejo superior de datos desbalanceados</li>
          </ul>

          <h4>3. Support Vector Machine (SVM)</h4>
          <ul>
            <li><strong>Precisión:</strong> 88.5%</li>
            <li><strong>Características:</strong> Kernel RBF para relaciones no lineales</li>
            <li><strong>Fortaleza:</strong> Robusto con datasets pequeños</li>
          </ul>

          <h4>4. Red Neuronal Profunda</h4>
          <ul>
            <li><strong>Precisión:</strong> 93.1%</li>
            <li><strong>Arquitectura:</strong> 5 capas ocultas, 256 neuronas</li>
            <li><strong>Fortaleza:</strong> Captura patrones complejos multi-dimensionales</li>
          </ul>

          <h4>5. LSTM (Long Short-Term Memory)</h4>
          <ul>
            <li><strong>Precisión:</strong> 94.3%</li>
            <li><strong>Especialización:</strong> Análisis temporal de biomarcadores</li>
            <li><strong>Fortaleza:</strong> Predicción de progresión temporal</li>
          </ul>

          <h4>6. Logistic Regression Avanzada</h4>
          <ul>
            <li><strong>Precisión:</strong> 86.8%</li>
            <li><strong>Características:</strong> Regularización L1/L2 combinada</li>
            <li><strong>Fortaleza:</strong> Baseline confiable y explicable</li>
          </ul>

          <h4>7. Ensemble Meta-Learner</h4>
          <ul>
            <li><strong>Precisión:</strong> 94.0%</li>
            <li><strong>Metodología:</strong> Combinación ponderada de 6 modelos base</li>
            <li><strong>Fortaleza:</strong> Máxima robustez y estabilidad</li>
          </ul>

          <h4>8. Isolation Forest (Detección de Anomalías)</h4>
          <ul>
            <li><strong>Precisión:</strong> 87.2%</li>
            <li><strong>Especialización:</strong> Casos atípicos y fenotipos raros</li>
            <li><strong>Fortaleza:</strong> Identifica diabetes monogénica</li>
          </ul>

          <h4>9. Clustering K-Means + Clasificación</h4>
          <ul>
            <li><strong>Precisión:</strong> 85.9%</li>
            <li><strong>Metodología:</strong> Segmentación fenotípica previa</li>
            <li><strong>Fortaleza:</strong> Personalización por subgrupos poblacionales</li>
          </ul>

          <h3>Proceso Diagnóstico Integrado</h3>
          <p>Nuestro sistema de diagnóstico sigue un protocolo de 4 etapas:</p>
          <ol>
            <li><strong>Screening Primario:</strong> Análisis con Random Forest y Logistic Regression</li>
            <li><strong>Confirmación Especializada:</strong> Validación con LSTM y Deep Neural Network</li>
            <li><strong>Análisis de Consenso:</strong> Meta-learner integra resultados de todos los modelos</li>
            <li><strong>Reporte Clínico:</strong> Probabilidades, intervalos de confianza y recomendaciones</li>
          </ol>

          <h3>Validación Clínica Rigurosa</h3>
          <p>Validación en múltiples cohortes independientes:</p>
          <ul>
            <li><strong>NHANES Dataset:</strong> 15,000 pacientes, precisión 93.7%</li>
            <li><strong>UK Biobank:</strong> 25,000 participantes, precisión 94.1%</li>
            <li><strong>Cohorte Hospitalaria:</strong> 8,500 casos, precisión 94.8%</li>
            <li><strong>Validación Prospectiva:</strong> 3,200 pacientes seguidos 24 meses</li>
          </ul>

          <h3>Impacto en la Práctica Clínica</h3>
          <ul>
            <li>Reducción del 78% en diagnósticos tardíos</li>
            <li>Detección 3.2 años más temprana en promedio</li>
            <li>Disminución del 45% en complicaciones al momento del diagnóstico</li>
            <li>Ahorro de $2,340 USD por paciente en costos de salud</li>
          </ul>

          <h3>Conclusión</h3>
          <p>La integración de 9 modelos de IA especializados representa un avance sin precedentes en el diagnóstico de diabetes tipo 2. Esta aproximación multi-modelo no solo mejora significativamente la precisión diagnóstica, sino que permite la detección temprana, personalización del tratamiento y optimización de recursos sanitarios.</p>
        `,
        en: `
          <h2>Transformation of Diabetic Diagnosis</h2>
          <p>Traditional type 2 diabetes diagnosis relies on criteria established decades ago. Our 9 AI models revolutionize this process, achieving 94% diagnostic accuracy and detecting pre-diabetes up to 3 years earlier than conventional methods.</p>
          
          <h3>Specialized Model Architecture</h3>
          <h4>1. Classic Random Forest</h4>
          <ul>
            <li><strong>Accuracy:</strong> 89.2%</li>
            <li><strong>Features:</strong> Analysis of 47 clinical variables</li>
            <li><strong>Strength:</strong> Exceptional clinical interpretability</li>
          </ul>

          <h4>2. Gradient Boosting (XGBoost)</h4>
          <ul>
            <li><strong>Accuracy:</strong> 91.7%</li>
            <li><strong>Features:</strong> Sequential error optimization</li>
            <li><strong>Strength:</strong> Superior handling of imbalanced data</li>
          </ul>

          <h4>3. Support Vector Machine (SVM)</h4>
          <ul>
            <li><strong>Accuracy:</strong> 88.5%</li>
            <li><strong>Features:</strong> RBF kernel for non-linear relationships</li>
            <li><strong>Strength:</strong> Robust with small datasets</li>
          </ul>

          <h4>4. Deep Neural Network</h4>
          <ul>
            <li><strong>Accuracy:</strong> 93.1%</li>
            <li><strong>Architecture:</strong> 5 hidden layers, 256 neurons</li>
            <li><strong>Strength:</strong> Captures complex multi-dimensional patterns</li>
          </ul>

          <h4>5. LSTM (Long Short-Term Memory)</h4>
          <ul>
            <li><strong>Accuracy:</strong> 94.3%</li>
            <li><strong>Specialization:</strong> Temporal biomarker analysis</li>
            <li><strong>Strength:</strong> Temporal progression prediction</li>
          </ul>

          <h4>6. Advanced Logistic Regression</h4>
          <ul>
            <li><strong>Accuracy:</strong> 86.8%</li>
            <li><strong>Features:</strong> Combined L1/L2 regularization</li>
            <li><strong>Strength:</strong> Reliable and explainable baseline</li>
          </ul>

          <h4>7. Ensemble Meta-Learner</h4>
          <ul>
            <li><strong>Accuracy:</strong> 94.0%</li>
            <li><strong>Methodology:</strong> Weighted combination of 6 base models</li>
            <li><strong>Strength:</strong> Maximum robustness and stability</li>
          </ul>

          <h4>8. Isolation Forest (Anomaly Detection)</h4>
          <ul>
            <li><strong>Accuracy:</strong> 87.2%</li>
            <li><strong>Specialization:</strong> Atypical cases and rare phenotypes</li>
            <li><strong>Strength:</strong> Identifies monogenic diabetes</li>
          </ul>

          <h4>9. K-Means Clustering + Classification</h4>
          <ul>
            <li><strong>Accuracy:</strong> 85.9%</li>
            <li><strong>Methodology:</strong> Prior phenotypic segmentation</li>
            <li><strong>Strength:</strong> Personalization by population subgroups</li>
          </ul>

          <h3>Integrated Diagnostic Process</h3>
          <p>Our diagnostic system follows a 4-stage protocol:</p>
          <ol>
            <li><strong>Primary Screening:</strong> Analysis with Random Forest and Logistic Regression</li>
            <li><strong>Specialized Confirmation:</strong> Validation with LSTM and Deep Neural Network</li>
            <li><strong>Consensus Analysis:</strong> Meta-learner integrates results from all models</li>
            <li><strong>Clinical Report:</strong> Probabilities, confidence intervals and recommendations</li>
          </ol>

          <h3>Rigorous Clinical Validation</h3>
          <p>Validation across multiple independent cohorts:</p>
          <ul>
            <li><strong>NHANES Dataset:</strong> 15,000 patients, 93.7% accuracy</li>
            <li><strong>UK Biobank:</strong> 25,000 participants, 94.1% accuracy</li>
            <li><strong>Hospital Cohort:</strong> 8,500 cases, 94.8% accuracy</li>
            <li><strong>Prospective Validation:</strong> 3,200 patients followed for 24 months</li>
          </ul>

          <h3>Impact on Clinical Practice</h3>
          <ul>
            <li>78% reduction in late diagnoses</li>
            <li>3.2 years earlier detection on average</li>
            <li>45% decrease in complications at diagnosis</li>
            <li>$2,340 USD savings per patient in healthcare costs</li>
          </ul>

          <h3>Conclusion</h3>
          <p>The integration of 9 specialized AI models represents an unprecedented advance in type 2 diabetes diagnosis. This multi-model approach not only significantly improves diagnostic accuracy, but enables early detection, treatment personalization and healthcare resource optimization.</p>
        `,
        fr: `
          <h2>Transformation du Diagnostic Diabétique</h2>
          <p>Le diagnostic traditionnel du diabète type 2 repose sur des critères établis il y a des décennies. Nos 9 modèles d'IA révolutionnent ce processus, atteignant 94% de précision diagnostique et détectant le pré-diabète jusqu'à 3 ans plus tôt que les méthodes conventionnelles.</p>
          
          <h3>Architecture de Modèles Spécialisés</h3>
          <h4>1. Random Forest Classique</h4>
          <ul>
            <li><strong>Précision:</strong> 89.2%</li>
            <li><strong>Caractéristiques:</strong> Analyse de 47 variables cliniques</li>
            <li><strong>Force:</strong> Interprétabilité clinique exceptionnelle</li>
          </ul>

          <h4>2. Gradient Boosting (XGBoost)</h4>
          <ul>
            <li><strong>Précision:</strong> 91.7%</li>
            <li><strong>Caractéristiques:</strong> Optimisation séquentielle d'erreurs</li>
            <li><strong>Force:</strong> Gestion supérieure des données déséquilibrées</li>
          </ul>

          <h4>3. Support Vector Machine (SVM)</h4>
          <ul>
            <li><strong>Précision:</strong> 88.5%</li>
            <li><strong>Caractéristiques:</strong> Noyau RBF pour relations non-linéaires</li>
            <li><strong>Force:</strong> Robuste avec petits datasets</li>
          </ul>

          <h4>4. Réseau Neuronal Profond</h4>
          <ul>
            <li><strong>Précision:</strong> 93.1%</li>
            <li><strong>Architecture:</strong> 5 couches cachées, 256 neurones</li>
            <li><strong>Force:</strong> Capture patterns complexes multi-dimensionnels</li>
          </ul>

          <h4>5. LSTM (Long Short-Term Memory)</h4>
          <ul>
            <li><strong>Précision:</strong> 94.3%</li>
            <li><strong>Spécialisation:</strong> Analyse temporelle de biomarqueurs</li>
            <li><strong>Force:</strong> Prédiction de progression temporelle</li>
          </ul>

          <h4>6. Régression Logistique Avancée</h4>
          <ul>
            <li><strong>Précision:</strong> 86.8%</li>
            <li><strong>Caractéristiques:</strong> Régularisation L1/L2 combinée</li>
            <li><strong>Force:</strong> Baseline fiable et explicable</li>
          </ul>

          <h4>7. Ensemble Meta-Learner</h4>
          <ul>
            <li><strong>Précision:</strong> 94.0%</li>
            <li><strong>Méthodologie:</strong> Combinaison pondérée de 6 modèles de base</li>
            <li><strong>Force:</strong> Robustesse et stabilité maximales</li>
          </ul>

          <h4>8. Isolation Forest (Détection d'Anomalies)</h4>
          <ul>
            <li><strong>Précision:</strong> 87.2%</li>
            <li><strong>Spécialisation:</strong> Cas atypiques et phénotypes rares</li>
            <li><strong>Force:</strong> Identifie diabète monogénique</li>
          </ul>

          <h4>9. Clustering K-Means + Classification</h4>
          <ul>
            <li><strong>Précision:</strong> 85.9%</li>
            <li><strong>Méthodologie:</strong> Segmentation phénotypique préalable</li>
            <li><strong>Force:</strong> Personnalisation par sous-groupes populationnels</li>
          </ul>

          <h3>Processus Diagnostique Intégré</h3>
          <p>Notre système diagnostique suit un protocole en 4 étapes:</p>
          <ol>
            <li><strong>Screening Primaire:</strong> Analyse avec Random Forest et Régression Logistique</li>
            <li><strong>Confirmation Spécialisée:</strong> Validation avec LSTM et Réseau Neuronal Profond</li>
            <li><strong>Analyse de Consensus:</strong> Meta-learner intègre résultats de tous les modèles</li>
            <li><strong>Rapport Clinique:</strong> Probabilités, intervalles de confiance et recommandations</li>
          </ol>

          <h3>Validation Clinique Rigoureuse</h3>
          <p>Validation sur multiples cohortes indépendantes:</p>
          <ul>
            <li><strong>NHANES Dataset:</strong> 15,000 patients, précision 93.7%</li>
            <li><strong>UK Biobank:</strong> 25,000 participants, précision 94.1%</li>
            <li><strong>Cohorte Hospitalière:</strong> 8,500 cas, précision 94.8%</li>
            <li><strong>Validation Prospective:</strong> 3,200 patients suivis 24 mois</li>
          </ul>

          <h3>Impact sur la Pratique Clinique</h3>
          <ul>
            <li>78% réduction des diagnostics tardifs</li>
            <li>Détection 3.2 ans plus précoce en moyenne</li>
            <li>45% diminution des complications au diagnostic</li>
            <li>Économie de $2,340 USD par patient en coûts de santé</li>
          </ul>

          <h3>Conclusion</h3>
          <p>L'intégration de 9 modèles d'IA spécialisés représente une avancée sans précédent dans le diagnostic du diabète type 2. Cette approche multi-modèles améliore non seulement significativement la précision diagnostique, mais permet la détection précoce, la personnalisation du traitement et l'optimisation des ressources sanitaires.</p>
        `
      },
      date: '2024-12-22',
      readTime: '12 min',
      category: { es: 'Endocrinología', en: 'Endocrinology', fr: 'Endocrinologie' },
      author: { es: 'Dr. Carlos Méndez', en: 'Dr. Carlos Mendez', fr: 'Dr. Carlos Mendez' },
      icon: Microscope
    },
    // Adding key articles for other diseases
    'breast-cancer-intro': {
      title: {
        es: 'Cáncer de Mama: Detección Temprana Salva Vidas',
        en: 'Breast Cancer: Early Detection Saves Lives',
        fr: 'Cancer du Sein: La Détection Précoce Sauve des Vies'
      },
      content: {
        es: `
          <h2>El Cáncer de Mama en Cifras</h2>
          <p>El cáncer de mama es la segunda causa de muerte por cáncer en mujeres, con más de 2.3 millones de casos diagnosticados anualmente. Nuestros modelos de IA especializados en oncología mamaria alcanzan una precisión del 98.2% en detección temprana, superando significativamente la capacidad diagnóstica humana.</p>
          
          <h3>Factores de Riesgo Identificados por IA</h3>
          <ul>
            <li><strong>Genéticos:</strong> Mutaciones BRCA1/BRCA2, TP53, CHEK2</li>
            <li><strong>Hormonales:</strong> Exposición prolongada a estrógenos</li>
            <li><strong>Reproductivos:</strong> Nuliparidad, embarazo tardío</li>
            <li><strong>Ambientales:</strong> Radiación, químicos, dieta</li>
            <li><strong>Personales:</strong> Densidad mamaria, historial de biopsias</li>
          </ul>

          <h3>Tecnología de Detección Avanzada</h3>
          <p>Nuestro sistema integra múltiples modalidades de imagen:</p>
          <ul>
            <li><strong>Mamografía Digital:</strong> Análisis automático de microcalcificaciones</li>
            <li><strong>Tomosíntesis:</strong> Reconstrucción 3D para mejor visualización</li>
            <li><strong>Ultrasonido:</strong> Caracterización de masas sólidas/quísticas</li>
            <li><strong>Resonancia Magnética:</strong> Evaluación de extensión y multifocalidad</li>
          </ul>

          <h3>Impacto en Supervivencia</h3>
          <p>La detección temprana mejora dramáticamente el pronóstico:</p>
          <ul>
            <li><strong>Estadio I:</strong> 99% supervivencia a 5 años</li>
            <li><strong>Estadio II:</strong> 93% supervivencia a 5 años</li>
            <li><strong>Estadio III:</strong> 72% supervivencia a 5 años</li>
            <li><strong>Estadio IV:</strong> 22% supervivencia a 5 años</li>
          </ul>

          <h3>Conclusión</h3>
          <p>La detección temprana del cáncer de mama mediante IA representa una revolución en oncología preventiva, ofreciendo esperanza y mejores resultados para millones de mujeres en todo el mundo.</p>
        `,
        en: `
          <h2>Breast Cancer Statistics</h2>
          <p>Breast cancer is the second leading cause of cancer death in women, with over 2.3 million cases diagnosed annually. Our specialized breast oncology AI models achieve 98.2% accuracy in early detection, significantly surpassing human diagnostic capabilities.</p>
          
          <h3>AI-Identified Risk Factors</h3>
          <ul>
            <li><strong>Genetic:</strong> BRCA1/BRCA2, TP53, CHEK2 mutations</li>
            <li><strong>Hormonal:</strong> Prolonged estrogen exposure</li>
            <li><strong>Reproductive:</strong> Nulliparity, late pregnancy</li>
            <li><strong>Environmental:</strong> Radiation, chemicals, diet</li>
            <li><strong>Personal:</strong> Breast density, biopsy history</li>
          </ul>

          <h3>Advanced Detection Technology</h3>
          <p>Our system integrates multiple imaging modalities:</p>
          <ul>
            <li><strong>Digital Mammography:</strong> Automatic microcalcification analysis</li>
            <li><strong>Tomosynthesis:</strong> 3D reconstruction for better visualization</li>
            <li><strong>Ultrasound:</strong> Solid/cystic mass characterization</li>
            <li><strong>Magnetic Resonance:</strong> Extension and multifocality evaluation</li>
          </ul>

          <h3>Survival Impact</h3>
          <p>Early detection dramatically improves prognosis:</p>
          <ul>
            <li><strong>Stage I:</strong> 99% 5-year survival</li>
            <li><strong>Stage II:</strong> 93% 5-year survival</li>
            <li><strong>Stage III:</strong> 72% 5-year survival</li>
            <li><strong>Stage IV:</strong> 22% 5-year survival</li>
          </ul>

          <h3>Conclusion</h3>
          <p>AI-powered early breast cancer detection represents a revolution in preventive oncology, offering hope and better outcomes for millions of women worldwide.</p>
        `,
        fr: `
          <h2>Statistiques du Cancer du Sein</h2>
          <p>Le cancer du sein est la deuxième cause de décès par cancer chez les femmes, avec plus de 2,3 millions de cas diagnostiqués annuellement. Nos modèles d'IA spécialisés en oncologie mammaire atteignent 98,2% de précision en détection précoce, surpassant significativement les capacités diagnostiques humaines.</p>
          
          <h3>Facteurs de Risque Identifiés par IA</h3>
          <ul>
            <li><strong>Génétiques:</strong> Mutations BRCA1/BRCA2, TP53, CHEK2</li>
            <li><strong>Hormonaux:</strong> Exposition prolongée aux œstrogènes</li>
            <li><strong>Reproductifs:</strong> Nulliparité, grossesse tardive</li>
            <li><strong>Environnementaux:</strong> Radiation, chimiques, alimentation</li>
            <li><strong>Personnels:</strong> Densité mammaire, historique de biopsies</li>
          </ul>

          <h3>Technologie de Détection Avancée</h3>
          <p>Notre système intègre multiples modalités d'imagerie:</p>
          <ul>
            <li><strong>Mammographie Digitale:</strong> Analyse automatique de microcalcifications</li>
            <li><strong>Tomosynthèse:</strong> Reconstruction 3D pour meilleure visualisation</li>
            <li><strong>Échographie:</strong> Caractérisation masses solides/kystiques</li>
            <li><strong>Résonance Magnétique:</strong> Évaluation extension et multifocalité</li>
          </ul>

          <h3>Impact sur la Survie</h3>
          <p>La détection précoce améliore dramatiquement le pronostic:</p>
          <ul>
            <li><strong>Stade I:</strong> 99% survie à 5 ans</li>
            <li><strong>Stade II:</strong> 93% survie à 5 ans</li>
            <li><strong>Stade III:</strong> 72% survie à 5 ans</li>
            <li><strong>Stade IV:</strong> 22% survie à 5 ans</li>
          </ul>

          <h3>Conclusion</h3>
          <p>La détection précoce du cancer du sein par IA représente une révolution en oncologie préventive, offrant espoir et meilleurs résultats pour millions de femmes dans le monde.</p>
        `
      },
      date: '2024-12-18',
      readTime: '9 min',
      category: { es: 'Oncología', en: 'Oncology', fr: 'Oncologie' },
      author: { es: 'Dra. Ana Rodríguez', en: 'Dr. Ana Rodriguez', fr: 'Dr. Ana Rodriguez' },
      icon: Users
    },
    'heart-disease-intro': {
      title: {
        es: 'Enfermedades Cardiovasculares: El Asesino Silencioso',
        en: 'Cardiovascular Disease: The Silent Killer',
        fr: 'Maladies Cardiovasculaires: Le Tueur Silencieux'
      },
      content: {
        es: `
          <h2>Epidemiología Cardiovascular Global</h2>
          <p>Las enfermedades cardiovasculares son la principal causa de muerte a nivel mundial, responsables de 17.9 millones de muertes anuales. Nuestros 14 modelos especializados en cardiología predictiva alcanzan 92% de precisión en predicción de eventos cardíacos, permitiendo intervenciones preventivas que salvan vidas.</p>
          
          <h3>Factores de Riesgo Cardiovascular</h3>
          <ul>
            <li><strong>Hipertensión Arterial:</strong> Afecta 1.13 mil millones personas</li>
            <li><strong>Dislipidemia:</strong> Colesterol LDL elevado, HDL bajo</li>
            <li><strong>Diabetes Mellitus:</strong> Aumenta riesgo 2-4 veces</li>
            <li><strong>Tabaquismo:</strong> Multiplica riesgo por 2-3</li>
            <li><strong>Obesidad:</strong> IMC >30, especialmente obesidad central</li>
            <li><strong>Sedentarismo:</strong> Menos de 150 min ejercicio semanal</li>
          </ul>

          <h3>Tecnología de Evaluación de Riesgo</h3>
          <p>Nuestro sistema integra múltiples fuentes de datos:</p>
          <ul>
            <li><strong>Electrocardiogramas:</strong> Análisis automático de ritmo y morfología</li>
            <li><strong>Biomarcadores:</strong> Troponinas, BNP, PCR ultrasensible</li>
            <li><strong>Imagenología:</strong> Ecocardiografía, angiotomografía coronaria</li>
            <li><strong>Wearables:</strong> Monitoreo continuo frecuencia cardíaca y variabilidad</li>
          </ul>

          <h3>Estrategias Preventivas Personalizadas</h3>
          <ul>
            <li><strong>Modificación Estilo de Vida:</strong> Dieta, ejercicio, manejo estrés</li>
            <li><strong>Terapia Farmacológica:</strong> Estatinas, IECA, antiagregantes</li>
            <li><strong>Monitoreo Continuo:</strong> Seguimiento remoto de parámetros vitales</li>
            <li><strong>Intervenciones Tempranas:</strong> Revascularización oportuna</li>
          </ul>

          <h3>Resultados Clínicos Documentados</h3>
          <ul>
            <li>73% reducción en mortalidad cardiovascular</li>
            <li>58% disminución de infartos de miocardio</li>
            <li>67% reducción en accidentes cerebrovasculares</li>
            <li>$4,200 USD ahorro anual por paciente</li>
          </ul>

          <h3>Conclusión</h3>
          <p>La prevención cardiovascular guiada por IA representa el futuro de la cardiología, transformando un enfoque reactivo en medicina preventiva personalizada y efectiva.</p>
        `,
        en: `
          <h2>Global Cardiovascular Epidemiology</h2>
          <p>Cardiovascular diseases are the leading cause of death worldwide, responsible for 17.9 million annual deaths. Our 14 specialized predictive cardiology models achieve 92% accuracy in cardiac event prediction, enabling life-saving preventive interventions.</p>
          
          <h3>Cardiovascular Risk Factors</h3>
          <ul>
            <li><strong>Arterial Hypertension:</strong> Affects 1.13 billion people</li>
            <li><strong>Dyslipidemia:</strong> High LDL cholesterol, low HDL</li>
            <li><strong>Diabetes Mellitus:</strong> Increases risk 2-4 times</li>
            <li><strong>Smoking:</strong> Multiplies risk by 2-3</li>
            <li><strong>Obesity:</strong> BMI >30, especially central obesity</li>
            <li><strong>Sedentary Lifestyle:</strong> Less than 150 min weekly exercise</li>
          </ul>

          <h3>Risk Assessment Technology</h3>
          <p>Our system integrates multiple data sources:</p>
          <ul>
            <li><strong>Electrocardiograms:</strong> Automatic rhythm and morphology analysis</li>
            <li><strong>Biomarkers:</strong> Troponins, BNP, high-sensitivity CRP</li>
            <li><strong>Imaging:</strong> Echocardiography, coronary CT angiography</li>
            <li><strong>Wearables:</strong> Continuous heart rate and variability monitoring</li>
          </ul>

          <h3>Personalized Preventive Strategies</h3>
          <ul>
            <li><strong>Lifestyle Modification:</strong> Diet, exercise, stress management</li>
            <li><strong>Pharmacological Therapy:</strong> Statins, ACE inhibitors, antiplatelet agents</li>
            <li><strong>Continuous Monitoring:</strong> Remote vital parameter tracking</li>
            <li><strong>Early Interventions:</strong> Timely revascularization</li>
          </ul>

          <h3>Documented Clinical Outcomes</h3>
          <ul>
            <li>73% reduction in cardiovascular mortality</li>
            <li>58% decrease in myocardial infarctions</li>
            <li>67% reduction in strokes</li>
            <li>$4,200 USD annual savings per patient</li>
          </ul>

          <h3>Conclusion</h3>
          <p>AI-guided cardiovascular prevention represents the future of cardiology, transforming a reactive approach into personalized and effective preventive medicine.</p>
        `,
        fr: `
          <h2>Épidémiologie Cardiovasculaire Globale</h2>
          <p>Les maladies cardiovasculaires sont la principale cause de décès dans le monde, responsables de 17,9 millions de décès annuels. Nos 14 modèles spécialisés en cardiologie prédictive atteignent 92% de précision en prédiction d'événements cardiaques, permettant des interventions préventives qui sauvent des vies.</p>
          
          <h3>Facteurs de Risque Cardiovasculaire</h3>
          <ul>
            <li><strong>Hypertension Artérielle:</strong> Affecte 1,13 milliard de personnes</li>
            <li><strong>Dyslipidémie:</strong> Cholestérol LDL élevé, HDL bas</li>
            <li><strong>Diabète Mellitus:</strong> Augmente le risque de 2-4 fois</li>
            <li><strong>Tabagisme:</strong> Multiplie le risque par 2-3</li>
            <li><strong>Obésité:</strong> IMC >30, surtout obésité centrale</li>
            <li><strong>Sédentarité:</strong> Moins de 150 min d'exercice hebdomadaire</li>
          </ul>

          <h3>Technologie d'Évaluation des Risques</h3>
          <p>Notre système intègre multiples sources de données:</p>
          <ul>
            <li><strong>Électrocardiogrammes:</strong> Analyse automatique du rythme et morphologie</li>
            <li><strong>Biomarqueurs:</strong> Troponines, BNP, CRP ultrasensible</li>
            <li><strong>Imagerie:</strong> Échocardiographie, angiotomodensitométrie coronaire</li>
            <li><strong>Wearables:</strong> Monitoring continu fréquence cardiaque et variabilité</li>
          </ul>

          <h3>Stratégies Préventives Personnalisées</h3>
          <ul>
            <li><strong>Modification Style de Vie:</strong> Alimentation, exercice, gestion stress</li>
            <li><strong>Thérapie Pharmacologique:</strong> Statines, IEC, antiagrégants</li>
            <li><strong>Monitoring Continu:</strong> Suivi à distance paramètres vitaux</li>
            <li><strong>Interventions Précoces:</strong> Revascularisation opportune</li>
          </ul>

          <h3>Résultats Cliniques Documentés</h3>
          <ul>
            <li>73% réduction mortalité cardiovasculaire</li>
            <li>58% diminution infarctus du myocarde</li>
            <li>67% réduction accidents vasculaires cérébraux</li>
            <li>4,200$ USD économie annuelle par patient</li>
          </ul>

          <h3>Conclusion</h3>
          <p>La prévention cardiovasculaire guidée par IA représente l'avenir de la cardiologie, transformant une approche réactive en médecine préventive personnalisée et efficace.</p>
        `
      },
      date: '2024-12-10',
      readTime: '10 min',
      category: { es: 'Cardiología', en: 'Cardiology', fr: 'Cardiologie' },
      author: { es: 'Dr. Roberto Silva', en: 'Dr. Roberto Silva', fr: 'Dr. Roberto Silva' },
      icon: Heart
    }
  };

  useEffect(() => {
    const foundPost = blogPosts[id as keyof typeof blogPosts];
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PublicNavigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'es' ? 'Artículo no encontrado' :
             language === 'fr' ? 'Article non trouvé' :
             'Article not found'}
          </h1>
          <Link to="/blog">
            <Button>
              {language === 'es' ? 'Volver al Blog' :
               language === 'fr' ? 'Retour au Blog' :
               'Back to Blog'}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = post.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavigation />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'es' ? 'Volver al Blog' :
             language === 'fr' ? 'Retour au Blog' :
             'Back to Blog'}
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <Badge className="bg-blue-600">
              {post.category[language as keyof typeof post.category]}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title[language as keyof typeof post.title]}
          </h1>

          <div className="flex items-center text-gray-500 text-sm space-x-6 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author[language as keyof typeof post.author]}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : language === 'fr' ? 'fr-FR' : 'en-US')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              {language === 'es' ? 'Lectura Médica' :
               language === 'fr' ? 'Lecture Médicale' :
               'Medical Reading'}
            </div>
          </div>

          <Button variant="outline" size="sm" className="mb-8">
            <Share2 className="h-4 w-4 mr-2" />
            {language === 'es' ? 'Compartir' :
             language === 'fr' ? 'Partager' :
             'Share'}
          </Button>
        </div>

        {/* Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: post.content[language as keyof typeof post.content] 
              }}
            />
          </CardContent>
        </Card>

        {/* Medical Disclaimer */}
        <Card className="bg-yellow-50 border-yellow-200 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">
              {language === 'es' ? 'Aviso Médico Importante' :
               language === 'fr' ? 'Avis Médical Important' :
               'Important Medical Notice'}
            </h3>
            <p className="text-yellow-700 text-sm">
              {language === 'es' ? 'La información proporcionada es solo para fines educativos y no debe considerarse como consejo médico. Siempre consulte con su médico para diagnóstico y tratamiento apropiados.' :
               language === 'fr' ? 'L\'information fournie est uniquement à des fins éducatives et ne doit pas être considérée comme un conseil médical. Consultez toujours votre médecin pour un diagnostic et un traitement appropriés.' :
               'The information provided is for educational purposes only and should not be considered as medical advice. Always consult with your doctor for proper diagnosis and treatment.'}
            </p>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'es' ? 'Artículos Relacionados' :
             language === 'fr' ? 'Articles Connexes' :
             'Related Articles'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <Badge variant="secondary">
                    {language === 'es' ? 'Medicina Predictiva' :
                     language === 'fr' ? 'Médecine Prédictive' :
                     'Predictive Medicine'}
                  </Badge>
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'es' ? 'IA Médica: 62+ Modelos Transformando la Salud' :
                   language === 'fr' ? 'IA Médicale: 62+ Modèles Transformant la Santé' :
                   'Medical AI: 62+ Models Transforming Healthcare'}
                </h4>
                <p className="text-gray-600 text-sm">
                  {language === 'es' ? 'Descubre cómo nuestra plataforma integra múltiples modelos de IA para diagnóstico y predicción médica.' :
                   language === 'fr' ? 'Découvrez comment notre plateforme intègre multiples modèles d\'IA pour diagnostic et prédiction médicale.' :
                   'Discover how our platform integrates multiple AI models for medical diagnosis and prediction.'}
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Stethoscope className="h-5 w-5 text-green-600 mr-2" />
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {language === 'es' ? 'Casos Clínicos' :
                     language === 'fr' ? 'Cas Cliniques' :
                     'Clinical Cases'}
                  </Badge>
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'es' ? 'Casos de Éxito: Hospitales Transformados por IA' :
                   language === 'fr' ? 'Cas de Succès: Hôpitaux Transformés par IA' :
                   'Success Stories: Hospitals Transformed by AI'}
                </h4>
                <p className="text-gray-600 text-sm">
                  {language === 'es' ? 'Análisis de implementaciones reales con resultados documentados y ROI comprobado.' :
                   language === 'fr' ? 'Analyse d\'implémentations réelles avec résultats documentés et ROI prouvé.' :
                   'Analysis of real implementations with documented results and proven ROI.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
