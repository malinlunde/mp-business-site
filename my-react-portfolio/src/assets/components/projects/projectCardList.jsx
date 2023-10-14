import React, { useState, useEffect } from 'react';
import './project.css';


export const projectCardList = () => {
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
      techniques: 'React, OpenWeather API, CSS, pair-programming',
    },
    'project-guess-who': {
      name: 'Project-Guess-Who',
      description: 'A game where you filter characters to find the hidden person',
      techniques: 'HTML5, CSS, Javascript',
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
  
  
  
  
  
  return (
    <div>projectCardList</div>
  )
}
