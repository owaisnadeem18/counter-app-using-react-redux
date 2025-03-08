import { createStore } from "redux";
import { counterReducer } from "./reducers/counter";

export const bankStore = createStore(counterReducer)