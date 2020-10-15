import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/global.css';
import '../Cadastro/style.css';


import Input from '../../components/input';
import Button from '../../components/button';

function Cadastro() {
    return (
      <div className="Cadastro">
        <Header description="Faça o Cadastro para o acesso">
            <p> Pronto para cadastrar? </p>
        </Header>
        <main>
          <div className="section-main-cad">
            <div className="section-main">
                <h2>Cadastro</h2>
                <Input label="Nome"/> 
                <Input type="email" label="E-mail"/> 
                <label className="lblper"> Permissão </label>
                <select id="permissao">
                    <option value="" disabled selected>Selecione</option>
                    <option value="adm">Administrador</option>
                    <option value="usuario">Usuário</option>
                </select>
                <Input type="password" label="Senha" />
                <Button onClick={() => console.log("Enviou")} text={"Enviar"}/>          
              </div>
            </div>
        </main>      
        <Footer/>
      </div>
    );
  }
  
  export default Cadastro;