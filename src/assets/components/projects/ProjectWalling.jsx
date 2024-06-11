import React, { useState } from 'react';
import './project.css';
import leftarrow from '../icons/arrowback.png';
import rightarrow from '../icons/arrowforward.png';
import murar from '../images/murar/murar.jpeg';
import murar1 from '../images/murar/murar1.jpeg';
import murar2 from '../images/murar/murar2.jpeg';
import murar3 from '../images/murar/murar3.jpeg';
import murar4 from '../images/murar/murar4.jpeg';
import murar5 from '../images/murar/murar5.jpeg';
import murar6 from '../images/murar/murar6.jpeg';
import murar7 from '../images/murar/murar7.jpeg';
import murar8 from '../images/murar/murar8.jpeg';
import murar9 from '../images/murar/murar9.jpeg';

export const ProjectWalling = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
        {
            id: 1,
            images: [murar, murar1],
        },
        {
            id: 2,
            images: [murar2, murar3],
        },
        {
            id: 3,
            images: [murar4, murar5],
        },
        {
            id: 4,
            images: [murar6, murar7],
        },
        {
            id: 5,
            images: [murar8, murar9],
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
            <div className="h3">
                <h3>Murar</h3>
            </div>
            <div className='mobile-setup'>
                <div className="project-image">
                    <img src={projects[currentProjectIndex].images[0]} alt={projects[currentProjectIndex].title} />
                    <img src={projects[currentProjectIndex].images[1]} alt={projects[currentProjectIndex].title} />
                </div>
                <div className='buttons'>
                    <button className="prev-button" onClick={prevProject}>
                        <img src={leftarrow} alt="Previous" className="left-arrow-img" />
                    </button>
                    <button className="next-button" onClick={nextProject}>
                        <img src={rightarrow} alt="Next" className="right-arrow-img" />
                    </button>
                </div>
            </div>
            <div className='tablet-setup'>
                    <button className="prev-button" onClick={prevProject}>
                        <img src={leftarrow} alt="Previous" className="left-arrow-img" />
                    </button>
                    <div className="project-image">
                        <img src={projects[currentProjectIndex].images[0]} alt={projects[currentProjectIndex].title} />
                        <img src={projects[currentProjectIndex].images[1]} alt={projects[currentProjectIndex].title} />
                    </div>
                    <button className="next-button" onClick={nextProject}>
                        <img src={rightarrow} alt="Next" className="right-arrow-img" />
                    </button>
            </div>
        </section>
    );
};

export default ProjectWalling;