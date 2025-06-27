
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Apple, Dumbbell, Moon, Brain, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const HealthRecommendations = () => {
  const { language } = useLanguage();

  const recommendations = [
    {
      id: 1,
      icon: Apple,
      title: language === 'en' ? "Balanced Nutrition" : 
             language === 'fr' ? "Nutrition Équilibrée" : 
             "Nutrición Equilibrada",
      description: language === 'en' ? 
        "A balanced diet is fundamental for optimal health. Include fruits, vegetables, lean proteins, and whole grains in your daily meals." :
        language === 'fr' ?
        "Une alimentation équilibrée est fondamentale pour une santé optimale. Incluez des fruits, légumes, protéines maigres et céréales complètes dans vos repas quotidiens." :
        "Una dieta equilibrada es fundamental para una salud óptima. Incluye frutas, verduras, proteínas magras y cereales integrales en tus comidas diarias.",
      tips: language === 'en' ? [
        "Eat 5 servings of fruits and vegetables daily",
        "Choose whole grains over refined grains",
        "Include lean proteins like fish, chicken, and legumes",
        "Limit processed foods and added sugars"
      ] : language === 'fr' ? [
        "Mangez 5 portions de fruits et légumes par jour",
        "Choisissez des céréales complètes plutôt que raffinées",
        "Incluez des protéines maigres comme le poisson, le poulet et les légumineuses",
        "Limitez les aliments transformés et les sucres ajoutés"
      ] : [
        "Come 5 porciones de frutas y verduras al día",
        "Elige granos enteros sobre granos refinados",
        "Incluye proteínas magras como pescado, pollo y legumbres",
        "Limita los alimentos procesados y azúcares añadidos"
      ],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
    },
    {
      id: 2,
      icon: Dumbbell,
      title: language === 'en' ? "Regular Exercise" : 
             language === 'fr' ? "Exercice Régulier" : 
             "Ejercicio Regular",
      description: language === 'en' ? 
        "Physical activity is essential for maintaining cardiovascular health, muscle strength, and mental well-being." :
        language === 'fr' ?
        "L'activité physique est essentielle pour maintenir la santé cardiovasculaire, la force musculaire et le bien-être mental." :
        "La actividad física es esencial para mantener la salud cardiovascular, la fuerza muscular y el bienestar mental.",
      tips: language === 'en' ? [
        "Aim for 150 minutes of moderate exercise weekly",
        "Include both cardio and strength training",
        "Start with 10-minute sessions if you're a beginner",
        "Find activities you enjoy to stay motivated"
      ] : language === 'fr' ? [
        "Visez 150 minutes d'exercice modéré par semaine",
        "Incluez à la fois cardio et musculation",
        "Commencez par des sessions de 10 minutes si vous êtes débutant",
        "Trouvez des activités que vous aimez pour rester motivé"
      ] : [
        "Apunta a 150 minutos de ejercicio moderado semanal",
        "Incluye tanto cardio como entrenamiento de fuerza",
        "Comienza con sesiones de 10 minutos si eres principiante",
        "Encuentra actividades que disfrutes para mantenerte motivado"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
    },
    {
      id: 3,
      icon: Moon,
      title: language === 'en' ? "Quality Sleep" : 
             language === 'fr' ? "Sommeil de Qualité" : 
             "Sueño de Calidad",
      description: language === 'en' ? 
        "Adequate sleep is crucial for physical recovery, mental health, and immune system function." :
        language === 'fr' ?
        "Un sommeil adéquat est crucial pour la récupération physique, la santé mentale et le fonctionnement du système immunitaire." :
        "El sueño adecuado es crucial para la recuperación física, la salud mental y el funcionamiento del sistema inmunológico.",
      tips: language === 'en' ? [
        "Aim for 7-9 hours of sleep per night",
        "Maintain a consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Avoid screens 1 hour before bedtime"
      ] : language === 'fr' ? [
        "Visez 7-9 heures de sommeil par nuit",
        "Maintenez un horaire de sommeil cohérent",
        "Créez une routine relaxante avant le coucher",
        "Évitez les écrans 1 heure avant le coucher"
      ] : [
        "Apunta a 7-9 horas de sueño por noche",
        "Mantén un horario de sueño consistente",
        "Crea una rutina relajante antes de dormir",
        "Evita las pantallas 1 hora antes de acostarte"
      ],
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55"
    },
    {
      id: 4,
      icon: Brain,
      title: language === 'en' ? "Mental Health" : 
             language === 'fr' ? "Santé Mentale" : 
             "Salud Mental",
      description: language === 'en' ? 
        "Mental wellness is as important as physical health. Practice stress management and mindfulness techniques." :
        language === 'fr' ?
        "Le bien-être mental est aussi important que la santé physique. Pratiquez la gestion du stress et les techniques de pleine conscience." :
        "El bienestar mental es tan importante como la salud física. Practica técnicas de manejo del estrés y mindfulness.",
      tips: language === 'en' ? [
        "Practice meditation or deep breathing daily",
        "Stay connected with friends and family",
        "Engage in hobbies you enjoy",
        "Seek professional help when needed"
      ] : language === 'fr' ? [
        "Pratiquez la méditation ou la respiration profonde quotidiennement",
        "Restez connecté avec vos amis et votre famille",
        "Engagez-vous dans des passe-temps que vous aimez",
        "Cherchez de l'aide professionnelle si nécessaire"
      ] : [
        "Practica meditación o respiración profunda diariamente",
        "Mantente conectado con amigos y familia",
        "Participa en pasatiempos que disfrutes",
        "Busca ayuda profesional cuando sea necesario"
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
    },
    {
      id: 5,
      icon: Droplets,
      title: language === 'en' ? "Proper Hydration" : 
             language === 'fr' ? "Hydratation Appropriée" : 
             "Hidratación Adecuada",
      description: language === 'en' ? 
        "Staying properly hydrated is essential for all bodily functions and overall health maintenance." :
        language === 'fr' ?
        "Rester bien hydraté est essentiel pour toutes les fonctions corporelles et le maintien de la santé globale." :
        "Mantenerse adecuadamente hidratado es esencial para todas las funciones corporales y el mantenimiento de la salud general.",
      tips: language === 'en' ? [
        "Drink 8 glasses of water daily",
        "Increase intake during exercise or hot weather",
        "Monitor urine color as a hydration indicator",
        "Include water-rich foods like fruits and vegetables"
      ] : language === 'fr' ? [
        "Buvez 8 verres d'eau par jour",
        "Augmentez l'apport pendant l'exercice ou par temps chaud",
        "Surveillez la couleur de l'urine comme indicateur d'hydratation",
        "Incluez des aliments riches en eau comme les fruits et légumes"
      ] : [
        "Bebe 8 vasos de agua al día",
        "Aumenta la ingesta durante el ejercicio o clima caluroso",
        "Monitorea el color de la orina como indicador de hidratación",
        "Incluye alimentos ricos en agua como frutas y verduras"
      ],
      image: "https://images.unsplash.com/photo-1550572017-04903b8ec4e9"
    },
    {
      id: 6,
      icon: Heart,
      title: language === 'en' ? "Preventive Care" : 
             language === 'fr' ? "Soins Préventifs" : 
             "Cuidado Preventivo",
      description: language === 'en' ? 
        "Regular medical check-ups and preventive screenings are crucial for early detection and treatment of health issues." :
        language === 'fr' ?
        "Les examens médicaux réguliers et les dépistages préventifs sont cruciaux pour la détection précoce et le traitement des problèmes de santé." :
        "Los chequeos médicos regulares y los exámenes preventivos son cruciales para la detección temprana y el tratamiento de problemas de salud.",
      tips: language === 'en' ? [
        "Schedule annual physical examinations",
        "Keep up with recommended screenings",
        "Monitor blood pressure and cholesterol",
        "Stay current with vaccinations"
      ] : language === 'fr' ? [
        "Planifiez des examens physiques annuels",
        "Tenez-vous au courant des dépistages recommandés",
        "Surveillez la pression artérielle et le cholestérol",
        "Restez à jour avec les vaccinations"
      ] : [
        "Programa exámenes físicos anuales",
        "Mantente al día con los exámenes recomendados",
        "Monitorea la presión arterial y el colesterol",
        "Mantente al día con las vacunas"
      ],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <PublicNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? "Health Recommendations" : 
             language === 'fr' ? "Recommandations de Santé" : 
             "Recomendaciones de Salud"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' ? "Evidence-based recommendations to help you maintain optimal health and prevent disease" :
             language === 'fr' ? "Recommandations basées sur des preuves pour vous aider à maintenir une santé optimale et prévenir les maladies" :
             "Recomendaciones basadas en evidencia para ayudarte a mantener una salud óptima y prevenir enfermedades"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec) => {
            const Icon = rec.icon;
            return (
              <Card key={rec.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={rec.image} 
                    alt={rec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{rec.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{rec.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === 'en' ? "Key Tips:" : 
                       language === 'fr' ? "Conseils Clés :" : 
                       "Consejos Clave:"}
                    </h4>
                    <ul className="space-y-2">
                      {rec.tips.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-green-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'en' ? "Ready to improve your health?" :
                 language === 'fr' ? "Prêt à améliorer votre santé ?" :
                 "¿Listo para mejorar tu salud?"}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {language === 'en' ? "Get personalized health recommendations with our AI-powered analysis for 12 critical diseases" :
                 language === 'fr' ? "Obtenez des recommandations de santé personnalisées avec notre analyse alimentée par l'IA pour 12 maladies critiques" :
                 "Obtén recomendaciones de salud personalizadas con nuestro análisis impulsado por IA para 12 enfermedades críticas"}
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {language === 'en' ? "Start Health Analysis" :
                 language === 'fr' ? "Commencer l'Analyse de Santé" :
                 "Comenzar Análisis de Salud"}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HealthRecommendations;
