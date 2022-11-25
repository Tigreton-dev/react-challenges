import React, { useRef, useState } from "react";
import "./Demo.css";

export default function Demo() {
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
