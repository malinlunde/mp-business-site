import React from 'react';
import './Header.css';
import logotyp from "../icons/logotyp.png";
import { Link } from "react-router-dom";



export const Header = () => {
  return (
    <section className='header'>
      <div className='headerbox'>
        <Link to="/" className='nav-link'>
          <img src={logotyp} alt='' className='logotyp'/>
        </Link>
        <h1 className='h1intro'>M&P Mark- och anläggning</h1>
        <nav>
          <ul>
            <li>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='nav-link'>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
