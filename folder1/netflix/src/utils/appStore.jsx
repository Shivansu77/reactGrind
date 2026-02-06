import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './userSlice'
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    },
    devTools: true,
})

export const useAppDispatch = () => useDispatch()

export default appStore