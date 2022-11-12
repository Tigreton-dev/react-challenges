import { useEffect } from "react"


const DescriptionChallenge = ({description}) => {

    useEffect(() => {
        const element = document.getElementById('aa')
        element.innerHTML = description
    }, [description])

    return (
        <div id='aa' className='overflow-scroll max-w-[768px] min-h-[400px] text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8'>
           
        </div>

    )
}

export default DescriptionChallenge