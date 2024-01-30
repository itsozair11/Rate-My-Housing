import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
//import Signup from './pages/signup';
//import Login from './pages/login';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
//import './index.css';
import BuildingReviewForm from '../src/pages/BuildingReviewForm';
//import '../src/pages/auth.css';
//import BuildingReviewForm from '../src/pages/BuildingReviewForm.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pages/HomePage" element={<HomePage />} />
        <Route path="/BuildingReviewForm" element={<BuildingReviewForm />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;

