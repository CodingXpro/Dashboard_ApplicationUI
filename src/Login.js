import React, { useState } from 'react';
import './Login.css';
import toast,{ Toaster }from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Password length validation
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
     toast.success('Login Successfully');


    // Clear the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
        <Toaster/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {passwordError && <div className="error-message">{passwordError}</div>}
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

