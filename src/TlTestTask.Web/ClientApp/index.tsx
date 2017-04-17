import * as React from "react";
import * as ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import * as ReactRouterRedux from "react-router-redux";
import { Root } from "./containers/Root";

ReactDOM.render(
    <Root />,
    document.getElementById("react-app"),
);

/*
import configureStore from "./store/configureStore";

const store = configureStore();
const history: ReactRouterRedux.ReactRouterReduxHistory = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById("react-app"),
);
*/
