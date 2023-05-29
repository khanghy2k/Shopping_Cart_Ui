import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CartTotal = () => {
  return (
    <div className="cart-total">
      <h5>Cart Total</h5>
      <p>Total Quantity: 3</p>
      <p>Total Value: $100</p>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
};

export default CartTotal;
