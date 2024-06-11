import React from 'react'
import './App.css'
import { Body } from '../src/assets/components/Body';
import { Header } from '../src/assets/components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from "../src/assets/components/contactpage/ContactPage";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/omoss" element={<ContactPage />} />
        <Route path="/" element={<Body />} />
        </Routes>
    </Router>
  );
};


export default App;
