import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import '../Header/style.css';
import { Link, useHistory } from 'react-router-dom'

interface HeaderProps {
  description: string;
  text?: string
}


const Header: React.FC<HeaderProps> = (props) => {
  let history = useHistory()

  const logout = () => {
    localStorage.removeItem('token-filmes');
    history.push('/')
  }

  const menu = () => {
    const token = localStorage.getItem('token-filmes');
    if (token === undefined || token === null) {
      return (
        <div className="section-container-nav">
          <Link to="/" className="link">Home      </Link>
          <Link to="/login" className="link">Login</Link>
          <Link to="/cadastro" className="link">Cadastro  </Link>
        </div>
      )
    }
    else {
      return(
        <div className="section-container-nav">
          <Link to="/" className="link">Home      </Link>
          <Link to="/login" className="link">Login</Link>
          <Link to="/cadastro" className="link">Cadastro  </Link>
          <Link to="/cadastro" className="link">Cadastro  </Link>
          <Link to="" onClick={event => {
            logout()
          }} > Logout  </Link>
        </div>
      )
    }
  }

  return (
    <div className="Header">
      <div className="section-header">
        <div className="section-container-logo1">
          <img src={logo} className="Logo" />
          <h3>{props.description}</h3>
          {props.children}
          {props.text && <p>{props.text}</p>}
        </div>


      </div>
    </div>
  );
}

export default Header;