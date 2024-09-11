// import React from 'react'
import { useState } from 'react'

const StateObject = () => {
    const [car, setCar] = useState(
        {brand:"bmw",
            color:"red",
            model:"2020",
            fuel:"petrol"}
        )

        const drive = () => {
            setCar((prevState) => {
                return {...prevState, fuel:"diesel", color:"blue"}
            })
        }

  return (
    
    <div>

        <h1>Car Detail</h1>

        <h2>Brand: {car.brand}</h2> 
        <h2>Color: {car.color}</h2> 
        <h2>Model: {car.model}</h2> 
        <h2>Fuel: {car.fuel}</h2> 
        <button onClick={drive}>Drive</button>
    </div>


   

  )
}

export default StateObject