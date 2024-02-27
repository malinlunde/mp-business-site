import React from 'react'
import logotyp from '../icons/logotyp.png';
import './contact.css';

  

export const Contact = () => {
  return (
    <div>
      <h2 className="h2contact">Kontakt</h2>
      <img src={logotyp} alt='' className='logotyp'/>
      <p className='contact-name'>Namn</p>
      <p className='contact-number'>Telefonnummer</p>
      <p className='contact-mail'>Mejladress</p>
    </div>
  )
};

export default Contact;