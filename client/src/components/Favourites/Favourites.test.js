import React from 'react';
import { shallow } from 'enzyme';
import Favourites from './Favourites'
import FavouritesList from '../FavouritesList/FavouritesList'


describe('Favourites', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Favourites />)
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should show a title', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  })
  
  it('should render FavouritesList Component', () => {
    expect(wrapper.containsMatchingElement(<FavouritesList />)).toEqual(true)
  })
})