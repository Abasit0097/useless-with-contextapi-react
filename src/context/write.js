import Web3 from "web3";
//import { GetMintToken} from './action'




export const TranxBuyNFt = async (Transaction, dispatch) => {

    try {

        const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
        let abi = require('./abi');

        const web3 = new Web3(Web3.givenProvider);
        await web3.givenProvider.enable();

        const contract = new web3.eth.Contract(abi, contractAddress);
        const accounts = await web3.eth.getAccounts();

        const buyNFT = await contract.methods.mint(Transaction.Amount)
            .send({
                from: accounts[0],
                value: web3.utils.toWei(Transaction.Amount, 'ether')
            });

        console.log("buyNFT", buyNFT);
        //dispatch(GetMintToken(Transaction))

    }
    catch (error) {
        console.log("error in write",error)
    }



}





















/* import React, { useState } from "react";
import Web3 from "web3";



let abi = require('./abi');
let contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";


function BuyTrx() {
    let [amount, setAmount] = useState();
     async function doTrx() {
            try{

                const web3 = new Web3(Web3.givenProvider);
                await web3.givenProvider.enable();

                const contract = await new web3.eth.Contract(abi, contractAddress);
                const accounts = await web3.eth.getAccounts();
                console.log("abc =",accounts)

                const buyNFT = await contract.methods.mint(amount)
                .send({ from: accounts[0],
                value: web3.utils.toWei(amount, 'ether')
                });

                console.log("buyNFT", buyNFT);
            }
            catch (error) {
                console.log("error =", error);
            }
        }

    return(
        <div>
            <div>
            <input type="amount" value={amount || ''} id="ex" onChange={(e)=> setAmount(e.target.value)} placeholder="Enter no of NFTs" />
            </div>

            <div>
                <button onClick={() => {
                    if (amount > 0) {
                        doTrx()
                    }
                    else alert("Please enter valid number")
                }}>
                    Buy NFT
                </button>

            </div>

        </div>
    )
}

export default BuyTrx;
 */







/*writing in contract with web3

const Web3 = require('web3')
//const rpcURL = 'https://rinkeby.infura.io/v3/39f4588fa9b14c9ab5888675d3d58d43'
const rpcURL = 'http://127.0.0.1:8545/'; // with hard hat ganache local host
const Tx = require('ethereumjs-tx').Transaction;

require("dotenv").config();

const web3 = new Web3(rpcURL)*/


/*const address1 = "0x4fa3D5b91fCF8bCDe7933FBb5F0295cC5812f74c"
const address2 = "0x679083d5cB256f43826f4b1Dc7dE84Fc8C575328"
const contractAddress = "0x74a99AeF15B7Dfa92aB367dc60eD1f62125Afa87"
let contractABI = require("./contractAbi.js");
const privateKey = process.env["PVTKEY"];
const bufferPrivateKey = Buffer.from("privateKey", "hex");

*/

//with local host of hardhat

/*const address1 = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // address of hardhat local host
const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // contract address deployed at local host
let contractABI = require("./abi");
const privateKey = Buffer.from("59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", 'hex'); // private key of localhost address
console.log("private key =", privateKey)
//const bufferPrivateKey = Buffer.from(privateKey, "hex");



const setPause = async() => {
    try{
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        let txCount = await web3.eth.getTransactionCount(address1);

        const txObject =  {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            //value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
            data: contract.methods.pause("false").encodeABI(),
            gasLimit: web3.utils.toHex(210000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
            }
    
        const tx =  new Tx(txObject) //, {'chain':'rinkeby'});
        tx.sign(privateKey);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
    
        const sigTrans = await web3.eth.sendSignedTransaction(raw, (err, trxHash) => {
            if(!err) {
                console.log("Transaction Hash is", trxHash);
            }

        })
}
catch(e){
    console.log("error", e);
}

}

setPause();*/