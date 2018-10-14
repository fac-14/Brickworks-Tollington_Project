import React from 'react';
// import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Categories from './pages/categories';
import CreateEvent from './pages/create-event';
import Nav from './mainPageComponents/header';

import AllEvents from './pages/all-events';
import EventDetailed from './pages/event_detailed';
import {Error} from './pages/error';
import {Faq} from './pages/FAQ'
import {Resources} from './pages/resources'
import  {Projects} from './pages/projects'
import {Brickworks} from './pages/brickworks'
import {About} from './pages/about';
import {TopTen} from './pages/topten';


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
        <Route path='/event-detailed' component = {EventDetailed} />
        <Route path='/faq' component = {Faq} />
        <Route path='/resources' component = {Resources} />
        <Route path ='/recent-projects' component = {Projects} />
        <Route path ='/brickworks' component = {Brickworks} />
        <Route path ='/things-to-think-about' component = {TopTen} />
        <Route component= { Error } />
      </Switch>
    </div>
  );
};

export default App;