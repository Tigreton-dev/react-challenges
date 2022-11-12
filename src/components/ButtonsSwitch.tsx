import { useEffect, useState, useRef } from 'react'

interface Props {
    setStep: (a: number) => void;
}

const ButtonSwitch = ({ setStep }: Props) => {
    const ref = useRef(null)
    const [selectedButton, setSelectedButton] = useState<Element | null>(null)

    useEffect(() => {
        setSelectedButton(ref.current)
    }, [])

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, val: number) => {
        const target = e.target as Element;
        if (selectedButton !== null) {
            selectedButton.classList.remove('bg-blue-600');
            selectedButton.classList.add('bg-neutral-800');
        }
        target.classList.remove('bg-neutral-800');
        target.classList.add('bg-blue-600');
        setStep(val)
        setSelectedButton(target)
    }

    return (
        <div className='border-solid border border-neutral-800 mb-8 bg-black rounded-xl mt-10 text-center'>
            <button ref={ref} className='bg-blue-600 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 0)}>Description</button>
            <button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 1)}>Demo</button>
            <button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 2)}>Code</button>
            <button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 3)}>Solution</button>
        </div>
    )
}

export default ButtonSwitch;