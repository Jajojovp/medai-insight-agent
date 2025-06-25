
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
import { useLanguage } from "@/contexts/LanguageContext";

const AdminSettings = () => {
  const { t } = useLanguage();
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
    // Here you would save to Supabase
    toast({
      title: t('admin.settings.saved'),
      description: t('admin.settings.savedDesc'),
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Settings className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">{t('admin.title')}</h1>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>{t('admin.profile.title')}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{t('admin.profile.name')}</Label>
              <Input
                id="name"
                value={userSettings.name}
                onChange={(e) => setUserSettings({...userSettings, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="email">{t('admin.profile.email')}</Label>
              <Input
                id="email"
                type="email"
                value={userSettings.email}
                onChange={(e) => setUserSettings({...userSettings, email: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="specialty">{t('admin.profile.specialty')}</Label>
              <Input
                id="specialty"
                value={userSettings.specialty}
                onChange={(e) => setUserSettings({...userSettings, specialty: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="license">{t('admin.profile.license')}</Label>
              <Input
                id="license"
                value={userSettings.license}
                onChange={(e) => setUserSettings({...userSettings, license: e.target.value})}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="hospital">{t('admin.profile.hospital')}</Label>
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
            <span>{t('admin.notifications.title')}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>{t('admin.notifications.emailReports')}</Label>
              <p className="text-sm text-gray-500">{t('admin.notifications.emailReportsDesc')}</p>
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
              <Label>{t('admin.notifications.weeklyDigest')}</Label>
              <p className="text-sm text-gray-500">{t('admin.notifications.weeklyDigestDesc')}</p>
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
              <Label>{t('admin.notifications.criticalAlerts')}</Label>
              <p className="text-sm text-gray-500">{t('admin.notifications.criticalAlertsDesc')}</p>
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
            <span>{t('admin.integrations.title')}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="n8nWebhook">{t('admin.integrations.n8nWebhook')}</Label>
            <Input
              id="n8nWebhook"
              placeholder="https://your-n8n-instance.com/webhook/..."
              value={integrationSettings.n8nWebhook}
              onChange={(e) => setIntegrationSettings({...integrationSettings, n8nWebhook: e.target.value})}
            />
            <p className="text-sm text-gray-500 mt-1">{t('admin.integrations.n8nWebhookDesc')}</p>
          </div>
          
          <div>
            <Label htmlFor="reportFormat">{t('admin.integrations.reportFormat')}</Label>
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
            <Label htmlFor="emailTemplate">{t('admin.integrations.emailTemplate')}</Label>
            <Textarea
              id="emailTemplate"
              placeholder={t('admin.integrations.emailTemplatePlaceholder')}
              value={integrationSettings.emailTemplate}
              onChange={(e) => setIntegrationSettings({...integrationSettings, emailTemplate: e.target.value})}
              rows={6}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>{t('admin.integrations.autoSend')}</Label>
              <p className="text-sm text-gray-500">{t('admin.integrations.autoSendDesc')}</p>
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
          {t('admin.save')}
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
