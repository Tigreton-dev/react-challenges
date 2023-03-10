import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies.js";

interface IProps {
    search: string;
    sort: boolean;
}

interface Imovie {
    title: string;
}

export function useMovies(props: IProps) {
    const { search, sort } = props;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(null);
    const previousSearch = useRef(search);

    const getMovies = useCallback(async (search: string) => {
        if (search === previousSearch.current) return;
        // search es ''

        try {
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            const newMovies = await searchMovies({ search });
            setMovies(newMovies);
        } catch (e) {
            setError(e.message);
        } finally {
            // tanto en el try como en el catch
            setLoading(false);
        }
    }, []);

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a: Imovie, b: Imovie) =>
                  a.title.localeCompare(b.title)
              )
            : movies;
    }, [sort, movies]);

    return { movies: sortedMovies, getMovies, loading };
}
