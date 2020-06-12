import React from 'react';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  const totalPrice = 20

  return (
    <div className="App">
      <h1>WebAhead store</h1>
      <div style={{ fontSize: '20px', marginBottom: '20px' }}>
        Total price: {totalPrice}₪
      </div>
      <Cart />
      <Products />
    </div>
  );
}

export default App;
