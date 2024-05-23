import React, { useState } from 'react';
import './project.css';
import leftarrow from '../icons/arrowback.png';
import rightarrow from '../icons/arrowforward.png';
import husgrund from '../images/grund/husgrund.jpeg';
import husgrund1 from '../images/grund/husgrund1.jpeg';
import husgrund2 from '../images/grund/husgrund2.jpeg';
import husgrund3 from '../images/grund/husgrund3.jpeg';
import grund4 from '../images/grund/grund4.jpeg';
import grund5 from '../images/grund/grund5.jpeg';
import grund6 from '../images/grund/grund6.jpeg';
import grund7 from '../images/grund/grund7.jpeg';

export const ProjectFoundation = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
    {
        id: 1, 
        images: [
            husgrund,
            husgrund1,
        ],
    },
    {
        id: 2, 
        images: [
           husgrund2,
           husgrund3,
        ],
    },
    {
        id: 3, 
        images: [
           grund4,
           grund5,
        ],
    },
    {
        id: 4, 
        images: [
           grund6,
           grund7,
        ],
    },
];

    const nextProject = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section className="carousell">
        <div className='h3'>
            <h3>Anläggning och markentreprenad</h3>
        </div>
        <div className="header-row">
            <button className="prev-button" onClick={prevProject}>
                <img src={leftarrow} alt="Previous" className='left-arrow-img'/>
            </button>
            <div className="project-image">
                <img src={projects[currentProjectIndex].images[0]} alt={projects[currentProjectIndex].title} />  
                <img src={projects[currentProjectIndex].images[1]} alt={projects[currentProjectIndex].title} />  
            </div>
            <button className="next-button" onClick={nextProject}>
                <img src={rightarrow} alt="Next" className='right-arrow-img'/>
            </button>
        
        </div>
    </section>
)
};

export default ProjectFoundation;