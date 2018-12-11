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
  setBackground = () => {
    if(process.env.NODE_ENV === 'test') {
      const background = document.getElementById('background');
      background.classList.remove('background-img');
    }
  }
  componentDidMount = () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('icon');
    const focusable = Array.from(document.querySelectorAll('#icon, button, a, input, select, textarea, [tabIndex]:not([tabIndex="-1"])')).filter(element=> element.tabIndex ===0);
    focusable[0].focus();
    console.log(focusable);
    document.addEventListener('keydown', (e)=>{
      switch(e.key){
        case 'Tab':
        if(menu.className==="menu menu-open" && document.activeElement===menuBtn){
          console.log(menu.firstElementChild.firstElementChild);

          menu.firstElementChild.firstElementChild.focus();
        }
        else if(document.activeElement===menu.lastElementChild.firstElementChild){
          console.log(menuBtn);
          menuBtn.focus();
        }
        else if(e.shiftKey&&document.activeElement===menu.firstElementChild.firstElementChild){
          menuBtn.focus()
        }
        else if(e.shiftKey && document.activeElement===menu && menu.className==="menu menu-open"){
          menu.lastElementChild.firstElementChild.focus()
        }
        break;
        case 'Enter':
        if(document.activeElement===menuBtn){
          menuBtn.click();
        }
        break;
        case 'ArrowUp':
        if(menu.className==="menu menu-open"&&document.activeElement===menuBtn){
          menu.lastElementChild.firstElementChild.focus();
        }
        else if(document.activeElement === menu.firstElementChild.firstElementChild){
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"){
          // console.log(document.activeElement.parentElement.prev);
          document.activeElement.parentElement.previousElementSibling.firstElementChild.focus();
        }
        break;
        case 'ArrowDown':
        if(menu.className==="menu menu-open"&& document.activeElement===menuBtn){
          console.log(menu.firstElementChild.firstElementChild)
          menu.firstElementChild.firstElementChild.focus();
        }
        else if(document.activeElement === menu.lastElementChild.firstElementChild){
          menuBtn.focus();
        }
        else if(menu.className==="menu menu-open"){
          // console.log(document.activeElement.parentElement.prev);
          document.activeElement.parentElement.nextSibling.firstElementChild.focus();
        }
        break;
        case 'Escape':
       if(menu.className==="menu menu-open"){
        const menuLinks= document.querySelectorAll(".nav-link")
        icon.className='image image-closed';
        menu.className='menu menu-closed';
        menu.setAttribute("aria-hidden", "true");
        icon.setAttribute("aria-expanded", "false");
        menuLinks.forEach(el => {
          el.setAttribute('tabIndex',-1);
        })
        menu.focus();
      }
        break;
      }
    })
  }
  render () {
  return (
    
    <div id="container" className='background-img'>
      <Nav />
      <Switch>
        <Route exact path='/' component= { Home } />
        <Route path='/social-actions' render={(props) => <SocialActions {...props} extractData={this.extractData} />}/>
        <Route path='/list-event' component= { ListEvent } />
       
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