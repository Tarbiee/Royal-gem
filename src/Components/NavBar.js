import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Royal-Gem</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/jewelCard"}>Jewelry</Nav.Link>
            <Nav.Link as={Link} to={"/jewelForm"}>Add New</Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
    
    
  )
}

export default NavBar;
