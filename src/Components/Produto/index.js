import Figure from 'react-bootstrap/Figure'

import './produto.css'



 function Produto (props) {
    
    
    return (

    
        <Figure className={props.categoria}>
        <Figure.Image src={require(`./Imagens/${props.imagem}`).default} 
        alt="imagem de produtos" className="imagem"/>
        
        <Figure.Caption className="descricao"> {props.descricao} </Figure.Caption>
        <Figure.Caption className="preco_inicial"> R${props.preco_inicial}</Figure.Caption>
        <br/>        
        <p className="preco_final"> R$ {props.preco_final}
        </p>
        </Figure>
    
    
    )
}


export default Produto;