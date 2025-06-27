
import { Button } from "@/components/ui/button";
import { User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

const AuthButton = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  if (user) {
    return (
      <Button variant="ghost" size="sm" onClick={logout}>
        <User className="h-4 w-4 mr-2" />
        {t('nav.logout')}
      </Button>
    );
  }

  return (
    <Link to="/login">
      <Button variant="ghost" size="sm">
        <LogIn className="h-4 w-4 mr-2" />
        {t('nav.login') || 'Iniciar Sesión'}
      </Button>
    </Link>
  );
};

export default AuthButton;
