import { React, useState, useEffect } from 'react';

import './styles.css';

const CardProducts = () => {
    const [prods, setProds] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:3333/produtos";
        const res = await fetch(url);
        setProds(await res.json());
    }, [])

    return (
        <>
            <section className="produtos" >
                {
                prods.map(row => {
                    return (
                        
                            <div key={row.id} className="box_produto" id={row.categoria}>
                                <img src={row.imagem} className="itens img-fluid" alt={row.descricao}  />
                                <br />
                                <p className="descricao">{row.descricao}</p>
                                <p className="preco" style={{ textDecoration: "line-through" }}>R${row.preco}</p>
                                <p className="precofinal text-danger">R${row.preco_venda}</p>
                                <hr />
                            </div>
        
                    )
                }
                ) }</section>



        </>
    )
}

export default CardProducts;
