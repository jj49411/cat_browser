import React, { Component } from 'react'
import Pictures from '../Pictures/Pictures'
import '../../App.css'


class Home extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <h1 className='home-title projectsContent lead font-weight-light'>{this.props.title}</h1>
        <Pictures />
      </div>
      
    )
  }
}

export default Home
