import { AppBar } from "material-ui";
import * as React from "react";
import { Link } from "react-router";
import { Gender, IUser } from "../../models";
import { Form } from "./Form";
import { IUserProps } from "./propsInterfaces";

export class New extends React.Component<IUserProps, IUser> {
    public constructor(props: IUserProps) {
        super(props);
        this.handleSaveUser = this.handleSaveUser.bind(this);
    }

    public render(): JSX.Element {
        const initialUser: IUser = {
            birthDate: new Date(),
            firstName: "",
            gender: Gender.Unknown,
            lastName: "",
        };

        return (
            <div>
                <AppBar title="New user" showMenuIconButton={false} />
                <Form user={initialUser} handleSaveUser={this.handleSaveUser} />
            </div>
        );
    }

    private handleSaveUser(user: IUser): void {
        this.props.userActions.saveUser(user);
    }
}
