import {useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './SearchResults.module.css';

const SearchResults = () => {

    const {searchMovies, total_results, total_pages} = useSelector(state => state.moviesReducer);

    return (
        <div>
            <h2> Total results: {total_results}</h2>
            <h2> Total pages: {total_pages}</h2>
            <div className={css.moviesList}>
                {searchMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {SearchResults};