import React, { useState } from 'react';
import '../css/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate(); // Call useNavigate at the top level of your component

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault(); // Prevent default form submission
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User created:', userCredential);
        alert('User created successfully!');
        navigate('/pages/WelcomePage'); // Use navigate after successful sign-up
      })
      .catch((error) => {
        console.error('Error during sign-up:', error);
        alert(error.message);
      });
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inder&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <h1>Create Account</h1>

        <form onSubmit={signUp} className="form-container">
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit">
              <span style={{ fontFamily: 'Inder' }}>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
