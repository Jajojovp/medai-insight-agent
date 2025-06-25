import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: language === 'en' ? "Advances in Diabetes Prediction with Machine Learning" : 
             language === 'fr' ? "Avancées dans la Prédiction du Diabète avec l'Apprentissage Automatique" :
             "Avances en Predicción de Diabetes con Machine Learning",
      excerpt: language === 'en' ? "Discover how new algorithms are revolutionizing early detection of type 2 diabetes." :
               language === 'fr' ? "Découvrez comment les nouveaux algorithmes révolutionnent la détection précoce du diabète de type 2." :
               "Descubre cómo los nuevos algoritmos están revolucionando la detección temprana de diabetes tipo 2.",
      author: language === 'en' ? "Dr. Maria Gonzalez" : 
              language === 'fr' ? "Dr. Maria Gonzalez" :
              "Dr. María González",
      date: "2024-03-15",
      readTime: language === 'en' ? "5 min" : language === 'fr' ? "5 min" : "5 min",
      category: language === 'en' ? "Research" : language === 'fr' ? "Recherche" : "Investigación",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 2,
      title: language === 'en' ? "AI Integration in Hospitals: Success Stories" :
             language === 'fr' ? "Intégration de l'IA dans les Hôpitaux : Histoires de Succès" :
             "Integración de IA en Hospitales: Casos de Éxito",
      excerpt: language === 'en' ? "Analysis of hospitals that have implemented AI systems to improve diagnostic efficiency." :
               language === 'fr' ? "Analyse des hôpitaux qui ont mis en place des systèmes d'IA pour améliorer l'efficacité diagnostique." :
               "Análisis de hospitales que han implementado sistemas de IA para mejorar la eficiencia diagnóstica.",
      author: language === 'en' ? "Dr. Carlos Rodriguez" :
              language === 'fr' ? "Dr. Carlos Rodriguez" :
              "Dr. Carlos Rodríguez",
      date: "2024-03-10",
      readTime: language === 'en' ? "7 min" : language === 'fr' ? "7 min" : "7 min",
      category: language === 'en' ? "Case Studies" : language === 'fr' ? "Études de Cas" : "Casos de Estudio",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 3,
      title: language === 'en' ? "Reducing Wait Lists with Automated Diagnosis" :
             language === 'fr' ? "Réduction des Listes d'Attente avec le Diagnostic Automatisé" :
             "Reducción de Listas de Espera con Diagnóstico Automatizado",
      excerpt: language === 'en' ? "How automation is helping reduce wait times in medical services." :
               language === 'fr' ? "Comment l'automatisation aide à réduire les temps d'attente dans les services médicaux." :
               "Cómo la automatización está ayudando a reducir los tiempos de espera en servicios médicos.",
      author: language === 'en' ? "Dr. Ana Martinez" :
              language === 'fr' ? "Dr. Ana Martinez" :
              "Dra. Ana Martínez",
      date: "2024-03-08",
      readTime: language === 'en' ? "4 min" : language === 'fr' ? "4 min" : "4 min",
      category: language === 'en' ? "Efficiency" : language === 'fr' ? "Efficacité" : "Eficiencia",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 4,
      title: language === 'en' ? "Metabolic Syndrome: Early Detection with AI" :
             language === 'fr' ? "Syndrome Métabolique : Détection Précoce avec l'IA" :
             "Síndrome Metabólico: Detección Temprana con IA",
      excerpt: language === 'en' ? "New approaches to identify metabolic syndrome before complications develop." :
               language === 'fr' ? "Nouvelles approches pour identifier le syndrome métabolique avant que des complications ne se développent." :
               "Nuevos enfoques para identificar el síndrome metabólico antes de que se desarrollen complicaciones.",
      author: language === 'en' ? "Dr. Luis Fernandez" :
              language === 'fr' ? "Dr. Luis Fernandez" :
              "Dr. Luis Fernández",
      date: "2024-03-05",
      readTime: language === 'en' ? "6 min" : language === 'fr' ? "6 min" : "6 min",
      category: language === 'en' ? "Diagnosis" : language === 'fr' ? "Diagnostic" : "Diagnóstico",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 5,
      title: language === 'en' ? "The Future of Medical Analysis with Neural Networks" :
             language === 'fr' ? "L'Avenir de l'Analyse Médicale avec les Réseaux de Neurones" :
             "El Futuro del Análisis Médico con Redes Neuronales",
      excerpt: language === 'en' ? "Exploring how deep learning is transforming medical diagnosis and treatment." :
               language === 'fr' ? "Explorer comment l'apprentissage profond transforme le diagnostic et le traitement médical." :
               "Explorando cómo el aprendizaje profundo está transformando el diagnóstico y tratamiento médico.",
      author: language === 'en' ? "Dr. Sarah Chen" :
              language === 'fr' ? "Dr. Sarah Chen" :
              "Dr. Sarah Chen",
      date: "2024-03-01",
      readTime: language === 'en' ? "8 min" : language === 'fr' ? "8 min" : "8 min",
      category: language === 'en' ? "Technology" : language === 'fr' ? "Technologie" : "Tecnología",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: 6,
      title: language === 'en' ? "Patient Data Security in AI-Powered Healthcare" :
             language === 'fr' ? "Sécurité des Données Patients dans les Soins de Santé Alimentés par l'IA" :
             "Seguridad de Datos de Pacientes en Salud Potenciada por IA",
      excerpt: language === 'en' ? "Best practices for maintaining patient privacy while leveraging AI technologies." :
               language === 'fr' ? "Meilleures pratiques pour maintenir la confidentialité des patients tout en exploitant les technologies d'IA." :
               "Mejores prácticas para mantener la privacidad del paciente mientras se aprovechan las tecnologías de IA.",
      author: language === 'en' ? "Dr. Michael Johnson" :
              language === 'fr' ? "Dr. Michael Johnson" :
              "Dr. Michael Johnson",
      date: "2024-02-28",
      readTime: language === 'en' ? "6 min" : language === 'fr' ? "6 min" : "6 min",
      category: language === 'en' ? "Security" : language === 'fr' ? "Sécurité" : "Seguridad",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? "MedAI Blog" : 
             language === 'fr' ? "Blog MedAI" : 
             "Blog MedAI"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ? "Stay updated with the latest research and advances in medical artificial intelligence" :
             language === 'fr' ? "Restez à jour avec les dernières recherches et avancées en intelligence artificielle médicale" :
             "Mantente actualizado con las últimas investigaciones y avances en inteligencia artificial médica"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden h-full">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
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
            </Link>
          ))}
        </div>

        {/* Health Recommendations Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? "Health & Wellness" : 
               language === 'fr' ? "Santé & Bien-être" : 
               "Salud y Bienestar"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' ? "Discover evidence-based recommendations for optimal health" :
               language === 'fr' ? "Découvrez des recommandations basées sur des preuves pour une santé optimale" :
               "Descubre recomendaciones basadas en evidencia para una salud óptima"}
            </p>
          </div>
          
          <Link to="/health-recommendations">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'en' ? "Complete Health Guide" :
                   language === 'fr' ? "Guide Complet de Santé" :
                   "Guía Completa de Salud"}
                </h3>
                <p className="text-lg opacity-90">
                  {language === 'en' ? "Nutrition, exercise, sleep, mental health and more" :
                   language === 'fr' ? "Nutrition, exercice, sommeil, santé mentale et plus" :
                   "Nutrición, ejercicio, sueño, salud mental y más"}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'en' ? "Want to contribute to the blog?" :
                 language === 'fr' ? "Vous voulez contribuer au blog ?" :
                 "¿Quieres contribuir al blog?"}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {language === 'en' ? "Share your experience and knowledge with the medical community" :
                 language === 'fr' ? "Partagez votre expérience et vos connaissances avec la communauté médicale" :
                 "Comparte tu experiencia y conocimiento con la comunidad médica"}
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {language === 'en' ? "Submit Article" :
                 language === 'fr' ? "Soumettre un Article" :
                 "Enviar Artículo"}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
