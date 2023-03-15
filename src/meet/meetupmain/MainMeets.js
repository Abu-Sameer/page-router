import React from 'react';
import Contained from '../contain/Contained';
import meat from './MainMeet.module.css';

export default function MainMeets(props) {
  return (
    <Contained>
      <div className={meat.head}>
        <div className={meat.imgTag}>
          <img className={meat.ima} src={props.image} alt="meet up img" />
        </div>
        <div className={meat.content}>
          <p>Title: {props.title}</p>
          <p>Address: {props.address}.</p>
          <p>Description: {props.description}</p>
        </div>
        <div className={meat.btn}>
          <button>Add to favorite</button>
        </div>
      </div>
    </Contained>
  );
}
