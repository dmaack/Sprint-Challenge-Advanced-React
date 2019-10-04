import React from 'react';
import * as rtl from '@testing-library/react'
import { render } from '@testing-library/react'
import App from './App';
import Header from './components/Header';


 it('App renders without crashing', () => {
  render( <App /> )
 });

it('renders an h1 with the text Womens World Cup Player Roster', () => {
  const wrapper = rtl.render(
    <Header />
  )
  const element = wrapper.queryByText(/womens world cup player roster/i)
  // expect(element).toBeInTheDocument();
  expect(element).toBeTruthy();
})
