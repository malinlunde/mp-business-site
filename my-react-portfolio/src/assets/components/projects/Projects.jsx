import React, { useState, useEffect } from 'react';
import './project.css';
import { projectCardList } from './projectCardList';

export const Projects = () => {
  
  return (
    <section className='projects-container'>
      <section className='projects'>
        <h1 className='h1projects'>Featured Projects</h1>
        <projectCardList />
      </section>
    </section>
   
  )
}
