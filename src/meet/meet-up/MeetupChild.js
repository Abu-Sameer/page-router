import React from 'react';
import { useNavigate } from 'react-router-dom';
import MeetuoForm from '../meetupmain/MeetuoForm';
import clas from './AllMeet.module.css';

export default function MeetupChild() {
  const navigate = useNavigate();

  function handleMeetupFire(formData) {
    fetch(
      'https://my-new-project-790a8-default-rtdb.firebaseio.com/meet.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <div className={clas.Meetform}>
      <h1>Add New Meetup</h1>
      <MeetuoForm meetupFire={handleMeetupFire} />
    </div>
  );
}
