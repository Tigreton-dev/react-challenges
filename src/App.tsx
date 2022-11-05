import { useEffect, useState } from 'react'
import {challenge1} from './challengeInfo'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.getElementById('aa').innerHTML = challenge1
	}, [])

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

				<button className='bg-white px-5 m-5'>Description</button>
				<button className='bg-white px-5 m-5'>Render Solution</button>
				<button className='bg-white px-5 m-5'>Code</button>
				<div id='aa' className='text-left bg-indigo-700'></div>

			</div>
		</div >
	)
}

export default App



