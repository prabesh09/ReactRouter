import React from 'react'
import Item from '../components/Item'
import items from '../../public/data/item.json'

const Order = () => {
    return (
        <div className='item-container'>
            {items.map(item =>
                <Item name={item.name} price={item.price} description={item.description} key={item.name} />
            )}
        </div>
    )
}

export default Order