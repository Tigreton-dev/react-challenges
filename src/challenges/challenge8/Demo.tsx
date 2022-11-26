import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";

const BOARD_SIZE = 20;
// Returns an array [0, 1, 2, ..., length-1]
const range = (length: number) => Array.from({ length: length }, (_, i) => i)

export default function Demo() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [gridRange, setGridRange] = useState<number[][]>([[1]])

    useEffect(() => {
        // - SET THE ROW AND CELLS OF THE BOARD
        const board = range(BOARD_SIZE).map(e => range(BOARD_SIZE))
        setGridRange(board)
    }, [])

    const cellHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        target.style.background = 'green'
    }

    return (
        <div className="grid" ref={containerRef}>
            {gridRange!.map((row, rowIdx) => {
                return (
                    <div key={rowIdx} className="row">
                        {row.map((cell, cellIdx) => (
                            <div
                                key={cellIdx}
                                className='cell'
                                style={{ height: '30px', width: '30px' }}
                                onClick={e => cellHandler(e)}
                            ></div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
