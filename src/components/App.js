import React from 'react';
// import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Categories from './pages/categories';
import CreateEvent from './pages/create-event';
import Nav from './mainPageComponents/header';
import AllEvents from './pages/all-events';
import EventsByTheme from './pages/eventsByTheme';
import {About} from './pages/about';

const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route exact path='/categories' component= { Categories } />
        <Route exact path='/all-events' component= { AllEvents} />
        <Route path='/create-event' component= { CreateEvent } />
        <Route path='/eventsByTheme' component= { EventsByTheme } />
        <Route path='/about' component = {About} /> 

      </Switch>
    </div>
  );
};

export default App;