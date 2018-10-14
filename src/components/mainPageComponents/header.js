import React from 'react'
import Menu from './menu'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Nav extends React.Component {

  state = {
    menu: 'menu menu-closed',
    image: 'image image-closed'
  }

  navBar = () => {
    if (this.state.menu === 'menu menu-closed') {
      this.setState({menu: 'menu menu-open'});
      this.setState({image: 'image image-open'});
    } else if (this.state.menu === 'menu menu-open') {
      this.setState({menu: 'menu menu-closed'});
      this.setState({image: 'image image-closed'});
    }
  }
  
  render() {
    return (
    <nav className="nav">
    //     below is arts id for styling
    //  <div id='navDiv' className={this.state.menu}>
    <div data-testid="actual-menu" className={this.state.menu}>
     
    <label htmlFor="home"> 
        <Link data-testid="home" onClick={this.navBar} to='/'>Home</Link>
      </label>
      <label htmlFor="all-events">
        <Link data-testid="all-events" onClick={this.navBar} to='/all-events'>Social Action in Your Community</Link>
      </label>
      <label htmlFor="form">
        <Link data-testid="form" onClick={this.navBar} to='/topten'>Start a Social Action</Link>
      </label>
      <label htmlFor="about">
        <Link data-testid="about" onClick={this.navBar} to='/about'>About</Link>
      </label>
      <label htmlFor="faq">
        <Link data-testid="faq" onClick={this.navBar} to='/faq'>FAQs</Link>
      </label>
      <label htmlFor="recent-projects">
        <Link data-testid="recent-projects" onClick={this.navBar} to='/inspirations'>Local Inspirational Stories</Link>
      </label>
      <label htmlFor="resources">
        <Link data-testid="resources" onClick={this.navBar} to='/resources'>Resources & Tips</Link>
      </label>
    </div>
    {/* <Menu data-testid="menu" className={this.state.image} onClick={this.navBar}/> */}

    <div data-testid="menu" className={this.state.image} onClick={this.navBar}><span></span></div>
    {/* <img className={this.state.image} onClick={this.navBar} src={ menuImg }/> */}
  </nav>
  )}
}

export default Nav;
