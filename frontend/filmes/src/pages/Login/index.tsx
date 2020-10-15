import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/global.css';
import '../Login/style.css';

import Input from '../../components/input';
import Button from '../../components/button';

function Login() {

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    const login ={
      email: email,
      senha: senha
    }
  

    fetch('http://localhost:5000/api/conta/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'content-type': 'application/json'
      },
    })

    .then (response => response.json())
    .then (dados => {

      if(dados.token !== undefined){
        localStorage.setItem('token-filmes', dados.token)
        history.push('/');
      }else{
        alert('Senha ou email inválidos')
      }
    })
    .catch(err => console.log(err))
  }






return (
  <div className="Login">
    <Header description="Faça o Login e acesse a Coletanea" />
    <main>
      <div className="Login-section">
        <div className="section-log">
          <h1>Login</h1>
          <br />
          <Input type="email" label="E-mail" name="email" onChange={e => setEmail(e.target.value)}/>
          <Input type="password" label="Senha" name="senha" onChange={e => setSenha(e.target.value)}/>
          <Button onClick={() => console.log("Enviou")} text={"Enviar"} />
        </div>
      </div>
    </main>

    <Footer />
  </div>
);
}

export default Login;