import * as React from "react";
import { Link } from "react-router";
import { Gender, IUser } from "../../models";
import { Form } from "./Form";
import { IUserProps } from "./propsInterfaces";

interface IParamsEditRoute {
    id: number;
}

interface IEditProps extends IUserProps {
    params: IParamsEditRoute;
}

export class Edit extends React.Component<IEditProps, IUser> {
    public constructor(props: IEditProps) {
        super(props);
        this.handleSaveUser = this.handleSaveUser.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h2>Edit user</h2>
                <Link to={"/users"}>Back</Link>
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
