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
    <div id='menuDiv' className='menu-con-closed'>
    <div id="menu" data-testid="actual-menu" className="menu menu-closed">
      <label className='' htmlFor="home"> 
        <Link className='nav-link' data-testid="home" onClick={this.toggleMenu} to='/'>Home</Link>
      </label>
      <label htmlFor="social-actions">
        <Link className='nav-link' data-testid="social-actions" onClick={this.toggleMenu} to='/social-actions'>Social Actions</Link>
      </label>
      <label htmlFor="form">
        <Link className='nav-link' data-testid="form" onClick={this.toggleMenu} to='/topten'>Start a Social Action</Link>
      </label>
      <label htmlFor="projects">
        <Link className='nav-link' data-testid="projects-page" onClick={this.toggleMenu} to='/projects'>Projects</Link>
      </label>
      <label htmlFor="faq">
        <Link className='nav-link' data-testid="faq" onClick={this.toggleMenu} to='/faq'>FAQ</Link>
      </label>
      <label htmlFor="inspirations">
        <Link className='nav-link' data-testid="inspirations" onClick={this.toggleMenu} to='/inspirations'>Local Inspirational Stories</Link>
      </label>
      <label htmlFor="resources">
        <Link className='nav-link' data-testid="resources" onClick={this.toggleMenu} to='/resources'>Resources & Tips</Link>
      </label>
    </div>
    </div>
    

    <div id="icon" data-testid="menu" className="image image-closed" onClick={this.toggleMenu}><span></span></div>
  </nav>
  )}
}

export default Nav;
