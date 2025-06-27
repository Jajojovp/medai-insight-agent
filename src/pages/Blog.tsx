
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, Eye, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const Blog = () => {
  console.log('🔍 Blog component iniciando...');
  
  const { getAllPosts } = useBlogPosts();
  console.log('🔍 Hook useBlogPosts obtenido');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const allPosts = getAllPosts();
  console.log('🔍 Todos los posts obtenidos:', allPosts?.length || 0, allPosts);
  
  const categories = Array.from(new Set(allPosts.map(post => post.category)));
  console.log('🔍 Categorías encontradas:', categories);

  const filteredAndSortedPosts = useMemo(() => {
    console.log('🔍 Filtrando posts...');
    let filtered = allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort posts
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

    console.log('🔍 Posts filtrados:', filtered.length);
    return filtered;
  }, [allPosts, searchTerm, selectedCategory, sortBy]);

  const featuredPost = allPosts.find(post => post.id === 'ai-diagnostico-medico') || allPosts[0];
  console.log('🔍 Post destacado:', featuredPost?.title || 'No encontrado');

  // Verificación de errores básicos
  if (!allPosts || allPosts.length === 0) {
    console.error('❌ No se encontraron posts');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error de Datos</h2>
          <p className="text-gray-600 mb-4">No se pudieron cargar los artículos del blog</p>
          <p className="text-sm text-gray-500">Revisa la consola para más detalles</p>
        </div>
      </div>
    );
  }

  if (!featuredPost) {
    console.error('❌ No se encontró post destacado');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error de Configuración</h2>
          <p className="text-gray-600 mb-4">No se pudo determinar el artículo destacado</p>
          <p className="text-sm text-gray-500">Posts disponibles: {allPosts.length}</p>
        </div>
      </div>
    );
  }

  console.log('🔍 Renderizando componente Blog completo...');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog MedAI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las últimas tendencias en medicina digital, inteligencia artificial médica y 
            avances en diagnóstico y tratamiento de enfermedades.
          </p>
        </div>

        {/* Featured Article - Simplificado para debugging */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                  onError={(e) => {
                    console.error('❌ Error cargando imagen destacada:', featuredPost.image);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80';
                  }}
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  Artículo Destacado
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString('es-ES')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime} min
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    Leer Artículo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters - Simplificado */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Más recientes</option>
              <option value="title">Título A-Z</option>
              <option value="readTime">Tiempo de lectura</option>
              <option value="views">Más populares</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredAndSortedPosts.length === 1 
              ? `1 artículo encontrado` 
              : `${filteredAndSortedPosts.length} artículos encontrados`}
          </p>
        </div>

        {/* Articles Grid - Simplificado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredAndSortedPosts.map((post) => (
            <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.error('❌ Error cargando imagen del post:', post.id, post.image);
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80';
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Eye className="h-3 w-3 mr-1" />
                    {post.views.toLocaleString()}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
                  {post.title.length > 60 ? `${post.title.substring(0, 60)}...` : post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <Link to={`/blog/${post.id}`}>
                    <button className="border border-gray-300 text-gray-700 px-4 py-1 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Leer más
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredAndSortedPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-600">
              Intenta modificar tu búsqueda o filtros
            </p>
          </div>
        )}

        {/* Categories Section - Simplificado */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explora por Categorías
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const categoryPosts = allPosts.filter(post => post.category === category);
              const totalViews = categoryPosts.reduce((sum, post) => sum + post.views, 0);
              
              return (
                <div 
                  key={category} 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                    <p className="text-gray-600 mb-4">
                      {categoryPosts.length} artículos
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {totalViews.toLocaleString()} vistas totales
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
