import React, { useState } from "react";
import "./Demo.css";

/**
 * Fisher-Yates Algorithm
 * Algorithm for shuffle an array
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
const shuffleArray = (array: Array<Number>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


const createCombinations = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8]
    shuffleArray(nums)
    let combinations = []
    for (let i = 0; i < nums.length; i++) {
        combinations.push([nums[i], nums[i + 1]])
        i++
    }

    return combinations
}

export default function Demo() {
    const colors = ['red', 'yellow', 'blue', 'green']
    const [combinations] = useState(createCombinations())
    const [currentVal, setCurrentVal] = useState<null | Number>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const timerEnable = React.useRef(false)

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, number: Number) => {
        if (timerEnable.current) return
        combinations.map((element, i) => {
            if (element.some(e => e === number)) {
                const target = e.target as HTMLButtonElement
                target.style.background = colors[i]
                if (currentVal === null) setCurrentVal(i)
                if (currentVal !== null && currentVal !== i) {
                    timerEnable.current = true
                    setTimeout(() => {
                        Array.from(containerRef.current!.querySelectorAll('button')).forEach((el: HTMLButtonElement) => {
                            el.style.background = 'white'
                        })
                        setCurrentVal(null)
                        timerEnable.current = false
                    }, 1000)

                }
                if (currentVal !== null && currentVal === i) setCurrentVal(null)
            }
        })
    }

    return (
        <div className="tikTakToeContainer" ref={containerRef}>
            <div>
                <button onClick={(e) => clickHandler(e, 1)}></button>
                <button onClick={(e) => clickHandler(e, 2)}></button>
                <button onClick={(e) => clickHandler(e, 3)}></button>
                <button onClick={(e) => clickHandler(e, 4)}></button>
            </div>
            <div>
                <button onClick={(e) => clickHandler(e, 5)}></button>
                <button onClick={(e) => clickHandler(e, 6)}></button>
                <button onClick={(e) => clickHandler(e, 7)}></button>
                <button onClick={(e) => clickHandler(e, 8)}></button>
            </div>
        </div>
    );
}



