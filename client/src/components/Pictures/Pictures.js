import React, { Component } from 'react'
import axios from 'axios'

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
      params: {limit: 50}
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
          <img src={cat.url} width='300' height='300'/>
        ))}
      </div>

    )
  }
}

export default Pictures
