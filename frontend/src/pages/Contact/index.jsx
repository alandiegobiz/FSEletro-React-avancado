import { React, useState, useEffect } from 'react';

import './styles.css';

import email from '../../assets/images/Contact/email.png';
import whatsapp from '../../assets/images/Contact/whats.jpg';

const Contact = ({match}) => {
    const id = match.params.id;
    const [produtos, setComents] = useState([]);
    const [msg, setMsg] = useState('');
    const [emptyField, setEmptyField] = useState(true);
    const [nome, setNome] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        msg: '',
      });

    useEffect(async () => {
        const url = "http://localhost:8080/Contatos";
        const resposta = await fetch(url);

        setComents(await resposta.json());
    }, []);

    function registerOrder(event) {
        event.preventDefault();
        const json = JSON.stringify(formData);
        const url = "http://localhost:8080/Contatos";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: json,
        })
    }

    const handleChange = (event) => {
        const nome = document.getElementById('nome').value;
        const msg = document.getElementById('msg').value;
        nome === '' || msg === '' ? setEmptyField(true) : setEmptyField(false);
        
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    };

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
                        <input className="contact-2 form-control border border-danger" type="text" name="nome" id="nome" placeholder="Digite seu nome completo aqui..." onChange={handleChange}/>
                        <h4><label>Mensagem:</label> </h4>
                        <textarea className="contact-2 form-control border border-danger" rows="4" name="msg" id="msg" placeholder="Digite sua mensagem aqui..." onChange={handleChange}/>
                        <p><button className="btn btn-primary mt-2" value="Enviar" name="submit">Enviar</button></p>
                    </form>
		        </section>
            </main>
        </div>
    )
}

export default Contact;
