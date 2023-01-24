import {Search} from "../Search/Search";
import css from "../MoviesListCard/MoviesListCard.module.css";
import {Link} from "react-router-dom";


const Header = () => {

    return (

        <div>
            <Link to={`/`} className={css.Link}> Home </Link>
            <Search/>
        </div>
    );
};

export {Header};