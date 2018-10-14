import React from 'react'
import Menu from './menu'
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends React.Component {

  state = {
    menu: 'menu-closed',
    image: 'image-closed'
  }

  navBar = () => {
    if (this.state.menu === 'menu-closed') {
      this.setState({menu: 'menu-open'});
      this.setState({image: 'image-open'});
    } else if (this.state.menu === 'menu-open') {
      this.setState({menu: 'menu-closed'});
      this.setState({image: 'image-closed'});
    }
  }
  
  render() {
    return (
    <nav className="nav">
    <div data-testid="actual-menu" className={this.state.menu}>
     
    <label htmlFor="home"> 
        <Link data-testid="home" onClick={this.navBar} to='/'>Home</Link>
      </label>
      <label htmlFor="all-events">
        <Link data-testid="all-events" onClick={this.navBar} to='/categories'>All Events</Link>
      </label>
      <label htmlFor="create-event">
        <Link data-testid="create-event" onClick={this.navBar} to='/create-event'>Create Event</Link>
      </label>
      <label htmlFor="categories">
        <Link data-testid="categories" onClick={this.navBar} to='/categories'>Categories</Link>
      </label>
      <label htmlFor="about">
        <Link data-testid="about" onClick={this.navBar} to='/about'>About</Link>
      </label>
      <label htmlFor="brickworks">
        <Link data-testid="brickworks" onClick={this.navBar} to='/brickworks'>Brickworks</Link>
      </label>
      <label htmlFor="faq">
        <Link data-testid="faq" onClick={this.navBar} to='/faq'>FAQ</Link>
      </label>
      <label htmlFor="recent-projects">
        <Link data-testid="recent-projects" onClick={this.navBar} to='/recent-projects'>Recent Projects</Link>
      </label>
    </div>
    <Menu data-testid="menu" className={this.state.image} onClick={this.navBar}/>
    {/* <img className={this.state.image} onClick={this.navBar} src={ menuImg }/> */}
  </nav>
  )}
}

export default Nav;
