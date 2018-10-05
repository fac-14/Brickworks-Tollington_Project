import React from 'react';
// import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import Events from './pages/events';
import Nav from './mainPageComponents/header';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route path='/events' component= { Events } />
      </Switch>
    </div>
  );
};

export default App;