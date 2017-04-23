import * as React from "react";
import { Link } from "react-router";
import { IUser } from "../../models";
import { IApplicationState, IUserState } from "../../store";
import { IUserProps } from "./propsInterfaces";

const renderItemOfList: (user: IUser) => JSX.Element = (user: IUser): JSX.Element => (
    <li>
        <Link to={`/users/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
    </li>
);

export class List extends React.Component<IUserProps, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <h2>List of users</h2>
                <Link to={"/users/new"}>Add</Link>
                <ul>
                    { this.props.userState.list.map((user: IUser) => (renderItemOfList(user))) }
                </ul>
            </div>
        );
    }

    private componentDidMount(): void {
        this.props.userActions.getUsers();
    }
}
