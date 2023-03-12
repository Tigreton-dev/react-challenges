import { useEffect, useState } from "react"
import './Solution.css'

const range = (NUM_COL: number, NUM_ROW: number) => Array(NUM_COL).fill(null).map(() => Array(NUM_ROW).fill(null))
const range2 = (length: number) => Array.from({ length: length }, (_, i) => i)

const Solution = () => {
    const [grid, setGrid] = useState<Array<any>>([])

    useEffect(() => {
        setGrid(range(20, 20))
    }, [])

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDialogElement
        target.style.background = 'green'
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center text-sm font-bold p-8 flex justify-center items-center">
            {grid.map((col) => {
                return (
                    <div className="w-[25px] cursor-pointer">
                        {col.map(() => <div className="border w-[25px] h-[25px]" onClick={(e) => clickHandler(e)}></div>)}
                    </div>
                )
            })}
        </div >
    )
}

export default Solution;

