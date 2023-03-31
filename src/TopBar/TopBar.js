import React from 'react';
import './TopBarCss.css';
import logo from './logo.jpg';
import { NavLink } from 'react-router-dom';

export default function TopBar() {
  return (
    <div>
      <div className="topbar-header">
        <div className="topbar-left">
          <NavLink className="header-title" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="header-search-title">
            <i className="fas fa-search"></i>
            <input autoFocus type="text" placeholder="search" />
          </div>
        </div>

        <div className="topbar-center">
          <NavLink className="header-title" to="ourservice">
            <i className="fa-solid fa-earth-asia"></i>
            <span>Our Services</span>
          </NavLink>
          <NavLink to="about" className="header-title">
            <i className="fas fa-user"></i>
            <span>About</span>
          </NavLink>
          <NavLink className="header-title" to="project">
            <i className="fas fa-briefcase"></i>
            <span>Project</span>
          </NavLink>
          <NavLink className="header-title" to="gallary">
            <i className="fas fa-image"></i>
            <span>Gallary</span>
          </NavLink>
          <NavLink className="header-title" to="registerPage">
            <i className="fa-solid fa-user-pen"></i>
            <span>Register</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
