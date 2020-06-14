import React from 'react'
import './style.css'
import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/actions'

const Products = () => {

    const dispatch = useDispatch()

    const products = [
        { name: 'Banana', price: 1 },
        { name: 'Potato', price: 100 },
        { name: 'Chill pill', price: 99 },
        { name: 'Milk', price: 5.60 },
        { name: 'Coffee', price: 12 }
    ]

    // clicking on a product would add it to the cart if it 
    // already is in the cart then increase the quantity
    return (
        <div className="products-list">
            {products.map((product) => (
                <div onClick={() => dispatch(addProduct(product))} className="product">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}₪</span>
                </div>
            ))}
        </div>
    )
}

export default Products