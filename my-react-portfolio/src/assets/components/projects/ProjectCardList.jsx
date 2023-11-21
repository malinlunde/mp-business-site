import React, { useState, useEffect } from 'react';
import './project.css';
import liveDemoButton from "../icons/liveDemoButton.png";
import viewCode from "../icons/viewCode.png";
import happy from "../images/happy.png";
import guess from "../images/guess.png";
import weather from "../images/weather.png";
import survey from "../images/survey.png";
import music from "../images/music.png";
import movies from "../images/movies.png";
import quiz from "../images/quiz.png";
import pizza from "../images/pizza.png";


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
    'project-pizza',
  ];

  const projectInfo = {
    'project-state-management-quiz-vite': {
      name: 'Project-State-Management-Quiz-Vite',
      description: 'Collaborative multiple-choice quiz game for real foodies, using Zustand for seamless state management and well-styled interface built with teamwork',
      techniques: 'Zustand, React, Pair-programming, CSS3',
    },
    'project-happy-thoughts-vite': {
      name: 'Project-Happy-Thoughts-Vite',
      description: 'This project revolves around honing React state skills by implementing component lifecycles, utilizing the React Hook "useEffect," and working with APIs. The objective is to build a Twitter-like application called "Happy Thoughts," where users can fetch and post (happy) data.',
      techniques: 'React, API, Postman',
    },
    'project-survey-vite': {
      name: 'Project-Survey-Vite',
      description: 'This project involves creating a multi-step survey app in React, showcasing proficiency in managing React state and controlled forms. The app mimics a Typeform-like structure, utilizing various input methods, and providing a summary of user responses upon submission.',
      techniques: 'React, Pair-programming, CSS3',
    },
    'project-music-releases-vite': {
      name: 'Project-Music-Releases-Vite',
      description: 'This project emphasizes mastering React and working with APIs to create a page showcasing new albums and single releases. The focus is on efficient data management using React components and props.',
      techniques: 'React, Spotify API, CSS3',
    },
    'project-movies-vite': {
      name: 'Project-Movies-Vite',
      description: 'A multi-page React application using themoviedb.orgs API to showcase movies and their details',
      techniques: 'React, Themoviedb.org API, Routes, CSS3',
    },
    'project-weather-app': {
      name: 'Project-Weather-App',
      description: 'A simple weather dashboard providing todays weather, temperature, and a 5-day forecast. Utilized a weather API to fetch and present accurate data. This project emphasizes pair programming.',
      techniques: 'HTML5, CSS3, Javascript, OpenWeather API, pair-programming',
    },
    'project-guess-who': {
      name: 'Project-Guess-Who',
      description: 'A classic Guess Who game built just in the beginning of the learning with Javascript, HTML and CSS, the project apply concepts like DOM manipulation, function definitions, conditional statements, object and array manipulation and much more. ',
      techniques: 'HTML5, Javascript, CSS3,',
    },
    'project-pizza': {
      name: 'Project-Javascript-Pizzeria',
      description: 'A captivating chatbot interface that engages users by asking questions, displaying messages, and providing precise responses.',
      techniques: 'HTML5, Javascript, CSS3,'
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
    'project-pizza': 'https://malins-pizza-project.netlify.app/',
  };

  const githubURLs = {
    'project-state-management-quiz-vite': 'https://github.com/malinlunde/project-state-management-quiz-vite',
    'project-happy-thoughts-vite': 'https://github.com/malinlunde/project-happy-thoughts-vite',
    'project-survey-vite': 'https://github.com/malinlunde/project-survey-vite',
    'project-music-releases-vite': 'https://github.com/malinlunde/project-music-releases-vite',
    'project-movies-vite': 'https://github.com/malinlunde/project-movies-vite',
    'project-weather-app': 'https://github.com/malinlunde/project-weather-app',
    'project-guess-who': 'https://github.com/malinlunde/project-guess-who',
    'project-pizza': 'https://github.com/malinlunde/project-pizza',
  }

  const imageForProject = {
    'project-state-management-quiz-vite': quiz, 
    'project-happy-thoughts-vite': happy,
    'project-survey-vite': survey,
    'project-music-releases-vite': music,
    'project-movies-vite': movies, 
    'project-weather-app': weather,
    'project-guess-who': guess,
    'project-pizza': pizza,
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