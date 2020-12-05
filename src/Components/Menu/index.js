import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../Produto/Imagens/logo.png';

import { Link, withRouter } from 'react-router-dom';




 function BaseMenu(props){
     const { location } = props
    return (
        <Navbar className= "navbar-light"  bg="danger" expand="lg" fixed="top">

            <Navbar.Brand  as={Link} href="/Pagina_Inicial" to="Pagina_Inicial">
            <img
                  src={Logo}
                  width="200"
                  className="d-inline-block align-center"
            />

            </Navbar.Brand>

            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
            <Nav activeKey={location.pathname}>

            <Nav.Item>
                        <Nav.Link as={Link} href="/Pagina_Inicial" to="Pagina_Inicial">Pagina Inicial</Nav.Link>
            </Nav.Item>
   
            <Nav.Item>
                        <Nav.Link as={Link} href="/Produtos" to="Produtos">Produtos</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                        <Nav.Link as={Link} href="/Lojas" to="Lojas">Nossas Lojas</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                        <Nav.Link as={Link}  href="/Fale_Conosco" to="Fale_Conosco">Fale Conosco</Nav.Link>
            </Nav.Item>

            </Nav> 
            
            
            </Navbar.Collapse>  
        </Navbar>        
         
    )
}

const Menu = withRouter(BaseMenu);

export default Menu