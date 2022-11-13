import React, { useState } from "react";

const Demo = () => {
    const [input, setInput] = useState("");
    const [robotList, setRobotList] = useState<Array<string>>(["a", "b", "c"]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // prevents page refresh
        setRobotList([...robotList, input]);
        setInput("");
    };

    return (
        <div className="flex flex-col items-center p-8 text-center border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs min-h-[400px]">
            <form onSubmit={onSubmit}>
                <input
                    className="bg-zinc-800 border-0 p-2 rounded-sm mb-5 text-md font-bold focus:outline-none"
                    value={input}
                    placeholder={"Add Robot"}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
            <div className="flex flex-row flex-wrap gap-4">
                {robotList.map((robot) => (
                    <div
                        className="border border-neutral-800 p-2 rounded-md cursor-pointer w-[calc(33%_-_9px)]"
                        onClick={() => setRobotList(robotList.filter((r) => r !== robot))}
                    >
                        <img alt="img" src={`https://robohash.org/${robot}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Demo;