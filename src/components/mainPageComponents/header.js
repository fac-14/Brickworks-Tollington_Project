import React from 'react'
import menuImg from '../../../public/images/menu.svg';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => (
  <div>
    <h2>this is header</h2>
    <Link to='/'>Home</Link>
    <Link to='/events'>Events</Link>
    <img className="menuImg" src={ menuImg }/>
  </div>
)

export default Nav;
