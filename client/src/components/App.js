import React from 'react';
// import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ListEvent from './pages/list-event';
import Nav from './mainPageComponents/header';
import SocialActions from './pages/social-actions';
import EventDetailed from './pages/event_detailed';
import {Error} from './pages/error';
import {Error500} from './pages/500error';
import {Faq} from './pages/faq';
import {Resources} from './pages/resources';
import {Inspiration} from './pages/inspirations';
import {About} from './pages/about';
import {TopTen} from './pages/topten';
import ContactUs from './pages/contactUs';
import {Projects} from './pages/projects';
import {Footer} from './mainPageComponents/footer';

class App extends React.Component {
  state = {
    background: 'background-img',
    data: {},
  }
 extractData = (data) => {
    this.setState({data: data})
    console.log(data);
  }
  // setBackground = () => {
  //   if(process.env.NODE_ENV === 'test') {
  //     this.setState({background: ''});
  //   }
  //   else {
      
  //   }
  // }
  render () {
  return (
    
    <div className='background-img'>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route path='/social-actions' render={(props) => <SocialActions {...props} extractData={this.extractData} />}/>
        <Route path='/list-event' component= { ListEvent } />
        <Route path='/about' component = {About} /> 
        <Route path='/event-detailed' render={(props) => <EventDetailed {...props} data={this.state.data} />}/>
        <Route path='/faq' component = {Faq} />
        <Route path='/resources' component = {Resources} />
        <Route path ='/inspirations' component = {Inspiration} />
        {/* <Route path ='/things-to-think-about' component = {TopTen} /> */}
        <Route path ='/contactUs' component = {ContactUs} />
        <Route path ='/topten' component = {TopTen} />
        <Route path ='/projects' component = {Projects} />
        <Route path ='/error500' component = {Error500} />
        <Route component= { Error } />
      </Switch>
      <Footer />
    </div>
    )}
};

export default App;