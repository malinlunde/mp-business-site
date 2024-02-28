import React from 'react'
import logotyp from '../icons/logotyp.png';
import './contact.css';
import { Link } from 'react-router-dom';

  
export const Contact = () => {
  return (
    <section className='contact'>
      <div>
        <h2 className="h2contact">Kontakt</h2>
        <img src={logotyp} alt='' className='logotyp' />
        <p>Kontakta M&P idag för att diskutera hur vi kan hjälpa dig med ditt nästa projekt. Vi finns här för att svara på dina frågor och ge detaljerad information om våra tjänster. Tack för att du överväger M&P – där kvalitet och pålitlighet står i fokus!</p>
        <div className='contact-info'>
          <p className='contact-label'>Namn:</p>
          <p className='contact-detail'>John Doe</p>

          <p className='contact-label'>Telefonnummer:</p>
          <p className='contact-detail'>123-456-7890</p>

          <p className='contact-label'>Mejladress:</p>
          <p className='contact-detail'>john.doe@example.com</p>

          {/* Additional contact information placeholders */}
          {/* <p className='contact-label'>Adress:</p>
          <p className='contact-detail'>123 Main St, City</p>

          <p className='contact-label'>Social Media:</p>
          <p className='contact-detail'>@john.doe</p> */}
        </div>
      </div>
      <div className='button'>
        <Link to="/" className="home-button">
          &#8592; Hem
        </Link>
      </div>
    </section>
  );
};

export default Contact;

