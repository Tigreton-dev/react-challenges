export const description = `
<h1 class='text-xl'>Connect four</h1>
<pre><code>
------------------------------------------------------------------------------------------------


connect four...


</pre></code>
`;

export const code = `
.connectFour {
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    overflow: scroll;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.connectFour-container {
    display: flex;
}
.connectFour-col {
    height: 100%;
    width: 50px;
}
.connectFour-row {
    height: 50px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}
.connectFour button {
    background: red;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
}
.circleRed {
    width: 30px;
    height: 30px;
    background: red;
    border-radius: 50%;
}
.circleBlue {
    width: 30px;
    height: 30px;
    background: blue;
    border-radius: 50%;
}


import React, { useRef, useState } from "react";
import "./Demo.css";

const NUM_COL = 6;
const NUM_ROW = 7;
const NUM_TO_WIN = 4;

const createGrid = (COLS: number, ROWS: number) => Array(COLS).fill(null).map(() => Array(ROWS).fill(null));

export default function Demo() {
    const [table, setTable] = useState<any>(createGrid(NUM_COL, NUM_ROW))
    const rowsIndex = useRef([6, 6, 6, 6, 6, 6])
    const containerRef = useRef(null)
    const currentPlayer = useRef(1)
    const currentColumIndex = useRef<null | number>(null)
    const [win, setWin] = useState(false)

    const clickHandler = (colIndex: number) => {
        if (win) return
        currentColumIndex.current = colIndex;
        const tableCopy = [...table]
        const circleClass = currentPlayer.current === 1 ? "circleRed" : 'circleBlue'
        const rowIndex = rowsIndex.current[colIndex]
        tableCopy[colIndex][rowIndex] = circleClass
        setTable(tableCopy)
        const result = handleWin(tableCopy, rowsIndex.current, currentColumIndex.current, currentPlayer.current)
        if (result) {
            setWin(true)
        } else {
            rowsIndex.current[currentColumIndex.current] = rowsIndex.current[currentColumIndex.current] - 1;
            currentPlayer.current = currentPlayer.current === 1 ? 2 : 1
        }
    }

    const resetHandler = () => {
        rowsIndex.current = [6, 6, 6, 6, 6, 6]
        setTable(createGrid(NUM_COL, NUM_ROW))
        currentPlayer.current = 1
        currentColumIndex.current = null
        setWin(false)
    }

    return (
        <div className="connectFour">
            {win && <h1>Winner player {currentPlayer.current}</h1>}
            <div className="connectFour-container" ref={containerRef}>
                {table.map((col: Array<any>, index: number) => {
                    return (
                        <div className="connectFour-col" key={index} onClick={() => clickHandler(index)}>
                            {col.map((row, i) => <div className="connectFour-row" key={i}><span className={row}></span></div>)}
                        </div>
                    )
                })}
            </div>
            <button onClick={() => resetHandler()}>Reset</button>
        </div>
    );
}

function handleWin(table: Array<any>, colsIndex: Array<any>, currentIndex: number, currentPlayer: number) {
    const currentRow = colsIndex[currentIndex]
    const currentCol = currentIndex;
    const circleClass = currentPlayer === 1 ? "circleRed" : 'circleBlue'

    const isHorizontalMatch = didWin(currentRow, currentCol, 1, 0, table, circleClass)
    const isVerticalMatch = didWin(currentRow, currentCol, 0, 1, table, circleClass)
    const isDiagonalLeftMatch = didWin(currentRow, currentCol, 1, 1, table, circleClass)
    const isDiagonalRightMatch = didWin(currentRow, currentCol, -1, 1, table, circleClass)

    return isHorizontalMatch || isVerticalMatch || isDiagonalLeftMatch || isDiagonalRightMatch
}

function didWin(startingRow: number, startingCol: number, rowIncrement: number, colIncrement: number, board: Array<any>, currentPlayer: string) {
    let numInARow = 0;
    let currRow = startingRow;
    let currCol = startingCol;
    while (currCol < NUM_COL && currRow >= 0 && board[currCol][currRow] === currentPlayer) {
        numInARow++;
        currRow += rowIncrement;
        currCol += colIncrement;
    }
    currRow = startingRow - rowIncrement;
    currCol = startingCol - colIncrement;
    while (currCol >= 0 && currRow >= 0 && board[currCol][currRow] === currentPlayer) {
        numInARow++;
        currRow -= rowIncrement;
        currCol -= colIncrement;
    }
    return numInARow >= NUM_TO_WIN;
}
`.trim();
