import React from "react";
import "./Demo.css";

const range = (length: number) => Array.from({ length: length }, (_, i) => null)

export default function Demo() {
    const [squares, setSquares] = React.useState<Array<null | string>>(range(9))
    const [player, setPlayer] = React.useState('X')
    const [winner, setWinner] = React.useState(false)
    const [isTieGame, setIsTieGame] = React.useState(false)

    const selectSquare = (num: number) => {
        const newSquares = [...squares]
        if (newSquares[num] !== null || winner) return
        newSquares[num] = player
        const isWinner = displyWin(newSquares)
        if (isWinner) {
            setWinner(displyWin(newSquares))
            setSquares(newSquares)
        } else {
            setSquares(newSquares)
            const newPlayer = player === 'X' ? 'O' : 'X'
            setPlayer(newPlayer)
        }
        setIsTieGame(isTie(newSquares))
    }

    const displyWin = (newSquares: Array<null | string>) => {
        const winningRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        return winningRows.some(row => {
            return row.every(element => newSquares[element] === player)
        })
    }

    const isTie = (newSquares: Array<null | string>) => {
        return newSquares.every(val => val !== null)
    }

    const resetHandler = () => {
        setSquares(range(9))
        setWinner(false)
        setPlayer('X')
    }

    return (
        <div className="tikTakToeContainer">
            {isTieGame ? <h1>Tie Game!</h1> : winner ? <h1>Player {player} Wins!</h1> : <h1>Player: {player} Turn</h1>}
            <div className="tikTakToe">
                <button onClick={() => selectSquare(0)}>{squares[0]}</button>
                <button onClick={() => selectSquare(1)}>{squares[1]}</button>
                <button onClick={() => selectSquare(2)}>{squares[2]}</button>

                <button onClick={() => selectSquare(3)}>{squares[3]}</button>
                <button onClick={() => selectSquare(4)}>{squares[4]}</button>
                <button onClick={() => selectSquare(5)}>{squares[5]}</button>

                <button onClick={() => selectSquare(6)}>{squares[6]}</button>
                <button onClick={() => selectSquare(7)}>{squares[7]}</button>
                <button onClick={() => selectSquare(8)}>{squares[8]}</button>
            </div>
            <button id="tikTakToe-restart" onClick={() => resetHandler()}>Restart Game</button>
        </div>
    );
}



