import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState = {
    genres: []
};

const getAllGenres = createAsyncThunk(
    'getAllGenres/genreSlice',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getGenres();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genresSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled,(state, action) => {
                state.genres = action.payload.genres
            })
});


const {reducer:genresReducer} = genresSlice

const genresAction = {getAllGenres}

export {genresAction,genresReducer}