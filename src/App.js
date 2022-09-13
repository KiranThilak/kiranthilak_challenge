import React from "react";
import Header from "./Header";
import Main from "./Main";
import data from "./data";
import Checkout from "./Checkout"
console.log(data)

function App() {
  const cards = data.map(item => {
    return (
        
          <Main 
         image={item.image}
         name = {item.name}
         price = {item.price}
   
         /> 
    )
  })
  return (
    <div className="App">
      <Header /> 
     {cards} 

     <Checkout />

     
     
    </div>
  );
}

export default App;
