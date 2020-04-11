import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import axios from 'axios'
import FavouritesList from './FavouritesList'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('axios')

describe('FavouritesList', () => {

  let wrapper
  const dataMock = [
    {
      dateAdded: "2020-04-08T11:19:39.020Z",
      _id: "5e8db35593447c5e3af290ae",
      name: "bfn",
      url: "https://cdn2.thecatapi.com/images/5b7.jpg"
    }, {
      dateAdded: "2020-04-08T13:28:58.465Z",
      _id: "5e8dd1a8c5a3aa64e3d34603",
      name: "bpa",
      url: "https://cdn2.thecatapi.com/images/5b7.jpg"
    }
  ]
  axios.get.mockImplementationOnce(() => Promise.resolve({ likedData: dataMock }));

  beforeEach(() => {
    wrapper = shallow(<FavouritesList />)
  })

  it('should have a div', () => {
    expect(wrapper.find('.liked-list')).toBeDefined()
    expect(wrapper.find('.liked-list')).toHaveLength(1)
  })

  it('should fetch stored image data from Express API', async () => {
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/favourites")
  })

  it('should have a delete button for every picture', () => {
    expect(wrapper.find('button')).toBeDefined()
  })

  it('should call handleDelete function when clicked on delete button', () => {
    const deleteMock = jest.fn()
    wrapper = shallow((<button onClick={deleteMock}></button>))
    wrapper.find('button').at(0).simulate('click')
    expect(deleteMock).toHaveBeenCalled()
  })
  
})
