import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'

class Pictures extends Component {

  constructor(props) {
    super(props)
    this.state = {
      catsData: [],
      isLoading: false
    }
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


  render() {
    const { catsData, isLoading } = this.state

    return(
      <div className='pictures'>
        {catsData.map(cat => (
          <div className='pic-box'>
            <img src={cat.url} className='a-cat'/>
          </div>
        ))}
      </div>

    )
  }
}

export default Pictures
