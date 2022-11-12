
const Menu = ({updateChallenge}) => {
    return (
        <div className="flex-none w-64 h-fit text-left mt-28 text-neutral-400 text-sm font-medium">
            <h2 className='text-lg'>Menu</h2>
            <p onClick={() => updateChallenge('challenge1')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Blink Challenge</p>
            <p onClick={() => updateChallenge('challenge2')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Interval Timer</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>UseContext pattern</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Fetching Data</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Form validation</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Button switch selector</p>

            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Blink Challenge</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Interval Timer</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>UseContext pattern</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Fetching Data</p>
            <p className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Form validation</p>
        </div>
    )
}

export default Menu;