// import React from 'react'
// export default function Navbar() {
//   return (
//     <div>

//     </div>
    
//   )
// }

import React, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="/brand_logo.png" alt="" />
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><a href="#">MENU</a></li>
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
          <button className="login">Login</button>    
    <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

