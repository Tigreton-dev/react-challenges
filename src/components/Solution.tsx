import { useEffect, useState } from "react"
import './Solution.css'

export async function getData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) return _handleError(response.status);
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}

function _handleError(status: number) {
    if (status === 404) {
        throw new Error("The resource you requested was not found.");
    }
    if (status === 500) {
        throw new Error("There was a server error.");
    }

    throw new Error('Something went wrong...')
}


const Solution = () => {
    const [gif, setGif] = useState('')
    const [text, setText] = useState('')

    async function fetchHanfler() {
        try {
            const data = await getData('https://catfact.ninja/fact')
            setText(data.fact)
            const value = data.fact.split(' ').slice(0, 3).join(' ')
            const gif = await getData(`https://api.giphy.com/v1/gifs/search?api_key=${"2cZkiFTqyiS79UdSapL6LHWlublpl7iy"}&q=${value}`)
            setGif(gif.data[0].images.original.url)
        } catch (err) {
            handleError(err)
        }

    }

    useEffect(() => {
        fetchHanfler()
    }, [])

    const handleError = (err) => {
        console.log(err)
    }

    return (
        <div id='aa' className='min-h-[400px] text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8'>
            <div className="solution">
                <img src={gif} />
                <p>{text}</p>

            </div>

        </div>
    )
}

export default Solution