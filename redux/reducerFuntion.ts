import data from '../components/data.json';
import { buyData, likeData } from './constents';
import { dataContainer } from "./slice";

export const reducerMethod = (state = dataContainer, action: any) => {
    switch (action.type) {
        case likeData: {
            const likeVal = data.filter((item: any) => item.id === action.payload);
            return {
                ...state,
                like: [...state.like, ...likeVal],
            }
        }
        case buyData: {
            const likeVal = data.filter((item: any) => item.id === action.payload);
            console.log(likeVal)
            return {
                ...state,
                buy: [...state.buy, ...likeVal]
            }
        }
        default: {
            return state;
        }
    }
}