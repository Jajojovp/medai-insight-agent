
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
  console.log('🔍 === HOOK useBlogPosts INICIADO ===');
  
  try {
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
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        views: 1250,
        content: `# Inteligencia Artificial en el Diagnóstico Médico

La inteligencia artificial (IA) está revolucionando la medicina moderna, especialmente en el campo del diagnóstico médico.

## ¿Qué es la IA en Diagnóstico Médico?

La IA en diagnóstico médico utiliza algoritmos de aprendizaje automático para analizar datos médicos y ayudar en la identificación de patologías.

### Beneficios Principales

- **Precisión mejorada**: Los algoritmos pueden detectar patrones que el ojo humano podría pasar por alto
- **Velocidad de diagnóstico**: Reducción significativa en el tiempo de análisis
- **Consistencia**: Eliminación de la variabilidad humana en la interpretación

## Aplicaciones Actuales

La IA se aplica en radiología, patología y dermatología con excelentes resultados.

## El Futuro de la IA en Medicina

La IA continuará evolucionando y mejorando, prometiendo diagnósticos más tempranos y precisos.`
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
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        views: 980,
        content: `# El Futuro de la Medicina Digital

La medicina digital está experimentando una transformación acelerada.

## Tendencias Emergentes

### Telemedicina Avanzada
La telemedicina ha evolucionado más allá de las videollamadas simples.

### Inteligencia Artificial Predictiva
Los algoritmos de IA ahora pueden predecir brotes de enfermedades.

El futuro de la medicina digital promete una atención más personalizada, accesible y efectiva.`
      },

      'cancer-mama-deteccion': {
        id: 'cancer-mama-deteccion',
        title: 'Detección Temprana del Cáncer de Mama: Guía Completa 2024',
        excerpt: 'Todo lo que necesitas saber sobre la detección temprana del cáncer de mama.',
        author: 'Dra. Ana Rodríguez',
        date: '2024-03-10',
        readTime: 12,
        category: 'Oncología',
        tags: ['Cáncer', 'Mama', 'Detección', 'Prevención'],
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        views: 2100,
        content: `# Detección Temprana del Cáncer de Mama

El cáncer de mama es uno de los tipos de cáncer más comunes en mujeres.

## Importancia de la Detección Temprana

La detección temprana del cáncer de mama es crucial para salvar vidas.

La detección temprana es responsabilidad compartida entre el paciente y el sistema de salud.`
      }
    };

    console.log('🔍 blogPosts objeto creado con', Object.keys(blogPosts).length, 'posts');

    const getAllPosts = () => {
      console.log('🔍 getAllPosts() llamado');
      try {
        const posts = Object.values(blogPosts);
        console.log('🔍 getAllPosts() - posts obtenidos:', posts.length);
        console.log('🔍 getAllPosts() - primer post:', posts[0]?.title);
        return posts;
      } catch (error) {
        console.error('❌ Error en getAllPosts():', error);
        throw error;
      }
    };

    const getPostById = (id: string) => {
      console.log('🔍 getPostById() llamado para ID:', id);
      try {
        const post = blogPosts[id] || null;
        console.log('🔍 getPostById() - post encontrado:', !!post);
        return post;
      } catch (error) {
        console.error('❌ Error en getPostById():', error);
        throw error;
      }
    };

    const getPostsByCategory = (category: string) => {
      console.log('🔍 getPostsByCategory() llamado para categoría:', category);
      try {
        const posts = Object.values(blogPosts).filter(post => post.category === category);
        console.log('🔍 getPostsByCategory() - posts encontrados:', posts.length);
        return posts;
      } catch (error) {
        console.error('❌ Error en getPostsByCategory():', error);
        throw error;
      }
    };

    console.log('🔍 Hook useBlogPosts retornando funciones');
    
    return {
      getAllPosts,
      getPostById,
      getPostsByCategory,
      blogPosts
    };

  } catch (error) {
    console.error('❌ Error crítico en useBlogPosts hook:', error);
    throw error;
  }
};
