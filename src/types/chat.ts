
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
}

export interface AnalysisResult {
  diagnosis: string;
  confidence: number;
  riskFactors: string[];
  recommendations: string[];
  modelResults: ModelResult[];
}

export interface ModelResult {
  name: string;
  url: string;
  confidence: number;
  prediction: string;
}

export type ChatStep = 'symptoms' | 'labResults' | 'demographics' | 'analysis' | 'complete';
