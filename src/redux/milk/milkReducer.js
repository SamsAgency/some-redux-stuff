import { BUY_MILK } from './milkTypes';

const initialState =  {
    milkAmount : 1000
}

const milkReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_MILK:
            return {
                ...state,
                milkAmount: state.milkAmount - action.payload
            }
        default: return state
    }
}

export default milkReducer