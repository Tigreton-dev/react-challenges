import { useEffect, useState } from 'react'
import { challenge1 } from './challengeInfo'
import Challenge1 from './challenges/Challenge1'
import './App.css'

function App() {
	const [step, setStep] = useState(1)

	useEffect(() => {
		if (step === 0) document.getElementById('aa').innerHTML = challenge1
	}, [step])

	const clickHandler = (val: number) => {
		setStep(val)
	}

	return (
		<div className=" flex max-w-6xl gap-6 h-full">
			<div className="flex-none w-72 bg-indigo-700 h-fit text-left">
				01
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
				<p>adgdfgdfg</p>
			</div>
			<div className="grow  bg-fuchsia-500 p-5">
				<button className='bg-white px-5 m-5' onClick={() => clickHandler(0)}>Description</button>
				<button className='bg-white px-5 m-5' onClick={() => clickHandler(1)}>Demo</button>
				<button className='bg-white px-5 m-5' onClick={() => clickHandler(2)}>Code</button>
				{step === 0 && (
					<div id='aa' className='text-left bg-indigo-700'></div>
				)}
				{step === 1 && (
					<Challenge1 />
				)}
				{step === 2 && (
					<img src={'./Snap.png'} ></img>
				)}

			</div>
		</div >
	)
}

export default App



