
import React from 'react';

interface SearchResultProps {
  title: string;
  url: string;
  description: string;
}

const SearchResult = ({ title, url, description }: SearchResultProps) => {
  return (
    <div className="mb-6">
      <div className="mb-1">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-gray-600 hover:underline"
        >
          {url}
        </a>
      </div>
      <h3 className="mb-1">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl text-[hsl(var(--google-link))] hover:underline font-medium"
        >
          {title}
        </a>
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default SearchResult;
