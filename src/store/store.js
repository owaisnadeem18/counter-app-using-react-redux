import { createStore } from "redux";
import { counterReducer } from "./reducers/CounterReducer";

export const bankStore = createStore(counterReducer)