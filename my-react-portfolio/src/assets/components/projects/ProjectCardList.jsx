import React, { useState, useEffect } from 'react';
import './project.css';
import liveDemoButton from "../icons/liveDemoButton.png";
import viewCode from "../icons/viewCode.png";
import happy from "../images/happy.png";
import guess from "../images/guess.png";
import travel from "../images/travel.png";
import weather from "../images/weather.png";
import survey from "../images/survey.png";
import music from "../images/music.png";
import movies from "../images/movies.png";
import quiz from "../images/quiz.png";


export const ProjectCardList = () => {
  const [repos, setRepos] = useState([]);
  const projectsList = [
    'project-state-management-quiz-vite',
    'project-happy-thoughts-vite',
    'project-survey-vite',
    'project-music-releases-vite',
    'project-movies-vite',
    'project-weather-app',
    'project-guess-who',
    'project-business-site',
  ];

  const projectInfo = {
    'project-state-management-quiz-vite': {
      name: 'Project-State-Management-Quiz-Vite',
      description: 'A Foodie Quiz',
      techniques: 'Pair-programming, ',
    },
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
      name: 'Project-Music-Releases-Vite',
      description: 'A site showing new albums and singles releases',
      techniques: 'React, Spotify API, CSS',
    },
    'project-movies-vite': {
      name: 'Project-Movies-Vite',
      description: 'A site using themoviedb.orgs API to showcase movies and thei details',
      techniques: 'React, Themoviedb.org API, routes, CSS',
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
    'project-business-site': {
      name: 'Project-Business-Site',
      description: 'A simple web page where you can have travel guides',
      techniques: 'HTML5, CSS, ,'
    },
  };
  
  const netlifyURLs = {
    'project-state-management-quiz-vite': 'https://teamwork-quiz-vite-zustand.netlify.app',
    'project-happy-thoughts-vite': 'https://happy-thoughts-malin-lunde.netlify.app',
    'project-survey-vite': 'https://project-survey-vite.netlify.app',
    'project-music-releases-vite': 'https://malin-lunde-project-music-releases.netlify.app',
    'project-movies-vite': 'https://minaandmalinmoviesite.netlify.app',
    'project-weather-app': 'https://malin-weather-app-teamwork.netlify.app',
    'project-guess-who': 'https://malin-guess-who.netlify.app',
    'project-business-site': 'https://team-work-business-site.netlify.app',
  };

  const githubURLs = {
    'project-state-management-quiz-vite': 'https://github.com/malinlunde/project-state-management-quiz-vite',
    'project-happy-thoughts-vite': 'https://github.com/malinlunde/project-happy-thoughts-vite',
    'project-survey-vite': 'https://github.com/malinlunde/project-survey-vite',
    'project-music-releases-vite': 'https://github.com/malinlunde/project-music-releases-vite',
    'project-movies-vite': 'https://github.com/malinlunde/project-movies-vite',
    'project-weather-app': 'https://github.com/malinlunde/project-weather-app',
    'project-guess-who': 'https://github.com/malinlunde/project-guess-who',
    'project-business-site': 'https://github.com/malinlunde/project-business-site',
  }
  
  const imageForProject = {
    'project-state-management-quiz-vite': quiz, 
    'project-happy-thoughts-vite': happy,
    'project-survey-vite': survey,
    'project-music-releases-vite': music,
    'project-movies-vite': movies, 
    'project-weather-app': weather,
    'project-guess-who': guess,
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
            <div className='ptags-container'>
              {projectInfo[project].techniques.split(',').map((techniques, i) => (
                <span key={i} className='ptags'>{techniques.trim()}</span>
              ))}
            </div>
            <div className='viewbutton-container'>
              <a href={netlifyURLs[project]} className='viewbutton' target='_blank' rel='noopener noreferrer'>
                <img src={liveDemoButton} alt='Live Demo' />
              </a>
              <a href={githubURLs[project]} className='viewbutton' target='_blank' rel='noopener noreferrer'>
                <img src={viewCode} alt='View Code' />
              </a>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};
export default ProjectCardList;