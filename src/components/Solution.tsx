import { useEffect, useState, useRef } from "react"
import './Solution.css'


const Solution = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [image, setImage] = useState(null)

    useEffect(() => {
        getData('https://randomuser.me/api/?results=20').then(data => setUsers(data.results)).catch(e => handleError(e))
        getImage('https://picsum.photos/200').then(image => setImage(image)).catch(e => handleError(e))
    }, [])

    const handleError = (e) => {
        setError(e)
        console.log(e)
    }

    return (
        <div className="bg-black min-h-[400px] rounded-lg border border-neutral-800 text-white text-center text-sm font-bold p-8 justify-center">
            {error.length > 0 && <p>{error}</p>}
            {users.map(user => {
                return <p>{user.name.last}</p>
            })}
            <img src={image} />
        </div >
    )
}

export default Solution;


async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) handleError(response.status)
        const data = await response.json();
        return data
    } catch (e) {
        throw new Error(e)
    }
}

async function getImage(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) handleError(response.status)
        const blob = await response.blob()
        const imageURL = URL.createObjectURL(blob)
        return imageURL
    } catch (e) {

    }
}

function handleError(status: number) {
    if (status === 400) throw new Error('400 error')
}
