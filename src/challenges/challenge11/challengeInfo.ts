export const description = `
<h1 class='text-xl'>React Context</h1>
<pre><code>
------------------------------------------------------------------------------------------------

In this coding challenge, the interview might give 
you a React application with multiple nested 
components like the following.

Component “B” is the child component of “A” while 
component “C” and “D” are child components of “B”.

Suppose there is an object in component “A” and it 
is required in “C” and “D”. There are two ways to 
share this object in these nested components without 
using props. The first is by using Redux. But never 
use Redux in such cases where the interviewer wants 
to avoid props because Redux is meant for complex 
projects. Actually, the interviewer is expecting 
“Context” for this coding challenge. 

</pre></code>
`;

export const code = `
.reactContext {
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    height: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.reactContext .Component {
    border: 1px solid white;
    margin: 20px;
    padding: 10px;
}

.reactContext button {
    background: rgb(37 99 235);
    padding: 5px;
    border-radius: 5px;
}

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

import * as React from 'react'
import { DataContextType, IData } from './@types.data'

export const DataContext = React.createContext<DataContextType | null>(null)

const defaultState: IData = {
    dataA: 'Global data used in component A',
    dataB: 'Global data used in component B',
    dataC: 'Global data used in component C',
}

interface Props {
    children: React.ReactNode;
}

const DataProvider: React.FC<Props> = ({ children }) => {
    const [data, setData] = React.useState<IData>(defaultState)

    function updateData(payload: object) {
        setData((data) => {
            return {
                ...data,
                ...payload,
            }
        })
    }

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider


import * as React from 'react'
import DataProvider from './Context'
import ComponentA from './components/ComponentA'
import "./Demo.css";

export default function Demo() {

    return (
        <div className="reactContext">
            <DataProvider>
                <ComponentA />
            </DataProvider>
        </div>
    );
}

`.trim();
