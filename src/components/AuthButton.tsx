
import { Button } from "@/components/ui/button";
import { User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AuthButton = () => {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <Button variant="ghost" size="sm" onClick={logout}>
        <User className="h-4 w-4 mr-2" />
        Cerrar Sesión
      </Button>
    );
  }

  return (
    <Link to="/login">
      <Button variant="ghost" size="sm">
        <LogIn className="h-4 w-4 mr-2" />
        Iniciar Sesión
      </Button>
    </Link>
  );
};

export default AuthButton;
