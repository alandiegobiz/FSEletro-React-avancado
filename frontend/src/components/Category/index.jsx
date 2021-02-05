import React from 'react'

import './styles.css';

const Category = (props) => {
    function ExibirCategoria(categoria){
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length; i++){
            if(categoria === elementos[i].id)
                elementos[i].style = 'display:inline-block';
            else
                elementos[i].style = 'display:none';
        }
    }
    
    let ExibirTodos = () => {
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length;i++){
            elementos[i].style = 'display:inline-block';
        }
    }

    function efeitoTela(event) {
        event.target.style = "background-color: black; padding: 8px; border-radius: 20px";
    }

    function limpar(event){
        event.target.style = "background-color: none";
    }
    return (
        <aside className="Category">
            <h3>Categorias</h3>
            <ul className="list-group-flush">
                <li className="lista list-group-item d-flex align-items-center" id="todos" onMouseOut={limpar} onMouseMove={efeitoTela}
                    onClick={ExibirTodos}>Todos<span className="badge badge-primary badge-pill">12</span></li>
                <li className="lista list-group-item d-flex align-items-center" id="fogao" onMouseOut={limpar} onMouseMove={efeitoTela}
                    onClick={() => ExibirCategoria('fogao')}>Fogões<span className="badge badge-primary badge-pill">2</span></li>
                <li className="lista list-group-item d-flex align-items-center" id="microondas" onMouseOut={limpar} onMouseMove={efeitoTela}
                    onClick={() => ExibirCategoria('microondas')}>Microondas<span className="badge badge-primary badge-pill">3</span></li>
                <li className="lista list-group-item d-flex align-items-center" id="lavaroupas" onMouseOut={limpar} onMouseMove={efeitoTela}
                    onClick={() => ExibirCategoria('lavaroupas')}>Lavadoura de roupas<span className="badge badge-primary badge-pill">2</span></li>
                <li className="lista list-group-item d-flex align-items-center" id="lavaLoucas" onMouseOut={limpar} onMouseMove={efeitoTela}
                    onClick={() => ExibirCategoria('lavaloucas')}>Lava-louças<span className="badge badge-primary badge-pill">2</span></li>
                <li className="lista list-group-item d-flex align-items-center" id="geladeira" onMouseOut={limpar} onMouseMove={efeitoTela}
                    onClick={() => ExibirCategoria('geladeira')}>Geladeiras<span className="badge badge-primary badge-pill">3</span></li>
            </ul>
        </aside>
    )
}

export default Category;
