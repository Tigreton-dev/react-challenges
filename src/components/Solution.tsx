import { useEffect, useState, useRef } from "react"
import './Solution.css'

const Solution = () => {
    const [images, setImages] = useState<Array<string>>([])
    const inputValue = useRef('')

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setImages([...images, inputValue.current])
    }
    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center text-sm font-bold p-8">
            <form onSubmit={(e) => formHandler(e)}>
                <input placeholder="add robot" className="bg-zinc-800 p-2 rounded-sm m-5" onChange={(e) => inputValue.current = e.target.value} />
            </form>

            <div className="grid grid-cols-3 gap-4">
                {images.map((image: string) => {
                    return <img src={`https://robohash.org/${image}`} className='border border-neutral-800' />
                })}
            </div>
        </div >
    )
}

export default Solution;
