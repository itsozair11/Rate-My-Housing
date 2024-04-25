import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import UVPage from './pages/UVPage';
import ReviewPage from './pages/ReviewPage';
import WelcomePage from './pages/WelcomePage';
{/*import WriteReview from './pages/WriteReview';*/}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/pages/SignIn" element={<SignIn />} />
        <Route path="/pages/WelcomePage" element={<WelcomePage />} />
        <Route path="/pages/UVPage" element={<UVPage />} />
        <Route path="/pages/ReviewPage" element={<ReviewPage />} />
        {/*<Route path="/pages/WriteReview" element={<WriteReview />} />
        <Route path="/component/" element={<WelcomePage />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
