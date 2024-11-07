import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';
import NewProject from './NewProject';
import CurrentProject from './CurrentProject';
import ProjectProgress from './ProjectProgress';
import StudentOverview from './StudentOverview';
import ProjectsPage from './ProjectsPage';
import StudentsPage from './StudentsPage';
import InsightsPage from './InsightsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(''); 
  const login = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole);
  };

  const register = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole('');
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {!isAuthenticated && (
          <>
            <h1>Login and Register App</h1>
            <div>
              <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
            </div>
          </>
        )}
        
        <Routes>
          
          <Route path="/login" element={<Login onLogin={login} isAuthenticated={isAuthenticated} />} />
          <Route path="/register" element={<Register onRegister={register} />} />
          
          <Route
            path="/student-dashboard"
            element={<PrivateRoute element={<StudentOverview onLogout={logout} />} />}
          />
          <Route
            path="/admin-dashboard"
            element={<PrivateRoute element={<AdminDashboard onLogout={logout} />} />}
          />

          <Route path="/new-project" element={<PrivateRoute element={<NewProject />} />} />
          <Route path="/student-dashboard1" element={<PrivateRoute element={<StudentDashboard />} />} />
          <Route path="/current-project" element={<PrivateRoute element={<CurrentProject />} />} />
          <Route path="/project-progress/:projectId" element={<PrivateRoute element={<ProjectProgress />} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          
          <Route
            path="/"
            element={
              isAuthenticated ? (
                role === 'Student' ? (
                  <Navigate to="/student-dashboard" replace />
                ) : (
                  <Navigate to="/admin-dashboard" replace />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
