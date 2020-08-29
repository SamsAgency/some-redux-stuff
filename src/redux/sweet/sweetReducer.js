import { BUY_SWEET } from './sweetTypes';

const initialState = {
    numberOfSweet: 300
}

const sweetReducer = (state = initialState ,action) => {
    switch(action.types){
        case BUY_SWEET:
            return {
                ...state,
                numberOfSweet: state.numberOfSweet - 2
            }
        default: return state
    }
}

export default sweetReducer