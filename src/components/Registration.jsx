import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as UserService from '../services/UserService';
import '../styles/Registration.css'

const Registration = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    hobby: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for blank fields
    for (const key in userData) {
      if (!userData[key]) {
        setError(`Please fill in ${key}`); //error if any field is blank
        return;
      }
    }

    if (UserService.emailExists(userData.email)) { //checking if user's email already exists
      setError('Email already exists. Please use a different email.');
      return;
    }
    
    // Reset error if no blank fields
    setError('');

    // Proceed with registration
    UserService.registerUser(userData);
    alert('Registration successful!');

    // Retrieve the user data after registration
    const registeredUser = UserService.getUserByEmail(userData.email);

    // Store the user data in local storage
    localStorage.setItem('userData', JSON.stringify(registeredUser));

    // Redirect to the Account page
    navigate('/account');
  };

  return (
    <div className=''>
      <div className='fs-1 mt-2'>
        Register
      </div>
      <div className='container fw-semibold w-50 position-absolute top-50 start-50 translate-middle border p-4 reg-bg'>
      <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="hobby" className="form-label">Hobby</label>
            <input
              type="text"
              className="form-control"
              id="hobby"
              name="hobby"
              value={userData.hobby}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userData.email}
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
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary">Submit</button>
          <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
          {/* Link to the Account page */}
          {/* <p>Go to your account? <Link to="/account">Account</Link></p> */}
        </form>
      </div>
    </div>
  );
};

export default Registration;
