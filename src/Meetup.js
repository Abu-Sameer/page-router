import React from 'react';
import './Meetup.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './meet/links/Navigation';
import MeetupAll from './meet/meet-up/MeetupAll';
import MeetupChild from './meet/meet-up/MeetupChild';
import MeetupMain from './meet/meet-up/MeetupMain';

export default function Meetup() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<MeetupMain />} />
        <Route exact path="/meetup-child" element={<MeetupChild />} />
        <Route exact path="/meetup-all" element={<MeetupAll />} />
      </Routes>
    </div>
  );
}
