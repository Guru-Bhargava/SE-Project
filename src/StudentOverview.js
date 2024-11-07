import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentOverview.css';

function StudentOverview() {
  const navigate = useNavigate();

  const handleNewProjectClick = () => {
    navigate('/new-project'); 
  };

  const handleCurrentProjectClick = () => {
    navigate('/student-dashboard1'); 
  };

  return (
    <div className="overview-container">
      <button className="dashboard-button">Student Dashboard</button>

      <div className="project-button-container">
        <button className="project-button" onClick={handleNewProjectClick}>
          New Project
        </button>
        <button className="project-button" onClick={handleCurrentProjectClick}>
          Current Project
        </button>
      </div>
    </div>
  );
}

export default StudentOverview;
