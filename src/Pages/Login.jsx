import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Login = () => {
  return (
    <>
    <Navbar/>
     <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-box p-5 shadow-lg rounded">
        <h2 className="text-center mb-4 text-dark">Login</h2>
        
        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label text-dark">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="form-label text-dark">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>

        {/* Login Button */}
        <button className="btn btn-light w-100">Login</button>

        {/* Register & Forgot Password Links */}
        <div className="text-center mt-3">
          <p className="text-dark">
            Don't have an account? <Link to="/signup" className="text-primary text-decoration-none">Sign up</Link>
          </p>
          <p>
            <Link to="/forgot-password" className="text-primary text-decoration-none">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default Login;
