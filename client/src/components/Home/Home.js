import React, { Component } from 'react'
import Pictures from '../Pictures/Pictures'

class Home extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <h1 className='projectsContent lead font-weight-light'>{this.props.title}</h1>
        <Pictures />
      </div>
      
    )
  }
}

export default Home
