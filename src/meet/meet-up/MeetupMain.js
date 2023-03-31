import React, { useEffect, useState } from 'react';
import MeetupMains from '../meetupmain/MeetupMains';
import classes from './AllMeet.module.css';

export default function MeetupMain() {
  const [loading, setLoading] = useState(true);
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://my-new-project-790a8-default-rtdb.firebaseio.com/meet.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetupData = [];
        for (const key in data) {
          const meetingup = {
            id: key,
            ...data[key],
          };
          meetupData.push(meetingup);
        }
        setLoading(false);
        setLoadData(meetupData);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className={classes.met}>{<MeetupMains mainData={loadData} />}</div>
  );
}
