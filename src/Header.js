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
            <Nav.Link href="#home">Домой</Nav.Link>
            <ButtonToolbar>
              <Button variant="primary" size="sm">Small button</Button>
            </ButtonToolbar>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>CNC <a href="#">Dashboard</a></Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
  );
}

export default Header;