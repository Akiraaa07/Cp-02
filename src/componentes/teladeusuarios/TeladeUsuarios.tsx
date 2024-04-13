import React, { useEffect, useState } from 'react';

// Componente funcional TeladeUsuarios
const TeladeUsuarios: React.FC = () => {
  // Estado para armazenar os usuários obtidos da API
  const [users, setUsers] = useState([]);

  // Efeito para buscar os usuários da API assim que o componente é montado
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); // O array vazio como segundo argumento garante que o efeito só seja executado uma vez, após a montagem do componente

  // Renderização do componente
  return (
    <div className="container mx-auto flex justify-center items-center h-full">
      <div>
        <h1 className="text-3xl font-bold text-black mb-4 text-center">Usuários</h1>
        <div className="overflow-x-auto">
          {/* Tabela para exibir os usuários */}
          <table className="table-auto">
            <thead>
              <tr className="bg-yellow-300">
                {/* Cabeçalho da tabela */}
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Endereço</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeamento dos usuários para criar as linhas da tabela */}
              {users.map((user: any) => (
                <tr key={user.id}>
                  {/* Células da tabela com os dados do usuário */}
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  {/* Endereço formatado usando os dados do objeto 'address' */}
                  <td className="border px-4 py-2">{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeladeUsuarios;
