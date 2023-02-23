
const Menu = ({ updateChallenge }) => {
    return (
        <div className="flex-none w-64 h-fit text-left mt-28 text-neutral-400 text-sm font-medium">
            <h2 className='text-lg'>Challenges</h2>
            <p onClick={() => updateChallenge('challenge1')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Toggle Counter</p>
            <p onClick={() => updateChallenge('challenge2')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Menu Selector</p>
            <p onClick={() => updateChallenge('challenge3')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Images List</p>
            <p onClick={() => updateChallenge('challenge4')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Resize Div</p>
            <p onClick={() => updateChallenge('challenge5')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>FlexBox</p>
            <p onClick={() => updateChallenge('challenge6')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Form</p>
            <p onClick={() => updateChallenge('challenge7')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Toggle</p>
            <p onClick={() => updateChallenge('challenge8')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Grid</p>
            <p onClick={() => updateChallenge('challenge9')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>React Events State</p>
            <p onClick={() => updateChallenge('challenge10')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Fetch data</p>
            <p onClick={() => updateChallenge('challenge11')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>React Context</p>
            <p onClick={() => updateChallenge('challenge12')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>React HOC</p>
            <p onClick={() => updateChallenge('challenge13')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>API</p>
            <p onClick={() => updateChallenge('challenge14')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Lazy Loading Component</p>
            <p onClick={() => updateChallenge('challenge15')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Count Down</p>
            <p onClick={() => updateChallenge('challenge16')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Infinite Scroll</p>
            <p onClick={() => updateChallenge('challenge17')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Debounce</p>
            <p onClick={() => updateChallenge('challenge18')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Tic Tac Toe</p>
            <p onClick={() => updateChallenge('challenge19')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Memory</p>
            <p onClick={() => updateChallenge('challenge20')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Wordle</p>
            <p onClick={() => updateChallenge('challenge21')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Connect Four</p>
            <p onClick={() => updateChallenge('challenge22')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Snake</p>
            <p onClick={() => updateChallenge('challenge23')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>useToggle</p>

        </div>
    )
}

export default Menu;