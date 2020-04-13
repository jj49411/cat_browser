import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

import heart1 from '../../img/heart1.png'
import heart2 from '../../img/heart2.png'

class Pictures extends Component {

  constructor(props) {
    super(props)
    this.state = {
      catsData: [],
      visible: 33,
      isLoading: false,
      likedCats: []
    }
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    
    axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {'x-api-key': process.env.API_KEY}, 
      params: {limit: 99}
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
      return {visible: pre.visible + 33}
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
    const { catsData, isLoading, visible, likedCats } = this.state
    console.log(this.state.likedCats)
    return(
      <div>
        <div className='pictures'>
          {catsData.slice(0, visible).map(cat => (
            <div className='pic-box'>
              <img src={cat.url} className='a-cat'/>
              <button className='heart-box btn'>
                <img src={likedCats.includes(cat.id) ? heart2 : heart1} className='heart' id={cat.id} onClick={() => {this.like(cat.id, cat.url)}}></img>
              </button>
            </div>
          ))}
        </div>
        <div className='loadmore-box'>
          <button type="button" className='loadmore-button btn-light'onClick={this.loadMore}>Load More</button>
        </div>
      </div>
    )
  }
}

export default Pictures
