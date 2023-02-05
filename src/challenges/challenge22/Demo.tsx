import React, { useState, useEffect, useRef } from "react";
import "./Demo.css";
import { createGrid, setSnakePosition, handleKeyDown, setFoodPosition, eatFood, isSnkeEat, updateBoard } from './Snake'

export default function Demo() {
    const snake = useRef(setSnakePosition())
    const foodPosition = useRef(setFoodPosition(snake))
    const [board, setBoard] = useState<any>(() => createGrid())
    const [isGameOver, setIsGameOver] = useState(false)
    const interval = useRef<number | undefined>(undefined)
    const direction = useRef('right')
    const notInitialRender = useRef(0)

    // INTERVAL
    useEffect(() => {
        interval.current = setInterval(() => loop(), 100)
        return () => window.clearInterval(interval.current);
    }, [])

    // KEYDOWN LISTENER
    useEffect(() => {
        window.addEventListener("keydown", (event) => direction.current = handleKeyDown(event.keyCode, direction.current));
        return () => window.removeEventListener("keydown", event => handleKeyDown(event.keyCode, direction.current));
    }, []);

    // ON RESET
    useEffect(() => {
        if (notInitialRender.current > 2) {
            if (!isGameOver) interval.current = setInterval(() => loop(), 100)
        } else {
            notInitialRender.current = notInitialRender.current + 1
        }
    }, [isGameOver])

    const loop = () => {
        const isFoodEaten = eatFood(snake.current, foodPosition.current, direction.current)
        if (isFoodEaten !== null) {
            snake.current.push(isFoodEaten)
            foodPosition.current = setFoodPosition(snake);
        }
        const { newBoard, newPosSnake } = updateBoard(board, snake.current, direction.current, foodPosition.current)
        setBoard(newBoard)
        snake.current = newPosSnake
        if (isSnkeEat(snake.current[0], snake.current)) {
            setIsGameOver(true);
            window.clearInterval(interval.current);
        }
    }

    const resetGame = () => {
        setBoard(createGrid())
        snake.current = setSnakePosition()
        foodPosition.current = setFoodPosition(snake)
        direction.current = 'right'
        setIsGameOver(false)
    }

    return (
        <div className="snake">
            <div className="snake-container">
                {board.map((col: Array<any>, index: number) => {
                    return (
                        <div className="snake-col" key={index}>
                            {col.map((row, i) => <div className={`snake-row ${row}`} key={i}></div>)}
                        </div>
                    )
                })}
            </div>
            {isGameOver && (
                <div className="snake-gameOver">
                    <p>Game Over</p>
                    <button onClick={() => resetGame()}>Start</button>
                </div>
            )}
        </div>
    );
}