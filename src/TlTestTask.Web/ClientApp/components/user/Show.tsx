import * as React from "react";
import { Link } from "react-router";
import { IUser } from "../../models";
import { IApplicationState } from "../../store";
import { IUserState } from "../../store";

// tslint:disable-next-line:variable-name
export const Show: () => JSX.Element = (): JSX.Element  => (
    <div>
        <Link to={"/users"}>Back</Link>
        <h2>Show user</h2>
    </div>
);

// tslint:disable-next-line:no-any
/*
export class Show extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <h2>Show user</h2>
            </div>
        );
    }
}
*/
