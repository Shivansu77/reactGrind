import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch: false,
    },
    reducers : {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        setGptSearchView: (state, action) => {
            state.showGptSearch = !!action.payload;
        },
    }
    
})

export default gptSlice.reducer;
export const { toggleGptSearchView, setGptSearchView } = gptSlice.actions;