import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

import App from './App'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/Navbar'



describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render the NavBar Component', () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true)
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
