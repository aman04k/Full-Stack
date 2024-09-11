// import React from 'react'

const Event = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }
  return (
    <div>

        
        <h1 id="text"></h1>
        
        <img id="img" src="" alt="" />
        <p id="para"></p>
        
        <button onClick={() => document.getElementById("img").src = "https://picsum.photos/200"}>Image Show</button>

        <button onClick={() => handleClick("button was clicked")}> Click here</button>

        <button onMouseOver={() => document.getElementById("para").innerHTML = "hello"}>Mouse hover</button> 
    
  


        
        
        <button onClick={handleClick}>Click Me</button>
        

    </div>
  )
}

export default Event