import { BUY_ICECREAM } from './iceCreamTypes';

export  const buyIceCream = (iceCreamNumber = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: iceCreamNumber
    }
}