import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartItem.css';


const CartItems = () => {
  return (
    <div className="cart-items">
      <h5>Your Cart</h5>
      <ul className="list-group">
        <li className="list-group-item">
          Product 1
          <span className="badge bg-secondary">Quantity: 2</span>
        </li>
        <li className="list-group-item">
          Product 2
          <span className="badge bg-secondary">Quantity: 1</span>
        </li>
        {/* Add more cart items here */}
      </ul>
    </div>
  );
};

export default CartItems;
