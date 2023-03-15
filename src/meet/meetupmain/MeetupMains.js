import React from 'react';
import MainMeets from './MainMeets';
import meat from './MainMeet.module.css';

export default function MeetupMains(props) {
  return (
    <div className={meat.h1}>
      <h1>ALL MEET UP</h1>
      <div className={meat.bodyMap}>
        {props.mainData.map((main) => (
          <MainMeets
            key={main.id}
            image={main.image}
            title={main.title}
            description={main.description}
            address={main.address}
          />
        ))}
      </div>
    </div>
  );
}
