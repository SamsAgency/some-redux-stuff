import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import CakeReducer from './cakes/cakeReducer';
import sweetReducer from './sweet/sweetReducer';
import cheeseReducer from "./cheese/cheeseReducer";
import butterReducer from "./butter/butterReducer";
import milkReducer from './milk/milkReducer';
import chocolateReducer from "./chocolate/chocolateReducer";


const rootReducer = combineReducers({
    iceCream: iceCreamReducer,
    cakes: CakeReducer,
    sweet: sweetReducer,
    cheese: cheeseReducer,
    butter: butterReducer,
    milk: milkReducer,
    chocolate: chocolateReducer
})
export default rootReducer