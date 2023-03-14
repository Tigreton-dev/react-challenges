import React, { useState, useRef } from "react";

const Demo = () => {
    const inputValue = useRef('')
    const [robotList, setRobotList] = useState<Array<string>>(["a", "b", "c"]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // prevents page refresh
        setRobotList([...robotList, inputValue.current]);
    };

    return (
        <div className="flex flex-col items-center p-8 text-center border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs min-h-[400px]">
            <form onSubmit={onSubmit}>
                <input
                    className="bg-zinc-800 border-0 p-2 rounded-sm mb-5 text-md font-bold focus:outline-none"
                    placeholder={"Add Robot"}
                    type="text"
                    onChange={(e) => inputValue.current = e.target.value}
                />
            </form>
            <div className="grid grid-cols-3 gap-4">
                {robotList.map((robot, i) => (
                    <img
                        key={i}
                        alt="img"
                        onClick={() => setRobotList(robotList.filter((r) => r !== robot))}
                        src={`https://robohash.org/${robot}`}
                        className='border border-neutral-800 rounded-md cursor-pointer'
                    />
                ))}
            </div>
        </div>
    );
};

export default Demo;