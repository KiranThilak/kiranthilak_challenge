import React from 'react'
import burger from "./assets/burger.jpeg"

const Main = () => {
  return (
    <div className='card'>
        <img src={burger} className="card-image"/>
        <div className='card-stats'>
            <h4>Hamburger</h4>
            <p>Price:200</p>
            <button>+</button>
            <button>-</button>

        </div>

    </div>
  )
}

export default Main