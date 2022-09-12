import React from 'react'


const Main = (props) => {
  return (
    <main>
    <div className='card'>
        <img src={props.img} className="card-image" alt='cardimage'/>
        <div className='card-stats'>
            <h4>{props.name}</h4>
            <p>Price:{props.price}</p>
            
            <button>+</button>
            <button style=
      {{
        background: 'grey',
       }}>-</button>
            
        </div>

    </div>
    </main>
  )
}

export default Main