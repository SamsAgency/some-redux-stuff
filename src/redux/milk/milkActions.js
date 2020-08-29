import { BUY_MILK } from './milkTypes';

export const buyMilk = (milkAmount = 5) => {
    return {
        type: BUY_MILK,
        payload: milkAmount
    }
}