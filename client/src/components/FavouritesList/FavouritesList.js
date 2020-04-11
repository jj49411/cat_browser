import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

import delete1 from '../../img/delete.png'

class FavouritesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      likedData: [],
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

  handleDelete(cat) {
    console.log(cat)
    const deleteCat = {
      name: cat.name
    }
    axios.delete('http://localhost:5000/favourites',  { data: deleteCat })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    
    this.setState({
      likedData: this.state.likedData.filter(
        thisCat => thisCat.name !== cat.name
      )
    })
  }

  render() {
    const { likedData, isLoading, hightlight, showDelete } = this.state
    return (
      <div>
        <div className='liked-list'>
          {likedData.map((cat, key) => (
            <div className='liked-box' key={key}>
              <img src={cat.url} className={hightlight.includes(cat.name) ? 'a-cat-over' : 'a-cat'} id={cat._id} 
                onMouseEnter={() => {this.handleEnter(cat.name)}} onMouseOut={() => {this.handleOut()}}/>
              <button className='heart-box btn'>
                <img src={delete1} className='delete-button btn' id={cat.id} onClick={() => {this.handleDelete(cat)}} ></img>
              </button>
            </div>
          ))} 
        </div>
      </div>
    )
  }
}

export default FavouritesList
