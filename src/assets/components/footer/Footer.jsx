import React, { useState } from 'react';
import './footer.css';
import logotyp from '../images/LogoMP.png';
import Branschvinnare from '../images/Branschvinnare.png';

export const Footer = () => {
  
    return (
        <section className='footer'>
            <div className='footer-content'>
                <img src={logotyp} alt='Logo' className='logotyp' />
                <img src={Branschvinnare} alt='Branschvinnare' className='Branschvinnare' />
            </div>
            <div className='CreatedBy'>
                (C) 2024 M&P Skapad av:  <a href="https://thetechadminsphere.com/"> thetechadminsphere</a>
            </div>
        </section>
    );
  };
  
  export default Footer;