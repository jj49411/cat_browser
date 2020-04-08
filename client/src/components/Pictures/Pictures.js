import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

class Pictures extends Component {

  constructor(props) {
    super(props)
    this.state = {
      catsData: [],
      visible: 3,
      isLoading: false,
      likedCats: []
    }
    this.loadMore = this.loadMore.bind(this)
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

  loadMore() {
    this.setState(pre => {
      return {visible: pre.visible + 3}
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
    const { catsData, isLoading, visible } = this.state
    console.log(this.state.likedCats)
    return(
      <div>
        <div className='pictures'>
          {catsData.slice(0, visible).map(cat => (
            <div className='pic-box'>
              <img src={cat.url} className='a-cat'/>
              <button id={cat.id} onClick={() => {this.like(cat.id, cat.url)}}>Like</button>
            </div>
          ))}
        </div>
        <button className='loadmore-button'onClick={this.loadMore}>Load More</button>
      </div>
    )
  }
}

export default Pictures
