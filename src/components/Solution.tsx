import { FormEvent, useEffect, useRef, useState } from "react"
import './Solution.css'

const Solution = () => {
    const [robotsList, setRobotList] = useState<Array<string>>([])
    const [inputValue, setInputValue] = useState('')

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setRobotList((robotsList: Array<string>) => {
            return [...robotsList, inputValue]
        })
    }

    const clickHandler = (image: string) => {
        setRobotList(robotsList => robotsList.filter(ref => ref !== image))
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center text-sm font-bold p-8">
            <form onSubmit={(e) => submitHandler(e)}>
                <input className="m-5 text-black" onChange={(e) => setInputValue(e.target.value)}></input>
            </form>

            <div className="grid grid-cols-3 gap-4">
                {robotsList.map((image: string) => {
                    return <img alt='robot-image' src={`https://robohash.org/${image}`} onClick={() => clickHandler(image)} className="border border-neutral-800 rounded-md cursor-pointer" ></img>
                })}
            </div>

        </div >
    )
}

export default Solution;