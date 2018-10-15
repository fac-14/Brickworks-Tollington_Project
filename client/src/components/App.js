import React from 'react';
// import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
// import CreateEvent from './pages/create-event';
import Nav from './mainPageComponents/header';
import AllEvents from './pages/all-events';
import EventDetailed from './pages/event_detailed';
import {Error} from './pages/error';
import {Faq} from './pages/faq';
import {Resources} from './pages/resources';
import {Inspiration} from './pages/inspirations';
import {About} from './pages/about';
import {TopTen} from './pages/topten';

const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route exact path='/social-actions' component= { AllEvents} />
        {/* <Route path='/create-event' component= { CreateEvent } /> */}
        <Route path='/about' component = {About} /> 
        <Route path='/event-detailed' component = {EventDetailed} />
        <Route path='/faq' component = {Faq} />
        <Route path='/resources' component = {Resources} />
        <Route path ='/inspirations' component = {Inspiration} />
        <Route path ='/things-to-think-about' component = {TopTen} />
        <Route component= { Error } />
      </Switch>
    </div>
  );
};

export default App;