
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, Eye, Filter, ArrowRight } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogPosts';

const Blog = () => {
  console.log('🔍 === DIAGNÓSTICO BLOG INICIADO ===');
  console.log('🔍 Blog component montándose...');
  
  const { getAllPosts } = useBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date');

  console.log('🔍 Hook useBlogPosts ejecutado');
  
  let allPosts;
  try {
    allPosts = getAllPosts();
    console.log('🔍 getAllPosts() ejecutado exitosamente');
    console.log('🔍 Número de posts obtenidos:', allPosts?.length || 0);
    console.log('🔍 Primeros 2 posts:', allPosts?.slice(0, 2));
  } catch (error) {
    console.error('❌ Error en getAllPosts():', error);
    return (
      <div className="min-h-screen bg-red-100 p-8">
        <h1 className="text-2xl font-bold text-red-800">Error en getAllPosts</h1>
        <pre className="mt-4 text-sm">{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  console.log('🔍 Verificando estructura de datos...');
  console.log('🔍 allPosts es array?', Array.isArray(allPosts));
  console.log('🔍 allPosts existe?', !!allPosts);
  console.log('🔍 allPosts length:', allPosts?.length);

  // Verificación básica de datos
  if (!allPosts) {
    console.error('❌ allPosts es null/undefined');
    return (
      <div className="min-h-screen bg-yellow-100 p-8">
        <h1 className="text-2xl font-bold text-yellow-800">Posts no disponibles</h1>
        <p>allPosts es: {String(allPosts)}</p>
      </div>
    );
  }

  if (!Array.isArray(allPosts)) {
    console.error('❌ allPosts no es un array:', typeof allPosts);
    return (
      <div className="min-h-screen bg-orange-100 p-8">
        <h1 className="text-2xl font-bold text-orange-800">Formato de datos incorrecto</h1>
        <p>Tipo de datos: {typeof allPosts}</p>
        <pre className="mt-4 text-sm">{JSON.stringify(allPosts, null, 2)}</pre>
      </div>
    );
  }

  if (allPosts.length === 0) {
    console.error('❌ Array de posts está vacío');
    return (
      <div className="min-h-screen bg-blue-100 p-8">
        <h1 className="text-2xl font-bold text-blue-800">No hay posts disponibles</h1>
        <p>El array de posts existe pero está vacío</p>
      </div>
    );
  }

  console.log('🔍 Datos básicos verificados correctamente');
  console.log('🔍 Calculando categorías...');

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

    console.log('🔍 Posts filtrados y ordenados:', filtered.length);
    return filtered;
  }, [allPosts, searchTerm, selectedCategory, sortBy]);

  const featuredPost = allPosts.find(post => post.id === 'ai-diagnostico-medico') || allPosts[0];
  console.log('🔍 Post destacado seleccionado:', featuredPost?.title);

  console.log('🔍 === INICIANDO RENDERIZADO ===');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* DEBUG INFO */}
        <div className="mb-4 p-4 bg-green-100 border border-green-300 rounded">
          <h2 className="font-bold text-green-800">🔍 Estado del Debug:</h2>
          <p>Posts totales: {allPosts.length}</p>
          <p>Posts filtrados: {filteredAndSortedPosts.length}</p>
          <p>Categorías: {categories.length}</p>
          <p>Post destacado: {featuredPost?.title || 'No encontrado'}</p>
        </div>

        {/* Header Simplificado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog MedAI
          </h1>
          <p className="text-xl text-gray-600">
            Descubre las últimas tendencias en medicina digital e IA médica.
          </p>
        </div>

        {/* Artículo Destacado Simplificado */}
        <div className="mb-12 p-6 bg-white border rounded-lg shadow">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium inline-block mb-4">
            Artículo Destacado
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {featuredPost.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>👤 {featuredPost.author}</span>
            <span>📅 {new Date(featuredPost.date).toLocaleDateString('es-ES')}</span>
            <span>⏱️ {featuredPost.readTime} min</span>
          </div>
          <Link to={`/blog/${featuredPost.id}`}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Leer Artículo →
            </button>
          </Link>
        </div>

        {/* Búsqueda Simplificada */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Contador de Resultados */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredAndSortedPosts.length} artículos encontrados
          </p>
        </div>

        {/* Grid de Artículos Simplificado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAndSortedPosts.map((post, index) => {
            console.log(`🔍 Renderizando post ${index + 1}:`, post.title);
            return (
              <div key={post.id} className="bg-white border rounded-lg overflow-hidden shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagen: {post.id}</span>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mb-2 inline-block">
                    {post.category}
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {post.excerpt.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                    <span>👤 {post.author}</span>
                    <span>⏱️ {post.readTime} min</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50">
                      Leer más
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sin Resultados */}
        {filteredAndSortedPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-600">
              Intenta modificar tu búsqueda
            </p>
          </div>
        )}

        {/* Footer de Debug */}
        <div className="mt-12 p-4 bg-gray-100 border rounded">
          <h3 className="font-bold mb-2">🔍 Info de Debug Final:</h3>
          <p>Componente renderizado exitosamente</p>
          <p>Posts procesados: {allPosts.length}</p>
          <p>Hora: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
