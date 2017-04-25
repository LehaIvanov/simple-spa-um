import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import * as ReactRouterRedux from "react-router-redux";
import * as Redux from "redux";
import { routes } from "../routers";
import { IApplicationState } from "../store";

interface IRootArg {
    history: ReactRouterRedux.ReactRouterReduxHistory;
    store: Redux.Store<IApplicationState>;
}

// tslint:disable-next-line:variable-name
export const Root: ({store, history}: IRootArg) => JSX.Element = ({ store, history }: IRootArg): JSX.Element  => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);
