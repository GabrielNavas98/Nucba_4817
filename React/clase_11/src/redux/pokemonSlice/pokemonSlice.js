import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../../data/initialPokemon";

const INITIAL_STATE = {
    data: initialPokemon,
    isLoading: false,
    error: false
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (state) => {
            return {
                ...state,
                isLoading: true,
                data: null
            }
        },
        success: (state, action) => {
            return{
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        },
        isError: (state)=> {
            return {
                ...state, 
                data: null,
                isLoading: false,
                error: 'Ocurrio un error, recarga'
            }
        }
    }
})

export const {
    isFetching,
    success, 
    isError
} = pokemonSlice.actions

export default pokemonSlice.reducer