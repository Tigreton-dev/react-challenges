import * as React from 'react'
import { DataContext } from '../Context'
import { DataContextType } from '../@types.data'
import ComponentB from './ComponentB'

function ComponentA() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType

    const clickHandler = () => {
        updateData({...data, dataA: 'Global data used in component A UPDATED!!!'})
    }

    return (
        <div className="Component">
            <h1>This is component A</h1>
            <h3>{data.dataA}</h3>
            <button onClick={clickHandler}>update Data</button>
            <ComponentB />
        </div>
    )
}

export default ComponentA