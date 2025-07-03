
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Database,
  Webhook,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  
  const [userSettings, setUserSettings] = useState({
    name: 'Dr. María González',
    email: 'maria.gonzalez@hospital.com',
    specialty: 'Endocrinología',
    license: 'MED-2024-001',
    hospital: 'Hospital General Central'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailReports: true,
    smsAlerts: false,
    weeklyDigest: true,
    criticalAlerts: true
  });

  const [integrationSettings, setIntegrationSettings] = useState({
    n8nWebhook: '',
    emailTemplate: '',
    reportFormat: 'pdf',
    autoSend: true
  });

  const handleSaveSettings = () => {
    toast({
      title: "Configuración guardada",
      description: "Todos los cambios han sido guardados exitosamente",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Settings className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Configuración del Sistema</h1>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Perfil Profesional</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                value={userSettings.name}
                onChange={(e) => setUserSettings({...userSettings, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                value={userSettings.email}
                onChange={(e) => setUserSettings({...userSettings, email: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="specialty">Especialidad Médica</Label>
              <Input
                id="specialty"
                value={userSettings.specialty}
                onChange={(e) => setUserSettings({...userSettings, specialty: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="license">Número de Licencia</Label>
              <Input
                id="license"
                value={userSettings.license}
                onChange={(e) => setUserSettings({...userSettings, license: e.target.value})}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="hospital">Hospital o Clínica</Label>
            <Input
              id="hospital"
              value={userSettings.hospital}
              onChange={(e) => setUserSettings({...userSettings, hospital: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Configuración de Notificaciones</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Reportes por Email</Label>
              <p className="text-sm text-gray-500">Recibir reportes de análisis por correo electrónico</p>
            </div>
            <Switch
              checked={notificationSettings.emailReports}
              onCheckedChange={(checked) => 
                setNotificationSettings({...notificationSettings, emailReports: checked})
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Resumen Semanal</Label>
              <p className="text-sm text-gray-500">Estadísticas y resumen de actividad semanal</p>
            </div>
            <Switch
              checked={notificationSettings.weeklyDigest}
              onCheckedChange={(checked) => 
                setNotificationSettings({...notificationSettings, weeklyDigest: checked})
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Alertas Críticas</Label>
              <p className="text-sm text-gray-500">Notificaciones inmediatas para casos de alto riesgo</p>
            </div>
            <Switch
              checked={notificationSettings.criticalAlerts}
              onCheckedChange={(checked) => 
                setNotificationSettings({...notificationSettings, criticalAlerts: checked})
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Integration Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Webhook className="h-5 w-5" />
            <span>Configuración de Integraciones</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="n8nWebhook">Webhook N8N</Label>
            <Input
              id="n8nWebhook"
              placeholder="https://your-n8n-instance.com/webhook/..."
              value={integrationSettings.n8nWebhook}
              onChange={(e) => setIntegrationSettings({...integrationSettings, n8nWebhook: e.target.value})}
            />
            <p className="text-sm text-gray-500 mt-1">URL del webhook para envío automático de análisis</p>
          </div>
          
          <div>
            <Label htmlFor="reportFormat">Formato de Reportes</Label>
            <Select 
              value={integrationSettings.reportFormat} 
              onValueChange={(value) => setIntegrationSettings({...integrationSettings, reportFormat: value})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="emailTemplate">Plantilla de Email</Label>
            <Textarea
              id="emailTemplate"
              placeholder="Estimado Dr. {{name}}, adjunto encuentra el análisis médico del paciente {{patient}}..."
              value={integrationSettings.emailTemplate}
              onChange={(e) => setIntegrationSettings({...integrationSettings, emailTemplate: e.target.value})}
              rows={6}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Envío Automático</Label>
              <p className="text-sm text-gray-500">Enviar reportes automáticamente al completar análisis</p>
            </div>
            <Switch
              checked={integrationSettings.autoSend}
              onCheckedChange={(checked) => 
                setIntegrationSettings({...integrationSettings, autoSend: checked})
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
          Guardar Configuración
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
