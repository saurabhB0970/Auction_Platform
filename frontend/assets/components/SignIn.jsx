

// components/SignIn.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/signin', {
        username,
        password,
      });
      setToken(response.data.token);
      setMessage(response.data.message);
      setUsername('');
      setPassword('');
      localStorage.setItem('authToken', response.data.token);
      navigate('/dashboard'); // Redirect after successful sign-in
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /> 
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <br/>
        <button type="submit">Sign In</button>
      </form>
      {message && <p className="message">{message}</p>}
      {token && <p>Token: {token}</p>}
    </div>
  );
}

export default SignIn;
