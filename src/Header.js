import React from 'react'
import {IoRestaurantOutline} from 'react-icons/io5';


const Header = () => {
  return (
    <>
    <header className='header'>
      <IoRestaurantOutline style=
      {{
        fontSize: '30px',
        marginRight: "10px",
      }} />
     
        <h2>Food,s Restaurant</h2>

    </header>
    <main>
      <h1 style=
      {{
        fontSize: '40px',
        fontFamily: "sans-serif",
      }}>
        Welcome to Food's Kitchen
      </h1>

      <button style=
      {{
        background: 'royalblue',
        color: "white",
        borderRadius: "3px",
        fontFamily: "roboto",
        border:"none",
        cursor: "pointer",
        fontSize:"13px",
        
      }}>GO TO MENU</button>

    </main>
    </>
  ) 
}

export default Header