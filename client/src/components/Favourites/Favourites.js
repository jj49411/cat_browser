import React, { Component } from 'react';

class Favourites extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <h1 className='display-6 font-weight-light'>{this.props.title}</h1>
    )
  }
}

export default Favourites
