
import React from 'react';
import GoogleLogo from '../components/GoogleLogo';
import SearchBar from '../components/SearchBar';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-end p-4 text-sm">
        <a href="#" className="px-3 py-2 hover:underline">Gmail</a>
        <a href="#" className="px-3 py-2 hover:underline">Imagens</a>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center px-4 -mt-20">
        <div className="mb-8">
          <GoogleLogo />
        </div>
        <SearchBar />
        <div className="mt-8 text-sm text-center">
          <p>Google oferecido em: <a href="#" className="text-blue-600 hover:underline">English</a></p>
        </div>
      </div>
      <footer className="bg-gray-100 text-sm text-gray-600">
        <div className="px-8 py-3 border-b border-gray-300">
          <p>Brasil</p>
        </div>
        <div className="px-8 py-3 flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-y-2 mb-2 md:mb-0">
            <a href="#" className="mr-6 hover:underline">Sobre</a>
            <a href="#" className="mr-6 hover:underline">Publicidade</a>
            <a href="#" className="mr-6 hover:underline">Negócios</a>
            <a href="#" className="mr-6 hover:underline">Como funciona a Pesquisa</a>
          </div>
          <div className="flex flex-wrap gap-y-2">
            <a href="#" className="mr-6 hover:underline">Privacidade</a>
            <a href="#" className="mr-6 hover:underline">Termos</a>
            <a href="#" className="hover:underline">Configurações</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
