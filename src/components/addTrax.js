import React, {useState, useContext} from "react";
import { UserContext } from "../context/contextAPI";
import { SetPauseState } from "../context/write";
import { LoadBlockChain } from "../context/read";

export const AddTransaction = () => {
    const [isPause, setisPause] = useState();
    const [{name, symbol, cost}, dispatch] = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            const Transaction = {
                State: isPause
            }
            console.log(Transaction)

            await SetPauseState(Transaction, dispatch);
            await LoadBlockChain(dispatch);

        }
        catch (error) {
                console.log("error in onSubmit", error);
        }
    }

    return(
        <div>
            <h3>Buy {symbol} here</h3><br/>
            <h3>Name of token is {name}</h3><br/>
            <h3>Pice of token is {cost}</h3>
            <form onSubmit={onSubmit}>
                <div>
                <label>Please enter bool to set state</label>
                <input type="text"
                        id="isPause"
                        value={isPause}
                        onChange = {(e)=>setisPause(e.target.value)}
                        placeholder="Please enter state"
                        required="required"
                />
            </div>
            <button>Set State</button>
            </form>
        </div>
    )
}