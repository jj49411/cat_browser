import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Pictures from './Pictures'
import axios from 'axios'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('axios')

describe('Pictures', () => {

  let wrapper
  const catMock = [
    {
      "breeds": [],
      "id": "5b7",
      "url": "https://cdn2.thecatapi.com/images/5b7.jpg",
      "width": 500,
      "height": 320
    }, {
      "breeds": [],
      "id": "4g6",
      "url": "https://cdn2.thecatapi.com/images/4g6.jpg",
      "width": 300,
      "height": 400
    }
  ]
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: catMock }))

  beforeEach(() => {
    wrapper = shallow(<Pictures />)
  })
    

  it('should have a div', () => {
    expect(wrapper.find('.pictures')).toBeDefined()
    expect(wrapper.find('.pictures')).toHaveLength(1)
  })

  it('should fetch image data from API', async () => {
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.thecatapi.com/v1/images/search', 
    {'headers': {'x-api-key': process.env.API_KEY}, 'params': {'limit': 10}})
  })

  it('should have a button for every picture', () => {
    expect(wrapper.find('button')).toBeDefined()
  })

  it('should call like function when clicked on a button', () => {
    const likeMock = jest.fn()
    wrapper = shallow((<button onClick={likeMock}></button>))
    wrapper.find('button').at(0).simulate('click')
    expect(likeMock).toHaveBeenCalled()
  })

})
