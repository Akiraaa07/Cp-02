import React from "react";
import './App.css';
import HomePage from "./componentes/HomePage"; 
import TeladeFotos from "./componentes/teladefotos/TeladeFotos"; 
import TeladePosts from "./componentes/teladeposts/TeladePosts"; 
import TeladeUsuarios from "./componentes/teladeusuarios/TeladeUsuarios"; 

import { 
  BrowserRouter as Router, // Importando BrowserRouter para gerenciar as rotas
  Routes, // Componente que define rotas
  Route, // Componente que define uma rota
  Link // Componente para criar links de navegação
} from "react-router-dom"; // Importando funcionalidades de roteamento

function App(){
  return(
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Div que contém toda a aplicação com flex e altura mínima */}
        <header className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-white p-4"> {/* Cabeçalho da aplicação com fundo gradiente e texto branco */}
          <h1 className="text-3xl font-bold mb-4 mx-auto text-center">CheckPoint 02</h1> {/* Título da aplicação */}
        </header>
        <nav>
          <ul className="flex justify-center space-x-4 p-3"> {/* Lista de navegação com itens centralizados e espaçados */}
            <li><Link to='/' className="hover:text-blue-500 ">Home</Link></li> {/* Link para página inicial */}
            <li><Link to='/teladefotos' className="hover:text-blue-500 ">Tela de fotos</Link></li> {/* Link para tela de fotos */}
            <li><Link to='/teladeposts' className="hover:text-blue-500 ">Tela de posts</Link></li> {/* Link para tela de posts */}
            <li><Link to='/teladeusuarios' className="hover:text-blue-500 ">Tela de usuarios</Link></li> {/* Link para tela de usuários */}
          </ul>
        </nav>
        <main className="flex-grow bg-white"> {/* Conteúdo principal da aplicação com fundo branco */}
          <Routes> {/* Define as rotas da aplicação */}
            <Route path="/" element={<HomePage/>}/> {/* Rota para a página inicial */}
            <Route path="/teladefotos" element={<TeladeFotos/>}/> {/* Rota para a tela de fotos */}
            <Route path="/teladeposts" element={<TeladePosts/>}/> {/* Rota para a tela de posts */}
            <Route path="/teladeusuarios" element={<TeladeUsuarios/>}/> {/* Rota para a tela de usuários */}
          </Routes>
        </main>
        <footer className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-white p-4 text-center"> 
          <p>Igor Akira Bortolini Tateishi  Rm: 554227  Turma: 1TDSZ  GitHub: <a href="https://github.com/Akiraaa07/Cp-02" className="underline">https://github.com/Akiraaa07/Cp-02</a></p>
        </footer>
      </div>
    </Router>
  );
}
export default App;
