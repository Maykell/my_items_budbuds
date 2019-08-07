import { combineReducers } from "redux";

import { itemReducer as item } from "./item";

const reducers = combineReducers({
    item
});

export default reducers;
