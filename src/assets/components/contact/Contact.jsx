import React from 'react'
import './contact.css';


  
export const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact-info'>
        <p>Kontakta M&P idag för att diskutera hur vi kan hjälpa dig med ditt nästa projekt. Vi finns här för att svara på dina frågor och ge detaljerad information om våra tjänster.</p>
        <div className='details'>
          <p className='contact-detail'>Kundansvarig: Tommie Magnusson</p>
          <p className='contact-detail'>Telefonnummer: 0707575067</p>
          <p className='contact-detail'>E-post: info.mpkab@gmail.com eller tommie.mpkab@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

