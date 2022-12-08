import * as React from 'react'
import { DataContext } from '../Context'
import { DataContextType } from '../@types.data'

function ComponentC() {
    const { data, updateData } = React.useContext(DataContext) as DataContextType

    const clickHandler = () => {
        updateData({...data, dataC: 'Global data used in component C UPDATED!!!'})
    }

    return (
        <div className="Component">
            <h1>This is component C</h1>
            <h3>{data.dataC}</h3>
            <button onClick={clickHandler}>update Data</button>
        </div>
    )
}

export default ComponentC