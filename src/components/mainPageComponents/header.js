import React from 'react'
import menuImg from '../../../public/images/menu.svg';
import './style.css';

const Nav = () => (
  <div>
    <h2>this is header</h2>
    <a href='/'>Home</a>
    <a href='/events'>Events</a>
    <img className="menuImg" src={ menuImg }/>
  </div>
)

export default Nav;
