import React from 'react';
// import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Categories from './pages/categories';
import CreateEvent from './pages/create-event';
import Nav from './mainPageComponents/header';
import AllEvents from './pages/all-events';
import {About} from './pages/about';
import {Error} from './pages/error';

const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route exact path='/categories' component= { Categories } />
        <Route exact path='/all-events' component= { AllEvents} />
        <Route path='/create-event' component= { CreateEvent } />
        <Route path='/about' component = {About} /> 
        <Route component= { Error } />

      </Switch>
    </div>
  );
};

export default App;