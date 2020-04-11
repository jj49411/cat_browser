import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

class FavouritesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likedData: [],
      likedCats: [],
      isLoading: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/favourites')
    .then(response => {
      this.setState({
        isLoading: true,
        likedData: response.data
      })
    })
  }

  render() {
    const { likedData, isLoading, likedCats } = this.state
    console.log(likedData)
    return (
      <div>
        <div className='liked-list'>
          {likedData.map((cat, key) => (
            <div className='pic-box' key={key}>
              <img src={cat.url} className='a-cat' id={cat.id}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default FavouritesList
