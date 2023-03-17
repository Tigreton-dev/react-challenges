export const description = `
<h1 class='text-xl'>React Context</h1>
<pre><code>
------------------------------------------------------------------------------------------------

from the following API: https://swapi.dev/

fetch the first page from people and render the name of each people.
Render a prev and next button that make a request for next page of peoples from the api or the 
prev page when clicking at the respective button.

render a input that make a specific request to the api to get all characters that match the value 
introduced in the input.

When clicked on a name from the rendered list it will render the following details from that 
character:
- name
- height
- mass
- birth_year

</pre></code>
`;

export const code = `
.API {
    position: relative;
    border: 1px solid rgb(38 38 38);
    color: white;
    background-color: black;
    border-radius: 0.75rem;
    padding: 20px;
    height: 100%;
    min-height: 400px;
}
.API h1 {
    font-size: 22px;
}
.API input {
    width: 300px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    color: black;
}
.API-info {
    display: flex;
    justify-content: center;
}
.API-info div{
    border: 1px solid white;
    padding: 10px;
}
.API section {
    text-align: center;
}
.API ul {
    width: 300px;
}
.API li {
    cursor: pointer;
}
.API li:hover {
    background-color: red;
}



export async function getPeople(page = 1) {
    try {
        const response = await fetch(
            'https://swapi.dev/api/people/?page=page'
        );
        if (!response.ok) return _handleError(response.status);
        const data = await response.json();
        return data;
    } catch (err:any) {
        throw new Error(err);
    }
}

export async function getCharacter(id = 1) {
    try {
        const response = await fetch('https://swapi.dev/api/people/id/');
        const data = await response.json();
        return data;
    } catch (err:any) {
        throw new Error(err);
    }
}

export async function searchCharacter(name:string) {
    try {
        const response = await fetch(
            'http://swapi.dev/api/people/?search=name'
        );
        const data = await response.json();
        return data;
    } catch (err:any) {
        throw new Error(err);
    }
}

function _handleError(status:number) {
    if (status === 404) {
        throw new Error("The resource you requested was not found.");
    }

    if (status === 500) {
        throw new Error("There was a server error.");
    }
}


import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { getPeople, getCharacter, searchCharacter } from './People'
import './Demo.css'

interface people {
    previous?:boolean;
    next?: boolean;
    results?: Array<any>;
}

interface details {
    name?: string;
    height?: string;
    mass?: string;
    birth_year?: string;
}

function App() {
    const inputSearch = useRef(null)
    const [textSearch, setTextSearch] = useState('')
    const [people, setPeople] = useState<people>({})
    const [currentCharacter, setCurrentCharacter] = useState(1)
    const [details, setDetails] = useState<details>({})
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

    const showDetails = (character:any) => {
        const id = Number(character.url.split('/').slice(-2)[0])
        setCurrentCharacter(id)
    }

    const onChangeTextSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const text = inputSearch.current?.value
        setTextSearch(text)
    }

    const onSearchSubmit = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return

        inputSearch!.current!.value = ''
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
                onChange={e => onChangeTextSearch(e)}
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

`.trim();
