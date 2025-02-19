import { createContext, useReducer } from "react";

export const Contexto = createContext()

export const ContextoProvider = ({ children }) => {

    const initialState = {
        data: '',
        isLoading: true,
        isError: false,
    }

    const contextoReducer = (state, action) => {
        switch (action.type) {
            case 'isError':
                return {
                    ...state,
                    data: '',
                    isLoading: false,
                    isError: true
                }
            case 'isLoading':
                return {
                    ...state,
                    data: '',
                    isLoading: true,
                    isError: false
                }
            case 'dataRecibida':
                return {
                    ...state,
                    data: action.payload,
                    isLoading: false,
                    isError: false,
                }        
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(contextoReducer, initialState)

    return (
        <Contexto.Provider 
            // value={{color: 'crimson', titulo:'Soy un título en el contexto'}}
            value={{state, dispatch}}
        >
            { children }
        </Contexto.Provider>
    )
}