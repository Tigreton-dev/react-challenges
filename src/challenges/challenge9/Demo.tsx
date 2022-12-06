import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";

export default function Demo() {
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
        console.log(`Access state by using ref: ${myStateRef.current}`);
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
