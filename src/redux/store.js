import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genresReducer, moviesReducer} from "./slice";



const rootReducer = combineReducers({moviesReducer,genresReducer});

const setupStore = () => configureStore({reducer: rootReducer});



export {setupStore}