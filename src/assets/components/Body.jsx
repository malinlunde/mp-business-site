import React from 'react';
import './body.css';
import { Header } from './header/Header';
import { Tech } from './tech/Tech';
import { Projects } from './projects/Projects';
import { Skills } from './skills/Skills';
import { Contact } from './contact/Contact';
import wave from "./icons/wave.svg";

export const Body = () => {
  return (
    <div className="big-wrapper">
        <Header />
        <Tech />
        <Projects />
        <div className='wave-container'>
          <img src={wave} alt='' className='wave'/> 
        </div>
        <Skills />
        <Contact />
    </div>
  );
};
