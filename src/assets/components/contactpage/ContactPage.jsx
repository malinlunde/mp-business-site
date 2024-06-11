import React from 'react'
import { Link } from 'react-router-dom';
import './contactPage.css';
  
export const ContactPage = () => {
  return (
    <div className='about-us'>
     <section className='company-info'>
      <h1 className='h1company'>M&P i Katrineholm AB</h1>
        <p className='pcompany'>
        Välkommen till M&P – din pålitliga partner för service och entreprenad sedan 2019! Tommie Magnusson och Håkan Persson grundade M&P med en vision om att erbjuda högkvalitativa tjänster inom schaktning, grävning, markanläggning, plattsättning, sandupptagning och mer.

Vi är stolta över vårt erfarna femmannateam som brinner för att överträffa kundförväntningar. M&P, ett aktiebolag med bas i Katrineholm, fokuserar på att skapa långsiktiga relationer genom att förstå och uppfylla våra kunders unika behov. Oavsett om det är små reparationer eller större projekt, kan du lita på oss för pålitliga och effektiva lösningar. Tack för att du väljer M&P – där kvalitet och pålitlighet står i fokus!
        </p>
     </section>
     <section className='staff'>
        <div className='contact'>
          <p className='contact-detail'>Kundansvarig: Tommie Magnusson</p>
          <p className='contact-detail'>Telefon: +46 (0) 707575067</p>
          <p className='contact-detail'>E-post: info.mpkab@gmail.com</p>
        </div>
        <div>
        <Link to="/" className="home-button">
          &#8592; Hem
        </Link>
        </div>
     </section>
    </div>
  );
};
export default ContactPage;