export const description = `
<h1 class='text-xl'>React Context</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Higher-Order Component is an advanced technique used 
by developers for reusing a component’s logic. 
Reusing code is an important skill that React 
experts should have. The major reason to have 
reusability is code optimization. 


In this coding challenge, you might be asked to 
create three different components that have similar 
component logic. So you have to create a Higher-Order 
Component that will have the component logic and it 
will be reused by the other three components. 


For this challenge, you have three components, each 
containing a button that increments the value in the 
state by a specific number. Suppose, three components 
are:
    “ComponentA” where the button increments the value by two.
    “ComponentB” where the button increments the value by twenty.
    “ComponentC” where the button increments the value by two hundred.


</pre></code>
`;

export const code = `
.reactHOC {
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
.reactHOC .Component {
    border: 1px solid white;
    margin: 20px;
    padding: 10px;
}

.reactHOC button {
    background: rgb(37 99 235);
    padding: 5px;
    border-radius: 5px;
}

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


import * as React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const ComponentB = ({ value, incrementHandler }) => {
    return (
        <div>
            <button onClick={incrementHandler}>Increment by 29</button>
            <h2>{value}</h2>
        </div>
    )
}

export default HigherOrderComponent(ComponentB, 20)


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


import * as React from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import "./Demo.css";

export default function Demo() {

    return (
        <div className="reactHOC">
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
    );
}

`.trim();
