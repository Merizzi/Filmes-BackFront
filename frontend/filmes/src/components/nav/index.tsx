import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/global.css';
import './style.css';


interface NavProps {

}

const nav: React.FunctionComponent<NavProps> = (props) => {
    return (
        <div className="principal">
            <div className="side">
                <div className="align">
                    <nav>
                            <Link to="/" className="menu-item">Home</Link>
                            <Link to="/perfil" className="menu-item">Perfil</Link>
                            <Link to="/filmes" className="menu-item">Filmes</Link>
                            <Link to="/genero" className="menu-item">Gêneros</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default nav;