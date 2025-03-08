import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterReducer } from '../store/reducers/counter'


const CounterComponent = () => {

    const DispatchData = useDispatch()

    const data = useSelector(state => state) 
    console.log(data)

  return (
    <div>
        <button onClick={() => DispatchData({type: "inc"})} >
            +
        </button>

<h2>
            {data.count}
</h2>
    

        <button onClick={ () => DispatchData({type: "dec"})} >
            -
        </button>

    </div>
  )
}

export default CounterComponent
