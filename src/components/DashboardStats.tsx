
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Users, 
  FileText, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Consultations",
      value: "1,247",
      change: "+12%",
      changeType: "positive",
      icon: Activity,
      color: "blue"
    },
    {
      title: "Active Patients",
      value: "892",
      change: "+8%",
      changeType: "positive",
      icon: Users,
      color: "green"
    },
    {
      title: "Reports Generated",
      value: "1,156",
      change: "+15%",
      changeType: "positive",
      icon: FileText,
      color: "purple"
    },
    {
      title: "Accuracy Rate",
      value: "94.7%",
      change: "+2.1%",
      changeType: "positive",
      icon: TrendingUp,
      color: "emerald"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      patient: "Patient #1247",
      diagnosis: "Type 2 Diabetes",
      confidence: 92,
      status: "completed",
      time: "2 hours ago"
    },
    {
      id: 2,
      patient: "Patient #1246",
      diagnosis: "Hypertension",
      confidence: 88,
      status: "pending",
      time: "4 hours ago"
    },
    {
      id: 3,
      patient: "Patient #1245",
      diagnosis: "Metabolic Syndrome",
      confidence: 95,
      status: "completed",
      time: "6 hours ago"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      emerald: "text-emerald-600 bg-emerald-100"
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  <span className="text-gray-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
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
                  <div>
                    <div className="font-medium">{activity.patient}</div>
                    <div className="text-sm text-gray-600">{activity.diagnosis}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={activity.confidence >= 90 ? "default" : "secondary"}
                    className={activity.confidence >= 90 ? "bg-green-600" : ""}
                  >
                    {activity.confidence}% confidence
                  </Badge>
                  <div className="text-sm text-gray-500 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
