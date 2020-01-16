import { combineReducers } from "redux";
import memoReducer, { IMemoState } from "./memo";

export interface IRootReducerState
{
    memoReducer: IMemoState;
}

const rootReducer = combineReducers({
    memoReducer
});

export default rootReducer;