
import { Badge } from "@/components/ui/badge";
import { ChatStep } from "@/types/chat";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProgressIndicatorProps {
  currentStep: ChatStep;
}

const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  const { t } = useLanguage();

  return (
    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{t('chat.progress')}</span>
        <div className="flex space-x-2">
          <Badge variant={currentStep === 'symptoms' ? 'default' : 'secondary'}>
            1. {t('chat.symptoms')}
          </Badge>
          <Badge variant={currentStep === 'labResults' ? 'default' : 'secondary'}>
            2. {t('chat.labResults')}
          </Badge>
          <Badge variant={currentStep === 'demographics' ? 'default' : 'secondary'}>
            3. {t('chat.demographics')}
          </Badge>
          <Badge variant={currentStep === 'analysis' ? 'default' : 'secondary'}>
            4. {t('chat.analysis')}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
