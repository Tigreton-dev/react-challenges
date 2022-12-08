import * as React from 'react'
import { DataContext } from '../Context'
import { DataContextType } from '../@types.data'
import ComponentC from './ComponentC'

function ComponentB() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType

    const clickHandler = () => {
        updateData({...data, dataB: 'Global data used in component B UPDATED!!!'})
    }

    return (
        <div className="Component">
            <h1>This is component B </h1>
            <h3>{data.dataB}</h3>
            <button onClick={clickHandler}>update Data</button>
           <ComponentC />
        </div>
    )
}

export default ComponentB