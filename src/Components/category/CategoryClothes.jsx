import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';

const cardStyle = {
  width: "100%",  // Allow responsiveness
  maxWidth: "18rem",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
  borderRadius: "10px",
  overflow: "hidden",
  transition: "transform 0.3s linear, box-shadow 0.3s linear",
};

const imgStyle = {
  height: "250px",  
  objectFit: "cover", 
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  width: "100%",  
};

const CategoryClothes = () => { 
  return (
    <div className="container ">
      <div className="m-5">
        <h1 className="text-center">Shop by Categories</h1>
      </div>
      <div className="row g-1 justify-content-center">
        {[
          { img: "https://m.media-amazon.com/images/I/71N1fpdphYL._AC_UY580_.jpg", name: "Jacket", link: "/jacket" },
          { img: "https://triprindia.com/cdn/shop/files/WTD133.1.jpg?v=1718260057", name: "T-shirt", link: "/tshirt" },
          { img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/31660987/2024/12/7/6b9e4944-ff98-4921-9989-afb5bf2518ca1733547766499-DENIMLOOK-Men-Relaxed-Fit-Stretchable-Baggy--Jeans-275173354-2.jpg", name: "Jeans", link: "/jeans" },
          { img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/j/e/t/m-vlmsc-agy03-vida-loca-original-imaghjrhw9gwgatu.jpeg?q=20&crop=false", name: "Shirt", link: "/shirt" },
        ].map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={index}>
            <Link to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card hover-effect" style={cardStyle}>
                <img src={item.img} className="card-img-top" alt={item.name} style={imgStyle} />
                <div className="card-body text-center">
                  <h3 className="card-text">{item.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryClothes;
