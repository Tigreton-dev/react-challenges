import * as React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const ComponentA = ({ value, incrementHandler }) => {
    return (
        <div>
            <button onClick={incrementHandler}>Increment by 2</button>
            <h2>{value}</h2>
        </div>
    )
}

export default HigherOrderComponent(ComponentA, 2)
