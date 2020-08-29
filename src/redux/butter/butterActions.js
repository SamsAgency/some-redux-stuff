import { BUY_BUTTER } from './butterTypes';


export const buyButter = (butterNumber = 5) => {
    return{
        type: BUY_BUTTER,
        payload: butterNumber
    }
}