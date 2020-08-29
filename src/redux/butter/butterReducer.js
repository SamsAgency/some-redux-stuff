
import { BUY_BUTTER } from './butterTypes';

const initialState = {
    numberOfButter: 500
}

const butterReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_BUTTER:
            return {
                numberOfButter: state.numberOfButter - action.payload
            }
        default: return state
    }
}

export default butterReducer