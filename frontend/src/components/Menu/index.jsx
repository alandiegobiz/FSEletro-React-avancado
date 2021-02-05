import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import logo from '../../assets/images/Menu/FSEletro_logo.PNG';

const Menu = (props) => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                <ul class="nav align-items-sm-center">
                    <li class="nav-item active">
                        <Link className="nav-link active" to="/">
                            <img id="logo" src={logo} alt="Full Stack Eletro"
                            title="Full Stack Eletro Logo"/>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link className="nav-link" to="/Produtos">Produtos</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/NossasLojas">Nossas lojas</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Contatos">Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;