import { MenuItem, RaisedButton, SelectField, TextField } from "material-ui";
import * as React from "react";
import { Link } from "react-router";
import { Gender, IUser } from "../../models";
import { IApplicationState } from "../../store";
import { IUserState } from "../../store";
import { IUserProps } from "./propsInterfaces";

/*interface IStateNewUser {
    firstName: string;
}*/

export class New extends React.Component<IUserProps, IUser> {
    public constructor(props: IUserProps) {
        super(props);
        this.state = {
            firstName: "",
            gender: 0,
            id: 0,
            lastName: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSaveUser = this.handleSaveUser.bind(this);
    }

    public render(): JSX.Element {
        return (
            <form>
                <TextField
                    name="firstName"
                    hintText="First Name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange} /><br />
                <TextField
                    name="lastName"
                    hintText="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange} /><br />
                <SelectField
                    floatingLabelText="Gender"
                    value={this.state.gender}
                    onChange={this.handleGenderChange}>
                        <MenuItem value={Gender.Male} primaryText="Male" />
                        <MenuItem value={Gender.Female} primaryText="Female" />
                </SelectField><br />
                <RaisedButton label="Save" secondary={true} onTouchTap={this.handleSaveUser} />
            </form>
        );
    }

    private handleGenderChange(event: React.FormEvent<HTMLSelectElement>, index: number, value: Gender): void {
        event.persist();
        this.setState({
            ...this.state,
            gender: value,
        });
    }

    private handleInputChange(event: React.FormEvent<HTMLInputElement>, value: string): void {
        event.persist();
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const name: string = target.name;
        this.setState({
            ...this.state,
            [name]: value,
        });
    }

    private handleSaveUser(): void {
        const user: IUser = this.state;
        this.props.userActions.saveUser(user);
        console.log(this.props.userState.user);
    }

    /*private handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
        event.persist();
        const target: EventTarget = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }*/
}

/*<label>
                    First Name:
                    <input
                        name="firstName"
                        type="text"
                        onChange={this.handleInputChange} />
                </label>*/

// tslint:disable-next-line:variable-name
/*export const New: () => JSX.Element = (): JSX.Element  => {
    console.log("New");

    return (
        <div>
            <Link to={"/users"}>Back</Link>
            <h2>New user</h2>
        </div>
    );
};*/
