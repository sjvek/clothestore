import React, { useState } from 'react';
import './signup.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import Footer2 from '../Components/Footer2/Footer2';

const Signup = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log(userData);
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form-container">
          <h2 className="text-center mb-4">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">
                <FaUser /> Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">
                <FaLock /> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100 mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Signup;
