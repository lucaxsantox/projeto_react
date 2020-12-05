import React from 'react'
import Menu from './Components/Menu'
import Routes from './routes'
import Rodape from './Components/Rodape'


import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <Menu/>
      </header>
      <main>
        <Container className="ml-0 mr-0">
          <Routes />
        </Container>
      </main>
      <footer>
        <center><Rodape/></center>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
