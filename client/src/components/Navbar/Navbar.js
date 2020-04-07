import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {

  return(
    <Navbar bg="dark" variant="dark" expand='lg'>
      <Navbar.Brand id='title' href='/'>Cat Browser</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id='navbar-toggle'>
        <Nav className="ml-auto">
          <Nav.Link id='link' href='/'>Home</Nav.Link>
          <Nav.Link id='link' href='/favourites'>Favourites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar