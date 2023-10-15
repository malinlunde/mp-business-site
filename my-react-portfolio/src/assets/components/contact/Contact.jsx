import React from 'react'
import linkedin from '../icons/linkedin.svg';
import github from '../icons/github.svg';
import jagImage from '../images/jag.jpg';
import './contact.css';

  

export const Contact = () => {
  const githubLink = 'https://github.com/malinlunde'

  return (
    <section className='contact'>
      <h2 className="h2contact">Let's talk</h2>
      <img src={jagImage} alt='' className='profile-image'/>
      <p className='contact-name'>Malin Lundhe</p>
      <p className='contact-number'>+46(0)734 33 97 18</p>
      <p className='contact-mail'>malinlundhe@hotmail.com</p>
      <div className='scroll-text'>
        Malin Lundhe · Fullstack Developer · Malin Lundhe · Fullstack Developer · Malin Lundhe · Fullstack Developer ·
      </div>
     
    </section>
  )
};

export default Contact;