import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home'
import Favourites from './components/Favourites/Favourites'
import NavBar from './components/Navbar/Navbar'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      home: {
        title: 'Pick up your favourites'
      },
      favourites: {
        title: 'Favourites'
      }
    }
  }


  render() {
    return(
      <Router>
        <NavBar />
        <Route exact path='/' render={() => <Home title={this.state.home.title}/>} />
        <Route exact path='/favourites' id='favPath' render={() => <Favourites title={this.state.favourites.title}/>} />
      </Router>
    )
  }
}


export default App
