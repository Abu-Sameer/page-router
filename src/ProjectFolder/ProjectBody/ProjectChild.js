import React from 'react';

export default function ProjectChild(props) {
  return (
    <div className="project-container">
      <div className="project-section">
        <img src={props.image} alt="proImage" />
        <div className="project-title-edit">
          <p className="project-title">{props.title}</p>
          <div className="project-edit">
            <span className="edit">{props.edit}</span>
            <p className="confirm-edit">
              edit <i className="fas fa-pen"></i>
            </p>
            <span className="delete">{props.delete}</span>
            <p className="confirm-delete">delete🚫</p>
          </div>
        </div>
        <p className="project-date">{props.days}</p>
        <div className="project-content">
          <p className="project-author">
            Author: <span>{props.author}</span>
          </p>
        </div>
        <div className="project-content-text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
