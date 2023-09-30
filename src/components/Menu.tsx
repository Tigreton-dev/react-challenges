
const Menu = ({ updateChallenge }) => {
    return (
        <div className="flex-none w-64 text-left mt-28 text-neutral-400 text-sm font-medium h-[calc(100vh-150px)] overflow-scroll">
            <h2 className='text-lg'>Challenges</h2>
            <p onClick={() => updateChallenge('../challenges/challenge1')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>1. Toggle Counter</p>
            <p onClick={() => updateChallenge('../challenges/challenge2')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>2. Menu Selector</p>
            <p onClick={() => updateChallenge('../challenges/challenge3')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>3. Images List</p>
            <p onClick={() => updateChallenge('../challenges/challenge4')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>4. Resize Div</p>
            <p onClick={() => updateChallenge('../challenges/challenge5')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>5.FlexBox</p>
            <p onClick={() => updateChallenge('../challenges/challenge6')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>6. Form</p>
            <p onClick={() => updateChallenge('../challenges/challenge7')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>7. Toggle</p>
            <p onClick={() => updateChallenge('../challenges/challenge8')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>8. Grid</p>
            <p onClick={() => updateChallenge('../challenges/challenge9')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>9. React Events State</p>
            <p onClick={() => updateChallenge('../challenges/challenge10')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>10. Fetch data</p>
            <p onClick={() => updateChallenge('../challenges/challenge11')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>11. React Context</p>
            <p onClick={() => updateChallenge('../challenges/challenge12')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>12. React HOC</p>
            <p onClick={() => updateChallenge('../challenges/challenge13')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>13. Lazy Loading Component</p>
            <p onClick={() => updateChallenge('../challenges/challenge14')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>14. Infinite Scroll</p>
            <p onClick={() => updateChallenge('../challenges/challenge15')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>15. Debounce</p>
            <p onClick={() => updateChallenge('../challenges/challenge16')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>16. Memory</p>
            <p onClick={() => updateChallenge('../challenges/challenge17')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>17. useToggle</p>
            <p onClick={() => updateChallenge('../challenges/challenge18')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>18. Observer</p>
            <p onClick={() => updateChallenge('../challenges/challenge19')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>19. Pagination</p>
            <h2 className='text-lg'>Big Challenges</h2>
            <p onClick={() => updateChallenge('../bigChallenges/challenge1')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>1. API</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge2')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>2. Count Down</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge3')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>3. Tic Tac Toe</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge4')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>4. Wordle</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge5')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>5. Connect Four</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge6')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>6. Snake</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge7')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>7. movies</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge8')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>XXXXX</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge10')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>List</p>
            <p onClick={() => updateChallenge('../bigChallenges/challenge11')} className='p-2 hover:bg-neutral-800 hover:text-neutral-50 rounded-md m-2 cursor-pointer'>Tetris</p>
        </div>
    )
}

export default Menu;