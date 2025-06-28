
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import HealthRecommendations from "./pages/HealthRecommendations";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import API from "./pages/API";
import Resources from "./pages/Resources";
import Documentation from "./pages/Documentation";
import Sales from "./pages/Sales";
import Support from "./pages/Support";

// Disease Pages - All 12 diseases
import Diabetes from "./pages/Diabetes";
import BreastCancer from "./pages/BreastCancer";
import ProstateCancer from "./pages/ProstateCancer";
import HeartDisease from "./pages/HeartDisease";
import Stroke from "./pages/Stroke";
import ChronicKidneyDisease from "./pages/ChronicKidneyDisease";
import PancreaticCancer from "./pages/PancreaticCancer";
import StomachCancer from "./pages/StomachCancer";
import Leukemia from "./pages/Leukemia";
import LiverCancer from "./pages/LiverCancer";
import LungCancer from "./pages/LungCancer";
import Epilepsy from "./pages/Epilepsy";

import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

// Configuración optimizada del QueryClient para móviles
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutos
      refetchOnWindowFocus: false,
    },
  },
});

console.log('🚀 App iniciando...');

const App = () => {
  console.log('🔍 App renderizando...');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
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
                  
                  {/* Disease Pages - All 12 diseases */}
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
                      <ProtectedRoute>
                        <Index />
                      </ProtectedRoute>
                    } 
                  />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
