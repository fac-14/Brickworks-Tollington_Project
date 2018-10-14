import React from 'react'
import menuImg from '../../../public/images/menu.svg';
import '../../../public/style.css';
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
    <div id='navDiv' className={this.state.menu}>
      <Link to='/'>Home</Link>
      <Link to='/categories'>Social Actions</Link>
      <Link to='/create-event'>Create Event</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/eventsByTheme'>Events By Theme</Link>
      <Link to='/FAQ'>FAQs</Link>
      <Link to='/inspirations'>Inspirational Stories</Link>
      <Link to='./displayEvents'> display Events </Link>
    </div>
    <img className={this.state.image} onClick={this.navBar} src={ menuImg }/>
  </nav>
  )}
}

export default Nav;
