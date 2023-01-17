import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState={
    movies:[],

}

const getAllMovies = createAsyncThunk(
    'getAllMovies/moviesSlice',
    async (arg,{rejectWithValue})=>{
        try {

        }catch (e) {

        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getAllMovies.fulfilled)

});

const {reducer:moviesReducer, actions}= moviesSlice

const moviesAction = {

}

export {moviesAction,moviesReducer}