import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends React.Component {

  state = {
    menuOpen: false,
    
  }

toggleMenu = () => {
    const icon= document.getElementById('icon');
    const menu = document.getElementById('menu');
    this.setState((prevState) => ({
        menuOpen: !prevState.menuOpen
    }))
    if (menu.className === 'menu menu-closed') {
      icon.className='image image-open';
      menu.className='menu menu-open';
    } else if (menu.className === 'menu menu-open') {
      icon.className='image image-closed';
      menu.className='menu menu-closed';
    }

}
  
  render() {
    return (
    <nav className="nav">
    {/* <div id='navDiv' className={this.state.menu}> */}
    <div id="menu" data-testid="actual-menu" className="menu menu-closed">
     
    <label htmlFor="home"> 
        <Link data-testid="home" onClick={this.toggleMenu} to='/'>Home</Link>
      </label>
      <label htmlFor="social-actions">
        <Link data-testid="social-actions" onClick={this.toggleMenu} to='/social-actions'>Social Actions</Link>
      </label>
      {/* <label htmlFor="create-event">
        <Link data-testid="create-event" onClick={this.toggleMenu} to='/create-event'>Create Event</Link>
      </label> */}
      <label htmlFor="form">
        {/* <Link data-testid="form" onClick={this.navBar} to='/contactUs'>Start a Social Action</Link> */}
        <Link data-testid="form" onClick={this.toggleMenu} to='/topten'>Start a Social Action</Link>
      </label>
      <label htmlFor="about">
        <Link data-testid="about" onClick={this.toggleMenu} to='/about'>About</Link>
      </label>
      <label htmlFor="faq">
        <Link data-testid="faq" onClick={this.toggleMenu} to='/faq'>FAQ</Link>
      </label>
      <label htmlFor="inspirations">
        <Link data-testid="inspirations" onClick={this.toggleMenu} to='/inspirations'>Local Inspirational Stories</Link>
      </label>
      <label htmlFor="resources">
        <Link data-testid="resources" onClick={this.toggleMenu} to='/resources'>Resources & Tips</Link>
      </label>

    </div>
    

    <div id="icon" data-testid="menu" className="image image-closed" onClick={this.toggleMenu}><span></span></div>
  </nav>
  )}
}

export default Nav;
