import React, { useState } from 'react'
import './App.css'
import { Body } from '../src/assets/components/Body';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from "../src/assets/components/contact/Contact";
import AboutUs from "../src/assets/components/aboutus/AboutUs";

export const App = () => {
  return (
    <Router>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutUs} />
        <Route path="/" component={Body} />
    </Router>
  );
};


export default App
