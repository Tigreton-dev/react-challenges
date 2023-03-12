import React, { useState, useEffect, useRef, ReactElement } from "react";

const Demo = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [selectedButton, setSelectedButton] = useState<Element | null>(null);
    const [selector, setSelector] = useState<string | null>('');

    useEffect(() => {
        setSelectedButton(ref.current);
        setSelector(ref!.current!.textContent);
    }, [])

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement;
        const textElement = target.textContent as string;
        selectedButton!.classList.remove('bg-orange-700');
        selectedButton!.classList.add('bg-zinc-600');
        target.classList.remove('bg-zinc-600');
        target.classList.add('bg-orange-700');
        setSelector(textElement);
        setSelectedButton(target);
    }

    return (
        <div className="text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8 min-h-[400px]">
            <div className="p-5 bg-zinc-800 rounded-md border border-stone-700 text-center font-bold">
                <button ref={ref} className="p-5 bg-orange-700 rounded-md m-5" onClick={(e) => clickHandler(e)}>Selector 1</button>
                <button className="p-5 bg-zinc-600 rounded-md m-5" onClick={(e) => clickHandler(e)}>Selector 2</button>
                <button className="p-5 bg-zinc-600 rounded-md m-5" onClick={(e) => clickHandler(e)}>Selector 3</button>
                <button className="p-5 bg-zinc-600 rounded-md m-5" onClick={(e) => clickHandler(e)}>Selector 4</button>
            </div>
            <p className="text-center m-5 text-xl">{selector}</p>
        </div>
    );
}

export default Demo;