import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    // pageMovies: null,  // поточна сторінка - не знайшов для чого використати
    total_pages: null, // загальна кількість сторінок
    errors: null,
    detailMovie: {},
    searchMovies: [],
    total_results: null
}

const getAllMovies = createAsyncThunk(
    'getAllMovies/moviesSlice',
    async (query, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(query);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getDetailMovie = createAsyncThunk(
    'getDetailMovie/moviesSlice',
    async (id,{rejectWithValue})=>{
        try {
            const {data} = await moviesService.getMovie(id);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getSearchMovies = createAsyncThunk(
    'searchMovies/moviesSlice',
    async (query,{rejectWithValue})=>{
        try {
            const {data} = await moviesService.search(query);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

//фільми по жанру
// const getGenresMovies = createAsyncThunk(
//     'genresMovies/moviesSlice',
//     async (query,{rejectWithValue})=>{
//         try {
//             const {data} = await moviesService.getGenres(query);
//             return data
//         }catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// );


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
                // state.pageMovies = action.payload.page
                state.total_pages = action.payload.total_pages
                state.errors = null
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.errors = action.payload.errors
                state.movies = []
            })
            .addCase(getDetailMovie.fulfilled, (state, action) => {
                state.detailMovie = action.payload
            })
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.searchMovies = action.payload.results
                state.total_results = action.payload.total_results
                state.total_pages = action.payload.total_pages
            })
            //фільми по жанру
            // .addCase(getGenresMovies.fulfilled, (state, action) => {
            //     state.movies = action.payload.results
            //     state.total_results = action.payload.total_results
            //     state.total_pages = action.payload.total_pages
            // })

});

const {reducer: moviesReducer} = moviesSlice

const moviesAction = {getAllMovies,getDetailMovie,getSearchMovies}

export {moviesAction, moviesReducer}