import React from 'react';
import ProjectChild from './ProjectChild';
import projectData from './ProjectData';
import './Project.css';

export default function Project() {
  const projectElement = projectData.map((projectEl) => {
    return <ProjectChild key={projectEl.id} {...projectEl} />;
  });

  return <div className="whole">{projectElement}</div>;
}
