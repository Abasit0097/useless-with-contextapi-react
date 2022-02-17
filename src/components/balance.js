import React, { useContext } from "react";
import { UserContext } from "../context/contextAPI";


export const Details = () => {

    const [{ name, symbol, cost, pause, max_mint, total_supply, balance_of, account_connected }] = useContext(UserContext)
    return (
        <div>
            Token Name = {name} <br /> Token Symbol = {symbol} <br />Token Price in Ether = {cost / 1000000000000000000} <br />Contract Status =  {pause === true ? "Contract Paused" : "Contract Not Paused"} <br /> Total Supply = {max_mint} <br /> Total Number of Tokens minted = {total_supply} <br /> Balance of Connected Address(<i><b>{account_connected}</b></i>) = {balance_of}



        </div>
    )
}