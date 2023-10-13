import React from 'react';
import './body.css';
import { Header } from './header/Header';
import { Tech } from './tech/Tech';
import { Projects } from './projects/Project';
import { Skills } from './skills/Skills';
import { Contact } from './contact/Contact';
import { Article } from './article/Article';


export const body = () => {
  return (
    <div className="big-wrapper">
        <Header />
        <Tech />
        <Projects />
        <Article />
        <Skills />
        <Contact />
    </div>
  );
};
