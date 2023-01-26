import {Link} from "react-router-dom";

import css from "./Header.module.css"
import {Search} from "../Search/Search";



const Header = () => {

    return (

        <div className={css.header}>
            <Link to={`/`} className={css.Link}> Home </Link>
            <Search/>
        </div>
    );
};

export {Header};