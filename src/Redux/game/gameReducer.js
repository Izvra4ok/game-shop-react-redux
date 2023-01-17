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
            let response = JSON.stringify(state.currentGame)
            if(response){
                localStorage.setItem("game",response)
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = true;
        },
        deleteCurrentGame: (state, action) => {
            state.currentGame = state.currentGame.filter(game => game.id !== action.payload)
        },
    },
});

export const {setCurrentGame, setIsLoading, deleteCurrentGame} = gameSlice.actions;
export default gameSlice.reducer;