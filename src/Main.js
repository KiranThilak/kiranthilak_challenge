import React from 'react'
import burger from "./assets/burger.jpeg"

const Main = (props) => {
  return (
    <div className='card'>
        <img src={props.img} className="card-image"/>
        <div className='card-stats'>
            <h4>{props.name}</h4>
            <p>Price:{props.price}</p>
            
            <button>+</button>
            <button>-</button>
            
        </div>

    </div>
  )
}

export default Main