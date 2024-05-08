import React, { useState } from 'react';
import './Header.css';
import logotyp from "../images/LogoMP.png";
import menuIcon from "../icons/menu.jpg";
import { Link } from "react-router-dom";



export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className='header'>
      <div className='headerbox'>
          <img src={logotyp} alt='Logo' className='logotyp'/>
        <h1 className='h1intro'>Din lokala markentreprenad i Sörmland</h1>
        
        {/* Menu icon for mobile */}
        <img 
        src={menuIcon} 
        alt="Menu" 
        className='menu-icon'
        onClick={toggleMenu} 
        />
         {/* Navigation links */}
         <nav className={`nav-links ${showMenu ? 'visible' : ''}`}>
        <ul>
          <li>
            <Link to="/contact" className='nav-link' onClick={toggleMenu}>Kontakta oss</Link>
          </li>
          <li>
            <Link to="/about" className='nav-link' onClick={toggleMenu}>Vi på M&P</Link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  );
};
