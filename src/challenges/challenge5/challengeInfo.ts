export const description = `
<h1 class='text-xl'>Images List</h1>
<pre><code>
------------------------------------------------------------------------------------------------

Write a functional component to render a button and a list 
of activities. The list of activities should start out 
with one activity. When the user clicks the button, an 
additional activity should be fetched and appended to the 
list. To generate a random activity, issue a get request 
to “https://www.boredapi.com/api/activity” — an API for 
development that does not require authentication. Each 
request will return a new, random object containing the 
following fields: activity, type, participants, price, 
link, key, and accessibility. The values associated with 
these fields are either strings or numbers. Here is an 
example of one such object:

{
 "activity": "Take your dog on a walk",
 "type": "relaxation",
 "participants": 1,
 "price": 0,
 "link": "",
 "key": "9318514",
 "accessibility": 0.2
}
</pre></code>
`;

export const code = `
import React, { useState } from "react";

const ImagesList = () => {
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
                        <img alt="img" src={https://robohash.org/robot} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesList;
`.trim();
