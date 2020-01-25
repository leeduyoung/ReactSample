import { combineReducers } from "redux";
import userReducer, { IUserState } from "./user";

export interface IRootReducerState
{
    userReducer: IUserState
}

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;