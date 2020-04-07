import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'


describe('Home', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show a title', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })

})