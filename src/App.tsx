import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" flex max-w-7xl gap-6 h-full ...">
      <div className="flex-none w-72 h-14 bg-indigo-700 ...">
        01
      </div>
      <div className="grow h-14  bg-fuchsia-500 ...">
        02
      </div>
     
    </div>
  )
}

export default App
