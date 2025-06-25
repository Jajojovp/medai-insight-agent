
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Users, Brain, Shield, Zap, Droplets } from "lucide-react";
import { DiseaseType, DiseaseInfo } from "@/types/chat";
import { useLanguage } from "@/contexts/LanguageContext";

interface DiseaseSelectorProps {
  onSelectDisease: (disease: DiseaseType) => void;
}

const DiseaseSelector = ({ onSelectDisease }: DiseaseSelectorProps) => {
  const { language, t } = useLanguage();

  const diseases: DiseaseInfo[] = [
    {
      id: 'diabetes',
      name: {
        en: 'Type 2 Diabetes',
        es: 'Diabetes Tipo 2',
        fr: 'Diabète Type 2'
      },
      description: {
        en: 'Metabolic disorder characterized by high blood sugar levels',
        es: 'Trastorno metabólico caracterizado por niveles altos de azúcar en sangre',
        fr: 'Trouble métabolique caractérisé par des niveaux élevés de sucre dans le sang'
      },
      prevalence: '10.5%',
      riskFactors: {
        en: ['Obesity', 'Family history', 'Age >45', 'Sedentary lifestyle'],
        es: ['Obesidad', 'Antecedentes familiares', 'Edad >45', 'Vida sedentaria'],
        fr: ['Obésité', 'Antécédents familiaux', 'Âge >45', 'Mode de vie sédentaire']
      }
    },
    {
      id: 'breast-cancer',
      name: {
        en: 'Breast Cancer',
        es: 'Cáncer de Mama',
        fr: 'Cancer du Sein'
      },
      description: {
        en: 'Most common cancer in women worldwide',
        es: 'Cáncer más común en mujeres a nivel mundial',
        fr: 'Cancer le plus fréquent chez les femmes dans le monde'
      },
      prevalence: '12.5%',
      riskFactors: {
        en: ['Age', 'Family history', 'BRCA mutations', 'Hormonal factors'],
        es: ['Edad', 'Historia familiar', 'Mutaciones BRCA', 'Factores hormonales'],
        fr: ['Âge', 'Antécédents familiaux', 'Mutations BRCA', 'Facteurs hormonaux']
      }
    },
    {
      id: 'prostate-cancer',
      name: {
        en: 'Prostate Cancer',
        es: 'Cáncer de Próstata',
        fr: 'Cancer de la Prostate'
      },
      description: {
        en: 'Most common cancer in men over 50',
        es: 'Cáncer más común en hombres mayores de 50',
        fr: 'Cancer le plus fréquent chez les hommes de plus de 50 ans'
      },
      prevalence: '11.6%',
      riskFactors: {
        en: ['Age >50', 'Family history', 'Race', 'Diet'],
        es: ['Edad >50', 'Historia familiar', 'Raza', 'Dieta'],
        fr: ['Âge >50', 'Antécédents familiaux', 'Race', 'Régime alimentaire']
      }
    },
    {
      id: 'heart-disease',
      name: {
        en: 'Heart Disease',
        es: 'Enfermedad Cardíaca',
        fr: 'Maladie Cardiaque'
      },
      description: {
        en: 'Leading cause of death worldwide',
        es: 'Principal causa de muerte a nivel mundial',
        fr: 'Principale cause de décès dans le monde'
      },
      prevalence: '6.2%',
      riskFactors: {
        en: ['High cholesterol', 'Hypertension', 'Smoking', 'Diabetes'],
        es: ['Colesterol alto', 'Hipertensión', 'Tabaquismo', 'Diabetes'],
        fr: ['Cholestérol élevé', 'Hypertension', 'Tabagisme', 'Diabète']
      }
    },
    {
      id: 'stroke',
      name: {
        en: 'Stroke Risk',
        es: 'Riesgo de Accidente Cerebrovascular',
        fr: 'Risque d\'AVC'
      },
      description: {
        en: 'Sudden interruption of blood flow to the brain',
        es: 'Interrupción súbita del flujo sanguíneo al cerebro',
        fr: 'Interruption soudaine du flux sanguin vers le cerveau'
      },
      prevalence: '2.8%',
      riskFactors: {
        en: ['High blood pressure', 'Atrial fibrillation', 'Smoking', 'Age'],
        es: ['Presión arterial alta', 'Fibrilación auricular', 'Tabaquismo', 'Edad'],
        fr: ['Hypertension artérielle', 'Fibrillation auriculaire', 'Tabagisme', 'Âge']
      }
    },
    {
      id: 'kidney-disease',
      name: {
        en: 'Chronic Kidney Disease',
        es: 'Enfermedad Renal Crónica',
        fr: 'Maladie Rénale Chronique'
      },
      description: {
        en: 'Progressive loss of kidney function over time',
        es: 'Pérdida progresiva de la función renal con el tiempo',
        fr: 'Perte progressive de la fonction rénale au fil du temps'
      },
      prevalence: '9.1%',
      riskFactors: {
        en: ['Diabetes', 'Hypertension', 'Family history', 'Age >60'],
        es: ['Diabetes', 'Hipertensión', 'Historia familiar', 'Edad >60'],
        fr: ['Diabète', 'Hypertension', 'Antécédents familiaux', 'Âge >60']
      }
    },
    {
      id: 'pancreatic-cancer',
      name: {
        en: 'Pancreatic Cancer',
        es: 'Cáncer de Páncreas',
        fr: 'Cancer du Pancréas'
      },
      description: {
        en: 'Aggressive cancer with poor prognosis',
        es: 'Cáncer agresivo con mal pronóstico',
        fr: 'Cancer agressif avec un mauvais pronostic'
      },
      prevalence: '0.6%',
      riskFactors: {
        en: ['Smoking', 'Diabetes', 'Obesity', 'Family history'],
        es: ['Tabaquismo', 'Diabetes', 'Obesidad', 'Historia familiar'],
        fr: ['Tabagisme', 'Diabète', 'Obésité', 'Antécédents familiaux']
      }
    }
  ];

  const getIcon = (diseaseId: DiseaseType) => {
    const iconProps = { className: "h-6 w-6" };
    switch (diseaseId) {
      case 'diabetes': return <Droplets {...iconProps} />;
      case 'breast-cancer': return <Users {...iconProps} />;
      case 'prostate-cancer': return <Activity {...iconProps} />;
      case 'heart-disease': return <Heart {...iconProps} />;
      case 'stroke': return <Brain {...iconProps} />;
      case 'kidney-disease': return <Shield {...iconProps} />;
      case 'pancreatic-cancer': return <Zap {...iconProps} />;
      default: return <Activity {...iconProps} />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">
          {language === 'es' ? 'Selecciona el tipo de análisis' : 
           language === 'fr' ? 'Sélectionnez le type d\'analyse' :
           'Select Analysis Type'}
        </h3>
        <p className="text-gray-600 text-sm">
          {language === 'es' ? 'Elige la enfermedad para la cual deseas realizar el análisis predictivo:' :
           language === 'fr' ? 'Choisissez la maladie pour laquelle vous souhaitez effectuer l\'analyse prédictive :' :
           'Choose the disease for which you want to perform predictive analysis:'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diseases.map((disease) => (
          <Card key={disease.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-base">
                <div className="flex items-center space-x-2">
                  {getIcon(disease.id)}
                  <span>{disease.name[language as keyof typeof disease.name]}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {disease.prevalence}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-3">
                {disease.description[language as keyof typeof disease.description]}
              </p>
              <div className="mb-4">
                <h4 className="text-xs font-semibold mb-1">
                  {language === 'es' ? 'Factores de Riesgo:' :
                   language === 'fr' ? 'Facteurs de Risque :' :
                   'Risk Factors:'}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {disease.riskFactors[language as keyof typeof disease.riskFactors].slice(0, 3).map((factor, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button 
                onClick={() => onSelectDisease(disease.id)}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                {language === 'es' ? 'Seleccionar' :
                 language === 'fr' ? 'Sélectionner' :
                 'Select'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiseaseSelector;
