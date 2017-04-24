import * as React from "react";
import * as ReactRouter from "react-router";
import { App } from "./components/App";
import * as User from "./components/user";
import { UsersContainer } from "./containers/UsersContainer";

const { Route, IndexRoute } = ReactRouter;

export const routes: JSX.Element = (
    <Route path="/" component={App}>
        <Route path="users" component={UsersContainer}>
            <IndexRoute component={User.List} />
            <Route path="new" component={User.New} />
            <Route path=":id" component={User.Show} />
            <Route path=":id/edit" component={User.Edit} />
        </Route>
    </Route>
);
