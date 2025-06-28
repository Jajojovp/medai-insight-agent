
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Eye, Brain, Heart, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SimpleBlogNavigation from '@/components/SimpleBlogNavigation';
import SimpleBlogFooter from '@/components/SimpleBlogFooter';
import { useBlogPosts, BlogPostData } from '@/hooks/useBlogPosts';

interface TableOfContentsProps {
  content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const headingRegex = /^(#{1,3})\s+(.+)/gm;
    const matches = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
      matches.push({ id, text, level });
    }

    setHeadings(matches);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Eye className="h-5 w-5 mr-2 text-blue-600" />
          Tabla de Contenidos
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="md:hidden"
        >
          {isCollapsed ? 'Mostrar' : 'Ocultar'}
        </Button>
      </div>
      
      <div className={`${isCollapsed ? 'hidden md:block' : 'block'}`}>
        <nav className="space-y-2">
          {headings.map((heading, index) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block py-2 px-3 rounded-lg transition-colors hover:bg-blue-100 ${
                heading.level === 1 ? 'font-semibold text-gray-900' :
                heading.level === 2 ? 'font-medium text-gray-800 ml-4' :
                'text-gray-700 ml-8'
              }`}
            >
              <span className="text-blue-600 font-mono text-sm mr-2">
                {String(index + 1).padStart(2, '0')}.
              </span>
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </Card>
  );
};

const BlogPost = ({ id }: { id: string }) => {
  console.log('🔍 BlogPost component optimizado sin imágenes para ID:', id);
  
  const navigate = useNavigate();
  const { getPostById, getPostsByCategory } = useBlogPosts();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    console.log('🔍 Buscando post optimizado con ID:', id);
    const foundPost = getPostById(id);
    console.log('🔍 Post encontrado:', foundPost?.title || 'No encontrado');
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id, getPostById]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  // Función para obtener estilo por categoría
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'IA Médica':
        return { 
          icon: Brain, 
          gradient: 'from-blue-500 to-purple-600',
          bgColor: 'bg-blue-50'
        };
      case 'Cardiología':
        return { 
          icon: Heart, 
          gradient: 'from-red-500 to-pink-600',
          bgColor: 'bg-red-50'
        };
      case 'Oncología':
        return { 
          icon: Microscope, 
          gradient: 'from-purple-500 to-indigo-600',
          bgColor: 'bg-purple-50'
        };
      default:
        return { 
          icon: Brain, 
          gradient: 'from-gray-500 to-gray-600',
          bgColor: 'bg-gray-50'
        };
    }
  };

  const formatContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    
    return lines.map((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('# ')) {
        const text = trimmed.substring(2);
        const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h1 key={index} id={id} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-8 first:mt-0">{text}</h1>;
      }
      
      if (trimmed.startsWith('## ')) {
        const text = trimmed.substring(3);
        const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h2 key={index} id={id} className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-gray-900">{text}</h2>;
      }
      
      if (trimmed.startsWith('### ')) {
        const text = trimmed.substring(4);
        const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h3 key={index} id={id} className="text-xl md:text-2xl font-medium mb-3 mt-6 text-gray-900">{text}</h3>;
      }
      
      if (trimmed.startsWith('#### ')) {
        const text = trimmed.substring(5);
        return <h4 key={index} className="text-lg font-medium mb-3 mt-4 text-gray-900">{text}</h4>;
      }
      
      if (trimmed.startsWith('- ')) {
        return <li key={index} className="text-gray-700 leading-relaxed mb-2">{trimmed.substring(2)}</li>;
      }
      
      if (trimmed.match(/^\d+\./)) {
        return <li key={index} className="text-gray-700 leading-relaxed mb-2">{trimmed.replace(/^\d+\.\s*/, '')}</li>;
      }
      
      if (trimmed && !trimmed.startsWith('#')) {
        return <p key={index} className="mb-4 leading-relaxed text-gray-700">{trimmed}</p>;
      }
      
      return null;
    }).filter(Boolean);
  };

  if (!post) {
    console.log('❌ Post no encontrado, mostrando error');
    return (
      <div className="min-h-screen bg-gray-50">
        <SimpleBlogNavigation />
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h2>
            <p className="text-gray-600 mb-4">ID buscado: {id}</p>
            <Button onClick={() => navigate('/blog')} className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Blog
            </Button>
          </div>
        </div>
        <SimpleBlogFooter />
      </div>
    );
  }

  console.log('🔍 Renderizando BlogPost optimizado para:', post.title);

  const relatedPosts = getPostsByCategory(post.category)
    .filter(relatedPost => relatedPost.id !== post.id)
    .slice(0, 2);

  const categoryStyle = getCategoryStyle(post.category);
  const CategoryIcon = categoryStyle.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleBlogNavigation />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back to Blog Button - Fixed */}
      <div className="sticky top-4 z-40 px-4 md:px-8">
        <Button
          onClick={() => navigate('/blog')}
          variant="outline"
          className="mb-4 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Blog
        </Button>
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <span>Inicio</span>
          <span className="mx-2">›</span>
          <span 
            className="cursor-pointer hover:text-gray-900 transition-colors"
            onClick={() => navigate('/blog')}
          >
            Blog
          </span>
          <span className="mx-2">›</span>
          <span className="cursor-pointer hover:text-gray-900 transition-colors">
            {post.category}
          </span>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>

        {/* Hero Section Sin Imagen - Con Gradiente */}
        <div className={`bg-gradient-to-r ${categoryStyle.gradient} rounded-xl p-8 md:p-12 mb-8 text-white`}>
          <div className="flex items-center justify-between mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              {post.category}
            </Badge>
            <CategoryIcon className="h-8 w-8 text-white/80" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl mb-6 leading-relaxed text-white/90">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {post.readTime} min lectura
            </div>
            <div className="flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              {post.views.toLocaleString()} vistas
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>
        </div>

        {/* Table of Contents */}
        <TableOfContents content={post.content} />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-4">
            {formatContent(post.content)}
          </div>
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-blue-50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedCategoryStyle = getCategoryStyle(relatedPost.category);
                const RelatedIcon = relatedCategoryStyle.icon;
                
                return (
                  <Card key={relatedPost.id} 
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  >
                    <div className={`bg-gradient-to-r ${relatedCategoryStyle.gradient} p-4 text-white`}>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-white/20 text-white text-xs">
                          {relatedPost.category}
                        </Badge>
                        <RelatedIcon className="h-5 w-5 text-white/80" />
                      </div>
                      <h4 className="font-semibold text-white mb-1 line-clamp-2">{relatedPost.title}</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-600">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime} min
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </article>

      <SimpleBlogFooter />
    </div>
  );
};

export default BlogPost;
