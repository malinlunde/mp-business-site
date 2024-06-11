import React, { useState } from 'react';
import './Header.css';
import logotyp from "../images/LogoMP.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className='header'>
    <div className='headerbox'>
      <img src={logotyp} alt='Logo' className='logotyp' />
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" className='nav-link' onClick={() => handleNavigation('/')}>Hem</Link>
          </li>
          <li>
            <span className='nav-link' onClick={() => handleNavigation('/#plattlaggning')}>Plattläggning</span>
          </li>
          <li>
            <span className='nav-link' onClick={() => handleNavigation('/#murar')}>Murar</span>
          </li>
          <li>
            <span className='nav-link' onClick={() => handleNavigation('/#husgrunder')}>Husgrunder/Anläggning</span>
          </li>
          <li>
            <Link to="/omoss" className='nav-link' onClick={() => setIsOpen(false)}>Kontakta oss</Link>
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