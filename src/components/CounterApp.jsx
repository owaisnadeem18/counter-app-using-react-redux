import React from 'react'
import "./CounterApp.css"
import { useDispatch, useSelector } from 'react-redux'

const CounterApp = () => {

    // Now , use dispatch here 
    const DispatchCount = useDispatch()

    const stateUpdate = useSelector(state => state)

  return (
    <div className='counterAppContainer'>
        <button onClick={() => DispatchCount({type: "inc"})} >
             +
        </button>

        <h2>
            { stateUpdate.count }
        </h2>

        <button onClick={() => DispatchCount({type: "dec"})} >
            -
        </button>

    </div>
  )
}

export default CounterApp
