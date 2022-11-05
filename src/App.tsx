import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

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
			<div className="grow  bg-fuchsia-500 h-96">
				<button className='bg-white px-5 m-5'>Description</button>
				<button className='bg-white px-5 m-5'>Render Solution</button>
				<button className='bg-white px-5 m-5'>Code</button>
			</div>
		</div>
	)
}

export default App
