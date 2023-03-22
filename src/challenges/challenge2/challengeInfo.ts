export const description = `
<h1 class='text-xl'>Menu Selector</h1>
<pre><code>
------------------------------------------------------------------------------------------------

✅ Create a component with 4 buttons inside a box simulating a menu selector.
✅ All buttons will have the same style.
✅ Each time a button is pressed, the background color will change to indicate that the button is 
  selected.
✅ You can only have one button selected, so as soon as a button is selected, the previously 
  selected button will lose the background color that indicated it was selected.
✅ Below the selection box render a text that indicates the button that is selected.
</pre></code>
`;

export const code = `
import React, { useState, useEffect, useRef, ReactElement } from "react";

const MenuSelector = () => {
    const currentButton = useRef<null | HTMLButtonElement>(null)
    const [currentSelector, setCurrentSelector] = useState('')

    useEffect(() => {
        const text = currentButton.current!.textContent as string
        setCurrentSelector(text)
    }, [])

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement
        const content = target.textContent as string
        target.classList.remove('bg-zic-500')
        target.classList.add('bg-orange-500')
        currentButton.current!.classList.remove('bg-orange-500')
        currentButton.current!.classList.add('bg-zinc-500')
        currentButton.current = target
        setCurrentSelector(content)
    }


    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center font-bold p-8 justify-center">
            <div className="bg-zinc-800 p-5 rounded-md border border-zinc-700 text-xs">
                <button ref={currentButton} onClick={e => clickHandler(e)} className="p-5 m-5 bg-orange-500 rounded-md">Selector 1</button>
                <button onClick={e => clickHandler(e)} className="p-5 m-5 bg-zinc-500 rounded-md">Selector 2</button>
                <button onClick={e => clickHandler(e)} className="p-5 m-5 bg-zinc-500 rounded-md">Selector 3</button>
                <button onClick={e => clickHandler(e)} className="p-5 m-5 bg-zinc-500 rounded-md">Selector 4</button>
            </div>
            <h1>{currentSelector}</h1>
        </div >
    )
}

export default MenuSelector;
`.trim();
