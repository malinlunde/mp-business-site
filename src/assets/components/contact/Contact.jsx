import React from 'react'
import logotyp from '../images/LogoMP.png';
import './contact.css';
import { Link } from 'react-router-dom';

  
export const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact-box'>
        <div className='contact-info'>
          <p>Kontakta M&P idag för att diskutera hur vi kan hjälpa dig med ditt nästa projekt. Vi finns här för att svara på dina frågor och ge detaljerad information om våra tjänster.</p>
          <p className='contact-detail'>Kontakta kundansvarig Tommie Magnusson</p>
          <p className='contact-detail'>Telefonnummer: 0707575067</p>
          <p className='contact-detail'>E-post: info.mpkab@gmail.com eller tommie.mpkab@gmail.com</p>
        </div>
        <div className='button'>
        <Link to="/" className="home-button">
          &#8592; Hem
        </Link>
      </div>
      </div>
    </section>
  );
};

export default Contact;

