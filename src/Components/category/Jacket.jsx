// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import './category.css';

// const Jacket = () => {
//   return (
//     <>
//       <Navbar />
//       <div>
//         <div className='jct_bg'>
//           <h2 className="text-center text-white mb-4">Jackets Collection</h2>
//         </div>
        
//         {/* Card Section */}
//         <div className="container mt-5">
//           <div className="row justify-content-center">
//             {/* ---------1 */}
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
//               <div className="card shadow-sm" style={{ width: "18rem" }}>
//                 <img 
//                   src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/c/u/j/xxl-no-classic-latest-fashion-black-biker-leather-jacket-for-men-original-imagtzbkwz4wjzwb.jpeg?q=90&crop=false" 
//                   className="card-img-top" 
//                   alt="Leather Jacket" 
//                   style={{ height: "300px", objectFit: "cover" }} 
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Leather Jacket</h5>
//                   <p className="card-text">₹1500</p>
//                   <button className="btn btn-primary">Select</button>
//                 </div>
//               </div>
//             </div>

//             {/* ---------2 */}
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
//               <div className="card shadow-sm" style={{ width: "18rem" }}>
//                 <img 
//                   src="https://campussutra.com/cdn/shop/files/AWAJIO23_CSMAWJK060TN_1.jpg?v=1728548252" 
//                   className="card-img-top" 
//                   alt="Leather Jacket" 
//                   style={{ height: "300px", objectFit: "cover" }} 
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Leather Jacket</h5>
//                   <p className="card-text">₹2500</p>
//                   <button className="btn btn-primary">Select</button>
//                 </div>
//               </div>
//             </div>

//             {/* ---------3 */}
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
//               <div className="card shadow-sm" style={{ width: "18rem" }}>
//                 <img 
//                   src="https://m.media-amazon.com/images/I/71zT0tJ2CjL._AC_UY1100_.jpg" 
//                   className="card-img-top" 
//                   alt="Leather Jacket" 
//                   style={{ height: "300px", objectFit: "cover" }} 
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Cargo Winter Jacket</h5>
//                   <p className="card-text">₹900</p>
//                   <button className="btn btn-primary">Select</button>
//                 </div>
//               </div>
//             </div>

//             {/* ---------4 */}
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
//               <div className="card shadow-sm" style={{ width: "18rem" }}>
//                 <img 
//                   src="https://images-cdn.ubuy.co.in/653b4be936138146b54c2af8-junge-denim-jacket-men-fleece-jacket.jpg" 
//                   className="card-img-top" 
//                   alt="Denim Jacket" 
//                   style={{ height: "300px", objectFit: "cover" }} 
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Denim Jacket</h5>
//                   <p className="card-text">₹700</p>
//                   <button className="btn btn-primary">Select</button>
//                 </div>
//               </div>
//             </div>

//             {/* ---------5 */}
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
//               <div className="card shadow-sm" style={{ width: "18rem" }}>
//                 <img 
//                   src="https://imagescdn.allensolly.com/img/app/product/3/39827108-16449666.jpg?auto=format&w=390" 
//                   className="card-img-top" 
//                   alt="Casual Jacket" 
//                   style={{ height: "300px", objectFit: "cover" }} 
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Casual Jacket</h5>
//                   <p className="card-text">₹1200</p>
//                   <button className="btn btn-primary">Select</button>
//                 </div>
//               </div>
//             </div>

//             {/* ---------6 */}
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
//               <div className="card shadow-sm" style={{ width: "18rem" }}>
//                 <img 
//                   src="https://buffalojackson.com/cdn/shop/files/ellis-wool-jacket-navy-plaid-and-corduroy-pinhoti-peak-5_900x900_crop_center.jpg?v=1692811855" 
//                   className="card-img-top" 
//                   alt="Wool Jacket" 
//                   style={{ height: "300px", objectFit: "cover" }} 
//                 />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">Wool Jacket</h5>
//                   <p className="card-text">₹1100</p>
//                   <button className="btn btn-primary">Select</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Jacket;

import React from 'react';
import Navbar from '../Navbar/Navbar';
import './jacket.css';
import Footer2 from '../Footer2/Footer2';


const Jacket = () => {
  return (
    <>
      <Navbar />
      
      {/* Banner Section */}
      
      <div className='jct_bg'>
        <h2 className="text-center text-white mb-4">Jeans Collection</h2>
      </div>

      {/* Jackets Cards Section */}
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            {/* Jacket Cards */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/c/u/j/xxl-no-classic-latest-fashion-black-biker-leather-jacket-for-men-original-imagtzbkwz4wjzwb.jpeg?q=90&crop=false" 
                  className="card-img-top" 
                  alt="Leather Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Leather Jacket</h5>
                  <p className="card-text">₹1500</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* Repeat for other jackets */}
            {/* Jacket 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://campussutra.com/cdn/shop/files/AWAJIO23_CSMAWJK060TN_1.jpg?v=1728548252" 
                  className="card-img-top" 
                  alt="Leather Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Leather Jacket</h5>
                  <p className="card-text">₹2500</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>

            {/* Add more jackets here */}
            {/* Jacket 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-5">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img 
                  src="https://m.media-amazon.com/images/I/71zT0tJ2CjL._AC_UY1100_.jpg" 
                  className="card-img-top" 
                  alt="Cargo Winter Jacket" 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Cargo Winter Jacket</h5>
                  <p className="card-text">₹900</p>
                  <button className="btn btn-primary">Select</button>
                </div>
              </div>
            </div>
            {/* More Jackets... */}
          </div>
        </div>
      </div>

      <Footer2/>
    </>
  );
};

export default Jacket;
