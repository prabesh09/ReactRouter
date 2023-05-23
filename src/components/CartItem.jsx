import React from 'react'
import '../styles/Cart.css'

const CartItem = (props) => {
    return (
        <div className='cart-item'>
            <h1>{props.value}</h1>
            <h1>{props.quantity}</h1>
            <h1>{props.price}</h1>
            <h1>{props.total}</h1>
        </div>
    )
}

export default CartItem