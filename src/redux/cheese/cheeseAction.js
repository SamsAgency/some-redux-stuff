import { BUY_CHEESE } from './cheeseTypes';


export const buyCheese = (cheeseNumber = 3) => {
    return{
        type: BUY_CHEESE, 
        payload: cheeseNumber
    }
}