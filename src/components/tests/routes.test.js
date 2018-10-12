import React from 'react'
import {withRouter} from 'react-router'
import {Link, Route, Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent, cleanup} from 'react-testing-library'
import App from '../App';

const LocationDisplay = withRouter(({location}) => (
    <div data-testid="location-display">{location.pathname}</div>
  ))

  afterEach(cleanup);

  function renderWithRouter(
    ui,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
  ) {
    return {
      ...render(<Router history={history}>{ui}</Router>),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      history,
    }
  }
  test('full app rendering/navigating', () => {
    const {getByTestId, getByText} = renderWithRouter(<App />)
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(getByTestId('home-page').firstChild.textContent).toBe('Home')
    const leftClick = {button: 0}
    fireEvent.click(getByText(/about/i), leftClick)
    // normally I'd use a data-testid, but just wanted to show this is also possible
    expect(getByTestId('about-page').firstChild.textContent).toBe('About')
  })
  
//   test('landing on a bad page', () => {
//     const {container} = renderWithRouter(<App />, {
//       route: '/something-that-does-not-match',
//     })
//     // normally I'd use a data-testid, but just wanted to show this is also possible
//     expect(container.innerHTML).toMatch('No match')
//   })
  
//   test('rendering a component that uses withRouter', () => {
//     const route = '/some-route'
//     const {getByTestId} = renderWithRouter(<LocationDisplay />, {route})
//     expect(getByTestId('location-display').textContent).toBe(route)
//   })