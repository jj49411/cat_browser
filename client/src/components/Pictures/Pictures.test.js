import React from 'react'
import { shallow } from 'enzyme'
import Pictures from './Pictures'
import axios from 'axios'

jest.mock('axios')

describe('Pictures', () => {

  let wrapper
  const dataMock = { id: "testID", url: "testURL"}
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: dataMock }));
  
  beforeEach(() => {
    wrapper = shallow(<Pictures />)
  })

  it('should have a div', () => {
    expect(wrapper.find('.pictures')).toBeDefined()
    expect(wrapper.find('.pictures')).toHaveLength(1)
  })

  it('should fetch image data from API', async () => {
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith("https://api.thecatapi.com/v1/images/search", 
    {"headers": {"x-api-key": process.env.API_KEY}, "params": {"limit": 50}})
  })
})
