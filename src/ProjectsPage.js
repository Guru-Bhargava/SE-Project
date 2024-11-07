
import React from 'react';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="project-boxes">
        <div className="project-box">Project Overview</div>
        <div className="project-box">Milestones Management</div>
        <div className="project-box">Project Health Indicator</div>
        <div className="project-box">Document Submissions</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
