import React from 'react';
import './Header.css';
import jagImage from '../images/jag.jpg';
import Arrow from "../icons/Arrow.png"



export const Header = () => {
  return (
    <section className='intro'>
      <div className='introbox'>
        {/*Mobile View */}
        <div className='profile-container'>
          <img src={jagImage} alt='' className='profile-image'/>
        </div>
        <div className='headings'>
          <h3 className='h3intro'>Hi, I'm Malin Lunde</h3>
          <h1 className='h1intro'>Frontend Developer</h1>
        </div>
        <p className='pintro'>Malin, a trained Frontend Developer, seamlessly combines her administrative background with coding expertise. Experienced in system implementation and with a knack for backend coding, she excels in well-structured, collaborative environments. Service-minded and quick to adapt, Malin brings a unique blend of technical skill and organizational finesse to every project.</p>
        </div>
        {/* Desktop View */}

      <div className='introbox-desktop'>
        <div className='headings'>
          <h3 className='h3intro'>Hi, I'm Malin Lunde</h3>
          <h1 className='h1intro'>Frontend Developer</h1>
        </div>
          <img src={jagImage} alt='' className='profile-image'/>
          <p className='pintro'>Malin, a trained Frontend Developer, seamlessly combines her administrative background with coding expertise. Experienced in system implementation and with a knack for backend coding, she excels in well-structured, collaborative environments. Service-minded and quick to adapt, Malin brings a unique blend of technical skill and organizational finesse to every project.</p>        
      </div>
      <div className='arrow'>
        <a href="#Tech">
          <img src={Arrow} alt='Arrow' className='arrow-image' />
        </a>
      </div>
    </section>
  );
};
