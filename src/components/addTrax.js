import React, {useState, useContext} from "react";
import { UserContext } from "../context/contextAPI";
import { TranxBuyNFt } from "../context/write";

export const AddTransaction =  () => {
    const [amount, setAmount] = useState();
    const [ dispatch] = useContext(UserContext);

    async function doTrx() {

        try {

            const Transaction = {
                Amount: amount
            }
            console.log(Transaction)

            await TranxBuyNFt(Transaction, dispatch);

        }
        catch (error) {
                console.log("error in onSubmit", error);
        }

}
    return(
        <div>
                <div>
                <input type="amount" value={amount || ''} id="ex" onChange={(e)=> setAmount(e.target.value)} placeholder="Enter no of NFTs" />
            </div>
            <button onClick={()=> {
              doTrx()  
            }} >
                    Buy NFT
                </button>
        </div>
    )
} 