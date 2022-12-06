export const description = `
<h1 class='text-xl'>Accessing React State in Event Listeners with useState and useRef hooks</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Create a button that update a state variable of React component.
Create an event listener on windows click and console log the value of the variable state.

NOTE:
If you’re using React hooks in a component with an event listener, your event listener callback 
cannot access the latest state. 

How can you achieve this using hooks?

</pre></code>
`;

export const code = `
.listenerState {
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
.listenerState h1 {
    font-size: 24px;
    margin-bottom: 40px;
}
.listenerState h2 {
    margin-bottom: 40px;
}
.listenerState button {
    background-color: blue;
    padding: 10px 12px;
    border-radius: 5px;
    margin: auto;
}

import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";

export default function ReactEventsState() {
    const [myState, setMyState] = useState(0);
    const myStateRef = useRef(myState);

    const clickHandler = (data: number) => {
        myStateRef.current = data;
        setMyState(data);
    };

    const listener = (e) => {
        e.stopImmediatePropagation()

        setMyState(activePoint => {
            // 1: Access state by using setter function
            console.log('Access state by using setter function: ' + activePoint);
            return activePoint;
        })

        // 2: Access state by using ref
        console.log('Access state by using ref: + myStateRef.current');
    };

    useEffect(() => {
        window.addEventListener("click", (e) => listener(e));

        return window.removeEventListener('click', listener)
    }, []);

    return (
        <div className="listenerState">
            <h1>Accessing React State in Event Listeners</h1>
            <h2>State: {myState}</h2>
            <button onClick={() => clickHandler(myState + 1)}>update state</button>
        </div>
    );
}
`.trim();
