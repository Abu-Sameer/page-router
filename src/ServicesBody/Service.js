import React from 'react';
import About from '../ProjectFolder/AboutBody/About';
import Gallary from '../ProjectFolder/GallaryBody/Gallary';
import Home from '../ProjectFolder/HomeBody/Home';
import OurService from '../ProjectFolder/OurService/OurService';
import Project from '../ProjectFolder/ProjectBody/Project';
import TopBar from '../TopBar/TopBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from '../ProjectFolder/LogIn/Loginpage';
import Login from '../ProjectFolder/LogIn/Login';

export default function Service() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about/" element={<About />} />
          <Route exact path="gallary/" element={<Gallary />} />
          <Route exact path="loginpage/" element={<Loginpage />} />
          <Route exact path="ourservice/" element={<OurService />} />
          <Route exact path="project/" element={<Project />} />
          <Route exact path="login/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
