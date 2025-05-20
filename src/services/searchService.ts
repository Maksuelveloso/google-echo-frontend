
// Since we don't have a real Google API integration, we'll mock search results
export interface SearchResultType {
  id: string;
  title: string;
  url: string;
  description: string;
}

export const searchGoogle = async (query: string): Promise<SearchResultType[]> => {
  // In a real application, this would make an API call to a search service
  // For demo purposes, we'll return mock data
  console.log(`Searching for: ${query}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate some mock results based on the query
  return [
    {
      id: '1',
      title: `${query} - Wikipedia`,
      url: `https://wikipedia.org/wiki/${query.replace(/\s+/g, '_')}`,
      description: `${query} é um termo que se refere a vários conceitos e significados na cultura popular. Confira mais informações na Wikipedia, a enciclopédia livre.`
    },
    {
      id: '2',
      title: `O que é ${query}? Tudo que você precisa saber`,
      url: `https://blog.exemplo.com/${query.toLowerCase().replace(/\s+/g, '-')}`,
      description: `Descubra tudo sobre ${query} neste guia completo. Explicamos todos os conceitos principais e como você pode utilizar em seu dia-a-dia.`
    },
    {
      id: '3',
      title: `${query} - Definição e significado | Dicionário Online`,
      url: `https://dicionario.com.br/definicao/${query.toLowerCase()}`,
      description: `Significado de ${query} no Dicionário Online. As principais definições e origens da palavra, exemplos de uso e pronúncia.`
    },
    {
      id: '4',
      title: `Melhores ${query} de 2025 - Guia completo`,
      url: `https://topreviews.com/melhores-${query.toLowerCase().replace(/\s+/g, '-')}`,
      description: `Confira nossa lista com os melhores ${query} disponíveis atualmente. Comparamos preços, especificações e opiniões de especialistas.`
    },
    {
      id: '5',
      title: `Curso online de ${query} - Aprenda com especialistas`,
      url: `https://cursos.exemplo.com/curso-${query.toLowerCase().replace(/\s+/g, '-')}`,
      description: `Aprenda tudo sobre ${query} com nosso curso online completo. Aulas ministradas por profissionais com anos de experiência no mercado.`
    },
    {
      id: '6',
      title: `${query} para iniciantes - Guia passo a passo`,
      url: `https://iniciantes.com/${query.toLowerCase().replace(/\s+/g, '-')}-guia`,
      description: `Guia simplificado de ${query} para quem está começando. Aprenda desde o básico até técnicas mais avançadas de forma fácil e direta.`
    },
    {
      id: '7',
      title: `Fórum sobre ${query} - Tire suas dúvidas`,
      url: `https://forum.exemplo.com/categoria/${query.toLowerCase().replace(/\s+/g, '-')}`,
      description: `Participe da maior comunidade online sobre ${query}. Tire dúvidas, compartilhe conhecimento e conecte-se com outros entusiastas.`
    }
  ];
};
