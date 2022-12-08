import * as React from 'react'
import { useState } from 'react'

const HigherOrderComponent = (Component, incrementValue) => {
    const HOCFun = () => {
        const [value, setValue] = useState(0)
        const incrementHandler = () => {
            setValue(value + incrementValue)
        }

        return <Component value={value} incrementHandler={incrementHandler} />
    }

    return HOCFun
}

export default HigherOrderComponent
