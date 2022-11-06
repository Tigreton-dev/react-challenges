import { useEffect, useState } from 'react'
import { challenge1 } from './challenges/challengeInfo'
import Challenge1 from './challenges/Challenge1'
import Code from './components/Code'
import Menu from './components/Menu'
import ButtonSwitch from './challenges/ButtonsSwitch'

function App() {
	const [step, setStep] = useState(0)

	useEffect(() => {
		if (step === 0) document.getElementById('aa').innerHTML = challenge1
	}, [step])

	return (
		<div className=" flex max-w-5xl h-full m-auto">
			<Menu />
			<div className="grow">
				<ButtonSwitch setStep={(val) => setStep(val)} />
				{step === 0 && (
					<div id='aa' className='min-h-[400px] text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8'></div>
				)}
				{step === 1 && (<Challenge1 />)}
				{step === 2 && (<Challenge1 />)}
				{step === 3 && (<Code />)}
				<div><p className='text-neutral-600 text-sm mt-10 pb-10 text-center'>Created by JaviSan. View the code at <a className="font-bold" href="https://github.com/Tigreton-dev/react-challenges">GitHub</a></p>
				</div>
			</div>
		</div >
	)
}

export default App



