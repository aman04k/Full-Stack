// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    let count = useSelector(state => state.count)
    let dispatch = useDispatch()
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>

    </div>
  )
}

export default Counter