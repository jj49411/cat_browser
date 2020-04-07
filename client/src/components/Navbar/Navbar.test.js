import React from 'react'
import { shallow } from 'enzyme'
import NavBar from './Navbar'

describe('NavBar', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('should show a title on home page', () => {
    expect(wrapper.find('#title')).toBeDefined()
    expect(wrapper.find('#title')).toHaveLength(1)
  })

  it('should have a navbar', () => {
    expect(wrapper.find('Navbar')).toBeDefined()
    expect(wrapper.find('Navbar')).toHaveLength(1)
  })

  it('should have 2 links on navbar', () => {
    expect(wrapper.find('#link')).toHaveLength(2)
  })

})