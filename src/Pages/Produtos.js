import {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


import Produto from '../Components/Produto'

import { Container, Row } from 'react-bootstrap';
import './Produtos.css'


export default function Produtos() {

    const [ produtos, setProdutos] = useState([]);

    useEffect (async () => {
        const awnser = await fetch('http://localhost/projeto_java_script_lucas_moreira/api/conexao_produtos.php')
        const data = await awnser.json()
        setProdutos(data);
       } , [] );

       const [filtro, setFiltro] = useState("");
         console.log(filtro);

       function filtrar(e){ 
           setFiltro(e.target.id)

       }
       
        
        const mapeamento = produtos.map(item => { 
            if (filtro == item.categoria) {

            return <Produto imagem={item.imagem} descricao={item.descricao} preco_inicial={item.preco_inicial} categoria={item.categoria}  preco_final={item.preco_final}/>
        }   
        else if (filtro =="") {
            return <Produto imagem={item.imagem} descricao={item.descricao} preco_inicial={item.preco_inicial} categoria={item.categoria}  preco_final={item.preco_final}/>            
        }
        })
       

    return (
        <Container className="d-flex align-content-start">
            
            <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1" action variant="dark" id="" onClick={filtrar}>
                Todos(16)
            </ListGroup.Item>   
            <ListGroup.Item action href="#link1" action variant="dark" id="Salgadinhos" onClick={filtrar}>
                Salgadinhos(4)
            </ListGroup.Item>
            <ListGroup.Item action href="#link1" action variant="dark" id="Torradas" onClick={filtrar}>
                Torradas (3)
            </ListGroup.Item>
            <ListGroup.Item action href="#link1" action variant="dark" id="Biscoitos" onClick={filtrar}>
                Biscoitos (2)
            </ListGroup.Item>
            <ListGroup.Item action href="#link1" action variant="dark" id="Chocolates" onClick={filtrar}>
                Chocolates (4)
            </ListGroup.Item>
            <ListGroup.Item action href="#link1" action variant="dark" id="GeleiasPastas" onClick={filtrar}>
                Geleias  & Pastas(3) 
            </ListGroup.Item>
            
        </ListGroup>
            <Row className="ml-3">
            {mapeamento}
            
            </Row>
        </Container>
        
    )
}