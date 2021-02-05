import React from 'react';

import './styles.css';

const Magazine = () => {
    return (
        <main className="magazine">
            <header>
                <h2>Nossas lojas</h2>
                <p>Confira a localização de nossas lojas!</p>
                <hr/>
            </header>

            <section>
                <div className="section-1">
                    <div className="card border-dark p-2">
                        <h3 className="card-title">Rio de Janeiro</h3>
                        <p className="card-text">Avenida Presidente Vargas, 5000</p>
                        <p className="card-text">10 &ordm; andar</p>
                        <p className="card-text">Centro</p>
                        <p className="card-text">(21) 3333-3333</p>
                    </div>
                    <div className="card border-dark p-2">
                        <h3 className="card-title">São Paulo</h3>
                        <p className="card-text">Avenida Paulista, 985</p>
                        <p className="card-text">5&ordm; andar</p>
                        <p className="card-text">Jardins</p>
                        <p className="card-text">(11) 4444-4444</p>
                    </div>
                    <div className="card border-dark p-2">
                        <h3 className="card-title">Santa Catarina</h3>
                        <p className="card-text">Rua Major &Aacute;vila, 370</p>
                        <p className="card-text">4&ordm; andar</p>
                        <p className="card-text">Vila Mariana</p>
                        <p className="card-text">(47) 5555-5555</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Magazine;
