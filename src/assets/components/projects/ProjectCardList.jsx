import React, { useState, useEffect } from 'react';
import './project.css';
import projectpicture from "../images/projectpicture.jpg";



export const ProjectCardList = () => {
  const [object, setObject] = useState([]);
  const projectsList = [
    'pro1',
    'pro2',
    'pro3',
    'pro4',
    'pro5',
    'pro6',
  ];

  const projectInfo = {
    'pro1': {
      name: 'Name of project',
      description: 'Description about the object',
    },
    'pro2': {
      name: 'Name of project',
      description: 'Description about the object',
    },
    'pro3': {
      name: 'Name of project',
      description: 'Description about the object',
    },
    'pro4': {
      name: 'Name of project',
      description: 'Description about the object',
    },
    'pro5': {
      name: 'Name of project',
      description: 'Description about the object',
    },
    'pro6': {
      name: 'Name of project',
      description: 'Description about the object',
    },
  };
  

  const imageForProject = {
    'pro1': projectpicture,
    'pro2': projectpicture,
    'pro3': projectpicture, 
    'pro4': projectpicture,
    'pro5': projectpicture,
    'pro6': projectpicture,
  };
  
  return (
    <section className='my-projects'>
      <div className='list'>
        {projectsList.map((project, index) => (
          <div key={index} className='project-card'>
            <img src={imageForProject[project]} className='projectimage' alt='' />
            <div className='project-text-container'>
              <h2 className='h2projectcard'>{projectInfo[project].name}</h2>
              <p className='pprojectcard'>{projectInfo[project].description}</p>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};
export default ProjectCardList;