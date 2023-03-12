import { useState, useEffect } from "react";

const Demo = () => {
    const [counter, setCounter] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => {
                if (counter === 10) return 0;
                return ++counter;
            })
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(toggle => !toggle)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="text-6xl text-center border-solid border border-neutral-800 text-white bg-black rounded-xl p-8 min-h-[400px]">
            <h1 style={{ color: toggle ? 'red' : 'white' }}>{counter}</h1>
            <h1>{toggle ? 'this is one text' : 'other text'}</h1>
        </div>
    )
}

export default Demo;