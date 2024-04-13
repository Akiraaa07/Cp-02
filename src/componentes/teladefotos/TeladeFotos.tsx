import React, { useEffect, useState } from 'react';

// Componente funcional TeladeFotos
const TeladeFotos: React.FC = () => {
  // Estado para armazenar as fotos obtidas da API
  const [photos, setPhotos] = useState([]);

  // Efeito para buscar as fotos da API assim que o componente é montado
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []); // O array vazio como segundo argumento garante que o efeito só seja executado uma vez, após a montagem do componente

  // Renderização do componente
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-4 text-center">Fotos</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Mapeamento das fotos para criar a grid de fotos */}
        {photos.map((photo: any) => (
          <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Imagem */}
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            {/* Título da foto */}
            <p className="p-4 text-black">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeladeFotos;
