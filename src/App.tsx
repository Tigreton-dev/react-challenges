import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.getElementById('aa').innerHTML = `
<pre><code>
/**
 * 🇬🇧
 * Given this API:
 *  - https://openlibrary.org/developers/api - Open Library API
 *
 * Create a way to input a text.
 * Use Search API with the input to list the books found.
 * We only want to show the title, first year published and,
 * finally, the cover.
 * 
 * Everything should be centered in the screen.
 * The list of books should be horizontal and scrollable. 
 * 
 * > Limit the results to 25.
 * > Can we filter books with only one Edition Count?
 * > Can we grab only the fields we need to optimize
 *   the network request?
 * > Can we debounce the fetch of the data after input to avoid
 *   firing too much requests while typing?
 */
</pre></code>
`

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



