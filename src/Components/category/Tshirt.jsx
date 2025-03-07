
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './category.css';
import Footer2 from '../Footer2/Footer2';


const Tshirt = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className='jct_bg'>
        <h2 className="text-center text-white mb-4">T-shirts Collection</h2>
      </div>
      
      {/* Card Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* ---------1 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://www.thefashionisto.com/wp-content/uploads/2023/06/Types-of-Polo-Shirts-Knit-Zara.jpg" 
                className="card-img-top" 
                alt="Leather Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Polo T-shirt</h5>
                <p className="card-text">₹500</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------2 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncZy08L3XmklGoGAUBte3FRdfTvgGXpG6EQ&s" 
                className="card-img-top" 
                alt="Leather Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Long sleeves T-shirt</h5>
                <p className="card-text">₹550</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------3 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://m.media-amazon.com/images/I/71H4LCthapL._AC_UY580_.jpg" 
                className="card-img-top" 
                alt="Leather Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Turtleneck T-shirt</h5>
                <p className="card-text">₹800</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://img.freepik.com/free-photo/indoor-cropped-image-muscular-young-man-red-t-shirt-jeans_176532-7565.jpg" 
                className="card-img-top" 
                alt="Denim Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">v neck T-shirt</h5>
                <p className="card-text">₹300</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------5 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://image.uniqlo.com/UQ/ST3/jp/imagesother/000_PLP/Sweat/25SS/Men/LineupBanner-men-Shirts-01-sp.jpg" 
                className="card-img-top" 
                alt="Casual Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sweatshirts </h5>
                <p className="card-text">₹1150</p>
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>

          {/* ---------6 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img 
                src="https://iciw.centracdn.net/client/dynamic/images/10703_a67d2568c6-13192-021-1-full.jpg" 
                className="card-img-top" 
                alt="Wool Jacket" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sleevless T-shirt</h5>
                <p className="card-text">₹750</p>
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

export default Tshirt





