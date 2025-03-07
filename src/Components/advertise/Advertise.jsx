import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import './Advertise.css';
import { SlControlForward } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Advertise = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center bg p-5">
        
        {/* Left Side: Text Section */}
        <div className="text-lg-start text-sm-center px-lg-5">
          <h6>NEW ARRIVALS ONLY!</h6>
          <h1 className='mt-3' style={{ fontFamily: 'sans-serif' }}> New </h1>
          <h1>Collections</h1>
          <h1>For Everyone</h1>

          <Link to='/newarrival' className='btn btn-outline-light my-4'>
            Latest Collection <SlControlForward />
          </Link>
        </div>

        {/* Right Side: Image Section */}
        <div className="text-center">
          <img 
            src="https://img.freepik.com/free-psd/new-arrival-post-template-psd-fashion-shopping_53876-129197.jpg" 
            className='img-fluid w-100' 
            alt="New Arrivals" 
            style={{ maxWidth: '400px' }} // Limits image size for better responsiveness
          />
        </div>

      </div>
    </div>
  );
}

export default Advertise;
