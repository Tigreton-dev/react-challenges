import React, { useState, useEffect } from "react";

const Challenge1 = () => {
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
                const value =
                    text === "this is one text" ? "another text" : "this is one text";
                return value;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let style = {
        color: "red"
    };
    if (!toggle) {
        style = {
            color: "black"
        };
    }
    return (
        <div className="">
            <h1 style={style}>{counter}</h1>
            <h1>{text}</h1>
            <h1 className="blink_me">CSS Blink</h1>
        </div>
    );
}

export default Challenge1;