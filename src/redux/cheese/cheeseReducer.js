
import { BUY_CHEESE } from './cheeseTypes';

const initialState = {
    numberOfCheese: 50
}

const cheeseReducer = ( state = initialState,action) => {
    switch(action.type){
        case BUY_CHEESE:
            return {
                ...state,
                numberOfCheese: state.numberOfCheese - action.payload
            }
        default: return state
    }
}
export default cheeseReducer