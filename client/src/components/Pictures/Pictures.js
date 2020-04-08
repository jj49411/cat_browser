import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

class Pictures extends Component {

  constructor(props) {
    super(props)
    this.state = {
      catsData: [],
      isLoading: false,
      likedCats: []
    }
  }

  componentDidMount() {
    
    axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {'x-api-key': process.env.API_KEY}, 
      params: {limit: 10}
    })
      .then(response => {
        this.setState({
          isLoading: true,
          catsData: response.data
      })
    })
  }

  async like(id, url) {
    this.setState(prevState => ({
      likedCats: [...prevState.likedCats, id]
    }))
    const newCat = {
      name: id,
      url: url
    }
    axios.post('http://localhost:5000/favourites', newCat)
      .then(res => console.log(res.data))
  }


  render() {
    const { catsData, isLoading } = this.state
    console.log(this.state.likedCats)
    return(
      <div className='pictures'>
        {catsData.map(cat => (
          <div className='pic-box'>
            <img src={cat.url} className='a-cat'/>
            <button id={cat.id} onClick={() => {this.like(cat.id, cat.url)}}>Like</button>
          </div>
        ))}
      </div>

    )
  }
}

export default Pictures
