import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Genre} from "../Genre/Genre";
import {genresAction} from "../../redux";

const Genres = () => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genresReducer);
    useEffect(() => {
        dispatch(genresAction.getAllGenres())
    }, [])


    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/> )}
        </div>
    );
};

export {Genres};