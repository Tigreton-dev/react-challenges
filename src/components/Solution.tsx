import { useEffect, useState, useRef } from "react"
import './Solution.css'


const Solution = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [robots, setRobots] = useState<Array<string>>([])

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const inputText = inputRef.current!.value
        setRobots([...robots, inputText])
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center font-bold p-8 justify-center">
            <form onSubmit={(e) => submitHandler(e)}>
                <input ref={inputRef} className="bg-zinc-600 rounded-md p-2 m-5" placeholder="Add robot"></input>
            </form>

            <div className="grid grid-cols-3 gap-3">
                {robots.map((robot, i) => {
                    return (<img key={robot + i} src={`https://robohash.org/${robot}`} className="border border-zinc-600 rounded-md cursor-pointer" onClick={() => setRobots(robots.filter(r => r !== robot))} />)
                })}
            </div>
        </div >
    )
}

export default Solution;