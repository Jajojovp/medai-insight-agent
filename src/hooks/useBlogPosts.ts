
export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  views: number;
}

export const useBlogPosts = () => {
  console.log('🔍 Hook useBlogPosts iniciando...');
  
  const blogPosts: Record<string, BlogPostData> = {
    // IA Médica
    'ai-diagnostico-medico': {
      id: 'ai-diagnostico-medico',
      title: 'Inteligencia Artificial en el Diagnóstico Médico: Revolucionando la Medicina',
      excerpt: 'Descubre cómo la IA está transformando el diagnóstico médico con precisión sin precedentes.',
      author: 'Dr. Carlos Méndez',
      date: '2024-03-15',
      readTime: 8,
      category: 'IA Médica',
      tags: ['IA', 'Diagnóstico', 'Tecnología'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      views: 1250,
      content: `# Inteligencia Artificial en el Diagnóstico Médico

La inteligencia artificial (IA) está revolucionando la medicina moderna, especialmente en el campo del diagnóstico médico. Esta tecnología promete transformar la manera en que los profesionales de la salud identifican y tratan enfermedades.

## ¿Qué es la IA en Diagnóstico Médico?

La IA en diagnóstico médico utiliza algoritmos de aprendizaje automático para analizar datos médicos y ayudar en la identificación de patologías. Estos sistemas pueden procesar grandes cantidades de información médica en segundos.

### Beneficios Principales

- **Precisión mejorada**: Los algoritmos pueden detectar patrones que el ojo humano podría pasar por alto
- **Velocidad de diagnóstico**: Reducción significativa en el tiempo de análisis
- **Consistencia**: Eliminación de la variabilidad humana en la interpretación

## Aplicaciones Actuales

### Radiología
Los sistemas de IA pueden analizar radiografías, tomografías y resonancias magnéticas con una precisión comparable o superior a la de los radiólogos expertos.

### Patología
El análisis de muestras histológicas mediante IA permite identificar células cancerosas y otras anomalías con gran precisión.

### Dermatología
Los algoritmos pueden diagnosticar cáncer de piel analizando fotografías de lesiones cutáneas.

## Desafíos y Limitaciones

A pesar de sus beneficios, la IA en diagnóstico médico enfrenta varios desafíos:

- **Regulación**: Necesidad de marcos regulatorios claros
- **Sesgo en los datos**: Los algoritmos pueden heredar sesgos de los datos de entrenamiento
- **Interpretabilidad**: Dificultad para explicar cómo llega a sus conclusiones

## El Futuro de la IA en Medicina

La IA continuará evolucionando y mejorando, prometiendo:

- Diagnósticos más tempranos y precisos
- Medicina personalizada basada en el análisis de datos individuales
- Reducción de costos en el sistema de salud

La integración de la IA en la práctica médica no reemplazará a los médicos, sino que los potenciará para brindar una atención más precisa y eficiente.`
    },

    'futuro-medicina-digital': {
      id: 'futuro-medicina-digital',
      title: 'El Futuro de la Medicina Digital: Tendencias y Predicciones para 2025',
      excerpt: 'Explora las tendencias emergentes en medicina digital y cómo transformarán la atención médica.',
      author: 'Dra. Laura Fernández',
      date: '2024-03-12',
      readTime: 10,
      category: 'IA Médica',
      tags: ['Medicina Digital', 'Futuro', 'Tecnología', 'Telemedicina'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      views: 980,
      content: `# El Futuro de la Medicina Digital

La medicina digital está experimentando una transformación acelerada. Las nuevas tecnologías están redefiniendo cómo se presta la atención médica, desde la consulta hasta el tratamiento.

## Tendencias Emergentes

### Telemedicina Avanzada
La telemedicina ha evolucionado más allá de las videollamadas simples:
- Consultas virtuales con realidad aumentada
- Diagnóstico remoto con dispositivos IoT
- Monitoreo continuo de pacientes crónicos

### Inteligencia Artificial Predictiva
Los algoritmos de IA ahora pueden:
- Predecir brotes de enfermedades
- Identificar pacientes de alto riesgo
- Optimizar tratamientos personalizados

## Medicina Personalizada

### Genómica y Farmacogenómica
- Tratamientos basados en el perfil genético individual
- Medicamentos personalizados según la respuesta genética
- Prevención basada en predisposición genética

### Medicina de Precisión
- Análisis de big data para tratamientos individualizados
- Biomarcadores específicos para cada paciente
- Terapias dirigidas según características moleculares

El futuro de la medicina digital promete una atención más personalizada, accesible y efectiva, pero requiere abordar importantes desafíos éticos y tecnológicos.`
    },

    'casos-exito-ia-medica': {
      id: 'casos-exito-ia-medica',
      title: 'Casos de Éxito en IA Médica: Historias Reales de Transformación',
      excerpt: 'Conoce casos reales donde la IA ha salvado vidas y mejorado significativamente la atención médica.',
      author: 'Dr. Roberto Silva',
      date: '2024-03-08',
      readTime: 12,
      category: 'IA Médica',
      tags: ['IA', 'Casos de Éxito', 'Medicina', 'Innovación'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      views: 1560,
      content: `# Casos de Éxito en IA Médica

La inteligencia artificial ha demostrado su valor en medicina a través de casos reales que han salvado vidas y mejorado significativamente la atención médica.

## Detección Temprana de Cáncer de Mama

### Hospital Clínic de Barcelona
Un sistema de IA desarrollado en colaboración con Google DeepMind ha logrado:
- **Reducción del 25%** en falsos positivos
- **Mejora del 15%** en detección de cáncer
- **Tiempo de análisis**: De 30 minutos a 3 segundos

#### Caso Específico
María, de 45 años, tenía mamografías normales según evaluación inicial. El sistema de IA detectó anomalías microscópicas que llevaron al diagnóstico temprano de carcinoma ductal invasivo en etapa I, permitiendo un tratamiento exitoso con cirugía conservadora.

## Diagnóstico de Retinopatía Diabética

### Programa Aravind Eye Care System (India)
- **Pacientes examinados**: Más de 200,000 al año
- **Sensibilidad**: 96.1% en detección de retinopatía
- **Especificidad**: 95.8%
- **Impacto**: Prevención de ceguera en 15,000 pacientes

Estos casos demuestran que la IA en medicina no es solo una promesa futura, sino una realidad presente que está salvando vidas y mejorando la calidad de la atención médica a nivel global.`
    },

    // Oncología
    'cancer-mama-deteccion': {
      id: 'cancer-mama-deteccion',
      title: 'Detección Temprana del Cáncer de Mama: Guía Completa 2024',
      excerpt: 'Todo lo que necesitas saber sobre la detección temprana del cáncer de mama y las últimas tecnologías.',
      author: 'Dra. Ana Rodríguez',
      date: '2024-03-10',
      readTime: 12,
      category: 'Oncología',
      tags: ['Cáncer', 'Mama', 'Detección', 'Prevención'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      views: 2100,
      content: `# Detección Temprana del Cáncer de Mama

El cáncer de mama es uno de los tipos de cáncer más comunes en mujeres, pero la detección temprana puede salvar vidas. Esta guía completa te ayudará a entender todo sobre la detección precoz.

## Importancia de la Detección Temprana

La detección temprana del cáncer de mama es crucial porque:

- Aumenta significativamente las tasas de supervivencia
- Permite tratamientos menos invasivos
- Mejora la calidad de vida post-tratamiento
- Reduce los costos del tratamiento

## Métodos de Detección

### Autoexamen de Mama
El autoexamen mensual es fundamental para la detección temprana.

#### Técnica del Autoexamen
1. **Inspección visual**: Frente al espejo, observa cambios en forma, tamaño o textura
2. **Palpación**: Con movimientos circulares, examina toda la mama
3. **Frecuencia**: Una vez al mes, preferentemente después de la menstruación

### Mamografía
La mamografía es el método de detección más efectivo para mujeres mayores de 40 años.

La detección temprana del cáncer de mama es responsabilidad compartida entre el paciente y el sistema de salud. La educación, la prevención y el acceso a tecnologías de detección son clave para reducir la mortalidad por esta enfermedad.`
    },

    'enfermedad-cardiovascular-prevencion': {
      id: 'enfermedad-cardiovascular-prevencion',
      title: 'Prevención de Enfermedades Cardiovasculares: Estrategias Basadas en Evidencia',
      excerpt: 'Descubre las estrategias más efectivas para prevenir enfermedades cardiovasculares según la evidencia científica actual.',
      author: 'Dr. Antonio Martín',
      date: '2024-03-03',
      readTime: 14,
      category: 'Cardiología',
      tags: ['Cardiovascular', 'Prevención', 'Factores de Riesgo', 'Corazón'],
      image: 'https://images.unsplash.com/photo-1559757164-f57a36e40a14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      views: 2250,
      content: `# Prevención de Enfermedades Cardiovasculares

Las enfermedades cardiovasculares son la principal causa de muerte a nivel mundial. Sin embargo, la mayoría son prevenibles mediante estrategias basadas en evidencia científica sólida.

## Factores de Riesgo Cardiovascular

### Factores No Modificables
- Edad del paciente
- Género y hormonas
- Genética e historia familiar

### Factores Modificables Mayores
- Hipertensión arterial
- Dislipidemia
- Diabetes mellitus
- Tabaquismo

## Estrategias de Prevención

### Evaluación del Riesgo
- Calculadoras de riesgo validadas
- Estratificación según factores
- Seguimiento personalizado

### Intervenciones
- Modificación del estilo de vida
- Farmacoterapia cuando esté indicada
- Seguimiento médico regular

La prevención cardiovascular requiere un enfoque integral, personalizado y basado en evidencia que combine intervenciones farmacológicas y no farmacológicas.`
    },

    'diabetes-control-glucemia': {
      id: 'diabetes-control-glucemia',
      title: 'Control de Glucemia en Diabetes: Estrategias Modernas y Efectivas',
      excerpt: 'Aprende las mejores estrategias para el control efectivo de la glucemia en pacientes diabéticos.',
      author: 'Dr. Miguel Torres',
      date: '2024-03-05',
      readTime: 10,
      category: 'Endocrinología',
      tags: ['Diabetes', 'Glucemia', 'Control', 'Tratamiento'],
      image: 'https://images.unsplash.com/photo-1559757164-83d4ea5df6eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      views: 1800,
      content: `# Control de Glucemia en Diabetes

El control efectivo de la glucemia es fundamental para prevenir complicaciones a largo plazo en pacientes con diabetes. Esta guía presenta las estrategias más modernas y efectivas.

## Objetivos del Control Glucémico

### Metas Generales
- HbA1c < 7% para la mayoría de adultos
- Glucemia preprandial: 80-130 mg/dL
- Glucemia postprandial: < 180 mg/dL

## Monitoreo de Glucemia

### Automonitoreo Capilar
- Frecuencia según tipo de diabetes y tratamiento
- Técnica correcta de medición
- Registro y análisis de resultados

### Monitoreo Continuo de Glucosa (MCG)
- Medición continua las 24 horas
- Alertas de hipoglucemia/hiperglucemia
- Tendencias glucémicas en tiempo real

El control efectivo de la glucemia requiere un enfoque integral que combine tecnología moderna, educación del paciente y seguimiento médico continuo.`
    }
  };

  const getAllPosts = () => {
    const posts = Object.values(blogPosts);
    console.log('🔍 getAllPosts retornando:', posts.length, 'posts');
    return posts;
  };

  const getPostById = (id: string) => {
    const post = blogPosts[id] || null;
    console.log('🔍 getPostById para:', id, 'encontrado:', !!post);
    return post;
  };

  const getPostsByCategory = (category: string) => {
    const posts = Object.values(blogPosts).filter(post => post.category === category);
    console.log('🔍 getPostsByCategory para:', category, 'encontrados:', posts.length);
    return posts;
  };

  console.log('🔍 Hook useBlogPosts completado');
  
  return {
    getAllPosts,
    getPostById,
    getPostsByCategory,
    blogPosts
  };
};
