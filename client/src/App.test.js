import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should show a title on home page', () => {
    expect(wrapper.find('#title')).toBeDefined()
    expect(wrapper.find('#title').length).toEqual(1)
  })

  it('should have a navbar', () => {
    expect(wrapper.find('Navbar')).toBeDefined()
    expect(wrapper.find('Navbar').length).toEqual(1)
  })

  it('should have 2 links on navbar', () => {
    expect(wrapper.find('#link').length).toEqual(2)
  })


})
