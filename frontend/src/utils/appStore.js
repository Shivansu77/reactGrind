import ConfigureStore from '@reduxjs/toolkit';
import cartReducer from '../utils/cartSlice';
import reducer from '../utils/cartSlice';
const appStore = ConfigureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;