import { createStore, combineReducers } from "redux";
import { quotes } from "./reducers/quotes";

const reducers = combineReducers({
    quotes
})

const store = createStore(reducers)

export default store;