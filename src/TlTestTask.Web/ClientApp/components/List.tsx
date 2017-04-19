import * as React from "react";
import { IUser } from "../models";
import { IApplicationState } from "../store";

interface IList {
    users: IUser[];
    getUsers(): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
}

// tslint:disable-next-line:no-any
export class List extends React.Component<IList, any> {
    public render(): JSX.Element {
        return (
            <div>
                <ul>
                    { this.props.users.map((user: IUser) => <li>{`${user.firstName} ${user.lastName}`}</li>) }
                </ul>
            </div>
        );
    }

    private componentDidMount(): void {
        this.props.getUsers();
    }
}
