import React, { useState } from "react";

const Demo = () => {
    const [size, setSize] = useState({ X: 700, Y: 400 })

    const resizeRightHandler = (mouseDownEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const startSize = size;
        const startPosition = { X: mouseDownEvent.pageX };

        function onMouseMove(mouseMoveEvent: MouseEvent) {
            const currentMousePosition = mouseMoveEvent.pageX - startPosition.X
            const updateValue = startSize.X + currentMousePosition
            if (updateValue > 700) return
            setSize({ X: updateValue, Y: size.Y });
        }

        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp, { once: true });
    };

    const resizeUpHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const initialPosition = e.pageY

        const onMouseMove = (e: MouseEvent) => {
            const currentMousePosition = e.pageY - initialPosition
            const updateValue = size.Y + currentMousePosition
            setSize({ X: size.X, Y: updateValue })
        }

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove)
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center text-sm font-bold p-8">
            <div className="border-solid border-4 border-neutral-800 h-[300px] relative" style={{ width: size.X, height: size.Y }}>
                <div onMouseDown={(e) => resizeRightHandler(e)} className="w-[8px] h-[50%] bg-neutral-800 rounded-md cursor-col-resize absolute right-[-15px] top-[50%] translate-y-[-50%]"></div>
                <div onMouseDown={(e) => resizeUpHandler(e)} className="w-[50%] h-[8px] bg-neutral-800 rounded-md cursor-ns-resize absolute bottom-[-15px] left-[50%] translate-x-[-50%]"></div>
            </div>
        </div >
    )
}

export default Demo;