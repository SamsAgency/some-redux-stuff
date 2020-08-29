import { BUY_CHOCOLATE } from './chocolateTypes';


export const buyChocolate = (numberOfChocolate = 10) => {
    return {
        type: BUY_CHOCOLATE,
        payload: numberOfChocolate
    }
}