import React from "react";
import './ProductList.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="card">
        <img src="PDT_0663.jpg" className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">Product Name</h5>
          <p className="card-text">Chiếc thuyền bên sông</p>
          <button className="btn btn-primary">Mua</button>
        </div>
      </div>
      {/* Add more products here */}
    </div>
  );
};

export default ProductList;
