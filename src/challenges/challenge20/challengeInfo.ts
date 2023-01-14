export const description = `
<h1 class='text-xl'>Serial Memory</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Wordle Website - is a place to play the Wordle games that have consistently shown up on informal 
organizations and sites. This is a very basic game with many lines of letters like other word 
puzzle games.

You have 6 lines of letters to figure out the right expression of the day. In the event that you 
fill in an English word and the shade of the line changes to green, it implies you are correct. 
Conversely, in the event that the shading is yellow, this implies the expected word has similar 
letters however is coordinated in another request.

After each season of speculating, the shades of the tiles steadily change to show how you are 
near the right response. The game is almost similar to certain games that expect players to 
eliminate the given numbers and discover the last key.

The game's connection point incorporates 30 separate squares above, coordinated like a table with 
6 lines and 5 sections and tiles of various letters beneath. You can enter 6 words utilizing the 
given letters. As such, you can utilize the initial 5 words to track down hints about their 
letters and the place of the letters. Then, at that point, players triumph ultimately over the 
last opportunity to figure out the final word, and its shading changes to green totally.

Wordle website is a good website to use when you are looking to create content, as it can help 
generate ideas and insight into the subject. It's also very fun and engaging, so you'll want to 
play Wordle often and share your results with your friends!

</pre></code>
`;

export const code = `
.wordle {
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
.wordle-container {
    display: grid;
    grid-template-columns: 50px 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px 50px 50px;
    gap: 10px 10px;
    grid-template-areas:
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . ."
        ". . . . .";
    justify-content: center;
}
.wordle-container div {
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}
.wordle button {
    background: red;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
}

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
`.trim();
