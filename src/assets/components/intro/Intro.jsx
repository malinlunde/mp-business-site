import React from 'react';
import './intro.css';
import introimage from '../images/introimage.png';

export const Intro = () => {
    return (
      <section className='intro-container'>
       <div className='intro'>
        <div className='text-box'>
         <div className='h2'>
           <h2>Din lokala markentreprenad i Sörmland</h2>
         </div>
         <div className='ptext'>
          <p>Välkommen till M&P – det lilla företaget med den stora kompetensen inom mark och anläggning. Vi är specialiserade på att skapa hållbara och vackra utomhusmiljöer för både företag och privatpersoner. Från plattläggningar och murar till husgrunder och trädgårdsanläggningar, vi hanterar alla typer av projekt med precision och professionalism.</p>
          <p>Bläddra gärna bland våra referensbilder för att se exempel på vårt arbete och låt dig inspireras till ditt nästa projekt. Men vi erbjuder inte bara konstruktion – vår service sträcker sig även till skötsel och underhåll. Behöver du hjälp med snöröjning eller sandupptagning? Vi är här för att göra din vardag enklare.</p>
          <p>M&P arbetar både självständigt och i samarbete med andra företag för att leverera större entreprenader. Vårt fokus ligger alltid på kvalitet och kundnöjdhet, oavsett projektets storlek.</p>
          <p>Kontakta oss idag för offertförfrågningar och låt oss tillsammans skapa något extraordinärt för din utomhusmiljö.</p>
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