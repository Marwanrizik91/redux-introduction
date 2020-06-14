import React from 'react'
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { incrementProduct, decrementProduct } from '../../redux/actions'



const Cart = () => {
    // the value of this variable needs to come from the redux state

    const dispatch = useDispatch()

    const products = useSelector(state => state.productReducer.items)

    return (
        <div className="cart">
            {products.map(({name, quantity}) => (
                <div className="cart-item">
                    <span className="cart-item-name">
                        {name}
                    </span>
                    <div className="quantity-container">
                        <button className="quantity-control" onClick={() => dispatch(decrementProduct(name))}>-</button>
                        <span style={{ fontSize: '20px' }}>{quantity}</span>
                        <button className="quantity-control" onClick={() => dispatch(incrementProduct(name))}>+</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart