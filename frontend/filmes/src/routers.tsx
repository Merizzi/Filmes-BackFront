import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Filmes from './pages/Filmes';
import Genero from './pages/Genero';
import Perfil from './pages/Perfil';
import Filtro from './pages/Filtro';

function Routers() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Cadastro}/>
      <Route path="/filmes" component={Filmes}/>
      <Route path="/genero" component={Genero}/>
      <Route path="/perfil" component={Perfil}/>
      <Route path="/filtro" component={Filtro}/>
    </BrowserRouter>
  );
}

export default Routers;