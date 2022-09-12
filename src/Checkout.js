import React from 'react'
import { useState } from 'react';

const Checkout = () => {
const [coke, setCoke] = useState (0);
const handleClick = () => {
    
}

  return (
    <div className='summary'>
        <h3>Order Summary</h3>

        <h4>Coke: </h4>
        <button className='blue-button'>+</button>
        <button className='pink-button'>-</button>


        <h4>Fries: </h4>
        <button className='blue-button'>+</button>
        <button className='pink-button'>-</button>

        <h4>Total (INR): </h4>
        <button className='save-button'>SAVE AND CHECKOUT</button>
        <button className='cancel-button'>CANCEL</button>
    </div>
  )
}

export default Checkout