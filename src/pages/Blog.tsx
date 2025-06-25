
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "Avances en Predicción de Diabetes con Machine Learning",
      excerpt: "Descubre cómo los nuevos algoritmos están revolucionando la detección temprana de diabetes tipo 2.",
      author: "Dr. María González",
      date: "2024-03-15",
      readTime: "5 min",
      category: "Investigación",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Integración de IA en Hospitales: Casos de Éxito",
      excerpt: "Análisis de hospitales que han implementado sistemas de IA para mejorar la eficiencia diagnóstica.",
      author: "Dr. Carlos Rodríguez",
      date: "2024-03-10",
      readTime: "7 min",
      category: "Casos de Estudio",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Reducción de Listas de Espera con Diagnóstico Automatizado",
      excerpt: "Cómo la automatización está ayudando a reducir los tiempos de espera en servicios médicos.",
      author: "Dra. Ana Martínez",
      date: "2024-03-08",
      readTime: "4 min",
      category: "Eficiencia",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Síndrome Metabólico: Detección Temprana con IA",
      excerpt: "Nuevos enfoques para identificar el síndrome metabólico antes de que se desarrollen complicaciones.",
      author: "Dr. Luis Fernández",
      date: "2024-03-05",
      readTime: "6 min",
      category: "Diagnóstico",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog MedAI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente actualizado con las últimas investigaciones y avances en inteligencia artificial médica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                ¿Quieres contribuir al blog?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Comparte tu experiencia y conocimiento con la comunidad médica
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Enviar Artículo
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
