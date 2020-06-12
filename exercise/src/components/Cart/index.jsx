import React from 'react'
import './style.css'

const Cart = () => {
    // the value of this variable needs to come from the redux state
    const addedProducts = [{ name: 'Banana', quantity: 2, price: 10 }]

    return (
        <div className="cart">
            {addedProducts.map((product) => (
                <div className="cart-item">
                    <span className="cart-item-name">
                        {product.name}
                    </span>
                    <div className="quantity-container">
                        <button className="quantity-control" onClick={() => 1}>-</button>
                        <span style={{ fontSize: '20px' }}>{product.quantity}</span>
                        <button className="quantity-control" onClick={() => 1}>+</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart