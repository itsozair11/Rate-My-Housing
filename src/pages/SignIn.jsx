import React, { useState } from 'react';
import '../css/SignIn.css';
import ttalogo from '../assets/ttalogo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/authfirebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed in:', userCredential);
        // Implement your logic after successful sign-in
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        alert(error.message);
      });
  };

  return (
    <div>
      {/* Preconnect and Fonts */}
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

      {/* Main Content */}
      <div className="background-image"></div>
      <img src={ttalogo} alt="Logo" className="logo" />

      <div className="login-signup-container">
        <div className="login-signup-box">
          <h1>Welcome to Rate My Housing</h1>
          <div className="form-container">
            <h2>Login or Sign Up</h2>
            <form onSubmit={handleSignIn}>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Button Container */}
              <div className="btn-container">
                <button type="submit">
                  <span style={{ fontFamily: 'Inder' }}>Login</span>
                </button>
                {/* Additional buttons for other functionalities can go here */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
