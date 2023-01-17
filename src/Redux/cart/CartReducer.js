import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartReducer",
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)

            // let response = JSON.stringify(action.payload);
            // if (response) {
            //     localStorage.setItem("cart",response)
            // }
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        },
    },
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;