import React, {useContext} from "react";
import { UserContext } from "../context/contextAPI";

export const Details = () =>{
    const [{name, symbol, cost, pause, max_mint}] = useContext(UserContext) 

    return(
        <div>
            Token Name = {name} <br/> Token Symbol = {symbol} <br/>Token Price in Wei = {cost} <br/>Contract Status =  {pause === true ? "Contract Paused" : "Contract Not Paused"} <br/> Total Supply = {max_mint}
            
        </div>
    )
}   