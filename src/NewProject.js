import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewProject.css';

function NewProject() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Created:', { projectName, description, startDate });

    setProjectName('');
    setDescription('');
    setStartDate('');

    navigate('/student-dashboard');
  };

  return (
    <div className="new-project-container">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit} className="new-project-form">
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Create Project</button>
      </form>
    </div>
  );
}

export default NewProject;
