import { useEffect, useState, useRef } from "react"
import './Solution.css'


const Solution = () => {
    const [size, setSize] = useState({ X: 700, Y: 400 })

    const verticalHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const initPos = e.pageX

        function onMouseMove(e: MouseEvent) {
            const currPos = e.pageX
            const difference = currPos - initPos
            const newValue = size.X + difference
            if (newValue > 700) return
            setSize({ X: newValue, Y: size.Y })
        }

        function onMouseUp() {
            window.removeEventListener('mousemove', onMouseMove)
        }

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)
 
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', onMouseUp)
        }
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center font-bold p-8 justify-center">
            <div className="border-4 border-neutral-800 relative" style={{ width: size.X, height: size.Y }}>
                <div onMouseDown={e => verticalHandler(e)} className="w-[8px] h-[50%] bg-red-700 rounded-md absolute right-[-20px] top-[50%] translate-y-[-50%]"></div>
                <div className="w-[50%] h-[8px] bg-red-700 rounded-md absolute bottom-[-20px] left-[50%] translate-x-[-50%]"></div>
            </div>
        </div >
    )
}

export default Solution;