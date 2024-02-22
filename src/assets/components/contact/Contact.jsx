import React from 'react'
import linkedin from '../icons/linkedin.svg';
import github from '../icons/github.svg';
import logotyp from '../icons/logotyp.png';
import './contact.css';

  

export const Contact = () => {
  const githubLink = 'https://github.com/malinlunde';
  const linkedinLink = 'https://www.linkedin.com/in/malin-lunde-9a4558297/';

  return (
    <section className='contact'>
      <h2 className="h2contact">Kontakt</h2>
      <img src={logotyp} alt='' className='logotyp'/>
      <p className='contact-name'>Tommie Magnusson</p>
      <p className='contact-number'>Telefonnummer</p>
      <p className='contact-mail'>mejladress</p>
      <div className='icons-wrapper'>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='LinkedIn' className='linkedin-button' />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreffer">
          <img src={github} alt='Github' className='github-button' />
        </a>
      </div>
    </section>
  )
};

export default Contact;