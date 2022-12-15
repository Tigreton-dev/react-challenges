import React, { useEffect, useRef, useState } from "react";
import "./Demo.css";
import { useCountdown } from "./useCountDown";

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default function Demo() {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div className="CenterElements">
            <h1>Countdown Timer</h1>

            <h2>Expires after 3 days!!!</h2>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
    );
}






// ----------------------------------------------------------------------------

// export default function Demo() {
//     const [time, setTime] = useState([0, 0, 0, 0, 0, 0, 0, 0])
//     const [pointer, setPointer] = useState(5)

//     useEffect(() => {
//         // function updateTimer(isoDate) {
//         //     const date = new Date(isoDate);
//         //     setInterval(() => {
//         //         const timeTillDate = date - Date.now();
//         //         const seconds = Math.floor(timeTillDate / 1000);
//         //         const minutes = Math.floor(seconds / 60);
//         //         const hours = Math.floor(minutes / 60);
//         //         setTime({
//         //             seconds: seconds % 60,
//         //             minutes: minutes % 60,
//         //             hours: hours,
//         //         })
//         //     }, 1000);
//         // }
//         // const isodate = new Date().toISOString()
//         // updateTimer(isodate)
//     }, [])

//     const clickHandler = (num) => {
//         setTime(time => {
//             time[pointer - 1] = time[pointer]
//             time[pointer] = num
//             return time
//         })
//         setPointer(pointer => pointer - 1)
//     }

//     return (
//         <div className="CenterElements">
//             <div className="screen">
//                 <p>{time[0]}{time[1]}:{time[2]}{time[3]}:{time[4]}{time[5]}:{time[6]}{time[7]}</p>
//             </div>
//             <div className="container">
//                 <button onClick={() => clickHandler(0)}>0</button>
//                 <button onClick={() => clickHandler(1)}>1</button>
//                 <button onClick={() => clickHandler(2)}>2</button>
//                 <button onClick={() => clickHandler(3)}>3</button>
//                 <button onClick={() => clickHandler(4)}>4</button>
//                 <button>SET</button>

//                 <button onClick={() => clickHandler(5)}>5</button>
//                 <button onClick={() => clickHandler(6)}>6</button>
//                 <button onClick={() => clickHandler(7)}>7</button>
//                 <button onClick={() => clickHandler(8)}>8</button>
//                 <button onClick={() => clickHandler(9)}>9</button>
//                 <button>CLEAR</button>
//             </div>
//         </div>
//     );
// }
