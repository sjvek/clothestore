import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import  './footer2.css';

const Footer2 = () => {
  return (
    <div>
        <footer className="bg-dark text-white py-4 mt-5">
                  <div className="container text-center">
                    <p className="mb-0">© 2025 Tiwore Handrix. All rights reserved.</p>
                    <p className='mt-4'>
                      Follow us on{' '}
                      <a href="https://www.facebook.com" className="text-light mx-2">
                        <FaFacebook size={30} />
                      </a>
                      <a href="https://www.instagram.com" className="text-light mx-2">
                        <FaInstagram size={30} />
                      </a>
                      <a href="https://www.twitter.com" className="text-light mx-2">
                        <FaTwitter size={30} />
                      </a>
                      <a href="https://www.linkedin.com" className="text-light mx-2">
                        <FaLinkedin size={30} />
                      </a>
                    </p>
                  </div>
                </footer>
    </div>
  )
}

export default Footer2
