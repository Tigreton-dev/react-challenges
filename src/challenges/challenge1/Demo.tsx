import React, { useState, useEffect } from "react";

const Demo = () => {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("this is one text");
    const [counter, setCounter] = useState(0);

    //COUNTER EVERY 1 SECOND
    useEffect(() => {
        const interval = setInterval(() => {
            counter < 10 ? setCounter(counter + 1) : setCounter(0);
        }, 1000);

        return () => clearInterval(interval);
    }, [counter]);

    //TOGGLE EVERY 1 SECOND
    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(toggle => !toggle);
            setText(text => {
                const value = text === "this is one text" ? "another text" : "this is one text";
                return value
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-6xl text-center border-solid border border-neutral-800 text-white bg-black rounded-xl p-8 min-h-[400px]">
            <h1 style={toggle ? { color: 'red' } : { color: "white" }}>{counter}</h1>
            <h1>{text}</h1>
        </div>
    );
}

export default Demo;