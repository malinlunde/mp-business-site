import React from 'react';
import './Header.css';
import jagImage from '../images/jag.jpg';



export const Header = () => {
  return (
    <section className='intro'>
      <h3 className='h3intro'>Hi, I'm Malin Lundhe</h3>
      <h1 className='h1intro'>Frontend Developer</h1>
      <img src={jagImage} alt='' className='profile-image'/>
      <p className='pintro'>Malin is ..........</p>
    </section>
  );
};
