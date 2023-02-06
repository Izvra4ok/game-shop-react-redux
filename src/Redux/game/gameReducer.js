import {createSlice} from "@reduxjs/toolkit";


const gameSlice = createSlice({
    name: "gameReducer",
    initialState: {
        currentGame: [],
        isLoading: false,
    },
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload;
            state.isLoading = false;

            try {
                let saveState = JSON.stringify(state.currentGame);
                localStorage.setItem('game', saveState);
            } catch (error) {
                console.log(error.message, "error");
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = true;
        },
    },
});

export const {setCurrentGame, setIsLoading, deleteCurrentGame} = gameSlice.actions;
export default gameSlice.reducer;