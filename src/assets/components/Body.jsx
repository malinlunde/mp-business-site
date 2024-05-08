import React from 'react';
import './body.css';
import { ProjectPlating } from './projects/ProjectPlating';
import { ProjectWalling} from './projects/ProjectWalling';
import { ProjectFoundation } from './projects/ProjectFoundation';
import { Footer } from './footer/Footer';


export const Body = () => {
  return (
    <div className="big-wrapper">
        <ProjectPlating />
        <ProjectWalling />
        <ProjectFoundation />
        <Footer />
    </div>
  );
};

export default Body;
