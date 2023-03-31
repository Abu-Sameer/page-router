import React from 'react';

export default function GallaryChild(props) {
  return (
    <div className="gallary-content">
      <img src={props.url} alt="" />
      <div className="gallary-text">
        <p className="gallary-name">{props.name}</p>
        <p className="gallary-count">Box count: {props.box_count}</p>
      </div>
    </div>
  );
}
