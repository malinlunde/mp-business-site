import React from 'react';
import './body.css';
import { Header } from './header/Header';
import { Projects } from './projects/Projects';
import { Skills } from './skills/Skills';
import { Contact } from './contact/Contact';

export const Body = () => {
  return (
    <div className="big-wrapper">
        <Header />
        <Projects />
        <Skills />
        <Contact />
    </div>
  );
};
