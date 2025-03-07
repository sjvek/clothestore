import React from 'react';
import { FaShoppingCart, FaTag } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import  './offers.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Footer2 from '../Components/Footer2/Footer2';

const Offers = () => {
  // Products Data
  const products = [
    {
      id: 1,
      name: "Leather Jacket",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/c/u/j/xxl-no-classic-latest-fashion-black-biker-leather-jacket-for-men-original-imagtzbkwz4wjzwb.jpeg?q=90&crop=false",
      originalPrice: 1500,
      discountedPrice: 900,
      discount: "40% OFF"
    },
    {
      id: 2,
      name: "Anti-Wrinkle Shirt",
      image: "https://www.ubuy.com.lb/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM0MDA0MDdhZDA1MmMyYzY1NmM3Y2Q2LWxlbGViZWFyLXN0cmV0Y2gtYW50aS13cmlua2xlLXNoaXJ0LW1lbi5qcGc.jpg",
      originalPrice: 900,
      discountedPrice: 400,
      discount: "30% OFF"
    },
    {
      id: 3,
      name: "Furry Jacket",
      image: "https://campussutra.com/cdn/shop/files/AWAJIO23_CSMAWJK060TN_1.jpg?v=1728548252",
      originalPrice: 1200,
      discountedPrice: 950,
      discount: "25% OFF"
    },
    {
      id: 4,
      name: "Furry Jacket",
      image: "https://campussutra.com/cdn/shop/files/AWAJIO23_CSMAWJK060TN_1.jpg?v=1728548252",
      originalPrice: 1200,
      discountedPrice: 950,
      discount: "25% OFF"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Sales Banner with Image Background */}
      <div className="sales-banner d-flex justify-content-center align-items-center">
        <div className="overlay text-center text-white">
          <h1 className="fw-bold">SALE UP TO 30% OFF</h1>
          <p className="lead">Shop Now and Save Big on Fashion!</p>
          {/* <button className="btn btn-light mt-3">Shop Now</button> */}
        </div>
      </div>

      {/* Offers Section */}
      <div className="container py-5">
        <div className="row justify-content-center gy-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow-sm position-relative" style={{ width: "18rem" }}>
                {/* Discount Badge */}
                <span 
                  className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-end"
                  style={{ fontSize: "0.8rem", fontWeight: "bold" }}
                >
                  <FaTag className="me-1" /> {product.discount}
                </span>

                {/* Product Image */}
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name} 
                  style={{ height: "250px", objectFit: "cover" }} 
                />

                {/* Card Body */}
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>

                  {/* Price Section */}
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <p className="card-text text-decoration-line-through text-muted">
                      ₹{product.originalPrice}
                    </p>
                    <p className="text-danger fw-bold">₹{product.discountedPrice}</p>
                  </div>

                  {/* Add to Cart Button */}
                  <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
     <Footer2/>
    </>
  );
};

export default Offers;
