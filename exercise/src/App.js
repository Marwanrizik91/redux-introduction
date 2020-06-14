import React from 'react';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'
import { useSelector } from 'react-redux'

function App() {

  const totalItemsPrice = useSelector(state => state.productReducer.price)
  console.log(totalItemsPrice)

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
