export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'Get_Name':
            return {
                ...state, name: action.payload
            }

        case 'Get_Symbol':
            return {
                ...state, symbol: action.payload
            }

        case 'Pause_Status':
            return {
                ...state, pause: action.payload
            }

        case 'Get_Cost':
            return {
                ...state, cost: action.payload
            }

        case 'Get_Total_Minted':
            return {
                ...state, max_mint: action.payload
            }

        case 'Get_Total_Supply':
            return {
                ...state, total_supply: action.payload
            }

            case 'Get_Mint_Token':
            return {
                ...state, mint_token: action.payload
            }

            case 'Get_Balance_Of':
            return {
                ...state, balance_of: action.payload
            }

            case 'Get_Account':
            return {
                ...state, account_connected: action.payload
            }

        


        default:
            return state;
    }


}