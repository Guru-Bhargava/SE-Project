import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectProgress() {
  const { projectId } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Progress for Project {projectId}</h2>
      <p>Details of the project progress will go here.</p>
    </div>
  );
}

export default ProjectProgress;
