
export interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  data?: any;
}

export interface PatientData {
  symptoms: string[];
  labResults: string[];
  demographics: {
    age?: number;
    gender?: string;
    weight?: number;
    height?: number;
  };
  diseaseType?: DiseaseType;
}

export interface AnalysisResult {
  diagnosis: string;
  confidence: number;
  riskFactors: string[];
  recommendations: string[];
  modelResults: ModelResult[];
  diseaseType: DiseaseType;
}

export interface ModelResult {
  name: string;
  url: string;
  confidence: number;
  prediction: string;
}

export type ChatStep = 'diseaseSelection' | 'symptoms' | 'labResults' | 'demographics' | 'analysis' | 'complete';

export type DiseaseType = 'diabetes' | 'breast-cancer' | 'prostate-cancer' | 'heart-disease' | 'stroke' | 'kidney-disease' | 'pancreatic-cancer';

export interface DiseaseInfo {
  id: DiseaseType;
  name: {
    en: string;
    es: string;
    fr: string;
  };
  description: {
    en: string;
    es: string;
    fr: string;
  };
  prevalence: string;
  riskFactors: {
    en: string[];
    es: string[];
    fr: string[];
  };
}
