import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    // pageMovies: null,  // поточна сторінка - не знайшов для чого використати
    // total_pages: null, // загальна кількість сторінок - не має сенсу, обмеження в 500 шт
    errors: null,
    detailMovie: {}
}

const getAllMovies = createAsyncThunk(
    'getAllMovies/moviesSlice',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
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

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
                // state.pageMovies = action.payload.page
                // state.total_pages = action.payload.total_pages
                state.errors = null
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.errors = action.payload.errors
                state.movies = []
            })
            .addCase(getDetailMovie.fulfilled, (state, action) => {
                state.detailMovie = action.payload
            })

});

const {reducer: moviesReducer} = moviesSlice

const moviesAction = {getAllMovies,getDetailMovie}

export {moviesAction, moviesReducer}