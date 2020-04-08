import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {

  return(
    <Navbar className='nav-box sticky-top'  variant="dark" expand='lg'>
      <Navbar.Brand id='title' className='nav-title' href='/'>CAT BROWSER</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id='navbar-toggle'>
        <Nav className='nav-option ml-auto'>
          <Nav.Link id='link' href='/'>Home</Nav.Link>
          <Nav.Link id='link' href='/favourites'>Favourites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar