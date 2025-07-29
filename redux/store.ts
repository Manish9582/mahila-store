import { combineReducers, createStore } from "redux";
import { reducerMethod } from "./reducerFuntion";

const rootReducer = combineReducers({
  buy: reducerMethod,
});

const store = createStore(rootReducer);
export default store;