import reducer from "./gptSlice";

const configSlice = {
  name : "config",
  initialState : {
    lang: 'en'
  },
  reducers : {
    setLanguage : (state, action) => {
      state.lang = action.payload;
    },
  }
  
}

export default configSlice;
export const { setLanguage } = configSlice.reducers;