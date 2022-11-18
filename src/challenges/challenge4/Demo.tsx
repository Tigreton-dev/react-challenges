import React, { useRef, useState } from "react";

const Demo = () => {
    const containerRef = useRef(null)
    const [size, setSize] = useState({ x: 700, y: 350 })

    const resizeWidth = (mouseDownEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const startSize = size;
        const startPosition = { x: mouseDownEvent.pageX };

        function onMouseMove(mouseMoveEvent: MouseEvent) {
            const updateValue = startSize.x - startPosition.x + mouseMoveEvent.pageX
            if (updateValue > 700) return
            setSize({ x: updateValue, y: size.y });
        }

        function onMouseUp() {
            document.body.removeEventListener("mousemove", onMouseMove);
        }

        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };

    const resizeHeight = (mouseDownEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const startSize = size;
        const startPosition = { y: mouseDownEvent.pageY };

        function onMouseMove(mouseMoveEvent: MouseEvent) {
            setSize({ y: startSize.y - startPosition.y + mouseMoveEvent.pageY, x: size.x });
        }

        function onMouseUp() {
            document.body.removeEventListener("mousemove", onMouseMove);
        }

        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };


    return (
        <div className="relative text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8 min-h-[400px] max-w-[768px] overflow-scroll">
            <div className="flex h-100%">
                <div className="border-solid border-4 border-neutral-800" ref={containerRef} style={{ width: size.x, height: size.y }}>
                    <p className="p-2 text-center">RESIZE DIV</p>
                </div>
                <div className="w-2 neutral-800  bg-neutral-800 rounded-md ml-1 cursor-col-resize relative" onMouseDown={resizeWidth} style={{ height: size.y / 2, transform: 'translateY(-50%)', top: size.y / 2 }}></div>
            </div>
            <div className="h-2 neutral-800  bg-neutral-800 rounded-md mt-1 cursor-ns-resize relative" onMouseDown={resizeHeight} style={{ width: size.x / 2, transform: 'translateX(-50%)', left: size.x / 2 }}></div>
        </div>
    )
}
export default Demo;