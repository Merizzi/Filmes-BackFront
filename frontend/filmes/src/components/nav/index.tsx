import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/global.css';
import './style.css';


import Arrow from '../arrow';
import arou from '../../assets/images/arrow.png'

interface NavProps {

}

const nav: React.FunctionComponent<NavProps> = (props) => {
    return (
        <div className="principal">
            <div className="side">

                <nav>
                    <Arrow altImage={"Cinema"} image={arou}/>
                    <Link to="/" className="menu-item">Home</Link>
                    <Link to="/perfil" className="menu-item">Perfil</Link>
                    <Link to="/filmes" className="menu-item">Filmes</Link>
                    <Link to="/genero" className="menu-item">Gêneros</Link>
                </nav>
            </div>
        </div>
    );
}

export default nav;