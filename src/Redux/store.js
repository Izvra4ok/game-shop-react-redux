import cartReducer from "./cart/CartReducer";
import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./game/gameReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gameReducer,
    },
});