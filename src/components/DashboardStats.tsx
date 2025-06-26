
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Users, 
  FileText, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Brain,
  Heart,
  Droplets,
  Shield,
  Zap
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DashboardStats = () => {
  const { language } = useLanguage();

  const stats = [
    {
      title: language === 'es' ? "Total de Consultas" : language === 'fr' ? "Total des Consultations" : "Total Consultations",
      value: "2,847",
      change: "+23%",
      changeType: "positive",
      icon: Activity,
      color: "blue"
    },
    {
      title: language === 'es' ? "Pacientes Activos" : language === 'fr' ? "Patients Actifs" : "Active Patients",
      value: "1,492",
      change: "+18%",
      changeType: "positive",
      icon: Users,
      color: "green"
    },
    {
      title: language === 'es' ? "Reportes Generados" : language === 'fr' ? "Rapports Générés" : "Reports Generated",
      value: "2,156",
      change: "+25%",
      changeType: "positive",
      icon: FileText,
      color: "purple"
    },
    {
      title: language === 'es' ? "Precisión Máxima" : language === 'fr' ? "Précision Maximale" : "Maximum Accuracy",
      value: "98.8%",
      change: "+3.1%",
      changeType: "positive",
      icon: TrendingUp,
      color: "emerald"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      patient: language === 'es' ? "Paciente #2847" : language === 'fr' ? "Patient #2847" : "Patient #2847",
      diagnosis: language === 'es' ? "Diabetes Tipo 2" : language === 'fr' ? "Diabète Type 2" : "Type 2 Diabetes",
      confidence: 94,
      status: "completed",
      time: language === 'es' ? "hace 1 hora" : language === 'fr' ? "il y a 1 heure" : "1 hour ago",
      icon: Droplets
    },
    {
      id: 2,
      patient: language === 'es' ? "Paciente #2846" : language === 'fr' ? "Patient #2846" : "Patient #2846",
      diagnosis: language === 'es' ? "Cáncer de Mama" : language === 'fr' ? "Cancer du Sein" : "Breast Cancer",
      confidence: 97,
      status: "completed",
      time: language === 'es' ? "hace 2 horas" : language === 'fr' ? "il y a 2 heures" : "2 hours ago",
      icon: Users
    },
    {
      id: 3,
      patient: language === 'es' ? "Paciente #2845" : language === 'fr' ? "Patient #2845" : "Patient #2845",
      diagnosis: language === 'es' ? "Cáncer de Próstata" : language === 'fr' ? "Cancer de la Prostate" : "Prostate Cancer",
      confidence: 98,
      status: "pending",
      time: language === 'es' ? "hace 3 horas" : language === 'fr' ? "il y a 3 heures" : "3 hours ago",
      icon: Activity
    },
    {
      id: 4,
      patient: language === 'es' ? "Paciente #2844" : language === 'fr' ? "Patient #2844" : "Patient #2844",
      diagnosis: language === 'es' ? "Riesgo de ACV" : language === 'fr' ? "Risque d'AVC" : "Stroke Risk",
      confidence: 91,
      status: "completed",
      time: language === 'es' ? "hace 4 horas" : language === 'fr' ? "il y a 4 heures" : "4 hours ago",
      icon: Brain
    }
  ];

  const analysisTypes = [
    {
      name: language === 'es' ? "Diabetes Tipo 2" : language === 'fr' ? "Diabète Type 2" : "Type 2 Diabetes",
      count: 542,
      accuracy: "94.2%",
      models: 9,
      icon: Droplets,
      color: "blue"
    },
    {
      name: language === 'es' ? "Cáncer de Mama" : language === 'fr' ? "Cancer du Sein" : "Breast Cancer",
      count: 398,
      accuracy: "96.8%",
      models: 5,
      icon: Users,
      color: "pink"
    },
    {
      name: language === 'es' ? "Cáncer de Próstata" : language === 'fr' ? "Cancer de la Prostate" : "Prostate Cancer",
      count: 234,
      accuracy: "98.8%",
      models: 4,
      icon: Activity,
      color: "indigo"
    },
    {
      name: language === 'es' ? "Enfermedades Cardíacas" : language === 'fr' ? "Maladies Cardiaques" : "Heart Disease",
      count: 467,
      accuracy: "93.7%",
      models: 5,
      icon: Heart,
      color: "red"
    },
    {
      name: language === 'es' ? "Riesgo de ACV" : language === 'fr' ? "Risque d'AVC" : "Stroke Risk",
      count: 187,
      accuracy: "91.3%",
      models: 5,
      icon: Brain,
      color: "purple"
    },
    {
      name: language === 'es' ? "Enfermedad Renal Crónica" : language === 'fr' ? "Maladie Rénale Chronique" : "Chronic Kidney Disease",
      count: 156,
      accuracy: "97.5%",
      models: 5,
      icon: Shield,
      color: "teal"
    },
    {
      name: language === 'es' ? "Cáncer de Páncreas" : language === 'fr' ? "Cancer du Pancréas" : "Pancreatic Cancer",
      count: 98,
      accuracy: "87.4%",
      models: 4,
      icon: Zap,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      emerald: "text-emerald-600 bg-emerald-100",
      pink: "text-pink-600 bg-pink-100",
      red: "text-red-600 bg-red-100",
      indigo: "text-indigo-600 bg-indigo-100",
      teal: "text-teal-600 bg-teal-100",
      orange: "text-orange-600 bg-orange-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/80 border border-white/30 rounded-3xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${getColorClasses(stat.color)}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-1 text-sm">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">{stat.change}</span>
                  <span className="text-gray-500">
                    {language === 'es' ? "desde el mes pasado" : 
                     language === 'fr' ? "depuis le mois dernier" : 
                     "from last month"}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analysis Types Overview */}
      <Card className="backdrop-blur-md bg-white/90 border border-white/30 rounded-3xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5" />
            <span>
              {language === 'es' ? "Tipos de Análisis Predictivos (37+ Modelos)" : 
               language === 'fr' ? "Types d'Analyses Prédictives (37+ Modèles)" : 
               "Predictive Analysis Types (37+ Models)"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analysisTypes.map((analysis, index) => {
              const Icon = analysis.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/50 rounded-2xl border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${getColorClasses(analysis.color)}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{analysis.name}</div>
                      <div className="text-xs text-gray-500">
                        {analysis.count} {language === 'es' ? "análisis • " : language === 'fr' ? "analyses • " : "analyses • "}
                        {analysis.models} {language === 'es' ? "modelos" : language === 'fr' ? "modèles" : "models"}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={`${analysis.accuracy.startsWith('9') ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} rounded-full`}
                  >
                    {analysis.accuracy}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="backdrop-blur-md bg-white/90 border border-white/30 rounded-3xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>
              {language === 'es' ? "Actividad Reciente" : 
               language === 'fr' ? "Activité Récente" : 
               "Recent Activity"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/50 rounded-2xl border border-white/30">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      activity.status === 'completed' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {activity.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertTriangle className="h-4 w-4" />
                      )}
                    </div>
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{activity.patient}</div>
                      <div className="text-sm text-gray-600">{activity.diagnosis}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={activity.confidence >= 95 ? "default" : "secondary"}
                      className={`${activity.confidence >= 95 ? "bg-green-600" : ""} rounded-full mb-1`}
                    >
                      {activity.confidence}% {language === 'es' ? "confianza" : language === 'fr' ? "confiance" : "confidence"}
                    </Badge>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
