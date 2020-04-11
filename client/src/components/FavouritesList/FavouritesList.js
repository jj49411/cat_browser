import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

class FavouritesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likedData: [],
      likedCats: [],
      isLoading: false,
      hightlight: []
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

  handleEnter(id) {
    this.setState({
      hightlight: [id]
    })
  }

  handleOut() {
    this.setState({
      hightlight: []
    })
  }

  render() {
    const { likedData, isLoading, likedCats, hightlight } = this.state
    return (
      <div>
        <div className='liked-list'>
          {likedData.map((cat, key) => (
            <div className='pic-box' key={key}>
              <img src={cat.url} className={hightlight.includes(cat.name) ? 'a-cat-over' : 'a-cat'} id={cat._id} 
              onMouseEnter={() => {this.handleEnter(cat.name)}} onMouseOut={() => {this.handleOut()}}/>
            </div>
          ))} 
        </div>
      </div>
    )
  }
}

export default FavouritesList
