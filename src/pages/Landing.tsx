import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  Stethoscope, 
  Activity, 
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PublicNavigation from "@/components/PublicNavigation";
import Footer from "@/components/Footer";

const Landing = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: {
        es: 'IA Médica',
        en: 'Medical AI',
        fr: 'IA Médicale'
      },
      description: {
        es: 'Algoritmos especializados para cada enfermedad crítica',
        en: 'Specialized algorithms for each critical disease',
        fr: 'Algorithmes spécialisés pour chaque maladie critique'
      }
    },
    {
      icon: Shield,
      title: {
        es: 'Seguridad',
        en: 'Security',
        fr: 'Sécurité'
      },
      description: {
        es: 'Cumplimiento HIPAA y protección de datos médicos',
        en: 'HIPAA compliance and medical data protection',
        fr: 'Conformité HIPAA et protection données médicales'
      }
    },
    {
      icon: Activity,
      title: {
        es: 'Precisión 98%',
        en: '98% Accuracy',
        fr: 'Précision 98%'
      },
      description: {
        es: 'Detección temprana con alta precisión diagnóstica',
        en: 'Early detection with high diagnostic accuracy',
        fr: 'Détection précoce avec haute précision diagnostique'
      }
    },
    {
      icon: Clock,
      title: {
        es: 'Análisis Rápido',
        en: 'Fast Analysis',
        fr: 'Analyse Rapide'
      },
      description: {
        es: 'Resultados en tiempo real para decisiones inmediatas',
        en: 'Real-time results for immediate decisions',
        fr: 'Résultats temps réel pour décisions immédiates'
      }
    }
  ];

  const diseases = [
    {
      category: {
        es: 'Oncología',
        en: 'Oncology',
        fr: 'Oncologie'
      },
      items: [
        { 
          id: 'breast-cancer',
          name: { es: 'Cáncer de Mama', en: 'Breast Cancer', fr: 'Cancer du Sein' },
          description: { 
            es: 'Detección temprana en mujeres 40-69 años. Factor de riesgo: historial familiar.',
            en: 'Early detection in women 40-69 years. Risk factor: family history.',
            fr: 'Détection précoce chez femmes 40-69 ans. Facteur risque: antécédents familiaux.'
          },
          prevalence: { es: '1 de cada 8 mujeres', en: '1 in 8 women', fr: '1 femme sur 8' }
        },
        { 
          id: 'prostate-cancer',
          name: { es: 'Cáncer de Próstata', en: 'Prostate Cancer', fr: 'Cancer Prostate' },
          description: { 
            es: 'Común en hombres >50 años. Screening PSA recomendado anualmente.',
            en: 'Common in men >50 years. Annual PSA screening recommended.',
            fr: 'Fréquent chez hommes >50 ans. Dépistage PSA annuel recommandé.'
          },
          prevalence: { es: '1 de cada 9 hombres', en: '1 in 9 men', fr: '1 homme sur 9' }
        },
        { 
          id: 'lung-cancer',
          name: { es: 'Cáncer de Pulmón', en: 'Lung Cancer', fr: 'Cancer Poumon' },
          description: { 
            es: 'Altamente letal. Fumadores tienen 15-30x más riesgo.',
            en: 'Highly lethal. Smokers have 15-30x higher risk.',
            fr: 'Très létal. Fumeurs ont risque 15-30x plus élevé.'
          },
          prevalence: { es: '2.2M casos/año', en: '2.2M cases/year', fr: '2.2M cas/an' }
        },
        { 
          id: 'pancreatic-cancer',
          name: { es: 'Cáncer Páncreas', en: 'Pancreatic Cancer', fr: 'Cancer Pancréas' },
          description: { 
            es: 'Difícil detección temprana. Diabetes de inicio tardío puede ser síntoma.',
            en: 'Difficult early detection. Late-onset diabetes may be symptom.',
            fr: 'Détection précoce difficile. Diabète tardif peut être symptôme.'
          },
          prevalence: { es: '495K casos/año', en: '495K cases/year', fr: '495K cas/an' }
        },
        { 
          id: 'liver-cancer',
          name: { es: 'Cáncer Hígado', en: 'Liver Cancer', fr: 'Cancer Foie' },
          description: { 
            es: 'Relacionado con hepatitis B/C y cirrosis. Más común en hombres.',
            en: 'Related to hepatitis B/C and cirrhosis. More common in men.',
            fr: 'Lié à hépatite B/C et cirrhose. Plus fréquent chez hommes.'
          },
          prevalence: { es: '906K casos/año', en: '906K cases/year', fr: '906K cas/an' }
        },
        { 
          id: 'stomach-cancer',
          name: { es: 'Cáncer Estómago', en: 'Stomach Cancer', fr: 'Cancer Estomac' },
          description: { 
            es: 'Infección H. pylori aumenta riesgo. Dieta rica en sal factor de riesgo.',
            en: 'H. pylori infection increases risk. High-salt diet risk factor.',
            fr: 'Infection H. pylori augmente risque. Régime salé facteur risque.'
          },
          prevalence: { es: '1.1M casos/año', en: '1.1M cases/year', fr: '1.1M cas/an' }
        },
        { 
          id: 'leukemia',
          name: { es: 'Leucemia', en: 'Leukemia', fr: 'Leucémie' },
          description: { 
            es: 'Cáncer de sangre. Síntomas: fatiga, fiebre, sangrado fácil.',
            en: 'Blood cancer. Symptoms: fatigue, fever, easy bleeding.',
            fr: 'Cancer du sang. Symptômes: fatigue, fièvre, saignements faciles.'
          },
          prevalence: { es: '474K casos/año', en: '474K cases/year', fr: '474K cas/an' }
        }
      ]
    },
    {
      category: {
        es: 'Cardiovascular',
        en: 'Cardiovascular',
        fr: 'Cardiovasculaire'
      },
      items: [
        { 
          id: 'heart-disease',
          name: { es: 'Enfermedad Cardíaca', en: 'Heart Disease', fr: 'Maladie Cardiaque' },
          description: { 
            es: 'Principal causa de muerte. Colesterol alto, hipertensión factores clave.',
            en: 'Leading cause of death. High cholesterol, hypertension key factors.',
            fr: 'Principale cause de décès. Cholestérol élevé, hypertension facteurs clés.'
          },
          prevalence: { es: '18.6M muertes/año', en: '18.6M deaths/year', fr: '18.6M décès/an' }
        },
        { 
          id: 'stroke',
          name: { es: 'ACV', en: 'Stroke', fr: 'AVC' },
          description: { 
            es: 'Emergencia médica. Tiempo crítico: primeras 3-4 horas.',
            en: 'Medical emergency. Critical time: first 3-4 hours.',
            fr: 'Urgence médicale. Temps critique: premières 3-4 heures.'
          },
          prevalence: { es: '6.5M muertes/año', en: '6.5M deaths/year', fr: '6.5M décès/an' }
        }
      ]
    },
    {
      category: {
        es: 'Metabólicas',
        en: 'Metabolic',
        fr: 'Métaboliques'
      },
      items: [
        { 
          id: 'diabetes',
          name: { es: 'Diabetes', en: 'Diabetes', fr: 'Diabète' },
          description: { 
            es: 'Tipo 2 prevenible con dieta y ejercicio. HbA1c <7% objetivo.',
            en: 'Type 2 preventable with diet and exercise. HbA1c <7% target.',
            fr: 'Type 2 prévenible avec régime et exercice. HbA1c <7% objectif.'
          },
          prevalence: { es: '537M adultos', en: '537M adults', fr: '537M adultes' }
        },
        { 
          id: 'chronic-kidney-disease',
          name: { es: 'Enfermedad Renal', en: 'Kidney Disease', fr: 'Maladie Rénale' },
          description: { 
            es: 'Progresa silenciosamente. Diabetes e hipertensión causas principales.',
            en: 'Progresses silently. Diabetes and hypertension main causes.',
            fr: 'Progresse silencieusement. Diabète et hypertension causes principales.'
          },
          prevalence: { es: '850M personas', en: '850M people', fr: '850M personnes' }
        },
        { 
          id: 'epilepsy',
          name: { es: 'Epilepsia', en: 'Epilepsy', fr: 'Épilepsie' },
          description: { 
            es: 'Trastorno neurológico. 70% puede controlarse con medicación.',
            en: 'Neurological disorder. 70% can be controlled with medication.',
            fr: 'Trouble neurologique. 70% peut être contrôlé avec médication.'
          },
          prevalence: { es: '50M personas', en: '50M people', fr: '50M personnes' }
        }
      ]
    }
  ];

  const stats = [
    {
      number: '98.5%',
      label: {
        es: 'Precisión',
        en: 'Accuracy',
        fr: 'Précision'
      }
    },
    {
      number: '50K+',
      label: {
        es: 'Análisis',
        en: 'Analysis',
        fr: 'Analyses'
      }
    },
    {
      number: '200+',
      label: {
        es: 'Hospitales',
        en: 'Hospitals',
        fr: 'Hôpitaux'
      }
    },
    {
      number: '12',
      label: {
        es: 'Enfermedades',
        en: 'Diseases',
        fr: 'Maladies'
      }
    }
  ];

  const medicalBenefits = [
    {
      title: {
        es: 'Detección Temprana',
        en: 'Early Detection',
        fr: 'Détection Précoce'
      },
      stat: {
        es: '40% mejor supervivencia',
        en: '40% better survival',
        fr: '40% meilleure survie'
      },
      description: {
        es: 'La detección temprana mejora significativamente las tasas de supervivencia en cáncer',
        en: 'Early detection significantly improves cancer survival rates',
        fr: 'La détection précoce améliore significativement les taux de survie du cancer'
      }
    },
    {
      title: {
        es: 'Reducción de Costos',
        en: 'Cost Reduction',
        fr: 'Réduction Coûts'
      },
      stat: {
        es: '60% menos gastos',
        en: '60% less expenses',
        fr: '60% moins dépenses'
      },
      description: {
        es: 'El diagnóstico temprano reduce costos de tratamiento y hospitalización',
        en: 'Early diagnosis reduces treatment and hospitalization costs',
        fr: 'Le diagnostic précoce réduit les coûts de traitement et hospitalisation'
      }
    },
    {
      title: {
        es: 'Precisión Diagnóstica',
        en: 'Diagnostic Precision',
        fr: 'Précision Diagnostique'
      },
      stat: {
        es: '95% de exactitud',
        en: '95% accuracy',
        fr: '95% précision'
      },
      description: {
        es: 'IA médica supera precisión diagnóstica de métodos tradicionales',
        en: 'Medical AI surpasses diagnostic accuracy of traditional methods',
        fr: 'IA médicale dépasse précision diagnostique des méthodes traditionnelles'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-white/30">
      <PublicNavigation />
      
      {/* Hero Section - Fixed title size and button colors */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 rounded-full px-4 py-2">
                <Stethoscope className="h-4 w-4 mr-2" />
                {language === 'es' ? 'IA Médica' : 
                 language === 'fr' ? 'IA Médicale' : 
                 'Medical AI'}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'es' ? 'Diagnóstico IA Médico' :
                 language === 'fr' ? 'Diagnostic IA Médical' :
                 'Medical AI Diagnosis'}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {language === 'es' ? 'IA para 12 enfermedades críticas. Detección temprana confiable.' :
                 language === 'fr' ? 'IA pour 12 maladies critiques. Détection précoce fiable.' :
                 'AI for 12 critical diseases. Reliable early detection.'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl">
                  {language === 'es' ? 'Iniciar' :
                   language === 'fr' ? 'Commencer' :
                   'Start'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/features">
                <Button variant="outline" size="lg" className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-2xl text-lg font-semibold">
                  {language === 'es' ? 'Ver Más' :
                   language === 'fr' ? 'Voir Plus' :
                   'Learn More'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label[language as keyof typeof stat.label]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Tecnología IA Avanzada' :
               language === 'fr' ? 'Technologie IA Avancée' :
               'Advanced AI Technology'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'es' ? 'Herramientas diagnósticas de precisión médica' :
               language === 'fr' ? 'Outils diagnostiques de précision médicale' :
               'Medical precision diagnostic tools'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {feature.title[language as keyof typeof feature.title]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description[language as keyof typeof feature.description]}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diseases Section - Complete with 12 diseases */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? '12 Enfermedades Analizadas' :
               language === 'fr' ? '12 Maladies Analysées' :
               '12 Analyzed Diseases'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'es' ? 'Diagnóstico especializado con datos médicos actualizados' :
               language === 'fr' ? 'Diagnostic spécialisé avec données médicales actualisées' :
               'Specialized diagnosis with updated medical data'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {diseases.map((category, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-center text-xl text-blue-600">
                    {category.category[language as keyof typeof category.category]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-l-blue-200 pl-4 py-2">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">
                              {item.name[language as keyof typeof item.name]}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {item.description[language as keyof typeof item.description]}
                            </p>
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                              {item.prevalence[language as keyof typeof item.prevalence]}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Benefits Section - Replacing fake testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Beneficios Clínicos' :
               language === 'fr' ? 'Bénéfices Cliniques' :
               'Clinical Benefits'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'es' ? 'Evidencia científica del impacto de la IA médica' :
               language === 'fr' ? 'Évidence scientifique de l\'impact de l\'IA médicale' :
               'Scientific evidence of medical AI impact'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {medicalBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl p-8 text-center">
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-blue-600">
                    {benefit.stat[language as keyof typeof benefit.stat]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title[language as keyof typeof benefit.title]}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description[language as keyof typeof benefit.description]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed button colors */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {language === 'es' ? '¿Listo para comenzar?' :
               language === 'fr' ? 'Prêt à commencer?' :
               'Ready to start?'}
            </h2>
            
            <p className="text-xl text-blue-100 max-w-xl mx-auto">
              {language === 'es' ? 'Únase a profesionales que usan MedAI' :
               language === 'fr' ? 'Rejoignez professionnels qui utilisent MedAI' :
               'Join professionals using MedAI'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                  {language === 'es' ? 'Iniciar' :
                   language === 'fr' ? 'Commencer' :
                   'Start'}
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold">
                  {language === 'es' ? 'Contacto' :
                   language === 'fr' ? 'Contact' :
                   'Contact'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
