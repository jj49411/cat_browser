import React from 'react'
import { shallow } from 'enzyme'
import Pictures from './Pictures'


describe('Pictures', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Pictures />)
  })

  it('should have a div', () => {
    expect(wrapper.find('.pictures')).toBeDefined()
    expect(wrapper.find('.pictures')).toHaveLength(1)
  })
})
