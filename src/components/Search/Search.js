import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {moviesAction} from "../../redux";
import {useNavigate} from "react-router-dom";

const Search = () => {

    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (query) => {
        await dispatch(moviesAction.getSearchMovies(query))
        navigate('/search-results')
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'search'}{...register('query')}/>
            <button>Search</button>
        </form>
    );
};

export {Search};