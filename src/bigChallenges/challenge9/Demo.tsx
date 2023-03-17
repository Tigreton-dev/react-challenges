import './Demo.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { useSearch } from './hooks/useSearch'
import './Demo.css'

function Demo() {
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error } = useSearch()
    const { movies, loading, getMovies } = useMovies({ search, sort })

    const debouncedGetMovies = useCallback(
        debounce((search: string) => {
            console.log('search', search)
            getMovies(search)
        }, 300), [getMovies]
    )

    const handleSort = () => {
        setSort(!sort)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value
        updateSearch(newSearch)
        debouncedGetMovies(newSearch)
    }

    return (
        <div className='movieSearch'>
            <header>
                <h1>Buscador de películas</h1>
                <form className='form'>
                    <input
                        style={{
                            border: '1px solid transparent',
                            borderColor: error ? 'red' : 'transparent'
                        }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...'
                    />
                    <input type='checkbox' onChange={handleSort} checked={sort} />
                    <button type='submit'>Buscar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <main className='movieSearchMain'>
                {
                    loading ? <p>Cargando...</p> : <Movies movies={movies} />
                }
            </main>
        </div>
    )
}

export default Demo