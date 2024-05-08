import React from 'react';
import './Header.css';
import logotyp from "../images/LogoMP.png";
import { Link } from "react-router-dom";



export const Header = () => {
  return (
    <section className='header'>
      <div className='headerbox'>
          <img src={logotyp} alt='Logo' className='logotyp'/>
  
         {/* Navigation links */}
         <nav className='nav-links'>
          <ul>
            <li>
              <Link to="/" className='nav-link'>Hem</Link>
            </li>
            <li>
              <Link to="/plattlaggning" className='nav-link'>Plattläggning</Link>
            </li>
            <li>
              <Link to="/murar" className='nav-link'>Murar</Link>
            </li>
            <li>
              <Link to="/husgrunder" className='nav-link'>Husgrunder/Anläggning</Link>
            </li>
            <li>
              <Link to="/kontakt" className='nav-link'>Kontakta oss</Link>
            </li>
            <li>
              <Link to="/omoss" className='nav-link'>Vi på M&P</Link>
            </li>
          </ul>
        </nav>
    </div>
  </section>
  );
};
