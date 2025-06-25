
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  BookOpen, 
  Settings, 
  User,
  Menu,
  X,
  Globe,
  Info
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Navigation = ({ activeView, setActiveView }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'dashboard', label: t('nav.dashboard'), icon: BarChart3 },
    { id: 'chat', label: t('nav.chat'), icon: MessageSquare },
    { id: 'info', label: t('nav.info'), icon: Info },
    { id: 'admin', label: t('nav.admin'), icon: Settings },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MedAI</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
              Pro
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeView === item.id ? "default" : "ghost"}
                  className={`${
                    activeView === item.id 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveView(item.id)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">{t('language.spanish')}</SelectItem>
                <SelectItem value="en">{t('language.english')}</SelectItem>
                <SelectItem value="fr">{t('language.french')}</SelectItem>
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-600">
              {t('nav.welcome')}, <span className="font-medium">{user?.name}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <User className="h-4 w-4 mr-2" />
              {t('nav.logout')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeView === item.id ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeView === item.id 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-600"
                    }`}
                    onClick={() => {
                      setActiveView(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
              <div className="border-t pt-2 mt-2">
                <div className="px-3 py-2 text-sm text-gray-600">
                  {user?.name}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <User className="h-4 w-4 mr-2" />
                  {t('nav.logout')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
