import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <router>
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Jewelry</Nav.Link>
            <Nav.Link as={Link} to={"/home"}>Add New</Nav.Link>
            <Nav.Link as={Link} to={"/home"}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
    </router>
    
  )
}

export default NavBar;
