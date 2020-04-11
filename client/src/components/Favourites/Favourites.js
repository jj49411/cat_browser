import React, { Component } from 'react';
import FavouritesList from '../FavouritesList/FavouritesList'

class Favourites extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div className='favourites-page'>
        <h1 className='favourites-title'>{this.props.title}</h1>
        <FavouritesList />
      </div>
    )
  }
}

export default Favourites
