// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { GiShoppingCart } from "react-icons/gi";
// import { Link } from "react-router-dom";

// const Navbar = () => { 
//   return (
//     <nav className="navbar navbar-expand-lg  border px-5" >
//       <div className="container-fluid d-flex justify-content-between align-items-center">
        
//         {/* Logo (Left Side) */}
//         <Link className="navbar-brand text-danger text-decoration-none fw-bold fs-5 d-flex align-items-center" to="/">
//           <img
//             src="https://w7.pngwing.com/pngs/583/178/png-transparent-decal-white-tailed-deer-logo-elk-head-animals-leaf-computer-wallpaper-thumbnail.png"
//             style={{ height: "45px", width: "60px", marginRight: "10px" }}
//             alt="logo"
//           />
//           Tiwore Handrix
//         </Link>

//         {/* Navbar Toggler for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Center Links (Men, Offers, New Arrivals) */}
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
//           <ul className="navbar-nav gap-3">
//             <li className="nav-item">
              
//               <Link to='/' className=" nav-link active fw-semibold text-decoration-none">Home
//                  </Link>
//             </li>
//             <li className="nav-item">
             
//               <Link to='/men'  className=" nav-link active fw-semibold text-decoration-none"> Men </Link>
//             </li>
//             <li className="nav-item">
//               <Link to='/newarrival' className=" nav-link active fw-semibold text-decoration-none"> New Arrivals</Link>
//             </li>
//             <li className="nav-item">
//             <Link to='/offers' className=" nav-link active fw-semibold text-decoration-none"> Offers</Link>
              
//             </li>
//           </ul>
//         </div>

//         {/* Login & Cart (Right Side) */}
//         <div className="d-flex gap-3 align-items-center">
//           <GiShoppingCart size={28} />
//           <button type="button" className="btn btn-primary "> <Link to= '/login' className="text-decoration-none text-light"> Login</Link> </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => { 
  return (
    <nav className="navbar navbar-expand-lg border px-3">
      <div className="container-fluid">
        
        {/* Logo (Left Side) */}
        <Link className="navbar-brand text-danger text-decoration-none fw-bold fs-5 d-flex align-items-center" to="/">
          <img
            src="https://w7.pngwing.com/pngs/583/178/png-transparent-decal-white-tailed-deer-logo-elk-head-animals-leaf-computer-wallpaper-thumbnail.png"
            className="img-fluid w-auto"
            style={{ height: "45px", marginRight: "10px" }}
            alt="logo"
          />
          Tiwore Handrix
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto text-center gap-lg-3">
            <li className="nav-item">
              <Link to="/" className="nav-link active fw-semibold">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link active fw-semibold">Men</Link>
            </li>
            <li className="nav-item">
              <Link to="/newarrival" className="nav-link active fw-semibold">New Arrivals</Link>
            </li>
            <li className="nav-item">
              <Link to="/offers" className="nav-link active fw-semibold">Offers</Link>
            </li>
          </ul>

          {/* Login & Cart (Right Side) */}
          <div className="d-lg-flex gap-3 align-items-center d-none d-lg-block">
            <GiShoppingCart size={28} />
            <button type="button" className="btn btn-primary">
              <Link to="/login" className="text-decoration-none text-light">Login</Link>
            </button>
          </div>
        </div>

        {/* Ensure Cart & Login are visible when collapsed */}
        <div className="d-lg-none mt-2 d-flex justify-content-center gap-3">
          <GiShoppingCart size={28} />
          <button type="button" className="btn btn-primary">
            <Link to="/login" className="text-decoration-none text-light">Login</Link>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
