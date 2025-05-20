
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import { searchGoogle, SearchResultType } from '../services/searchService';
import { Search } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResultType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchGoogle(query);
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row md:items-center">
          <Link to="/" className="mb-4 md:mb-0 md:mr-8">
            <div className="flex items-center">
              <span className="text-2xl font-medium">G</span>
              <span className="text-2xl font-medium text-[hsl(var(--google-blue))]">o</span>
              <span className="text-2xl font-medium text-[hsl(var(--google-red))]">o</span>
              <span className="text-2xl font-medium text-[hsl(var(--google-yellow))]">g</span>
              <span className="text-2xl font-medium text-[hsl(var(--google-blue))]">l</span>
              <span className="text-2xl font-medium text-[hsl(var(--google-green))]">e</span>
            </div>
          </Link>
          <div className="flex-grow">
            <SearchBar defaultValue={query} compact={true} />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center text-sm text-gray-600 py-3">
            <div className="flex items-center text-[hsl(var(--google-blue))] font-medium mr-6 border-b-4 border-[hsl(var(--google-blue))] py-3">
              <Search size={16} className="mr-1" />
              <span>Todas</span>
            </div>
            <div className="mr-6">Imagens</div>
            <div className="mr-6">Vídeos</div>
            <div className="mr-6">Notícias</div>
            <div className="mr-6">Shopping</div>
            <div>Mais</div>
          </div>
        </div>
      </div>

      {/* Results */}
      <main className="flex-grow">
        <div className="max-w-[700px] mx-auto p-6">
          <div className="text-sm text-gray-600 mb-4">
            {!loading && `Aproximadamente ${results.length * 1000000} resultados (0,42 segundos)`}
          </div>

          {loading ? (
            <div className="flex flex-col items-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-[hsl(var(--google-blue))] border-t-transparent"></div>
            </div>
          ) : (
            <>
              {results.length > 0 ? (
                results.map((result) => (
                  <SearchResult
                    key={result.id}
                    title={result.title}
                    url={result.url}
                    description={result.description}
                  />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-lg font-medium mb-2">
                    Sua pesquisa não encontrou nenhum documento correspondente
                  </p>
                  <p className="text-gray-600">Sugestões:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Certifique-se de que todas as palavras estejam escritas corretamente.</li>
                    <li>Tente palavras-chave diferentes.</li>
                    <li>Tente palavras-chave mais gerais.</li>
                  </ul>
                </div>
              )}

              {results.length > 0 && (
                <div className="mt-8 mb-12">
                  <div className="flex justify-center items-center text-[hsl(var(--google-blue))]">
                    <div className="mx-4 text-2xl font-medium">G</div>
                    <div className="mx-4 text-base">1</div>
                    <div className="mx-4 text-base">2</div>
                    <div className="mx-4 text-base">3</div>
                    <div className="mx-4 text-base">4</div>
                    <div className="mx-4 text-base">5</div>
                    <div className="mx-4 text-base">Próxima</div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-600 mt-auto">
        <div className="px-8 py-3 border-b border-gray-300">
          <p>Brasil</p>
        </div>
        <div className="px-8 py-3 flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-y-2 mb-2 md:mb-0">
            <a href="#" className="mr-6 hover:underline">Ajuda</a>
            <a href="#" className="mr-6 hover:underline">Feedback</a>
            <a href="#" className="mr-6 hover:underline">Privacidade</a>
            <a href="#" className="mr-6 hover:underline">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;
