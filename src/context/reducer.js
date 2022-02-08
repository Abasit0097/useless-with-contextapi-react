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



        default:
            return state;
    }


}