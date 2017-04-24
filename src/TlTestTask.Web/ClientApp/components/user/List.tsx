import { FlatButton } from "material-ui";
import * as React from "react";
import { browserHistory, Link } from "react-router";
import { IUser } from "../../models";
import { IApplicationState, IUserState } from "../../store";
import { IUserProps } from "./propsInterfaces";

const handleEditBtnClick: (id: number) => void = (id: number): void  => {
    browserHistory.push(`/users/${id}/edit`);
};

export class List extends React.Component<IUserProps, {}> {
    public constructor(props: IUserProps) {
        super(props);
    }

    public render(): JSX.Element {
        const userList: IUser[] = this.props.userState.list;

        return (
            <div>
                <h2>List of users</h2>
                <Link to={"/users/new"}>Add</Link>
                <ul>
                    { userList.map((user: IUser) => (this.renderItemOfList(user))) }
                </ul>
            </div>
        );
    }

    private componentDidMount(): void {
        this.props.userActions.getUsers();
    }

    private handleDeleteBtnClick(id: number): void {
        this.props.userActions.deleteUser(id);
    }

    private renderItemOfList(user: IUser): JSX.Element {
        return (
            <li>
                <Link to={`/users/${user.id}`}>{`${user.firstName} ${user.lastName}`}</Link>
                <FlatButton label="Edit" onTouchTap={handleEditBtnClick.bind(this, user.id)} />
                <FlatButton label="Delete" onTouchTap={this.handleDeleteBtnClick.bind(this, user.id)} />
            </li>
        );
    }
}
