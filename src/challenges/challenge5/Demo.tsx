import React, { useEffect, useRef, useState } from "react";
import './Demo.css'

const Demo = () => {
    const containerRef = useRef(null)
    const [size, setSize] = useState({ x: 700 })

    const handler = (mouseDownEvent) => {
        const startSize = size;
        const startPosition = { x: mouseDownEvent.pageX };

        function onMouseMove(mouseMoveEvent) {
            setSize(currentSize => ({
                x: startSize.x - startPosition.x + mouseMoveEvent.pageX
            }));
        }
        function onMouseUp() {
            document.body.removeEventListener("mousemove", onMouseMove);
        }

        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };

    return (
        <div className="relative text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8 min-h-[400px] max-w-[768px] overflow-scroll">
            <button className="w-16 h-16 bg-neutral-800 rounded-md m-2">1</button>
            <button className="w-16 h-16 bg-neutral-800 rounded-md m-2">1</button>
            <div className="flex items-stretch">
                <div className="container2" ref={containerRef} style={{ width: size.x }}>
                    <div className="box2"></div>
                    <div className="box2"></div>
                    <div className="box2"></div>

                    <div className="box2"></div>
                    <div className="box2"></div>
                    <div className="box2"></div>

                    <div className="box2"></div>
                    <div className="box2"></div>
                    <div className="box2"></div>
                </div>
                <div className="w-3 my-32 bg-sky-900 bg-neutral-800 rounded-md ml-1 cursor-col-resize" onMouseDown={handler}></div>
            </div>
        </div>
    )
}
export default Demo;