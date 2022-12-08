import * as React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const ComponentC = ({ value, incrementHandler }) => {
    return (
        <div>
            <button onClick={incrementHandler}>Increment by 200</button>
            <h2>{value}</h2>
        </div>
    )
}

export default HigherOrderComponent(ComponentC, 200)
