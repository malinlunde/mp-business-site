import React, { useState } from 'react';
import './Header.css';
import logotyp from "../images/LogoMP.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='header'>
      <div className='headerbox'>
        <img src={logotyp} alt='Logo' className='logotyp' />
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className='nav-link' onClick={() => setIsOpen(false)}>Hem</Link>
            </li>
            <li>
              <Link to="/plattlaggning" className='nav-link' onClick={() => setIsOpen(false)}>Plattläggning</Link>
            </li>
            <li>
              <Link to="/murar" className='nav-link' onClick={() => setIsOpen(false)}>Murar</Link>
            </li>
            <li>
              <Link to="/husgrunder" className='nav-link' onClick={() => setIsOpen(false)}>Husgrunder/Anläggning</Link>
            </li>
            <li>
              <Link to="/kontakt" className='nav-link' onClick={() => setIsOpen(false)}>Kontakta oss</Link>
            </li>
            <li>
              <Link to="/omoss" className='nav-link' onClick={() => setIsOpen(false)}>Vi på M&P</Link>
            </li>
          </ul>
        </nav>
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </section>
  );
};

export default Header;