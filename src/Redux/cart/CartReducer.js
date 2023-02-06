import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartReducer",
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)

            try {
                let saveState = JSON.stringify(state.itemsInCart);
                localStorage.setItem('cart', saveState);
            } catch (error) {
                console.log(error.message, "error");
            }
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)

            try {
                let saveState = JSON.stringify(state.itemsInCart);
                localStorage.setItem('cart', saveState);
            } catch (error) {
                console.log(error.message, "error");
            }
        },
    },
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;