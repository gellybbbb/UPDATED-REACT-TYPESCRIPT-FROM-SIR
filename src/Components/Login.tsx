

import React, { useState } from 'react';
import axios from 'axios';
import Home from './Home';

function LoginForm({ setIsLogin }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      //http://localhost:5000/users/login
      const response = await axios.post('http://localhost:5000/users/login', {
        username,
        password,
      });

      console.log(response)

      const token = response.data.token;

      // Save the token to local storage
      localStorage.setItem('token', token);
      setIsLogin(true)
      // <Home/>
      // Redirect the user or perform other actions
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  




  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;

