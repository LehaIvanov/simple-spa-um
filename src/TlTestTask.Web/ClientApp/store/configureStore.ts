import * as Redux from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducer";
import { IApplicationState } from "./IApplicationState";

export const configureStore: (preloadedState: IApplicationState) => Redux.Store<IApplicationState> =
    (preloadedState: IApplicationState): Redux.Store<IApplicationState> =>
        Redux.createStore(
            rootReducer,
            preloadedState,
            Redux.applyMiddleware(thunk),
        );
