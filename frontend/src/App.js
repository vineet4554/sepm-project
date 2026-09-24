import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2>Welcome to SEPM Project</h2>} />
      </Routes>
    </Router>
  );
}
export default App;
