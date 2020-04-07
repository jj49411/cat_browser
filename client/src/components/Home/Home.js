import React, { Component } from 'react'
import Pictures from '../Pictures/Pictures'

class Home extends Component {
  render() {
    return(
      <div>
        <h1 className='projectsContent lead font-weight-light'>Pick up your favourites</h1>
        <Pictures />
      </div>
      
    )
  }
}

export default Home
