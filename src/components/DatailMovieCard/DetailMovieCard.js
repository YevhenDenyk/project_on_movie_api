import css from './DetailMovieCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";


const DetailMovieCard = ({detailMovie}) => {
    const {
        // adult,
        backdrop_path,
        // belongs_to_collection,
        budget,
        genres,
        // homepage,
        // id,
        // imdb_id,
        original_language,
        original_title,
        overview,
        // popularity,
        poster_path,
        // production_companies,
        // production_countries,
        release_date,
        revenue,
        runtime,
        // spoken_languages,
        status,
        tagline,
        title,
        // video,
        vote_average,
        // vote_count
    } = detailMovie

    const whatTime = (runtime) => {
        let hours = Math.trunc(runtime / 60);
        let minutes = runtime % 60;
        return hours + 'h ' + minutes + 'm';
    }
    const time = whatTime(runtime)


    return (
        <div className={css.master}>
            <img className={css.backgroundImg} src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                 alt={title}/>

            <div className={css.front}>
                <div className={css.poster}>
                    <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt={title}/>
                </div>


                <div className={css.detailedInf}>
                    <div className={css.title}>
                        <h2>{title}</h2>
                        <span> {vote_average && <StarsRating vote_average={vote_average}/>}</span>
                        <span className={css.release_date}> Release: {release_date}</span>
                        <span className={css.runtime}>Runtime: {time}</span>
                    </div>
                    <div className={css.genres}>
                        <b>Genres: </b>
                        {genres && genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
                    </div>
                    <div className={css.header_info}>
                        <h3 className={css.tagline}>{tagline}</h3>
                        <h3>Overview:</h3>
                        <div className={css.overview}><p>{overview}</p></div>
                    </div>
                    <div className={css.facts}>
                        <p><b>Status: </b>{status}</p>
                        <p><b>Original Language: </b>{original_language}</p>
                        <p><b>Original title: </b>{original_title}</p>
                        {budget && <p><b>Budget: </b>$ {budget.toLocaleString()} </p>}
                        {budget && <p><b>Revenue: </b>$ {revenue.toLocaleString()}</p>}
                    </div>

                </div>
            </div>

        </div>
    );
};

export {DetailMovieCard};