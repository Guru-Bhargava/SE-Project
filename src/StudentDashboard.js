import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css'; 
function StudentDashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleProgressClick = (projectId) => {
    navigate(`/project-progress/${projectId}`);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Dashboard</h2>
      <button onClick={onLogout} className="profile-button">Logout</button>

      <div className="project-card">
        <span>Project 1</span>
        <button className="progress-button" onClick={() => handleProgressClick(1)}>
          Progress
        </button>
      </div>

      <div className="project-card">
        <span>Project 2</span>
        <button className="progress-button" onClick={() => handleProgressClick(2)}>
          Progress
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;
