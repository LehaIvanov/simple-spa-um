import { AppBar } from "material-ui";
import * as React from "react";
import { Link } from "react-router";
import { Gender, IUser } from "../../models";
import { Form } from "./Form";
import { IUserGetByIdProps } from "./propsInterfaces";

export class Edit extends React.Component<IUserGetByIdProps, IUser> {
    public constructor(props: IUserGetByIdProps) {
        super(props);
        this.handleSaveUser = this.handleSaveUser.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div>
                <AppBar title="Edit user" showMenuIconButton={false} />
                <Form user={this.props.userState.user} handleSaveUser={this.handleSaveUser} />
            </div>
        );
    }

    private componentDidMount(): void {
        this.props.userActions.getUser(this.props.params.id);
    }

    private handleSaveUser(user: IUser): void {
        this.props.userActions.saveUser(user);
    }
}
