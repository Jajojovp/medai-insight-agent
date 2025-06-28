import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, Eye, Filter, ArrowRight, Star, TrendingUp, Brain, Heart, Microscope } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import SimpleBlogNavigation from '@/components/SimpleBlogNavigation';
import SimpleBlogFooter from '@/components/SimpleBlogFooter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Blog = () => {
  console.log('🚀 Blog component optimizado - Sin imágenes para máximo rendimiento...');
  
  const { getAllPosts } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Obtener posts de forma segura
  let allPosts = [];
  try {
    allPosts = getAllPosts();
    console.log('✅ Posts cargados exitosamente sin imágenes:', allPosts.length);
  } catch (error) {
    console.error('❌ Error cargando posts:', error);
  }

  // Early return si no hay posts
  if (!allPosts || allPosts.length === 0) {
    console.log('⚠️ No hay posts disponibles, mostrando fallback');
    return (
      <div className="min-h-screen bg-gray-50">
        <SimpleBlogNavigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Blog MedAI
            </h1>
            <p className="text-gray-600 mb-6">
              Cargando contenido del blog...
            </p>
            <Button onClick={() => window.location.reload()}>
              Recargar página
            </Button>
          </div>
        </div>
        <SimpleBlogFooter />
      </div>
    );
  }

  const categories = Array.from(new Set(allPosts.map(post => post.category)));
  console.log('📂 Categorías disponibles:', categories);

  const filteredAndSortedPosts = useMemo(() => {
    console.log('🔄 Aplicando filtros y ordenamiento...');
    
    let filtered = allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Ordenar posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return a.readTime - b.readTime;
        case 'views':
          return b.views - a.views;
        default:
          return 0;
      }
    });

    console.log('✅ Posts filtrados y ordenados:', filtered.length);
    return filtered;
  }, [allPosts, searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedPosts.length / articlesPerPage);
  const currentPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  // Función para obtener icono y color por categoría
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'IA Médica':
        return { 
          icon: Brain, 
          gradient: 'from-blue-500 to-purple-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-700'
        };
      case 'Cardiología':
        return { 
          icon: Heart, 
          gradient: 'from-red-500 to-pink-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-700'
        };
      case 'Oncología':
        return { 
          icon: Microscope, 
          gradient: 'from-purple-500 to-indigo-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
          textColor: 'text-purple-700'
        };
      default:
        return { 
          icon: Star, 
          gradient: 'from-gray-500 to-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-700'
        };
    }
  };

  console.log('📊 Blog optimizado sin imágenes cargado:', {
    totalPosts: allPosts.length,
    filteredPosts: filteredAndSortedPosts.length,
    currentPagePosts: currentPosts.length,
    totalPages
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleBlogNavigation />
      
      {/* Hero Section Optimizado */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Blog MedAI - Optimizado</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medicina del Futuro
          </h1>
          
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Descubre las últimas tendencias en inteligencia artificial médica y diagnósticos avanzados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <TrendingUp className="h-4 w-4 mr-2" />
              Explorar Artículos
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Optimizadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Artículos', value: `${allPosts.length}`, color: 'text-blue-600' },
            { label: 'Categorías', value: categories.length, color: 'text-green-600' },
            { label: 'Lectores', value: '25K+', color: 'text-purple-600' },
            { label: 'Sin Imágenes', value: '✓', color: 'text-green-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Búsqueda y Filtros */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 bg-white">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Categoría" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="">Todas</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="date">Más recientes</SelectItem>
                  <SelectItem value="views">Más populares</SelectItem>
                  <SelectItem value="title">A-Z</SelectItem>
                  <SelectItem value="readTime">Tiempo lectura</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-blue-600">{filteredAndSortedPosts.length}</span> artículos encontrados
            </p>
          </div>
        </div>

        {/* Grid de Artículos Optimizado Sin Imágenes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentPosts.map((post) => {
            const categoryStyle = getCategoryStyle(post.category);
            const CategoryIcon = categoryStyle.icon;
            
            return (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Header con Gradiente e Icono */}
                  <div className={`bg-gradient-to-r ${categoryStyle.gradient} p-6 text-white relative`}>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-white/20 text-white text-xs">
                        {post.category}
                      </Badge>
                      <CategoryIcon className="h-6 w-6 text-white/80" />
                    </div>
                    
                    <div className="flex items-center text-sm text-white/80 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    
                    <h2 className="font-bold text-white mb-2 group-hover:text-white/90 transition-colors line-clamp-2 text-lg">
                      {post.title}
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author.split(' ')[0]}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}min
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views > 1000 ? `${Math.floor(post.views/1000)}k` : post.views}
                        </span>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              size="sm"
            >
              Anterior
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    size="sm"
                    className="w-8 h-8 text-sm"
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              size="sm"
            >
              Siguiente
            </Button>
          </div>
        )}

        {/* Sin Resultados */}
        {filteredAndSortedPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No se encontraron artículos
              </h3>
              <p className="text-gray-600 mb-4">
                Intenta modificar tu búsqueda o filtros.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}>
                Limpiar filtros
              </Button>
            </div>
          </div>
        )}
      </div>

      <SimpleBlogFooter />
    </div>
  );
};

export default Blog;
