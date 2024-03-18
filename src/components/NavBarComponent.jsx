import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../public/logo.png'

import { Link } from 'react-router-dom'

export const NavBarComponent = () => {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/proyecto-4/'><Image 
              src= {logo}
              width="90" 
              className="d-inline-block align-top"
              alt="logo"
          /></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to='/proyecto-4/'>Sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to='/proyecto-4/menu'>Menú</Nav.Link>
            <Nav.Link as={Link} to='/proyecto-4/reservas'>Reserva con nosotros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
