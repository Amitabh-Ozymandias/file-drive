import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signIn.css';

// Utility to hash password using SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const hashedPassword = await hashPassword(password);

    if (users[email]) {
      if (users[email] === hashedPassword) {
        localStorage.setItem('currentUser', email);
        navigate('/home');
      } else {
        setError('Incorrect password.');
      }
    } else {
      // Register new user
      users[email] = hashedPassword;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', email);
      navigate('/home');
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSignIn} className="signin-form">
        <h2>Sign In / Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default SignIn;
