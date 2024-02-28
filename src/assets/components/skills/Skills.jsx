import React, { useState } from 'react';
import './skills.css';
import Arrow from '../images/arrow.svg';


export const Skills = () => {
  const [skillsList] = useState([
    'Plattläggning',
    'Murar',
    'XXXXX',
    'XXXXX',
    'XXXXX',
  ]);

  const tools = [
   'Snöröjning',
   'Sandupptagning',
   'Sopning',
   'XXXXX',
   'XXXXX',
  ];

  const more = [
    'Schaktning',
    'Dränering',
    'XXXXX',
    'XXXXX',
    'XXXXX',
  ]

  return (
    <section className='skills-container'>
     <div className='skills'>
     <h1 className='h1skills'>Arbetsområden</h1>
     <div className='skills-columns'>
      <div className='skills-column'>
      <h3 className='h3skills'>Anläggning</h3>
      <ul>
        {skillsList.map((item, index) => (
          <li key={index} className='skills-item'>
            {item}
          </li>
        ))}
      </ul>
      </div>

      <div className='skills-column'>
        <h3 className='h3tools'>Service- och skötsel</h3>
        <ul>
          {tools.map((item, index) => (
            <li key={index} className='skills-item'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='skills-column'>
        <h3 className='h3more'>Grova entreprenader</h3>
        <ul>
          {more.map((item, index) => (
            <li key={index} className='skills-item'>
              {item}
            </li>
          ))}  
        </ul>
      </div>

     </div>
     <div className='arrow'>
      <img src={Arrow} alt='Arrow' className='Arrow' />
     </div>
     </div>
    </section>
    
  );
};
