
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
}

const BlogPost = ({ id }: BlogPostProps) => {
  const { t, language } = useLanguage();

  const blogPosts = {
    "1": {
      title: language === 'en' ? "Advances in Diabetes Prediction with Machine Learning" : 
             language === 'fr' ? "Avancées dans la Prédiction du Diabète avec l'Apprentissage Automatique" :
             "Avances en Predicción de Diabetes con Machine Learning",
      content: language === 'en' ? 
        `Machine learning is revolutionizing diabetes prediction by analyzing complex patterns in patient data. Recent studies show that AI models can predict type 2 diabetes up to 5 years before traditional methods.

        Key advances include:
        • Deep learning models that analyze retinal images to detect early diabetes signs
        • Continuous glucose monitoring combined with AI for personalized predictions
        • Integration of genetic, lifestyle, and clinical data for comprehensive risk assessment
        
        These technologies are helping healthcare providers intervene earlier and improve patient outcomes significantly.` :
      language === 'fr' ?
        `L'apprentissage automatique révolutionne la prédiction du diabète en analysant des modèles complexes dans les données des patients. Des études récentes montrent que les modèles d'IA peuvent prédire le diabète de type 2 jusqu'à 5 ans avant les méthodes traditionnelles.

        Les principales avancées incluent :
        • Modèles d'apprentissage profond qui analysent les images rétiniennes pour détecter les signes précoces du diabète
        • Surveillance continue du glucose combinée à l'IA pour des prédictions personnalisées
        • Intégration de données génétiques, de style de vie et cliniques pour une évaluation complète des risques
        
        Ces technologies aident les prestataires de soins de santé à intervenir plus tôt et à améliorer considérablement les résultats des patients.` :
        `El machine learning está revolucionando la predicción de diabetes mediante el análisis de patrones complejos en los datos de pacientes. Estudios recientes muestran que los modelos de IA pueden predecir diabetes tipo 2 hasta 5 años antes que los métodos tradicionales.

        Los avances clave incluyen:
        • Modelos de aprendizaje profundo que analizan imágenes retinianas para detectar signos tempranos de diabetes
        • Monitoreo continuo de glucosa combinado con IA para predicciones personalizadas
        • Integración de datos genéticos, de estilo de vida y clínicos para evaluación integral de riesgos
        
        Estas tecnologías están ayudando a los proveedores de salud a intervenir más temprano y mejorar significativamente los resultados de los pacientes.`,
      author: "Dr. María González",
      date: "2024-03-15",
      readTime: "5 min",
      category: language === 'en' ? "Research" : language === 'fr' ? "Recherche" : "Investigación",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
    },
    // Add more blog posts here...
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <PublicNavigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'en' ? "Article not found" : 
             language === 'fr' ? "Article non trouvé" : 
             "Artículo no encontrado"}
          </h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'en' ? "Back to Blog" : 
               language === 'fr' ? "Retour au Blog" : 
               "Volver al Blog"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'en' ? "Back to Blog" : 
           language === 'fr' ? "Retour au Blog" : 
           "Volver al Blog"}
        </Link>

        <Card>
          <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <CardTitle className="text-3xl mb-4">{post.title}</CardTitle>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
