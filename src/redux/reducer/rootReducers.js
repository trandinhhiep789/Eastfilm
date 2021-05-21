import { combineReducers } from "redux";
import MoviesReducer from './MoviesReducer'

export const rootReducer = combineReducers({
    MoviesReducer: MoviesReducer,
})