import React from 'react'
import { useState } from 'react';

  const Checkout = () => {
  const [count1, setCount1] = useState (0);


  const add1 = () => {

      setCount1(count1 + 1)

  }
  const subtract1 = () => {
      setCount1(count1 - 1)
  }

  const [count2, setCount2] = useState (0);
  const add2 = () => {

    setCount2(count2 + 1)

  }
  const subtract2 = () => {
    setCount2(count2 - 1)
  }

  return (
    <div className='summarys'>
        <h3>Order Summary.</h3>

        <h4>Coke:{count1}  </h4>
        <button className='blue-button' onClick={add1}>+</button>
        <button className='pink-button' onClick={subtract1}>-</button>


        <h4>Fries:{count2} </h4>
        <button className='blue-button' onClick={add2}>+</button>
        <button className='pink-button' onClick={subtract2}>-</button>

        <h4>Total (INR): </h4>
        <button className='save-button'>SAVE AND CHECKOUT</button>
        <button className='cancel-button'>CANCEL</button>
    </div>
  )
}

export default Checkout