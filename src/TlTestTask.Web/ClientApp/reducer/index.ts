import { IApplicationState } from "ClientApp/store";
import * as Redux from "redux";
import { user } from "./user";

export const rootReducer: Redux.Reducer<IApplicationState> = Redux.combineReducers<IApplicationState>({
    user,
});
