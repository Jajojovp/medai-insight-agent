
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
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
  const navigate = useNavigate();
  const { getPostById, getPostsByCategory } = useBlogPosts();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const foundPost = getPostById(id);
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

  const formatContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    
    return lines.map((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('# ')) {
        const text = trimmed.substring(2);
        const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h1 key={index} id={id} className="text-3xl md:text-4xl font-bold mb-6 text-blog-text mt-8 first:mt-0">{text}</h1>;
      }
      
      if (trimmed.startsWith('## ')) {
        const text = trimmed.substring(3);
        const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h2 key={index} id={id} className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-blog-text">{text}</h2>;
      }
      
      if (trimmed.startsWith('### ')) {
        const text = trimmed.substring(4);
        const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h3 key={index} id={id} className="text-xl md:text-2xl font-medium mb-3 mt-6 text-blog-text">{text}</h3>;
      }
      
      if (trimmed.startsWith('#### ')) {
        const text = trimmed.substring(5);
        return <h4 key={index} className="text-lg font-medium mb-3 mt-4 text-blog-text">{text}</h4>;
      }
      
      if (trimmed.startsWith('- ')) {
        return <li key={index} className="text-blog-text leading-relaxed mb-2">{trimmed.substring(2)}</li>;
      }
      
      if (trimmed.match(/^\d+\./)) {
        return <li key={index} className="text-blog-text leading-relaxed mb-2">{trimmed.replace(/^\d+\.\s*/, '')}</li>;
      }
      
      if (trimmed && !trimmed.startsWith('#')) {
        return <p key={index} className="mb-4 leading-relaxed text-blog-text">{trimmed}</p>;
      }
      
      return null;
    }).filter(Boolean);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-blog-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blog-text mb-4">Artículo no encontrado</h2>
          <Button onClick={() => navigate('/blog')} className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter(relatedPost => relatedPost.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-blog-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="reading-progress h-full transition-all duration-300"
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
        <nav className="mb-6 text-sm text-blog-text-light">
          <span>Inicio</span>
          <span className="mx-2">›</span>
          <span 
            className="cursor-pointer hover:text-blog-text transition-colors"
            onClick={() => navigate('/blog')}
          >
            Blog
          </span>
          <span className="mx-2">›</span>
          <span className="cursor-pointer hover:text-blog-text transition-colors">
            {post.category}
          </span>
          <span className="mx-2">›</span>
          <span className="text-blog-text">{post.title}</span>
        </nav>

        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-blog-text-light">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center text-sm text-blog-text-light">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} min lectura
            </div>
            <div className="flex items-center text-sm text-blog-text-light">
              <Eye className="h-4 w-4 mr-1" />
              {post.views.toLocaleString()} vistas
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-blog-text mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-blog-text-light mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User className="h-5 w-5 text-blog-text-light mr-2" />
              <span className="text-blog-text font-medium">{post.author}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Compartir
            </Button>
          </div>
        </header>

        {/* Table of Contents */}
        <TableOfContents content={post.content} />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="article-content">
            {formatContent(post.content)}
          </div>
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-8 border-t border-blog-border">
          <h3 className="text-lg font-semibold text-blog-text mb-4">Etiquetas</h3>
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
          <div className="mt-12 pt-8 border-t border-blog-border">
            <h3 className="text-lg font-semibold text-blog-text mb-4">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} 
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  <h4 className="font-semibold text-blog-text mb-2">{relatedPost.title}</h4>
                  <p className="text-sm text-blog-text-light">{relatedPost.excerpt}</p>
                  <div className="flex items-center mt-3 text-xs text-blog-text-light">
                    <Clock className="h-3 w-3 mr-1" />
                    {relatedPost.readTime} min
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPost;
