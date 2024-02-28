import React, { useState } from 'react';
import './partners.css';
import maskinring from "../images/maskinring.png";
import tech from "../images/tech.png";

export const Partners = () => {
  
    return (
        <div className='partners'>
         <h1>Vi samarbetar med</h1>
             <a href="https://www.mrsverige.se/mrsormland" target="_blank" rel="noopener noreferrer">
                <img src={maskinring} alt='' className='maskinring'/>
             </a>
        </div>
    );
  };
  
  export default Partners;