
import { BUY_CHOCOLATE } from './chocolateTypes';
const initialState = {
    numberOfChocolate : 750
}

const chocolateReducer = (state = initialState, action) => {
     switch(action.type){
         case BUY_CHOCOLATE:
             return {
                numberOfChocolate: state.numberOfChocolate - action.payload
             }
         default: return state
     }
}
export default chocolateReducer