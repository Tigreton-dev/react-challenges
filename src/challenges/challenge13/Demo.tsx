import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { getPeople, getCharacter, searchCharacter } from './People'
import './Demo.css'

function App() {
    const inputSearch = useRef(null)
    const [textSearch, setTextSearch] = useState('')
    const [people, setPeople] = useState([])
    const [currentCharacter, setCurrentCharacter] = useState(1)
    const [details, setDetails] = useState({})
    const [page, setPage] = useState(1)
    const [errorState, setErrorState] = useState({ hasError: false, message: "" })

    useEffect(() => {
        getPeople(page).then(setPeople).catch(handleError)
    }, [page])

    useEffect(() => {
        getCharacter(currentCharacter).then(setDetails).catch(handleError)
    }, [currentCharacter])

    const handleError = (err:any) => {
        setErrorState({ hasError: true, message: err.message })
    }

    const showDetails = (character) => {
        const id = Number(character.url.split('/').slice(-2)[0])
        setCurrentCharacter(id)
    }

    const onChangeTextSearch = (event:React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault()
        const text = inputSearch.current?.value
        setTextSearch(text)
    }

    const onSearchSubmit = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return

        inputSearch.current.value = ''
        setDetails({})
        searchCharacter(textSearch).then(setPeople).catch(handleError)
    }

    const onChangePage = (next:number) => {
        if (!people.previous && page + next <= 0) return
        if (!people.next && page + next >= 9) return
        setPage(page + next)
    }

    return (
        <div className='API'>
            <input
                ref={inputSearch}
                onChange={onChangeTextSearch}
                onKeyDown={onSearchSubmit}
                type="text"
                placeholder="Search for character"
            />
            <div className='API-info'>
                <div>
                    <ul>
                        {errorState.hasError && <div>{errorState.message}</div>}
                        {people?.results?.map((character) => (
                            <li key={character.name} onClick={() => showDetails(character)}>
                                {character.name}
                            </li>
                        ))}
                    </ul>
                    <section>
                        <button onClick={() => onChangePage(-1)}>Prev</button>| {page} |
                        <button onClick={() => onChangePage(1)}>Next</button>
                    </section>
                </div>
                {details && (
                    <div>
                        <h1>{details.name}</h1>
                        <ul>
                            <li>- height: {details.height}</li>
                            <li>- mass: {details.mass}</li>
                            <li>- Year of Birth: {details.birth_year}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
