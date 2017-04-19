import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as Redux from "redux";
import { Root } from "./containers/Root";
import { configureStore, IApplicationState } from "./store";

const initialState: IApplicationState = {
    users: [],
};
const store: Redux.Store<IApplicationState> = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
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
