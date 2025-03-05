import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import './Advertise.css'
import { SlControlForward } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Advertise = () => {
  return (
    <div className=""> {/* Move container outside row */}
      <div className="row border d-flex justify-content-center align-items-center  bg p-5">
        <div className="col-7  px-5">
            <h6 className=''>NEW ARRIVALS ONLY!</h6>
            <h1 className='mt-3' style={{ fontFamily: ' sans-serif' }}> New </h1>

            <h1>Collections</h1>
            <h1>For Everyone</h1>
<Link to='/newarrival' className='btn btn-outline-light my-5'>  Letest Collection  <SlControlForward /></Link>
        </div>
        <div className="col-5">
            <img src="https://img.freepik.com/free-psd/new-arrival-post-template-psd-fashion-shopping_53876-129197.jpg" className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Advertise;
