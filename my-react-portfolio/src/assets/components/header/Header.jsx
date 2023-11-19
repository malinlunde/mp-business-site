import React from 'react';
import './Header.css';
import jagImage from '../images/jag.jpg';
import Arrow from "../icons/Arrow.png"



export const Header = () => {
  return (
    <section className='intro'>
      <div className='introbox'>
        <h3 className='h3intro'>Hi, I'm Malin Lunde</h3>
        <h1 className='h1intro'>Frontend Developer</h1>
        <div className='profile-container'>
        <img src={jagImage} alt='' className='profile-image'/>
        <p className='pintro'>Malin is ..........</p>
        </div>
        <div className='arrow'>
          <a href="#Tech">
            <img src={Arrow} alt='Arrow' className='arrow-image' />
          </a>
        </div>
        </div>
    </section>
  );
};
