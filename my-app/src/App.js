
import './App.css';
import React from 'react';
import Header from './components/Header';
import CartItems from './components/CartIems';
import ProductList from './components/ProductList';
import CartTotal from './components/CartTotal';



const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <CartItems />
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
