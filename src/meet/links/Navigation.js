import React from 'react';
import { Link } from 'react-router-dom';
import teat from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={teat.head}>
      <h2>React Meetups</h2>
      <div>
        <ul className={teat.list}>
          <li>
            <Link to="/">All Meetups </Link>
          </li>
          <li>
            <Link to="/meetup-child">Add New Meetup </Link>
          </li>
          <li>
            <Link to="/meetup-all">My Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
