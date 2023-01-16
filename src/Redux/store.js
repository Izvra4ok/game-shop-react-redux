import cartReducer from "./cart/CartReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});