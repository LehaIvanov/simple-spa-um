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
            firstName: "",
            gender: Gender.Unknown,
            lastName: "",
        };

        return (
            <div>
                <h2>New user</h2>
                <Link to={"/users"}>Back</Link>
                <Form user={initialUser} handleSaveUser={this.handleSaveUser} />
            </div>
        );
    }

    private handleSaveUser(user: IUser): void {
        this.props.userActions.saveUser(user);
    }
}
