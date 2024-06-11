import React from 'react';
import './intro.css';
import introimage from '../images/introimage.png';

export const Intro = () => {
    return (
      <section className='intro-container'>
       <div className='intro'>
        <div className='text-box'>
         <div className='h2-text'>
           <h2>Din lokala markentreprenad i Sörmland</h2>
         </div>
         <div className='ptext'>
          <p>Välkommen till M&P - det lilla företaget med den stora kompetensen inom mark och anläggning. Vi har goda erfarenheter av marksten så som plattläggningar och erbjuder service inom snöröjning och sandupptagning. Se våra referensbilder för inspiration! </p>
          <p>Vi samarbetar med partners för större entreprenader och tar även emot enskilda uppdrag för företag och privatpersoner. Kontakta oss idag för offertförfrågningar och låt oss skapa en fantastisk utomhusmiljö tillsammans!</p>
         </div>
         
        </div>
        <div className='intro-image'>
         <img src={introimage} alt='IntroImage' className='introimage'/>
        </div>
        </div>
      </section>
    );
  };
  
  export default Intro;