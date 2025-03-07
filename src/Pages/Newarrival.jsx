import React from "react";
import "./newarrival.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer2 from "../Components/Footer2/Footer2";
import { Link } from "react-router-dom";

const Newarrival = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="text-center box1">
        <h1 className="fw-bold">New Arrival!</h1>
      </div>

      {/* Product Sections */}
      <div className="box2 container-fluid">
        {/* T-Shirts Section */}
        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-lg-5 col-md-6 text-center text-md-start">
            <h2 className="fw-bold text-uppercase">Trendy T-Shirts</h2>
            <p className="mt-3">
              Explore our latest T-shirt collection, designed for style and
              comfort.
            </p>

            <Link to="/tshirt">
              {" "}
              <button className="btn btn-warning mt-3"> Shop Now</button>
            </Link>
          </div>
          <div className="col-lg-5 col-md-6 d-flex justify-content-center">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-yellow-background-with-3d-t-shirts-rendered-image_3711716.jpg"
              alt="T-Shirts"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Jackets Section */}
        <div className="row align-items-center justify-content-center flex-md-row-reverse mb-5">
          <div className="col-lg-5 col-md-6 text-center text-md-start">
            <h2 className="fw-bold text-uppercase">Stylish Jackets</h2>
            <p className="mt-3">
              Stay warm in style with our latest collection of premium jackets.
            </p>
            <Link to='/jacket'>        
                <button className="btn btn-warning mt-3">Shop Now</button>

            </Link>
          </div>
          <div className="col-lg-5 col-md-6 d-flex justify-content-center">
            <img
              src="https://www.allensolly.com/blog/wp-content/uploads/2022/07/Jacket.jpg"
              alt="Jackets"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        {/* Shirts Section */}
        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-lg-5 col-md-6 text-center text-md-start">
            <h2 className="fw-bold text-uppercase">Classic Shirts</h2>
            <p className="mt-3">
              Upgrade your wardrobe with our classic and modern shirts for every
              occasion.
            </p>
            <Link to='/shirt'>      
                  <button className="btn btn-warning mt-3">Shop Now</button>

            </Link>
          </div>
          <div className="col-lg-5 col-md-6 d-flex justify-content-center">
            <img
              src="https://img.freepik.com/free-photo/mens-blue-checkered-shirt-isolated-white_93675-134195.jpg"
              alt="Shirts"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Newarrival;
