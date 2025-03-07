import React, { useState } from 'react';
import './contactus.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaComment } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import Footer2 from '../Components/Footer2/Footer2';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to server)
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5" >
        <div className="row">
          

          {/* Right Column - Contact Information */}
          <div className="col-md-6">
            <div className="contact-info">
              <h3 className="text-center mb-4">Our Contact Information</h3>
              <div className="info-item  ">
                <FaPhone className="icon" />
                <p className="info-text" >+91 96380 61074</p>
              </div>
              <div className="info-item">
                <FaEnvelope className="icon" />
                <p className="info-text">tiworehandrix@gmail.com</p>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <p className="info-text">123 Main Street, Surat, India</p>
              </div>
            </div>
          </div>

          {/* Left Column - Contact Form */}
          <div className="col-md-6">
            <div className="contact-form-container">
              <h2 className="text-center mb-4">Contact Us</h2>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FaComment /> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FaComment /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Your message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default ContactUs;
