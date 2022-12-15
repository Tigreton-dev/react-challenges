export const description = `
<h1 class='text-xl'>Form</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Create a Toggle button
</pre></code>
`;

export const code = `
.toggle {
    text-align: left;
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    min-height: 400px;
    display: flex;
}
.toggle-containerX {
    width: 100px;
    height: 50px;
    margin: auto;
    display: flex;
    cursor: pointer;
    border-radius: 100px;
    background: rgb(144, 144, 144);
    border: 6px solid rgb(144, 144, 144);
    box-sizing:content-box;
    transition: all 0.8s;
}
.toggle-container {
    width: 100%;
    height: 100%;
}
.toggle-container div {
    width: 50%;
    height: 100%;
    background: rgb(38 38 38);
    transform: translateX(0%);
    border-radius: 100%;
    transition: all 0.5s;
}

import React, { useRef, useState } from "react";
import "./Demo.css";

export default function Toggle() {
    const toggleRef = useRef<HTMLInputElement>(null)
    const toggleContainerRef = useRef<HTMLInputElement>(null)
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        if (toggle) {
            setToggle(false)
            toggleRef.current!.style.transform = 'translateX(0%)'
            toggleContainerRef.current!.style.border = '6px solid rgb(144, 144, 144)'
            toggleContainerRef.current!.style.background = 'rgb(144, 144, 144)'
        } else {
            setToggle(true)
            toggleRef.current!.style.transform = 'translateX(100%)'
            toggleContainerRef.current!.style.border = '6px solid rgb(37 99 235)'
            toggleContainerRef.current!.style.background = 'rgb(37 99 235)'
        }
    }

    return (
        <div className="toggle">
            <div className="toggle-containerX" ref={toggleContainerRef} onClick={toggleHandler}>
                <div className="toggle-container">
                    <div ref={toggleRef}></div>
                </div>
            </div>
        </div>
    );
}

`.trim();
