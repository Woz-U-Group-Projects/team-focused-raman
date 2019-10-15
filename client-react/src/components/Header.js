import React from 'react';
import logo from '../img/logo.png';
import '../App.css';

// TESTING COMMIT TO DEREK BRANCH 2 //

function Header() {
  return (
    <div className="header">
        <div className="logoStrip">
            <img src={logo} alt="logo" className="logoSmall"/><span className="words"><span className="greenBoy"><span className="cutWords">CUT</span><span className="ampersand">&</span><span className="trimWords">TRIM</span></span></span>
        </div>
    </div>
  );
}

export default Header;
