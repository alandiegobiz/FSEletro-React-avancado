import React from 'react';

import './styles.css';

import pagamentos from '../../assets/images/Footer/formas_pagamentos.png';

const Footer = () => {
    return (

        <footer>
            <figure className="pagamentos">
                <figcaption>
                    <b>Formas de pagamento</b><br/>
                </figcaption>
                    <img src={pagamentos} alt="Formas de pagamento" title="Formas de pagamento"/>
            </figure>
                <p>&copy; Desenvolvido por Alan Diego Biz - Recode Pro 2021</p>
        </footer>
    )
}

export default Footer;