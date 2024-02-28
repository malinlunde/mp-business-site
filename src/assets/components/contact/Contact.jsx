import React from 'react'
import logotyp from '../icons/logotyp.png';
import './contact.css';
import { Link } from 'react-router-dom';

  

export const Contact = () => {
  return (
    <section className='contact'>
      <div>
        <h2 className="h2contact">Kontakt</h2>
        <img src={logotyp} alt='' className='logotyp'/>
        <p className='contact-name'>Namn</p>
        <p className='contact-number'>Telefonnummer</p>
        <p className='contact-mail'>Mejladress</p>
      </div>
      <div className='button'>
        <Link to="/" className="home-button">
        &#8592; Hem
        </Link>
      </div>
    </section>
  )
};

export default Contact;