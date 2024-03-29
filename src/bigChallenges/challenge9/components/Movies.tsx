interface Imovie {
    id: number;
    title: string;
    year: string;
    image: string;
}

interface Iprops {
    movies: Array<any>;
}

function ListOfMovies(props: Iprops) {
    const { movies } = props
    return (
        <ul className='movies'>
            {
                movies.map((movie: Imovie) => (
                    <li className='movie' key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies(props: Iprops) {
    const { movies } = props;
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}
