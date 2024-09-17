import { combineReducers, createStore } from "redux";
import countreducer from "./CounterReducer";

let rootreducer = combineReducers({
    count: countreducer,
});

let store = createStore(rootreducer);
export default store