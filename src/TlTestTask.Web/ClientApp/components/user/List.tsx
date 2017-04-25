import { AppBar, Divider, FlatButton, IconButton, IconMenu, MenuItem } from "material-ui";
import { NavigationMoreVert } from "material-ui/svg-icons/navigation/more-vert";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import * as React from "react";
import { browserHistory, Link } from "react-router";
import { Gender, IUser } from "../../models";
import { IApplicationState, IUserState } from "../../store";
import { IUserProps } from "./propsInterfaces";

const handleAddUserBtnClick: () => void = (): void => {
    browserHistory.push("/users/new");
};

const handleEditBtnClick: (id: number) => void = (id: number): void  => {
    browserHistory.push(`/users/${id}/edit`);
};

const handleShowBtnClick: (id: number) => void = (id: number): void  => {
    browserHistory.push(`/users/${id}`);
};

const getGenderName: (user: IUser) => string = (user: IUser): string => {
    switch (user.gender) {
        case Gender.Female: {
            return "Female";
        }
        case Gender.Male: {
            return "Male";
        }
        default: {
            return "";
        }
    }
};

export class List extends React.Component<IUserProps, {}> {
    public constructor(props: IUserProps) {
        super(props);
    }

    public render(): JSX.Element {
        const userList: IUser[] = this.props.userState.list;

        return (
            <div>
                <AppBar title="Users" showMenuIconButton={false} />
                <FlatButton label="Add user" primary={true} onTouchTap={handleAddUserBtnClick} />
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>First name</TableHeaderColumn>
                            <TableHeaderColumn>Last name</TableHeaderColumn>
                            <TableHeaderColumn>Gender</TableHeaderColumn>
                            <TableHeaderColumn>Birth date</TableHeaderColumn>
                            <TableHeaderColumn />
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                    >
                        { userList.map((user: IUser) => (this.renderItemOfList(user))) }
                    </TableBody>
                </Table>
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
        // tslint:disable-next-line:no-inferrable-types
        const dateIsoFormatStrLength: number = 10;

        return (
            <TableRow>
                <TableRowColumn>
                    <Link to={`/users/${user.id}`} title="Show user">{user.firstName}</Link>
                </TableRowColumn>
                <TableRowColumn>
                    <Link to={`/users/${user.id}`} title="Show user">{user.lastName}</Link>
                </TableRowColumn>
                <TableRowColumn>{getGenderName(user)}</TableRowColumn>
                <TableRowColumn>{user.birthDate.toISOString().slice(0, dateIsoFormatStrLength)}</TableRowColumn>
                <TableRowColumn>
                    <FlatButton
                        label="Edit"
                        primary={true}
                        onTouchTap={handleEditBtnClick.bind(this, user.id)} />
                    <FlatButton
                        label="Delete"
                        secondary={true}
                        onTouchTap={this.handleDeleteBtnClick.bind(this, user.id)} />
                </TableRowColumn>
            </TableRow>
        );
    }
}
