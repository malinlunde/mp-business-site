import React from 'react';
import './body.css';
import { Header } from './header/Header';
import { Projects } from './projects/Projects';
import { Skills } from './skills/Skills';
import { Footer } from './footer/Footer';

export const Body = () => {
  return (
    <div className="big-wrapper">
        <Header />
        <Skills />
        <Projects />
        <Footer />
    </div>
  );
};
