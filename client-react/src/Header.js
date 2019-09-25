import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import './App.css';

function Header() {
  return (
    <div className="header">
        <div className="logoStrip">
            <img src={logo} className="logoSmall"/><span className="words"><span className="greenBoy"><span className="cutWords">CUT</span><span className="ampersand">&</span><span className="trimWords">TRIM</span><span className="slasher">//</span></span>&nbsp;<span className="crmWords">CRM</span></span>
        </div>
        <div className="navBar">
          
            <Link className="navLink" to="/orders">Orders</Link>
            <Link className="navLink" to="/customers">Customer Rates</Link>
            <Link className="navLink" to="/new-order">New Order</Link>
            <Link className="navLink" to="/new-customer">New Customer</Link>
            <Link className="navLink2" to="/logout">Log Out</Link>            
          
        </div>
    </div>
  );
}

export default Header;
