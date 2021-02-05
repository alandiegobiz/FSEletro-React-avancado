import React from 'react';

import './styles.css';

import eletro from '../../assets/images/Home/Eletrodomesticos.jpg'

const Home = () => {

    return (
        <main className="container-fluid">
            <div className="container-1">
                <h2>Seja bem vindo(a)!</h2>
                <p>Aqui em nossa loja, <em className="text-danger">devs tem descontos %</em> nos produtos para sua casa!</p>
            </div>
            <div className="container-2">
                <img src={eletro} alt="Eletrodomésticos" title="Eletrodomésticos" />
            </div>
        </main>
    )
}

export default Home;