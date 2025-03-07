import React from 'react'
import Navbar from '../Navbar/Navbar';
import './category.css';
import Footer2 from '../Footer2/Footer2';

const Jeans = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className='jct_bg'>
        <h2 className="text-center text-white mb-4">Jeans Collection</h2>
      </div>
      
      {/* Card Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* ---------1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://m.media-amazon.com/images/I/91E69wClQ4L._AC_UY1100_.jpg" 
                className="card-img-top" 
                alt="Denim Baggy Jeans" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Denim Baggy Jeans</h5>
                <p className="card-text">₹1500</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://imagescdn.pantaloons.com/img/app/product/9/997640-13336102.jpg?auto=format&w=450" 
                className="card-img-top" 
                alt="Leather Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Ankel Length Slim Fit Jeans</h5>
                <p className="card-text">₹2500</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://assets.ajio.com/medias/sys_master/root/hcc/h6e/13313931313182/-1117Wx1400H-460360945-ice-MODEL2.jpg" 
                className="card-img-top" 
                alt="Leather Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Skinny Fit Jeans</h5>
                <p className="card-text">₹900</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://www.bestyledberlin.de/media/catalog/product/cache/93e9a2d3504a51597f2622092c86841d/j/e/jeans_3_1.jpg" 
                className="card-img-top" 
                alt="Denim Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Bootcut Jeans</h5>
                <p className="card-text">₹700</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------5 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://shopduer.com/cdn/shop/files/MFLS5021-PERFORMANCE-DENIM-SLIM-TIDAL_3140-FT3.jpg?v=1702066342" 
                className="card-img-top" 
                alt="Casual Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Slim Fit Stretch Jeans</h5>
                <p className="card-text">₹1200</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------6 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://pajamajeans.com/cdn/shop/files/pjj-m1263-pajamajeansformen-vintagewash-gkpj04055_keyword_20160223_1311.jpg?v=1740076805" 
                className="card-img-top" 
                alt="Wool Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Pajama Jeans</h5>
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

export default Jeans
