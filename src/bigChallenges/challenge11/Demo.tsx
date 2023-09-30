import { useEffect, useMemo, useRef, useState } from 'react'
import './Demo.css'
import {startGame} from "./main"

function Demo() {

  useEffect(() =>{
    startGame()
  }, [])

  return (
    <div className="text-sm text-center border-solid border border-neutral-800 text-white bg-black rounded-xl p-8 h-[calc(100vh-250px)] w-[100%] overflow-scroll grid justify-items-center">
    
        <section>Start Game</section>
        <canvas className='border-solid border-[1px] border-sky-500'></canvas>

      <strong>Puntuación: <span></span></strong>
    </div>
  )
}

export default Demo
