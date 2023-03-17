import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";

const range = (length: number) => Array.from({ length: length }, (_, i) => null)

function splitIntoChunk(array: Array<HTMLDivElement>, chunkSize: number) {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk)
    }
    return result
}

export default function Demo() {
    const [words, setWords] = useState(range(30))
    const index = useRef(0)
    const currentLineIndex = useRef(0)
    const containerRef = useRef<null | HTMLDivElement>(null)
    const success = useRef(false)
    const word = 'abcde'
    const [succesS, setSucces] = useState(false)

    const checkCurrentLine = () => {
        if (currentLineIndex.current === 5) currentLineIndex.current = 0
        const divs: Array<HTMLDivElement> = Array.from(containerRef.current!.querySelectorAll('div'))
        const interestDivs = divs.slice(0, index.current)
        const final = splitIntoChunk(interestDivs, 5)
        final.forEach(chunk => {
            let result = ''
            chunk.forEach((element, index) => {
                const textContent = element.textContent as string
                result += textContent
                if (word.includes(textContent)) {
                    element.textContent === word[index] ? element.style.background = 'green' : element.style.background = 'yellow'
                } else {
                    element.style.background = 'red'
                }
            })
            if (result === word) {
                success.current = true
                setSucces(true)
            }
        })
    }

    const removeWord = () => {
        if (index.current === 0 || currentLineIndex.current === 0) return
        const divs = Array.from(containerRef.current!.querySelectorAll('div'))
        divs[index.current - 1].textContent = ''
        index.current--
        currentLineIndex.current--
    }

    const addWord = (key: string) => {
        if (index.current === 30 || currentLineIndex.current === 5) return
        const divs = Array.from(containerRef.current!.querySelectorAll('div'))
        divs[index.current].textContent = key
        currentLineIndex.current++
        index.current++
    }

    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if (success.current) return
            e.stopImmediatePropagation();
            if (e.key === 'Backspace') removeWord()
            else if (e.key === 'Enter') checkCurrentLine()
            else addWord(e.key)
        }
        window.addEventListener('keydown', e => keyHandler(e))

        return () => window.removeEventListener('keydown', e => keyHandler(e))
    }, [])

    const resetHandler = () => {
        const divs = Array.from(containerRef.current!.querySelectorAll('div'))
        divs.forEach(element => {
            element.textContent = null;
            element.style.background = ''
        })
        currentLineIndex.current = 0
        success.current = false
        setSucces(false)
        index.current = 0;
        setWords(range(30))
    }

    return (
        <div className="wordle">
            {succesS && <h1>SUCESSS</h1>}
            <div className="wordle-container" ref={containerRef}>
                {words.map((element, key) => <div key={key}>{element}</div>)}
            </div>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
}