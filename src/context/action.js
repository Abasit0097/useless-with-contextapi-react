export const GetName = (tokenName) => {
    return {
        type: 'Get_Name',
        payload: tokenName

    }
}

export const GetSymbol = (tokenSymbol) => {
    return {
        type: 'Get_Symbol',
        payload: tokenSymbol

    }
}


export const GetPauseStatus = (pauseStatus) => {
    return {
        type: 'Pause_Status',
        payload: pauseStatus

    }
}


export const GetCost = (tokenCost) => {
    return {
        type: 'Get_Cost',
        payload: tokenCost

    }
}

export const GetMinted = (totalMintedTokens) => {
    return {
        type: 'Get_Total_Minted',
        payload: totalMintedTokens

    }
}

export const GetTotalSupply = (totalSupply) => {
    return {
        type: 'Get_Total_Supply',
        payload: totalSupply

    }
}

/*export const GetMintToken = (Transaction) => {
    return {
        type: 'Get_Mint_Token',
        payload: Transaction

    }
}
*/
