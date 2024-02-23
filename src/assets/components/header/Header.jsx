import React from 'react';
import './Header.css';
import logotyp from "../icons/logotyp.png";



export const Header = () => {
  return (
    <section className='header'>
      <div className='headerbox'>
        <img src={logotyp} alt='' className='logotyp'/>
        <h1 className='h1intro'>Mark- och anläggning</h1>
      </div>
    </section>
  );
};
