
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  specialization?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, specialization?: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    console.error('🚨 useAuth debe ser usado dentro de AuthProvider');
    // Return safe defaults instead of throwing
    return {
      user: null,
      login: async () => false,
      register: async () => false,
      logout: () => {},
      isLoading: false
    };
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('🔐 AuthProvider inicializando...');
    try {
      // Check for stored user data on app load
      const storedUser = localStorage.getItem('medai_user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        console.log('✅ Usuario encontrado en localStorage:', parsedUser.name);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('❌ Error cargando usuario desde localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('medai_user');
    } finally {
      setIsLoading(false);
      console.log('✅ AuthProvider inicializado correctamente');
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('🔐 Intentando login para:', email);
      setIsLoading(true);
      
      // Simulate API call - in production this would call your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - accept any valid email/password combination
      if (email.includes('@') && password.length >= 6) {
        const mockUser: User = {
          id: '1',
          name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          email: email,
          specialization: 'Internal Medicine'
        };
        
        setUser(mockUser);
        localStorage.setItem('medai_user', JSON.stringify(mockUser));
        console.log('✅ Login exitoso:', mockUser.name);
        return true;
      }
      
      console.log('❌ Credenciales inválidas');
      return false;
    } catch (error) {
      console.error('❌ Error en login:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, specialization?: string): Promise<boolean> => {
    try {
      console.log('📝 Intentando registro para:', email);
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email.includes('@') && password.length >= 6 && name.length >= 2) {
        const newUser: User = {
          id: Date.now().toString(),
          name: name,
          email: email,
          specialization: specialization || 'General Practice'
        };
        
        setUser(newUser);
        localStorage.setItem('medai_user', JSON.stringify(newUser));
        console.log('✅ Registro exitoso:', newUser.name);
        return true;
      }
      
      console.log('❌ Datos de registro inválidos');
      return false;
    } catch (error) {
      console.error('❌ Error en registro:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      console.log('👋 Cerrando sesión...');
      setUser(null);
      localStorage.removeItem('medai_user');
      console.log('✅ Sesión cerrada correctamente');
    } catch (error) {
      console.error('❌ Error en logout:', error);
    }
  };

  const contextValue = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
