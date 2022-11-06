import { useEffect, useState } from 'react'
import { challenge1 } from './challengeInfo'
import Challenge1 from './challenges/Challenge1'
import './App.css'

function App() {
	const [step, setStep] = useState(1)
	const [selectedButton, setSelectedButton] = useState(null)

	useEffect(() => {
		if (step === 0) document.getElementById('aa').innerHTML = challenge1
	}, [step])

	const clickHandler = (e, val: number) => {
		if (selectedButton !== null) selectedButton.classList.remove('bg-blue-600');
		console.log(e.target.className)
		e.target.classList.add('bg-blue-600');
		setStep(val)
		setSelectedButton(e.target)
	}

	return (
		<div className=" flex max-w-5xl h-full m-auto">
			<div className="flex-none w-64 h-fit text-left mt-28 text-neutral-400 text-sm font-medium">
				<h2 className='text-lg'>Menu</h2>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Blink Challenge</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Interval Timer</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>UseContext pattern</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Fetching Data</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Form validation</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Button switch selector</p>

				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Blink Challenge</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Interval Timer</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>UseContext pattern</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Fetching Data</p>
				<p className='p-2 hover:bg-neutral-800 rounded-md m-2 cursor-pointer'>Form validation</p>
			</div>
			<div className="grow">
				<div className='border-solid border border-neutral-800 mb-8 bg-black rounded-xl mt-10'>
					<button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 0)}>Description</button>
					<button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 1)}>Demo</button>
					<button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 2)}>Code</button>
					<button className='bg-neutral-800 px-5 m-5 text-white p-1 rounded-md' onClick={(e) => clickHandler(e, 2)}>Solution</button>
				</div>
				{step === 0 && (
					<div id='aa' className='min-h-[400px] text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8'></div>
				)}
				{step === 1 && (
					<Challenge1 />
				)}
				{step === 2 && (
					<img src={'./Snap.png'} ></img>
				)}
				<div><p className='text-neutral-600 text-sm mt-10'>Created by JaviSan. View the code or deploy your own.</p></div>
			</div>
		</div >
	)
}

export default App



