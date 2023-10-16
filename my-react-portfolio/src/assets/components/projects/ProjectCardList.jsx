import React, { useState, useEffect } from 'react';
import './project.css';
import liveDemoButton from "../icons/liveDemoButton.png";
import viewCode from "../icons/viewCode.png";
import happy from "../images/happy.png";
import guess from "../images/guess.png";
import travel from "../images/travel.png";
import weather from "../images/weather.png";
import survey from "../images/survey.png";
import pizza from "../images/pizza.png";
import music from "../images/music.png";


export const ProjectCardList = () => {
  const [repos, setRepos] = useState([]);
  const projectsList = [
    'project-happy-thoughts-vite',
    'project-survey-vite',
    'project-music-releases-vite',
    'project-weather-app',
    'project-guess-who',
    'project-pizza',
    'project-business-site',
  ];

  const projectInfo = {
    'project-happy-thoughts-vite': {
      name: 'Project-Happy-Thoughts-Vite',
      description: 'Like a positive Twitter',
      techniques: 'React, API, Javascript',
    },
    'project-survey-vite': {
      name: 'Project-Survey-Vite',
      description: 'A React project to create a customizable survey form. ',
      techniques: 'Pair-programming, React',
    },
    'project-music-releases-vite': {
      name: 'Projects-Music-Releases-Vite',
      description: 'A site showing new albums and singles releases',
      techniques: 'React, Spotify API, CSS',
    },
    'project-weather-app': {
      name: 'Project-Weather-App',
      description: 'An app with the current weather data',
      techniques: 'HTML5, CSS3, React, OpenWeather API, pair-programming, Node',
    },
    'project-guess-who': {
      name: 'Project-Guess-Who',
      description: 'A game where you filter characters to find the hidden person',
      techniques: 'HTML5, CSS3, React, Javascript, Node',
    },
    'project-pizza': {
      name: 'Project-Pizza',
      description: 'Order a meal from this Javascript Pizzeria',
      techniques: 'HTML5, CSS, Javascript',
    },
    'project-business-site': {
      name: 'Project-Business-Site',
      description: 'A simple web page where you can have travel guides',
      techniques: 'HTML5, CSS, ,'
    },
  };
  
  const netlifyURLs = {
    'project-happy-thoughts-vite': 'https://happy-thoughts-malin-lunde.netlify.app',
    'project-survey-vite': 'https://project-survey-vite.netlify.app',
    'project-music-releases-vite': 'https://malin-lunde-project-music-releases.netlify.app',
    'project-weather-app': 'https://malin-weather-app-teamwork.netlify.app',
    'project-guess-who': 'https://malin-guess-who.netlify.app',
    'project-pizza': 'https://malins-pizza-project.netlify.app',
    'project-business-site': 'https://team-work-business-site.netlify.app',
  };

  const githubURLs = {
    'project-happy-thoughts-vite': 'https://github.com/malinlunde/project-happy-thoughts-vite',
    'project-survey-vite': 'https://github.com/malinlunde/project-survey-vite',
    'project-music-releases-vite': 'https://github.com/malinlunde/project-music-releases-vite',
    'project-weather-app': 'https://github.com/malinlunde/project-weather-app',
    'project-guess-who': 'https://github.com/malinlunde/project-guess-who',
    'project-pizza': 'https://github.com/malinlunde/project-pizza',
    'project-business-site': 'https://github.com/malinlunde/project-business-site',
  }
  
  const imageForProject = {
    'project-happy-thoughts-vite': happy,
    'project-survey-vite': survey,
    'project-music-releases-vite': music,
    'project-weather-app': weather,
    'project-guess-who': guess,
    'project-pizza': pizza,
    'project-business-site': travel,
  
  };
  
  return (
    <section className='my-projects'>
      <div className='list'>
        {projectsList.map((project, index) => (
          <div key={index} className='project-card'>
            <img src={imageForProject[project]} className='projectimage' alt='' />
            <h2 className='h2projectcard'>{projectInfo[project].name}</h2>
            <p className='pprojectcard'>{projectInfo[project].description}</p>
            <p className='ptags'>{projectInfo[project].techniques}</p>
            <a href={netlifyURLs[project]} className='viewbutton' target='_blank' rel='noopener noreferrer'>
              <img src={liveDemoButton} alt='Live Demo' />
           </a>
            <a href={githubURLs[project]} className='viewbutton' target='_blank' rel='noopener noreferrer'>
              <img src={viewCode} alt='View Code' />
            </a>
          </div>
        ))}
      </div>
     
    </section>
  );
};
export default ProjectCardList;