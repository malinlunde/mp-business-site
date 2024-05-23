import React from 'react';
import './body.css';
import { Intro } from '../components/intro/Intro';
import { ProjectPlating } from './projects/ProjectPlating';
import { ProjectWalling} from './projects/ProjectWalling';
import { ProjectFoundation } from './projects/ProjectFoundation';
import { Contact } from "../components/contact/Contact";
import { Footer } from './footer/Footer';


export const Body = () => {
  return (
    <div className="big-wrapper">
      <Intro />
      <section id="plattlaggning">
        <ProjectPlating />
      </section>
      <section id="murar">
        <ProjectWalling />
      </section>
      <section id="husgrunder">
        <ProjectFoundation />
      </section>
      <section id="kontakt">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Body;
