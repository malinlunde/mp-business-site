import React, { useState } from 'react'
import './App.css'
import { Body } from '../src/assets/components/Body';
import { Header } from '../src/assets/components/header/Header';
import { ProjectPlating } from '../src/assets/components/projects/ProjectPlating';
import { ProjectFoundation } from '../src/assets/components/projects/ProjectFoundation';
import { ProjectWalling } from '../src/assets/components/projects/ProjectWalling';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "../src/assets/components/contact/Contact";
import AboutUs from "../src/assets/components/aboutus/AboutUs";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/omoss" element={<AboutUs />} />
        <Route path="/plattlaggning" element={<ProjectPlating />} />
        <Route path="/murar" element={<ProjectWalling />} />
        <Route path="/husgrunder" element={<ProjectFoundation />} />
        <Route path="/" element={<Body />} />

        </Routes>
    </Router>
  );
};


export default App
