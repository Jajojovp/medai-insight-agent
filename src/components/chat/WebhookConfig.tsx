
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface WebhookConfigProps {
  n8nWebhook: string;
  setN8nWebhook: (webhook: string) => void;
}

const WebhookConfig = ({ n8nWebhook, setN8nWebhook }: WebhookConfigProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-sm mb-2">{t('chat.webhook.title')}</h3>
      <Input
        placeholder={t('chat.webhook.placeholder')}
        value={n8nWebhook}
        onChange={(e) => setN8nWebhook(e.target.value)}
        className="text-sm"
      />
      <p className="text-xs text-gray-500 mt-1">
        {t('chat.webhook.description')}
      </p>
    </div>
  );
};

export default WebhookConfig;
