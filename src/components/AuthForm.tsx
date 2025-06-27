
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Brain, 
  Mail, 
  Lock, 
  Loader2
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface AuthFormProps {
  onSuccess?: () => void;
}

const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const success = await login(formData.email, formData.password);
      
      if (success) {
        toast({
          title: "Éxito",
          description: "Sesión iniciada correctamente",
        });
        onSuccess?.();
      } else {
        toast({
          title: "Error",
          description: "Credenciales inválidas. Contacta al administrador para obtener acceso.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">
          Acceso Profesional
        </CardTitle>
        <p className="text-gray-600">
          Ingresa con tus credenciales autorizadas para acceder a MedAI
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="doctor@hospital.com"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10"
                required
                minLength={6}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Procesando...
              </>
            ) : (
              'Ingresar'
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes acceso autorizado?
          </p>
          <p className="text-sm text-blue-600 mt-2">
            Contacta al administrador o solicita una demo
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
