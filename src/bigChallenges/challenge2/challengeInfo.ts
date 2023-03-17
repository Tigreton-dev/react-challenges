export const description = `
<h1 class='text-xl'>Count Down</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Create a CountDown that display the time in format: DD:HH:MM:SS
add buttons from 0 to 9 to be able to set new time.
add a clear button that will remove all values and set de countdown with 00:00:00:00
add set button to set the countdown
add stop and start button to pause and start the countdown
add reset button to reset the countdown.

The countDown should work as follow:
- when introduce numbers, it will start from left to right "from seconds to days"
- when clicked to set button it will transform the values on the display to correct DD:HH:MM:SS format.
- When clicked to start it will start de countdown and if stop is clicked it will pause it.
- the reset button will reset the value with the value that was set.
- The clear button will clear de countDown to their initial value 00:00:00:00
</pre></code>
`;

export const code = `
.CenterElements {
    text-align: left;
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.CenterElements .screen {
    border: 1px solid red;
    width: 50%;
    text-align: center;
    font-size: 55px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.CenterElements .container {
    width: 50%;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 8px 8px; 
    grid-template-areas: 
      ". . . . . ."
      ". . . . . ."
      "aa aa . bb bb cc"; 
}
.CenterElements .container button {
    border: 1px solid red;
    border-radius: 5px;
    font-size: 22px;
}
.CenterElements .aa { grid-area: aa; }
.CenterElements .bb { grid-area: bb; }
.CenterElements .cc { grid-area: cc; }

import { useEffect, useRef, useState } from "react";

export const useCountDown: (
    ms?: number
) => [number, (number: number) => void, () => void, () => void, () => void] = (
    ms: number = 1000
) => {
    const [initVal, setInitVal] = useState(0);
    const [counter, setCountDown] = useState(0);
    const [startCountDown, setStartCountDown] = useState(false);

    const intervalId = useRef<number>();
    const set: (val: number) => void = (val: number) => {
        setCountDown(val);
        setInitVal(val);
    };
    const start: () => void = () => setStartCountDown(true);
    const pause: () => void = () => setStartCountDown(false);
    const reset: () => void = () => {
        clearInterval(intervalId.current);
        setStartCountDown(false);
        setCountDown(initVal);
    };

    useEffect(() => {
        intervalId.current = setInterval(() => {
            startCountDown &&
                counter > 0 &&
                setCountDown((counter) => counter - 1);
        }, ms);
        // Clear interval when count to zero
        if (counter === 0) clearInterval(intervalId.current);
        // Clear interval when unmount
        return () => clearInterval(intervalId.current);
    }, [startCountDown, counter, ms]);

    return [counter, set, start, pause, reset];
};

import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";
import { useCountDown } from "./useCountDown";

export default function Demo() {
    const [screen, setScreen] = useState([0, 0, 0, 0, 0, 0, 0, 0])
    const [pointer, setPointer] = useState(0)
    const [counter, set, start, pause, reset] = useCountDown(1000);

    useEffect(() => {
        const { days, hours, minutes, seconds } = secondsToTime(counter)
        const time = { days, hours, minutes, seconds }
        updateScreen(time)
    }, [counter])

    const updateScreen = (time: object) => {
        const { days, hours, minutes, seconds } = time
        const daysString = days > 9 ? String(days) : '0' + days;
        const hoursString = hours > 9 ? String(hours) : '0' + hours
        const minutesString = minutes > 9 ? String(minutes) : '0' + minutes
        const secondsString = seconds > 9 ? String(seconds) : '0' + seconds

        setScreen([
            Number(daysString[0]),
            Number(daysString[1]),
            Number(hoursString[0]),
            Number(hoursString[1]),
            Number(minutesString[0]),
            Number(minutesString[1]),
            Number(secondsString[0]),
            Number(secondsString[1]),
        ])
    }

    const secondsToTime = (seconds: number) => {
        //days 
        const days = Math.floor(seconds / (24 * 3600));
        seconds -= days * 24 * 3600;
        //hours 
        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        //minutes 
        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        return { days, hours, minutes, seconds }
    }

    const timeToSeconds = (d: number, h: number, m: number, s: number) => {
        d <= 0 ? d = 1 : d = d * 24 * 60 * 60;
        h <= 0 ? h = 1 : h = h * 60 * 60;
        m <= 0 ? m = 1 : m = m * 60;
        s <= 0 ? s = 1 : s = s;

        return d + h + m + s;
    }

    const getTime = () => {
        const seconds = ((screen[6] * 10) + screen[7]) % 60

        const addMinutes = Math.floor(((screen[6] * 10) + screen[7]) / 60)
        const minutes = ((screen[4] * 10) + screen[5] + addMinutes) % 60

        const addHours = Math.floor(((screen[4] * 10) + screen[5] + addMinutes) / 60)
        const hours = ((screen[2] * 10) + screen[3] + addHours) % 24

        const addDays = Math.floor(((screen[2] * 10) + screen[3] + addHours) / 24)
        const days = (screen[0] * 10) + screen[1] + addDays

        return { days, hours, minutes, seconds }
    }

    const clickHandler = (num: number) => {
        if (pointer === 8) return
        const updateTime = [...screen]
        updateTime.push(num)
        updateTime.shift()
        setScreen(updateTime)
        setPointer(pointer => pointer + 1)
    }

    const setHandler = () => {
        const { days, hours, minutes, seconds } = getTime()
        const time = { days, hours, minutes, seconds }
        updateScreen(time)
        const timeInSeconds = timeToSeconds(days, hours, minutes, seconds)
        set(timeInSeconds)
        setPointer(0)
    }

    const clearHandler = () => {
        setScreen([0, 0, 0, 0, 0, 0, 0, 0])
        set(0)
    }

    return (
        <div className="CenterElements">
            <div className="screen">
                <p>{screen[0]}{screen[1]}:{screen[2]}{screen[3]}:{screen[4]}{screen[5]}:{screen[6]}{screen[7]}</p>
            </div>
            <div className="container">
                <button onClick={() => clickHandler(0)}>0</button>
                <button onClick={() => clickHandler(1)}>1</button>
                <button onClick={() => clickHandler(2)}>2</button>
                <button onClick={() => clickHandler(3)}>3</button>
                <button onClick={() => clickHandler(4)}>4</button>
                <button onClick={setHandler}>SET</button>

                <button onClick={() => clickHandler(5)}>5</button>
                <button onClick={() => clickHandler(6)}>6</button>
                <button onClick={() => clickHandler(7)}>7</button>
                <button onClick={() => clickHandler(8)}>8</button>
                <button onClick={() => clickHandler(9)}>9</button>
                <button onClick={clearHandler}>CLEAR</button>

                <button className="aa" onClick={reset}>RESET</button>
                <button className="bb" onClick={start}>START</button>
                <button className="cc" onClick={pause}>STOP</button>
            </div>
        </div>
    );
}

`.trim();
