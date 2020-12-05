import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';



function Contato() {
  const [mensagem, setMensagem] = useState([]);

  const controleEnvio = (evento) => {
      evento.preventDefault();
      fetch("http://localhost/projeto_java_script_lucas_moreira/api/mensagem.php", { method: "POST", body: new FormData(evento.target) });
      getMensagem();
      window.alert("Mensagem enviada com sucesso !")

  }

  function getMensagem() {
      async function showMensagem() {
          const url = "http://localhost/projeto_java_script_lucas_moreira/api/mensagem.php";
          const resposta = await fetch(url);
          const resultado = await resposta.json();
          setMensagem(resultado);
      }
      showMensagem();
  }

  useEffect(() => { getMensagem() }, []);

  useEffect(() => { }, [mensagem]);




  

    return (
    <div><Jumbotron>
        <h1>Contato</h1>
    </Jumbotron>
    <CardGroup>
    <Card>
      <Card.Img variant="top" src={require(`../Produto/Imagens/logo_email.png`).default} className="logo"/>
      <Card.Body>
        <Card.Title>contato@snacktable.com</Card.Title>
        
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={require(`../Produto/Imagens/logo_whatsapp.png`).default} className="logo" />
      <Card.Body>
        <Card.Title>(21) 99999-9999</Card.Title>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={require(`../Produto/Imagens/twitter-logo-1-1.png`).default}  className="logo"/>
      <Card.Body>
        <Card.Title>@snack_table</Card.Title>
      </Card.Body>
    </Card>
  </CardGroup>
  <br/> <br/>


  <Form onSubmit={controleEnvio} method="post">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Nome:</Form.Label>
    <Form.Control placeholder="Diga seu nome" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Mensagem:</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem"/>
  </Form.Group>
  <Button type="submit" variant="danger">Enviar Mensagem</Button>
</Form>
  </div>
    )
}

export default Contato;