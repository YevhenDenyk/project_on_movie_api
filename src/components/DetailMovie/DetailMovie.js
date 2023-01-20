import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesAction} from "../../redux";
import {DetailMovieCard} from "../DatailMovieCard/DetailMovieCard";

const DetailMovie = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {detailMovie} = useSelector(state => state.moviesReducer);
    useEffect(() => {
        dispatch(moviesAction.getDetailMovie(id))
    }, [id])


    return (
        <div>
           <DetailMovieCard key={id} detailMovie={detailMovie}/>
        </div>
    );
}

export {DetailMovie};