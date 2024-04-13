import React from "react";
import './App.css';
import HomePage from "./componentes/HomePage";
import TeladeFotos from "./componentes/teladefotos/TeladeFotos";
import TeladePosts from "./componentes/teladeposts/TeladePosts";
import TeladeUsuarios from "./componentes/teladeusuarios/TeladeUsuarios";


import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 


function App(){
  return(
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
          <h1 className="text-3xl">Minha Aplicação</h1>
        </header>
      <nav>
        <ul className="flex justify-center space-x-4 p-3">
          <li><Link to='/' className="hover:text-blue-500 ">Home</Link></li>
          <li><Link to='/teladefotos' className="hover:text-blue-500 ">Tela de fotos</Link></li>
          <li><Link to='/teladeposts' className="hover:text-blue-500 ">Tela de posts</Link></li>
          <li><Link to='/teladeusuarios' className="hover:text-blue-500 ">Tela de usuarios</Link></li>
        </ul>
      </nav>
      <main className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/teladefotos" element={<TeladeFotos/>}/>
          <Route path="/teladeposts" element={<TeladePosts/>}/>
          <Route path="/teladeusuarios" element={<TeladeUsuarios/>}/>
        </Routes>
      </main>
      <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
        <p>Igor Akira Bortolini Tateishi Rm: 554227</p>
      </footer>
      </div>
    </Router>
  )
}
export default App;