import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css'
import {moviesAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Genres} from "../Genres/Genres";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies, errors, total_pages} = useSelector(state => state.moviesReducer);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesAction.getAllMovies(query.get('page')))
    }, [dispatch, query])

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }
    const numberPage = query.get('page')

    return (
        <div className={css.placeGenres}>
            <Genres/>

            <div>
                    {/*<button onClick={getGenres}>test</button>*/}
                <div className={css.moviesList}>
                    {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                    {errors && errors.map(err => <h1>{err}</h1>)}
                </div>
                <div className={css.navigate}>
                    <button disabled={numberPage <= 1} onClick={prevPage}>Prev page</button>
                    <button disabled={numberPage >= 500 || numberPage >= total_pages} onClick={nextPage}>Next page
                    </button>
                </div>

            </div>
        </div>
    );
}

export {MoviesList}
