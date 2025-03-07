import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer  text-light">
      <div className="container py-4">
        <div className="row text-center text-md-start">
          
          {/* Logo & Description */}
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold text-warning">Tiwore Handrix</h4>
            <p>Your go-to fashion store for the latest trends and exclusive collections.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-3">
            <h5 className="fw-semibold text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/men" className="footer-link">Men</Link></li>
              <li><Link to="/newarrival" className="footer-link">New Arrivals</Link></li>
              <li><Link to="/offers" className="footer-link">Offers</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-semibold text-warning">Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/contactus" className="footer-link">Contact Us</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/returns" className="footer-link">Return Policy</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 text-center text-md-start">
            <h5 className="fw-semibold text-warning">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Tiwore Handrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
