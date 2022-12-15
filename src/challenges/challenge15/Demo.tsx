import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";
import { useCountDown } from "./useCountDown";


export default function Demo() {
    const [time, setTime] = useState([0, 0, 0, 0, 0, 0, 0, 0])
    const [pointer, setPointer] = useState(0)
    const [counter, set, start, pause, reset] = useCountDown(1000);

    useEffect(() => {
        const { daysString, hoursString, minutesString, secondsString } = secondsToDHMS(counter)
        setTime([
            daysString[0],
            daysString[1],
            hoursString[0],
            hoursString[1],
            minutesString[0],
            minutesString[1],
            secondsString[0],
            secondsString[1],
        ])
    }, [counter])

    const clickHandler = (num) => {
        if (pointer === 8) return
        const updateTime = [...time]
        updateTime.push(num)
        updateTime.shift()
        setTime(updateTime)
        setPointer(pointer => pointer + 1)
    }

    function secondsToDHMS(seconds: number) {
        //days 
        let days = Math.floor(seconds / (24 * 3600));
        seconds -= days * 24 * 3600;
        //hours 
        let hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        //minutes 
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        const daysString = days > 9 ? String(days) : '0' + days;
        const hoursString = hours > 9 ? String(hours) : '0' + hours
        const minutesString = minutes > 9 ? String(minutes) : '0' + minutes
        const secondsString = seconds > 9 ? String(seconds) : '0' + seconds

        return { daysString, hoursString, minutesString, secondsString }
    }

    function DHMStoSeconds(d, h, m, s) {
        d <= 0 ? d = 1 : d = d * 24 * 60 * 60;
        h <= 0 ? h = 1 : h = h * 60 * 60;
        m <= 0 ? m = 1 : m = m * 60;
        s <= 0 ? s = 1 : s = s;

        return d + h + m + s;
    }

    const setHandler = () => {
        const seconds = ((time[6] * 10) + time[7]) % 60
        const secondsString = seconds < 10 ? '0' + String(seconds) : String(seconds)

        const addMinutes = Math.floor(((time[6] * 10) + time[7]) / 60)
        const minutes = ((time[4] * 10) + time[5] + addMinutes) % 60
        const minutesString = minutes < 10 ? '0' + String(minutes) : String(minutes)

        const addHours = Math.floor(((time[4] * 10) + time[5] + addMinutes) / 60)
        const hours = ((time[2] * 10) + time[3] + addHours) % 24
        const hoursString = hours < 10 ? '0' + String(hours) : String(hours)

        const addDays = Math.floor(((time[2] * 10) + time[3] + addHours) / 24)
        const days = (time[0] * 10) + time[1] + addDays
        const daysString = days < 10 ? '0' + String(days) : String(days)

        setTime([
            Number(daysString[0]),
            Number(daysString[1]),
            Number(hoursString[0]),
            Number(hoursString[1]),
            Number(minutesString[0]),
            Number(minutesString[1]),
            Number(secondsString[0]),
            Number(secondsString[1])
        ])
        set(DHMStoSeconds(days, hours, minutes, seconds))
        setPointer(0)
    }

    const clearHandler = () => {
        setTime([0, 0, 0, 0, 0, 0, 0, 0])
        set(0)
    }

    return (
        <div className="CenterElements">
            <div className="screen">
                <p>{time[0]}{time[1]}:{time[2]}{time[3]}:{time[4]}{time[5]}:{time[6]}{time[7]}</p>
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

                <button className="r aa" onClick={reset}>RESET</button>
                <button className="r bb" onClick={start}>START</button>
                <button className="r cc" onClick={pause}>STOP</button>
            </div>
        </div>
    );
}
