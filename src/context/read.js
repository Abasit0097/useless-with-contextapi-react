// reading token URI

import Web3 from 'web3';
import abi from './abi';
import { GetName, GetCost, GetSymbol, GetPauseStatus, GetMinted, GetTotalSupply } from './action';


/* const Web3 = require('web3')
const rpcURL = 'https://rinkeby.infura.io/v3/39f4588fa9b14c9ab5888675d3d58d43'
const rpcURL = 'http://127.0.0.1:8545/'; // with hard hat ganache local host

const web3 = new Web3(rpcURL)

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3' // ganache localhost contract deployment address
const contractAddress = "0x74a99AeF15B7Dfa92aB367dc60eD1f62125Afa87"

const contractABI = require("./abi") 
 */
export const LoadBlockChain = async(dispatch) => {
    try{
        
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await web3.givenProvider.enable();
            console.log('Web3 Provider', web3);

            const accounts = await web3.eth.getAccounts();
            console.log("Account", accounts);

        const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3' // ganache localhost contract deployment address


        const contract = new web3.eth.Contract(abi, contractAddress);
        
        let tokenName = await contract.methods.name().call();
        console.log('tokenName = ', tokenName)
        dispatch(GetName(tokenName));

        let tokenSymbol = await contract.methods.symbol().call();
        console.log('tokenSymbol = ', tokenSymbol)
        dispatch(GetSymbol(tokenSymbol));

        
        let pauseStatus = await contract.methods.paused().call();
        console.log('pauseStatus = ', pauseStatus);
        dispatch(GetPauseStatus(pauseStatus));



        let tokenCost = await contract.methods.cost().call();
        console.log('tokenCost = ', tokenCost)
        dispatch(GetCost(tokenCost));

       let totalMintedTokens = await contract.methods.maxSupply().call();
        console.log('totalMintedTokens = ', totalMintedTokens)
        dispatch(GetMinted(totalMintedTokens));


       let totalSupply = await contract.methods.totalSupply().call();
        console.log('tokentotalSupply = ', totalSupply)
        dispatch(GetTotalSupply(totalSupply));

        //let tokenBalanceOf = await contract.methods.balanceOf("").call();
        //console.log('tokenBalanceOf = ', tokenBalanceOf)        
        
    }
}       catch (error) {
            console.log('error', error)
    }
}

