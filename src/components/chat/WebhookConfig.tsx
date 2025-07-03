
import { Input } from "@/components/ui/input";

interface WebhookConfigProps {
  n8nWebhook: string;
  setN8nWebhook: (webhook: string) => void;
}

const WebhookConfig = ({ n8nWebhook, setN8nWebhook }: WebhookConfigProps) => {
  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-sm mb-2">Configuración Webhook</h3>
      <Input
        placeholder="https://tu-webhook-url.com"
        value={n8nWebhook}
        onChange={(e) => setN8nWebhook(e.target.value)}
        className="text-sm"
      />
      <p className="text-xs text-gray-500 mt-1">
        URL del webhook para recibir análisis
      </p>
    </div>
  );
};

export default WebhookConfig;
