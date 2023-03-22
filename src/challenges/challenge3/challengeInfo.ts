export const description = `
<h1 class='text-xl'>Images List</h1>
<pre><code>
------------------------------------------------------------------------------------------------

The route https://robohash.org/ is a url that generates images of robots based on a text. 

Enter any text after the url, and get a picture of a robot.

✅ Create an input element that when given accept, adds that text to a list.
✅ Said list must be rendered as images with the src of the url + the text of the list.
✅ Images must be rendered in columns of 3 images maximum.
✅ when clicking on an image, it should be removed from the list and disappear.
</pre></code>
`;

export const code = `
import React, { useState } from "react";

const ImagesList = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [robots, setRobots] = useState<Array<string>>(['a', 'b', 'c'])

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const inputText = inputRef.current!.value
        setRobots([...robots, inputText])
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center font-bold p-8 justify-center">
            <form onSubmit={(e) => submitHandler(e)}>
                <input ref={inputRef} className="bg-zinc-600 rounded-md p-2 m-5" placeholder="Add robot" />
            </form>

            <div className="grid grid-cols-3 gap-3">
                {robots.map((robot, i) => {
                    return (
                        <img
                            key={robot + i}
                            src={'https://robohash.org/robot'}
                            className="border border-zinc-600 rounded-md cursor-pointer"
                            onClick={() => setRobots(robots.filter(r => r !== robot))}
                        />)
                })}
            </div>
        </div >
    )
};

export default ImagesList;
`.trim();
