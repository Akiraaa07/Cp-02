import React, { useEffect, useState } from 'react';

const TeladeFotos: React.FC = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Fotos</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo: any) => (
          <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            <p className="p-4 text-gray-800">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeladeFotos;
