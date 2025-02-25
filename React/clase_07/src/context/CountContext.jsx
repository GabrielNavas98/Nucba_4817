import { createContext, useContext, useReducer } from "react";
import { counterInitialstate, countReducer } from "../reducer/countReducer";

const CountContext = createContext()

export const useCountContext = () => useContext(CountContext)


export const CountContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(countReducer, counterInitialstate)


    const data = {state, dispatch}
    
    return(
        <CountContext.Provider value={data}>
            { children }
        </CountContext.Provider>
    )
}