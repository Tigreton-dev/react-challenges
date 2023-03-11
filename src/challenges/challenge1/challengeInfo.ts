export const description = `
<h1 class='text-xl'>Toggle Counter Challenge</h1>
<pre><code>
------------------------------------------------------------------------------------------------
✅ Render a counter that increments every 1 second and resets when it reaches 10.
✅ Render a text that alternates its content every 1 second.
✅ Alternates the color of the counter every 1 second.
</pre></code>
`;

export const code = `
import React, { useState, useEffect } from "react";

const Toggle = () => {
    const [counter, setCounter] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => {
                if (counter === 10) return 0;
                return counter + 1;
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

export default Toggle;
`.trim();
