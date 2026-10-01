import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/main.css';

function App() {
  const [authUser, setAuthUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!authUser ? <Login setAuthUser={setAuthUser} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={authUser ? <Dashboard user={authUser} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;
