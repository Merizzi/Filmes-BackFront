import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import '../Header/style.css';
import {Link} from 'react-router-dom'

interface HeaderProps{
  description: string;
  text?: string
}

const Header:React.FC<HeaderProps> =(props) => {
  return (
    <div className="Header">
      <div className="section-header">
        <div className="section-container-logo1">
            <img src={logo} className="Logo"/>
            <h3>{props.description}</h3>
            {props.children}
            {props.text && <p>{props.text}</p>}
        </div>

        <div className="section-container-nav">
                <Link to="/" className="link">Home      </Link>
                <Link to="/login" className="link">Login</Link>
                <Link to="/cadastro" className="link">Cadastro  </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;