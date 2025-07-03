
import { Badge } from "@/components/ui/badge";
import { ChatStep } from "@/types/chat";

interface ProgressIndicatorProps {
  currentStep: ChatStep;
}

const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  return (
    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Progreso</span>
        <div className="flex space-x-2">
          <Badge variant={currentStep === 'symptoms' ? 'default' : 'secondary'}>
            1. Síntomas
          </Badge>
          <Badge variant={currentStep === 'labResults' ? 'default' : 'secondary'}>
            2. Laboratorios
          </Badge>
          <Badge variant={currentStep === 'demographics' ? 'default' : 'secondary'}>
            3. Demografía
          </Badge>
          <Badge variant={currentStep === 'analysis' ? 'default' : 'secondary'}>
            4. Análisis
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
