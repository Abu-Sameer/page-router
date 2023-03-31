import React from 'react';

export default function OurServicesBody(props) {
  function defaulte(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div
        className="card"
        onClick={defaulte}
        style={{
          backgroundColor: props.isToggle ? 'lightgoldenrodyellow' : 'darkblue',
        }}
      >
        <div className={props.isToggle ? 'card-icon' : 'card-icon-dark'}>
          <span className={props.icon}></span>
        </div>
        <h3 className={props.isToggle ? 'card-title' : 'card-title-dark'}>
          {props.title}
        </h3>
        <p className={props.isToggle ? 'text' : 'text-dark'}>{props.text}</p>
        <a
          href="https://abusameerportfolio.netlify.app"
          target="_blank"
          rel="noreferrer"
          className={props.isToggle ? 'link' : 'link-dark'}
        >
          know more <i className="fas fa-angle-double-right"></i>
        </a>
      </div>
    </div>
  );
}
