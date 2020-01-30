import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Navbar bg="light" variant="light" expand="sm">
        
    <Navbar.Toggle />
    <Navbar.Collapse className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <ButtonToolbar>
    <Button variant="primary" size="sm">
      Small button
    </Button>
  </ButtonToolbar>
    </Navbar.Collapse>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
    );
}

export default Header;