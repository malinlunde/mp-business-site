import React from 'react';
import './Header.css';
import logotyp from "../icons/logotyp.png";



export const Header = () => {
  return (
    <section className='header'>
      <div className='headerbox'>
        {/*Mobile View */}
        <img src={logotyp} alt='' className='logotyp'/>
        <h1 className='h1intro'>Mark- och anläggning</h1>
      </div>

        {/* Desktop View */}

      <div className='headerbox-desktop'>
        <img src={logotyp} alt='' className='logotyp'/>
        <h1 className='h1intro'>Anläggning och markarbeten</h1>
        </div>    
    </section>
  );
};
