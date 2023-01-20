import css from './DetailMovieCard.module.css'

const DetailMovieCard = ({detailMovie}) => {
    const {
        adult,
        backdrop_path,
        // belongs_to_collection:{
            // id,
            // name,
            // poster_path,
            // backdrop_path
        // },
        budget,
        //     genres: [
        //     {
        //         id: 16,
        //         name: Animation
        //     },
        //     {
        //         id: 28,
        //         name: Action
        //     },
        //     {
        //         id: 12,
        //         name: Adventure
        //     },
        //     {
        //         id: 35,
        //         name: Comedy
        //     },
        //     {
        //         id: 10751,
        //         name: Family
        //     },
        //     {
        //         id: 14,
        //         name: Fantasy
        //     }
        // ],
        homepage,
        id,
        imdb_id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        // production_companies: [
        //     {
        //         id: 33,
        //         logo_path: /8lvHyhjr8oUKOOy2dKXoALWKdp0.png,
        //         name: Universal Pictures,
        //         origin_country: US
        //     },
        //     {
        //         id: 521,
        //         logo_path: /kP7t6RwGz2AvvTkvnI1uteEwHet.png,
        //         name: DreamWorks Animation,
        //         origin_country: US
        //     }
        // ],
        //     production_countries: [
        //     {
        //         iso_3166_1: US,
        //         name: United States of America
        //     }
        // ],
        release_date,
        revenue,
        runtime,
        //     spoken_languages: [
        //     {
        //         english_name: English,
        //         iso_639_1: en,
        //         name: English
        //     },
        //     {
        //         english_name: Spanish,
        //         iso_639_1: es,
        //         name: Español
        //     }
        // ],
        status,
        tagline,
        title,
        video,
        vote_average,
        vote_count
    } = detailMovie
    

    return (
        <div>
            <div className={css.background}>
                <img className={css.backgroundImage} src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title}/>
            </div>

        </div>
    );
};

export {DetailMovieCard};