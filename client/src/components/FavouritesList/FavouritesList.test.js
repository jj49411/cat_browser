import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import FavouritesList from './FavouritesList'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('FavouritesList', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<FavouritesList />)
  })

  it('should have a div', () => {
    expect(wrapper.find('div')).toBeDefined()
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
