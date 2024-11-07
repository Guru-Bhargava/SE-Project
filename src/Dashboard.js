import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/login'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the Dashboard!</h2>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop: '10px' }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
