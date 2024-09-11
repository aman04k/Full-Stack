// import React from 'react'
import { useState } from 'react'
const EventHandl = () => {
    // const [count, setCount] = useState(0)
     
    const [state, setState] = useState(0)

    function increaseState() {
        setState(state + 1)
    }

    let count = 0

    function handleClick(e) {
        console.log(e)
        alert("Button Clicked")
    }

     function showMsg(msg) {
         alert(msg)
     }

     function increase() {
       
         count = count + 1
     }
  return (
    <div>
      <button onClick={handleClick}>Click here</button>
      <button onClick={increaseState}>increaseState</button>
      <button onClick={() => showMsg("hello")}>Click with message</button>
      {/* <button onClick={() => increase}>increase</button> */}

      <button onClick={increase}>increase</button>
      <p>State is {state}</p>
      <p>{count}</p>
    </div>
  )
}

export default EventHandl
