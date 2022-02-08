import { createContext, useEffect, useReducer} from "react"
import { AppReducer } from "./reducer";
import {LoadBlockChain} from "./read"

const initialState = {
    name: " ",
    symbol: " ",
    pause: " ",
    cost: " ",
    max_mint: " "
}

export const UserContext = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer,initialState);

    useEffect(() => {
        LoadBlockChain(dispatch);
    },[]);




    return(
        <UserContext.Provider value = {[state,dispatch]}>

            {children}

            
        </UserContext.Provider>
    )
} 