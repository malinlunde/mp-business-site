import React, { useState } from 'react'
import './App.css'
import { Body } from '../src/assets/components/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "../src/assets/components/contact/Contact";
import AboutUs from "../src/assets/components/aboutus/AboutUs";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/" element={<Body />} />
        </Routes>
    </Router>
  );
};


export default App
