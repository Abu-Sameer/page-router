import React from 'react';
import classes from './Contained.module.css';

export default function Contained(props) {
  return <div className={classes.card}>{props.children}</div>;
}
