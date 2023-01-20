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
    },
});

export const {setCurrentGame, setIsLoading, deleteCurrentGame} = gameSlice.actions;
export default gameSlice.reducer;