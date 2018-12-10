import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends React.Component {

  state = {
    menuOpen: false,
    
  }

toggleMenu = () => {
    const icon= document.getElementById('icon');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.nav-link');
    this.setState((prevState) => ({
        menuOpen: !prevState.menuOpen
    }))
    if (menu.className === 'menu menu-closed') {
      icon.className='image image-open';
      menu.className='menu menu-open';
      menu.setAttribute("aria-hidden", "false");
      icon.setAttribute("aria-expanded", "true");
      menu.firstElementChild.focus();
      menuLinks.forEach(el => {
        el.setAttribute('tabindex',0);
      })
    } else if (menu.className === 'menu menu-open') {
      icon.className='image image-closed';
      menu.className='menu menu-closed';
      menu.setAttribute("aria-hidden", "true");
      icon.setAttribute("aria-expanded", "false");
      menu.focus();
    }
}
  
  render() {
    return (
    <header id="menu-wrapper">
      <nav id="menu" aria-hidden="true" data-testid="actual-menu" className="menu menu-closed">
        <label className='' htmlFor="home"> 
          <Link className='nav-link' 
                tabIndex='-1' 
                data-testid="home" 
                onClick={this.toggleMenu} 
                to='/'>Home</Link>
        </label>
        <label htmlFor="social-actions">
          <Link className='nav-link' 
                tabIndex='-1' 
                data-testid="social-actions" 
                onClick={this.toggleMenu} 
                to='/social-actions'>Social Actions</Link>
        </label>
        <label htmlFor="form">
          <Link className='nav-link' 
                tabIndex='-1' 
                data-testid="form" 
                onClick={this.toggleMenu} 
                to='/topten'>Start a Social Action</Link>
        </label>
        <label htmlFor="projects">
          <Link className='nav-link' 
                tabIndex='-1' 
                data-testid="projects-page" 
                onClick={this.toggleMenu} 
                to='/projects'>Projects</Link>
        </label>
        <label htmlFor="faq">
          <Link className='nav-link' 
                tabIndex='-1' 
                data-testid="faq" 
                onClick={this.toggleMenu} 
                to='/faq'>FAQ</Link>
        </label>
        <label htmlFor="inspirations">
          <Link className='nav-link' 
                tabIndex='-1' 
                data-testid="inspirations" 
                onClick={this.toggleMenu} 
                to='/inspirations'>Local Inspirational Stories</Link>
        </label>
        <label htmlFor="resources">
          <Link className='nav-link'
                tabIndex='-1' 
                data-testid="resources" 
                onClick={this.toggleMenu} 
                to='/resources'>Resources & Tips</Link>
        </label>
      </nav>
    <div 
      id="icon" 
      data-testid="menu"
      aria-controls="menu"
      aria-haspopup="true" 
      aria-expanded="false"
      className="image image-closed" 
      onClick={this.toggleMenu}>
      <span></span>
    </div>
  </header>
  )}
}

export default Nav;
