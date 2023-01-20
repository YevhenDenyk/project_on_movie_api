import css from './MoviesListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {
        // adult,
        // backdrop_path,
        // genre_ids,
        id,
        title,
        overview,
        // popularity,
        poster_path,
        release_date,
        vote_average,
        vote_count
    } = movie


    return (
        <div className={css.card}>
            <div>
                <Link to={`/detail-movie/${id}`} className={css.Link}>
                    <div className={css.poster}>
                        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
                    </div>
                    <div className={css.header}>{title}</div>
                </Link>
                <div className={css.overview}>{overview}</div>
            </div>
            <div>
                <div className={css.votes}>
                    <div className={css.stars}><StarsRating vote_average={vote_average}/></div>
                    <div className={css.vote}>Vote: {vote_count}</div>
                </div>
                <div className={css.data}>{release_date}</div>
            </div>
        </div>
    );
};

export {MoviesListCard};