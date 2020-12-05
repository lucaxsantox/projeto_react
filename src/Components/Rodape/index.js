import React from 'react';


const Rodape = () => {
    return (
            <footer>
                <br /> <br />
                <h4>Formas de Pagamento</h4>
                <img src={require(`../Produto/Imagens/formas_de_pagamento.png`).default} alt="Formas de pagamento" />    
                <br /> <br /> <br /> <br />
                <p>&copy; Recode Pro</p>
            </footer>
    );
}

export default Rodape;
