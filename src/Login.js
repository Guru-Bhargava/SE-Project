import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      (username === 'student1' && password === 'student@123' && role === 'Student') ||
      (username === 'admin1' && password === 'admin@123' && role === 'Admin')
    ) {
      onLogin();
      if (role === 'Student') {
        navigate('/student-dashboard', { replace: true });
      } else if (role === 'Admin') {
        navigate('/admin-dashboard', { replace: true });
      }
    } else {
      alert('Wrong details');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
