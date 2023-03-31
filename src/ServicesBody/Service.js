import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../ProjectFolder/AboutBody/About';
import Gallary from '../ProjectFolder/GallaryBody/Gallary';
import Home from '../ProjectFolder/HomeBody/Home';
import OurService from '../ProjectFolder/OurService/OurService';
import Project from '../ProjectFolder/ProjectBody/Project';
import TopBar from '../TopBar/TopBar';
import Signup from '../ProjectFolder/Resgister/Signup';
import RegisterPage from '../ProjectFolder/Resgister/RegisterPage';

export default function Service() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about/" element={<About />} />
          <Route exact path="gallary/" element={<Gallary />} />
          <Route exact path="registerPage/" element={<RegisterPage />} />
          <Route exact path="ourservice/" element={<OurService />} />
          <Route exact path="project/" element={<Project />} />
          <Route exact path="signup/" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
