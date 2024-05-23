import React, { useState } from 'react'
import './App.css'
import { Body } from '../src/assets/components/Body';
import { Header } from '../src/assets/components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "../src/assets/components/aboutus/AboutUs";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/omoss" element={<AboutUs />} />
        <Route path="/" element={<Body />} />
        </Routes>
    </Router>
  );
};


export default App;
