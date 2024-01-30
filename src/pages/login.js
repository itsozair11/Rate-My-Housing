import React, { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(data=>{
        console.log('Login successful!');
        navigate('/pages/HomePage');
      });
      // You can redirect or perform other actions upon successful login
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('Login failed. Please check your email and password.'); // Display an alert for the user
    }
  };

  return (
    <form id="form1" className="login-formCSS" onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" className="login-formCSS">
        LOGIN
      </button>
    </form>
  );
};

export default Login;
