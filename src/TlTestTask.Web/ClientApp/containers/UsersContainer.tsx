import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import * as actionsUserList from "../actions/user";
import { IActionsUser } from "../actions/user/IActionsUser";
import * as UsersComponents from "../components/user";
import { IUserActionsProps, IUserProps, IUserStatesProps } from "../components/user/propsInterfaces";
import { IUser } from "../models";
import { IApplicationState, IUserState } from "../store";

class UsersContainerComponent extends React.Component<IUserProps, {}> {
    public render(): JSX.Element {
        const { userState, userActions } = this.props;
        const childrenWithProps: Array<React.ReactElement<IUserProps>> = React.Children.map(this.props.children,
            (child: React.ReactElement<IUserProps>) => React.cloneElement(child, {
                userActions,
                userState,
            }));

        return (
            <div>
                <h1>User Management System</h1>
                {childrenWithProps}
            </div>
        );
    }
}

const mapStateToProps: (states: IApplicationState) => IUserStatesProps =
    (states: IApplicationState): IUserStatesProps => ({ userState: states.user });

const mapDispatchToProps: (dispatch: Redux.Dispatch<IActionsUser>) => IUserActionsProps =
    (dispatch: Redux.Dispatch<IActionsUser>): IUserActionsProps => {
        const actions: IActionsUser = { ...actionsUserList };

        return {
            userActions: Redux.bindActionCreators(actions, dispatch),
        };
    };

// tslint:disable-next-line:variable-name
export const UsersContainer: ReactRedux.ComponentClass<{}> =
    ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);

/*interface IUsersProps extends IUserState, ActionsUser.IActionsUser {
}*/
/*
interface IStatesContainer {
    states: IApplicationState;
}

interface IActionsContainer {
    actions: ActionsUser.IActionsUser;
}
*/
/* interface IUsersProps extends IStatesContainer, IActionsContainer, { children?: ReactNode; } */

/*
class App  extends React.Component<any, any> {
    public render(): JSX.Element {
        const { user } = this.props;
        const { getUsers } = this.props.pageActions;

        return (
            <div>
                <h1>List of users</h1>
                <UsersComponents.List user={user} getUsers={getUsers} />
            </div>
            {this.props.children}
        );
    }
}
*/
