import React from 'react'
import Navbar from '../Navbar/Navbar';
import './category.css';
import Footer2 from '../Footer2/Footer2';

const Shirt = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className='jct_bg'>
          <h2 className="text-center text-white mb-4">Shirts Collection</h2>
        </div>
        
        {/* Card Section */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            {/* ---------1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/t/9/p/l-qwa2xsz-blends-trendz-original-imagpkdvwzcjar5r.jpeg?q=90&crop=false" 
                  className="card-img-top" 
                  alt="Leather Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Formal Shirt</h5>
                  <p className="card-text">₹1500</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* ---------2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://m.media-amazon.com/images/I/61VMOPAv0TL._AC_UY580_.jpg" 
                  className="card-img-top" 
                  alt="Leather Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Short Sleeve Shirt</h5>
                  <p className="card-text">₹600</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* ---------3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://www.leonardsilver.com/cdn/shop/products/white-plisse-tuxedo-shirt-205384_800x.jpg?v=1694641785" 
                  className="card-img-top" 
                  alt="Leather Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Tuxedo</h5>
                  <p className="card-text">₹900</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* ---------4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://eu.brixton.com/cdn/shop/files/tje2ayeuwmuzun2xuff7_1024x1024.jpg?v=1740596771" 
                  className="card-img-top" 
                  alt="Denim Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Flannel Shirt</h5>
                  <p className="card-text">₹1500</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* ---------5 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://paradisefoundshirts.com/cdn/shop/collections/IMG_E4438_7.jpg?v=1710779472" 
                  className="card-img-top" 
                  alt="Casual Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Hawaiian Shirt</h5>
                  <p className="card-text">₹1200</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* ---------6 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://andsons.co.uk/cdn/shop/files/ShirtSundayDenimLSMOBILE1_4fea20d7-5e9b-48f4-a334-e64ab3cfc06c.jpg?v=1719920770" 
                  className="card-img-top" 
                  alt="Wool Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Dannim Shirt</h5>
                  <p className="card-text">₹1100</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </>
  )
}

export default Shirt
