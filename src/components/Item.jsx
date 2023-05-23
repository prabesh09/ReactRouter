import React from 'react'
import '../styles/Order.css'

const Item = (props) => {
    return (
        <div className='item-content'>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
            <h2 className='price'>{props.price}</h2>
            <button className='cart-btn'>Add to cart</button>
        </div>
    )
}

export default Item