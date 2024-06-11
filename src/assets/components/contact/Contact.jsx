import React from 'react'
import './contact.css';


  
export const Contact = () => {
  return (
    <section className='contact-on-main'>
      <div className='h2'>
        <h2>Kontakt</h2>
      </div>
        <div className='details'>
          <p className='contact-detail'>Kundansvarig: Tommie Magnusson</p>
          <p className='contact-detail'>Telefon: +46 (0) 707575067</p>
          <p className='contact-detail'>E-post: info.mpkab@gmail.com</p>
        </div>
    </section>
  );
};

export default Contact;

