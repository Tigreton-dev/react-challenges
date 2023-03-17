export const description = `
<h1 class='text-xl'>Tik Tak Toe</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Tic Tac Toe is a simple game where two players alternate marking the squares
of a 3x3 board with "X"s and "O"s. The first player marks squares with "X"s,
while the second player marks them with "O"s. The winner of the game is the
first player to get three of their letters in a horizontal, vertical, or
diagonal row. If the board fills up without any player winning, the game
ends in a tie.

you need to create the game with the following instructions:

  - The board has a dynamic heading that's initialized to "Player X Turn", this heading
    always stay updated with whose turn it currently is.
     
  - Nine squares, which are meant to be clicked on by players. The board also has 
    a restart button.

  - When a square is clicked on, an X or an O should
    appear on it, depending on whose turn it currently is. Additionally, the
    square should become disabled until the game is restarted.

  - The dynamic heading should display the winner when there is one. For example,
    if player O won, it should say "Player O Won!".

  - When the game ends with all squares selected with no winner, the game is tie and 
    the dynamic heading should display it. For example, it should say "Tie Game!".
</pre></code>
`;

export const code = `
.tikTakToeContainer {
    text-align: left;
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    overflow: scroll;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.tikTakToeContainer h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
.tikTakToeContainer .tikTakToe {
    width: 50%;
    display: grid;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . .";
}
.tikTakToeContainer button {
    font-size: 50px;
    width: 100%;
    aspect-ratio: 1/1;
    border: 1px solid red;
    border-radius: 8px;
}
#tikTakToe-restart {
  font-size: 20px;
  width:150px;
  height: 80px;
}

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


`.trim();
