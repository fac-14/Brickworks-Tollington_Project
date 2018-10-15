import React from 'react'
import {Link, Route, Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent, cleanup} from 'react-testing-library'
import App from '../App';

//history is a JavaScript library that lets you easily manage session history anywhere JavaScript runs. history abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

  afterEach(cleanup);
  
  //employs cleanup after each test is run to reset
  //cleanup unmounts components rendered 

  function renderWithRouter(
    ui,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
  ) {
    return {
      ...render(<Router history={history}>{ui}</Router>),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests
      //... is spread property notation. refers to the history of all contents of router
      history,
    }
  }
  test('rendering App will produce homepage, testing router functionality', () => {
    const {getByTestId, getByText} = renderWithRouter(<App />)
    //import necessary commands and components
    const menu = getByTestId('menu')
    expect(getByTestId('home-page').firstChild.textContent).toBe('Home')
   //open menu
    fireEvent.click(menu);
    //click about link
    fireEvent.click(getByTestId('about'))
    expect(getByTestId('about-page').firstChild.textContent).toBe('About')
  })
  
  test('landing on a bad page', () => {
    const {getByTestId} = renderWithRouter(<App />, {
      route: '/whereTheHellAreYouGoing?',
    })
    const error = getByTestId('error');
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(error.firstChild.textContent).toMatch('App Destroyed')
  })
 