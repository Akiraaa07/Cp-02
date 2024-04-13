import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Minha Aplicação</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
          <a href="/teladeposts" className="block text-xl font-bold text-gray-800">Posts</a>
          <p className="text-gray-600 mt-2">Veja os últimos posts</p>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
          <a href="/teladefotos" className="block text-xl font-bold text-gray-800">Fotos</a>
          <p className="text-gray-600 mt-2">Confira nossa galeria de fotos</p>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-4">
          <a href="/teladeusuarios" className="block text-xl font-bold text-gray-800">Usuários</a>
          <p className="text-gray-600 mt-2">Veja a lista de usuários</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
