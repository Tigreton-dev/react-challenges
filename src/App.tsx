import { useState } from 'react'
import Menu from './components/Menu'
import ButtonSwitch from './components/ButtonsSwitch'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
	const [step, setStep] = useState(0)
	const [challenge, setChallenge] = useState('../challenges/challenge1')

	const MenuHandler = (e:string) => {
		setChallenge(e)
	}

	return (
		<div className=" flex max-w-5xl h-full m-auto">
			<Menu updateChallenge={(e:string) => MenuHandler(e)} />
			<div className="grow">
				<ButtonSwitch setStep={(val) => setStep(val)} />
				<Content step={step} challenge={challenge} />
				<Footer />
			</div>
		</div >
	)
}

export default App



