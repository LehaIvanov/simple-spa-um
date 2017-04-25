import "./css/site.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import * as ReactRouterRedux from "react-router-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import * as Redux from "redux";
import { Root } from "./containers/Root";

import { configureStore, IApplicationState } from "./store";

const initialState: IApplicationState = {
    user: {
        list: [],
    },
};
const store: Redux.Store<IApplicationState> = configureStore(initialState);
const history: ReactRouterRedux.ReactRouterReduxHistory = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);

/* Needed for onTouchTap
   http://stackoverflow.com/a/34015469/988941 */
injectTapEventPlugin();

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById("react-app"),
);
