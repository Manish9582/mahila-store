import { Action } from 'redux';
import { dataContainer } from "./slice";

export  const reducerMethod=(state=dataContainer ,action:Action)=>{
    return state;
}