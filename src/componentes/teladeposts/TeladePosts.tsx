import React, { useEffect, useState } from 'react';

// Componente funcional TeladePosts
const TeladePosts: React.FC = () => {
  // Estado para armazenar os posts obtidos da API
  const [posts, setPosts] = useState([]);

  // Efeito para buscar os posts da API assim que o componente é montado
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []); // O array vazio como segundo argumento garante que o efeito só seja executado uma vez, após a montagem do componente

  // Renderização do componente
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-black mb-4 text-center">Posts</h1>
      <ul>
        {/* Mapeamento dos posts para criar a lista de posts */}
        {posts.map((post: any) => (
          <li key={post.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
            {/* Título do post */}
            <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
            {/* Corpo do post */}
            <p className="text-black">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TeladePosts;
