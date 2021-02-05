import { React, useState, useEffect } from 'react';

import './styles.css';

import email from '../../assets/images/Contact/email.png';
import whatsapp from '../../assets/images/Contact/whats.jpg';

const Contact = ({match}) => {
    const id = match.params.id;
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const url = "http://localhost/FSELETRO-React/backend/";
        const resposta = await fetch(url);

        setProdutos(await resposta.json());
    }, []);

    function registerOrder(event) {
        event.preventDefault();

        const url = "http://localhost/FSELETRO-React/backend/register-contact.php";

        fetch(url, {
            method: 'POST',
            body: new FormData(event.target)
        })
    }
    return (
        <div>
            <main className="contact">
                <header>
                    <h2>Fale conosco:</h2>
                    <p>Gostariamos de ouvir você!</p>
                    <hr/>
                </header>
                <section id="secContatos">
                    <div className="contact-1 container">
                        <figure>
                            <img src={email} alt="Endereço de Mensagem" title="E-mail"/>
                            <b>contato@fullstackeletro.com</b>
                        </figure>
                        <figure>
                            <img src={whatsapp} alt="Whatsapp" title="Whatsapp"/>
                            <b>(11) 99999-9999</b>
                        </figure>
                    </div>
                    <form onSubmit={registerOrder} id="formContato" className="form-group align-items" method="post">
                        <h4><label>Nome:</label> </h4>
                        <input className="contact-2 form-control border border-danger" type="text" name="nome" id="nome" placeholder="Digite seu nome completo aqui..." />
                        <h4><label>Mensagem:</label> </h4>
                        <textarea className="contact-2 form-control border border-danger" rows="4" name="msg" id="msg" placeholder="Digite sua mensagem aqui..." />
                        <p><button className="btn btn-primary mt-2" value="Enviar" name="submit">Enviar</button></p>
                    </form>
		        </section>
            </main>
        </div>
    )
}

export default Contact;
