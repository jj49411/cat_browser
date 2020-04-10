import React, { Component } from 'react';
import FavouritesList from '../FavouritesList/FavouritesList'

class Favourites extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <h1 className='display-6 font-weight-light'>{this.props.title}</h1>
        <FavouritesList />
      </div>
    )
  }
}

export default Favourites
