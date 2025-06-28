
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense, lazy } from "react";

// Lazy load components to reduce initial bundle size
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const HealthRecommendations = lazy(() => import("./pages/HealthRecommendations"));
const Contact = lazy(() => import("./pages/Contact"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const API = lazy(() => import("./pages/API"));
const Resources = lazy(() => import("./pages/Resources"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Sales = lazy(() => import("./pages/Sales"));
const Support = lazy(() => import("./pages/Support"));

// Disease Pages - Lazy loaded
const Diabetes = lazy(() => import("./pages/Diabetes"));
const BreastCancer = lazy(() => import("./pages/BreastCancer"));
const ProstateCancer = lazy(() => import("./pages/ProstateCancer"));
const HeartDisease = lazy(() => import("./pages/HeartDisease"));
const Stroke = lazy(() => import("./pages/Stroke"));
const ChronicKidneyDisease = lazy(() => import("./pages/ChronicKidneyDisease"));
const PancreaticCancer = lazy(() => import("./pages/PancreaticCancer"));
const StomachCancer = lazy(() => import("./pages/StomachCancer"));
const Leukemia = lazy(() => import("./pages/Leukemia"));
const LiverCancer = lazy(() => import("./pages/LiverCancer"));
const LungCancer = lazy(() => import("./pages/LungCancer"));
const Epilepsy = lazy(() => import("./pages/Epilepsy"));

const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Optimized QueryClient for mobile
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      networkMode: 'offlineFirst',
    },
    mutations: {
      retry: 1,
    },
  },
});

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando...</p>
    </div>
  </div>
);

console.log('🚀 App iniciando - Versión Mobile Optimizada');

const App = () => {
  console.log('🔍 App renderizando - Iniciando contextos');
  
  try {
    return (
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <AuthProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<Landing />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogPostPage />} />
                      <Route path="/health-recommendations" element={<HealthRecommendations />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/features" element={<Features />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/api" element={<API />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/documentation" element={<Documentation />} />
                      <Route path="/sales" element={<Sales />} />
                      <Route path="/support" element={<Support />} />
                      
                      {/* Disease Pages */}
                      <Route path="/diabetes" element={<Diabetes />} />
                      <Route path="/breast-cancer" element={<BreastCancer />} />
                      <Route path="/prostate-cancer" element={<ProstateCancer />} />
                      <Route path="/heart-disease" element={<HeartDisease />} />
                      <Route path="/stroke" element={<Stroke />} />
                      <Route path="/chronic-kidney-disease" element={<ChronicKidneyDisease />} />
                      <Route path="/pancreatic-cancer" element={<PancreaticCancer />} />
                      <Route path="/stomach-cancer" element={<StomachCancer />} />
                      <Route path="/leukemia" element={<Leukemia />} />
                      <Route path="/liver-cancer" element={<LiverCancer />} />
                      <Route path="/lung-cancer" element={<LungCancer />} />
                      <Route path="/epilepsy" element={<Epilepsy />} />
                      
                      <Route 
                        path="/dashboard" 
                        element={
                          <Suspense fallback={<LoadingSpinner />}>
                            <ProtectedRoute>
                              <Index />
                            </ProtectedRoute>
                          </Suspense>
                        } 
                      />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </BrowserRouter>
              </TooltipProvider>
            </AuthProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('🚨 Error crítico en App.tsx:', error);
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error de Aplicación</h1>
          <p className="text-gray-700 mb-4">Se produjo un error crítico al cargar la aplicación.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Recargar Página
          </button>
        </div>
      </div>
    );
  }
};

export default App;
