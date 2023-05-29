import React from "react";
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="mb-1">Shopping cart</p>
          <p className="mb-0">You have 4 items in your cart</p>
        </div>
        <div>
          <p className="mb-0">
            <span className="text-muted">Sort by:</span>{" "}
            <a href="#!" className="text-body">
              price <i className="fas fa-angle-down mt-1"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;