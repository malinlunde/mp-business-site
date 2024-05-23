import React, { useState } from 'react';
import './project.css';
import leftarrow from '../icons/arrowback.png';
import rightarrow from '../icons/arrowforward.png';
import plattor from '../images/plattor/plattor.jpeg';
import plattor1 from '../images/plattor/plattor1.jpeg';
import plattor2 from '../images/plattor/plattor2.jpeg';
import plattor3 from '../images/plattor/plattor3.jpeg';
import plattor4 from '../images/plattor/plattor4.jpeg';
import plattor5 from '../images/plattor/plattor5.jpeg';
import plattor6 from '../images/plattor/plattor6.jpeg';
import plattor7 from '../images/plattor/plattor7.jpeg';
import plattor8 from '../images/plattor/plattor8.jpeg';
import plattor9 from '../images/plattor/plattor9.jpeg';
import plattor10 from '../images/plattor/plattor10.jpeg';
import plattor11 from '../images/plattor/plattor11.jpeg';
import plattor12 from '../images/plattor/plattor12.jpeg';
import plattor13 from '../images/plattor/plattor13.jpeg';
import plattor14 from '../images/plattor/plattor14.jpeg';
import plattor15 from '../images/plattor/plattor15.jpeg';
import plattor16 from '../images/plattor/plattor16.jpeg';
import plattor17 from '../images/plattor/plattor17.jpeg';
import plattor18 from '../images/plattor/plattor18.jpeg';
import plattor19 from '../images/plattor/plattor19.jpeg';

export const ProjectPlating = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
    {
        id: 1, 
        images: [
            plattor,
            plattor1,
        ],
    },
    {
        id: 2, 
        images: [
            plattor2,
            plattor3,
        ],
    },
    {
        id: 3, 
        images: [
            plattor4,
            plattor5,
        ],
    },
    {
        id: 4, 
        images: [
            plattor6,
            plattor7,
        ],
    },
    {
        id: 5, 
        images: [
            plattor8,
            plattor9,
        ],
    },
    {
        id: 6, 
        images: [
            plattor10,
            plattor11,
        ],
    },
    {
        id: 7, 
        images: [
            plattor12,
            plattor13,
        ],
    },
    {
        id: 8, 
        images: [
            plattor14,
            plattor15,
        ],
    },
    {
        id: 9, 
        images: [
            plattor16, 
            plattor17,
        ],
    },
    {
        id: 10, 
        images: [
            plattor18, 
            plattor19,
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
            <h3>Plattläggning</h3>
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

export default ProjectPlating;