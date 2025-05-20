
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  defaultValue?: string;
  compact?: boolean;
}

const SearchBar = ({ defaultValue = '', compact = false }: SearchBarProps) => {
  const [query, setQuery] = useState(defaultValue);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={`w-full ${compact ? 'max-w-xl' : 'max-w-2xl'}`}>
      <form onSubmit={handleSearch} className="relative w-full">
        <div className="relative flex items-center w-full">
          {compact && (
            <div className="absolute left-4 text-gray-500">
              <Search size={20} />
            </div>
          )}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquise no Google"
            className={`w-full py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm ${
              compact ? 'pl-12' : ''
            }`}
          />
          {!compact && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className={`absolute right-20 ${
                query ? 'visible' : 'invisible'
              }`}
            >
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {!compact && (
            <button
              type="submit"
              className="absolute right-4 h-8 w-8 flex items-center justify-center"
            >
              <Search className="h-5 w-5 text-[hsl(var(--google-blue))]" />
            </button>
          )}
        </div>
        {!compact && (
          <div className="mt-8 flex justify-center space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
            >
              Pesquisa Google
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
            >
              Estou com sorte
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
