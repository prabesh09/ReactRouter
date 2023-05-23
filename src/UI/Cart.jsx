import React from 'react'
import '../styles/Cart.css'
import CartItem from '../components/CartItem'

const Cart = () => {
    return (
        <>
            <div className='cart-header'>
                <h1>Item</h1>
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Total</h1>
            </div>
            <CartItem value="Iphone 7" quantity="5" price="1999" total="4996" />
            <CartItem value="Iphone 8 " quantity="9" price="2000" total="5996" />
            <CartItem value="Iphone 10" quantity="7" price="2345" total="7996" />
            <CartItem value="Iphone 11" quantity="11" price="2555" total="8996" />

            <div className='cart-total'>
                <h1>Total :<span>$10000</span></h1>
                <span>Coupon Code : </span>
                <input type="text" />
            </div>
        </>
    )
}

export default Cart