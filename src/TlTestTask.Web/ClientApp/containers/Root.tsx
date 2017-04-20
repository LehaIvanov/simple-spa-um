import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import * as pageActions from "../actions";
import { List } from "../components/List";
import { IUser } from "../models";
import { IApplicationState, IUserState } from "../store";

// tslint:disable-next-line:no-any
class App  extends React.Component<any, any> {
    public render(): JSX.Element {
        const { user } = this.props;
        const { getUsers } = this.props.pageActions;

        return (
            <div>
                <h1>List of users</h1>
                <List user={user} getUsers={getUsers} />
            </div>
        );
    }
}

const mapStateToProps: (state: IApplicationState) => IApplicationState =
    (state: IApplicationState): IApplicationState => ({
        user: state.user,
    });

// tslint:disable-next-line:no-any
const mapDispatchToProps: (dispatch: Redux.Dispatch<any>) => any = (dispatch: Redux.Dispatch<any>): any => ({
    // tslint:disable-next-line:no-any
    pageActions: Redux.bindActionCreators(pageActions as any, dispatch),
});

// tslint:disable-next-line:variable-name no-any
export const Root: any =
    ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
