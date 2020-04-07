import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

import App from './App'
import Home from './components/Home/Home'



describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
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


  it('should render the Home Component', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )

    expect(wrapper.find(Home)).toHaveLength(1)
  })

  it('should render the Home Component', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ '/favourites' ]}>
        <App/>
      </MemoryRouter>
    )
    // console.log(wrapper.debug())
    expect(wrapper.find('#favPath')).toHaveLength(1)
  })

})
