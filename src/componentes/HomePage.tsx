import React from 'react';

// Define um componente funcional para a página inicial
const HomePage: React.FC = () => {
  return (
    // Container para todo o conteúdo da página, com alguma margem e padding
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 mx-auto text-center">
        Bem-vindo à Minha Aplicação
      </h1>
      
      {/* Layout de grade para exibir diferentes seções */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
        {/* Primeira seção: Posts */}
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
          {/* Link para a página de posts */}
          <a href="/teladeposts" className="block text-xl font-bold text-black">
            Posts
          </a>
          {/* Descrição da seção */}
          <p className="text-black mt-2">
            Veja os últimos posts
          </p>
        </div>
        {/* Segunda seção: Fotos */}
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
          {/* Link para a página de fotos */}
          <a href="/teladefotos" className="block text-xl font-bold text-black">
            Fotos
          </a>
          {/* Descrição da seção */}
          <p className="text-black mt-2">
            Confira nossa galeria de fotos
          </p>
        </div>
        {/* Terceira seção: Usuários */}
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
          {/* Link para a página de usuários */}
          <a href="/teladeusuarios" className="block text-xl font-bold text-gray-800">
            Usuários
          </a>
          {/* Descrição da seção */}
          <p className="text-black mt-2">
            Veja a lista de usuários
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
