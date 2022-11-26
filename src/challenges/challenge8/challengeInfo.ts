export const description = `
<h1 class='text-xl'>Grid</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Create a 20*20 grid that when clicked on a cell it will change the background color.
Every cell will have size of: 
- width: 30px 
- height: 30px
</pre></code>
`;

export const code = `
.grid {
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    height: 100%;
    min-height: 400px;
    justify-content: center;
    display: flex;
}
.row {
    height: 100%;
    cursor: pointer;
}
.cell {
    border: 1px solid white;
}

import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";

const BOARD_SIZE = 20;
// Returns an array [0, 1, 2, ..., length-1]
const range = (length: number) => Array.from({ length: length }, (_, i) => i)

export default function Grid() {
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
`.trim();
