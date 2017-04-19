import { IApplicationState } from "ClientApp/store";
import * as Redux from "redux";
import { userReduce } from "./users";

export const rootReducer: Redux.Reducer<IApplicationState> = Redux.combineReducers<IApplicationState>({
    userReduce,
});
