
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, Eye, Filter, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import PublicNavigation from '@/components/PublicNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Blog = () => {
  console.log('🚀 Blog component iniciando...');
  
  const { getAllPosts } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9; // Reducido para mejor rendimiento móvil

  // Obtener posts de forma segura
  let allPosts = [];
  try {
    allPosts = getAllPosts();
    console.log('✅ Posts cargados exitosamente:', allPosts.length);
  } catch (error) {
    console.error('❌ Error cargando posts:', error);
  }

  // Early return si no hay posts
  if (!allPosts || allPosts.length === 0) {
    console.log('⚠️ No hay posts disponibles, mostrando fallback');
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
        <PublicNavigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Blog MedAI Pro
            </h1>
            <p className="text-gray-600 mb-6">
              Cargando contenido del blog...
            </p>
            <Button onClick={() => window.location.reload()}>
              Recargar página
            </Button>
          </div>
        </div>
        <Footer />
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

  const featuredPost = allPosts[0];
  const trendingPosts = allPosts.slice(0, 3);

  console.log('📊 Estadísticas finales:', {
    totalPosts: allPosts.length,
    filteredPosts: filteredAndSortedPosts.length,
    currentPagePosts: currentPosts.length,
    totalPages
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <PublicNavigation />
      
      {/* Hero Section Optimizado */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Blog MedAI Pro</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Medicina del Futuro
            </h1>
            
            <p className="text-lg sm:text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Descubre las últimas tendencias en inteligencia artificial médica y diagnósticos avanzados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto sm:max-w-none">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                <TrendingUp className="h-4 w-4 mr-2" />
                Explorar Artículos
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Newsletter Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Artículos', value: `${allPosts.length}+`, color: 'text-blue-600' },
            { label: 'Categorías', value: categories.length, color: 'text-green-600' },
            { label: 'Lectores', value: '50K+', color: 'text-purple-600' },
            { label: 'Satisfacción', value: '98%', color: 'text-orange-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Artículos Destacados</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Badge className="absolute top-3 left-3 z-10 bg-orange-500 text-white">
                      #{index + 1} Trending
                    </Badge>
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {post.category}
                    </Badge>
                    
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author.split(' ')[0]}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}min
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views > 1000 ? `${Math.floor(post.views/1000)}k` : post.views}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 bg-white border-2 border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Categoría" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border rounded-lg z-50">
                  <SelectItem value="">Todas</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 bg-white border-2 border-gray-200 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border rounded-lg z-50">
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

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80';
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                  </div>
                  
                  <h2 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
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
          ))}
        </div>

        {/* Pagination */}
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
                if (totalPages <= 5 || page === 1 || page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)) {
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
                }
                return null;
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

        {/* No Results */}
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

        {/* Newsletter Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center text-white relative overflow-hidden">
            <div className="relative max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                ¿No te quieres perder nada?
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Suscríbete a nuestro newsletter y recibe las últimas novedades en medicina digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 py-3 px-4 text-gray-900 bg-white border-0 rounded-lg"
                />
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Suscribirse
                </Button>
              </div>
              
              <p className="text-xs text-blue-200 mt-3">
                Sin spam. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
