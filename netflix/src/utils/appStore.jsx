import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer, { addNowPlayingMovies } from './movieSlice';
import { useDispatch } from 'react-redux';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },

})

export const useAppDispatch = () => useDispatch();

export default appStore;

// In your component file, you can use the dispatch like this:

// import { useAppDispatch } from '../path_to_your_store';
// import { addNowPlayingMovies } from '../utils/movieSlice';

// const YourComponent = () => {
//     const dispatch = useAppDispatch();

//     // after fetching OMDB data:
//     dispatch(addNowPlayingMovies(data.Search));
// }