
const Menu = ({ updateChallenge }) => {
    return (
        <div className="flex-none w-64 h-fit text-left mt-28 text-neutral-400 text-sm font-medium">
            <h2 className='text-lg'>Challenges</h2>
            <p onClick={() => updateChallenge('challenge1')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>1. Toggle Counter</p>
            <p onClick={() => updateChallenge('challenge2')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>2. Menu Selector</p>
            <p onClick={() => updateChallenge('challenge3')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>3. Images List</p>
            <p onClick={() => updateChallenge('challenge4')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>4. Resize Div</p>
            <p onClick={() => updateChallenge('challenge5')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>5.FlexBox</p>
            <p onClick={() => updateChallenge('challenge6')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>6. Form</p>
            <p onClick={() => updateChallenge('challenge7')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>7. Toggle</p>
            <p onClick={() => updateChallenge('challenge8')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>8. Grid</p>
            <p onClick={() => updateChallenge('challenge9')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>9. React Events State</p>
            <p onClick={() => updateChallenge('challenge10')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>10. Fetch data</p>
            <p onClick={() => updateChallenge('challenge11')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>11. React Context</p>
            <p onClick={() => updateChallenge('challenge12')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>12. React HOC</p>
            <p onClick={() => updateChallenge('challenge13')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>13. API</p>
            <p onClick={() => updateChallenge('challenge14')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>14. Lazy Loading Component</p>
            <p onClick={() => updateChallenge('challenge15')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>15. Count Down</p>
            <p onClick={() => updateChallenge('challenge16')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>16. Infinite Scroll</p>
            <p onClick={() => updateChallenge('challenge17')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>17. Debounce</p>
            <p onClick={() => updateChallenge('challenge18')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>18. Tic Tac Toe</p>
            <p onClick={() => updateChallenge('challenge19')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>19. Memory</p>
            <p onClick={() => updateChallenge('challenge20')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>20. Wordle</p>
            <p onClick={() => updateChallenge('challenge21')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>21. Connect Four</p>
            <p onClick={() => updateChallenge('challenge22')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>22. Snake</p>
            <p onClick={() => updateChallenge('challenge23')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>23. useToggle</p>
            <p onClick={() => updateChallenge('challenge26')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>24. movies</p>

            <p onClick={() => updateChallenge('challenge27')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>25. Observer</p>

        </div>
    )
}

export default Menu;