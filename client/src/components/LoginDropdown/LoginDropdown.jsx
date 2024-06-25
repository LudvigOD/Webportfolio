// LoginDropdown.jsx

import React, { useState } from 'react';
import { auth } from '../../firebase'; // Assuming firebase.js is in the parent directory
import { signInWithEmailAndPassword } from 'firebase/auth';
import './LoginDropdown.css'; // Import your CSS file for styling

function LoginDropdown() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Successfully logged in:", user.email);
        // You can handle successful sign-in here, e.g., redirecting to another page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error ${errorCode}: ${errorMessage}`);
        // Handle error
      });
  };

  return (
    <div className="login-dropdown">
      <button className="login-button" onClick={toggleDropdown}>
        Login
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <input
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export default LoginDropdown;
