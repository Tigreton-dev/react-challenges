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
