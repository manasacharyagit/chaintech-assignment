import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as UserService from '../services/UserService';
import '../styles/Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = UserService.getUserByEmail(loginData.email);

    if (user) {
      // Successfully found user, check password
      if (user.password === loginData.password) {
        // Successfully logged in, navigate to account page
        console.log('Login successful:', user);
        // localStorage.setItem('userData', JSON.stringify(user));
        navigate('/account');  // Navigate to account page
      } else {
        // Display error message for incorrect password
        alert('Incorrect password. Please try again.');
      }
    } else {
      // User not found, display alert
      alert('User not found. Please register.');
    }
  };

  return (
    <div className=''>
      <div class="fs-1 m-4">
        Login
      </div>
      <div className='container fw-semibold w-50 position-absolute top-50 start-50 translate-middle log-bg p-4'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <p>Don't have an account? <span><Link to='/register'>Register</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
