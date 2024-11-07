import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleStudentsClick = () => {
    navigate('/students');
  };

  const handleInsightsClick = () => {
    navigate('/insights');
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Instructor Dashboard</h2>
        <div className="profile-icon" onClick={onLogout}>👤</div>
      </div>

      <div className="dashboard-content">
        <div className="tabs">
          <button className="tab-button" onClick={handleProjectsClick}>Projects</button>
          <button className="tab-button" onClick={handleStudentsClick}>Students</button>
          <button className="tab-button" onClick={handleInsightsClick}>Insights</button>
        </div>
        <div className="tab-content">
          <p>Select a tab to view content.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
