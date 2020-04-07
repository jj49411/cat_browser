import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from './components/Home/Home'
import Favourites from './components/Favourites/Favourites'

class App extends Component {
  
  render() {
    return(
      <Router>
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
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/favourites' id='favPath' render={() => <Favourites />} />
      </Router>
    )
  }
}


export default App
