import React, { useState, useEffect } from 'react';

const Account = () => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      try {
        // Parse the JSON data
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data from local storage:', error);
        // Handle the error as needed
      }
    }
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Save changes to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    setEditMode(false);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className='mt-4'>Your Account Details</h2>
      {editMode ? (
        <>
          <p>
            First Name:{' '}
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </p>
          <p>
            Last Name:{' '}
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </p>
          <p>
            Hobby:{' '}
            <input
              type="text"
              name="hobby"
              value={userData.hobby}
              onChange={handleChange}
            />
          </p>
          <p>
            Email: {userData.email} (Cannot be changed)
          </p>
          <button onClick={handleSaveClick}>Save Changes</button>
        </>
      ) : (
        <>
        <div className='fw-bolder mt-4'>
          <p>First Name: {userData.firstName}</p>
          <p>Last Name: {userData.lastName}</p>
          <p>Hobby: {userData.hobby}</p>
          <p>Email: {userData.email}</p>
          <button onClick={handleEditClick}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Account;
