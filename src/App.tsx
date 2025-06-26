
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Landing from "./pages/Landing";
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
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
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
);

export default App;
