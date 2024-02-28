import React from 'react'
import { Link } from 'react-router-dom';
import StaffPicture from '../images/staffpicture.jpg';
import './aboutUs.css';

export const AboutUs = () => {
  
  const staffList = [
    'Tommie',
    'Person2',
    'Person3',
    'Person4',
    'Person5',
  ];

  const staffInfo = {
    'Tommie': {
      name: 'Tommie Magnusson',
      description: 'Text om personen',
    },
    'Person2': {
      name: 'Kalle Karlsson',
      description: 'Text om personen',
    },
    'Person3': {
      name: 'Konrad Konradsson',
      description: 'Text om personen',
    },
    'Person4': {
      name: 'Staffan Staffansson',
      description: 'Description about the object',
    },
    'Person5': {
      name: 'Lisa Larsson',
      description: 'Text om personen',
    },
  };
  

  const imageForPerson = {
    'Tommie': StaffPicture,
    'Person2': StaffPicture,
    'Person3': StaffPicture, 
    'Person4': StaffPicture,
    'Person5': StaffPicture,
  };
  
  return (
    <div className='about-us'>
     <section className='company-info'>
      <h1 className='h1company'>M&P i Katrineholm AB</h1>
        <p className='pcompany'>
        Välkommen till M&P – din pålitliga partner för service och entreprenad sedan 2019! Tommie Magnusson grundade M&P med en vision om att erbjuda högkvalitativa tjänster inom schaktning, grävning, markanläggning, plattsättning, sandupptagning och mer.

Vi är stolta över vårt erfarna femmannateam som brinner för att överträffa kundförväntningar. M&P, ett aktiebolag med bas i Katrineholm, fokuserar på att skapa långsiktiga relationer genom att förstå och uppfylla våra kunders unika behov. Oavsett om det är små reparationer eller större projekt, kan du lita på oss för pålitliga och effektiva lösningar. Tack för att du väljer M&P – där kvalitet och pålitlighet står i fokus!
        </p>
     </section>
     <section className='staff'>
        <div className='list'>
          {staffList.map((person, index) => (
            <div key={index} className='staff-card'>
              <img src={imageForPerson[person]} className='staff-image' alt='' />
              <div className='staff-text-container'>
                <h2 className='h2staffcard'>{staffInfo[person].name}</h2>
                <p className='pstaffcard'>{staffInfo[person].description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
        <Link to="/" className="home-button">
          &#8592; Hem
        </Link>
        </div>
     </section>
    </div>
  );
};
export default AboutUs;