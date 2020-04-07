import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should show a title on home page', () => {
    expect(wrapper.find('h1')).toBeDefined()
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
