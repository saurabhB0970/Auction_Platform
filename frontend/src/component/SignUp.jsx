
// components/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/signup', {
        username,
        password,
      });
      setMessage(response.data.message); // Display success message
      setUsername('');
      setPassword('');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message); // Display error message from backend
      } else {
        setMessage('An error occurred.');
      }
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button type="submit">Continue</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUp;
