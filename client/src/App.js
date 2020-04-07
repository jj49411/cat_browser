import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home'
import Favourites from './components/Favourites/Favourites'
import NavBar from './components/Navbar/Navbar'

class App extends Component {
  
  render() {
    return(
      <Router>
        <NavBar />
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/favourites' id='favPath' render={() => <Favourites />} />
      </Router>
    )
  }
}


export default App
