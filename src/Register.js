import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [githubId, setGithubId] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    onRegister();

    if (role === 'Student') {
      navigate('/student-dashboard', { replace: true });
    } else if (role === 'Admin') {
      navigate('/admin-dashboard', { replace: true });
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <label>GitHub ID:</label>
          <input
            type="text"
            value={githubId}
            onChange={(e) => setGithubId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
