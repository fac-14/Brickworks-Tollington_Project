import React from 'react';
// import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import CreateEvent from './pages/create-event';
import Nav from './mainPageComponents/header';
import AllEvents from './pages/all-events';

const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route exact path='/all-events' component= { AllEvents} />
        <Route path='/create-event' component= { CreateEvent } />
      </Switch>
    </div>
  );
};

export default App;