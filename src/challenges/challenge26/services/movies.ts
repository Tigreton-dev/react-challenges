const API_KEY = "4287ad07";

interface Iprops {
    search: string;
}

interface Imovies {
    imdbID: string;
    Title: string;
    Year: number;
    Poster: string;
}

export const searchMovies = async (props: Iprops) => {
    const { search } = props;
    if (search === "") return null;

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
        );
        const json = await response.json();

        const movies = json.Search;

        return movies?.map((movie: Imovies) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
        }));
    } catch (e) {
        throw new Error("Error searching movies");
    }
};
