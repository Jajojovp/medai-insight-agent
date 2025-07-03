
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AuthForm from '@/components/AuthForm';
import PublicNavigation from '@/components/PublicNavigation';
import Footer from '@/components/Footer';
import { Brain } from 'lucide-react';

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Brain className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Iniciar Sesión
            </h1>
            <p className="text-gray-600">
              Accede a tu cuenta profesional de MedAI
            </p>
          </div>

          {/* Auth Form */}
          <AuthForm onSuccess={handleLoginSuccess} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
