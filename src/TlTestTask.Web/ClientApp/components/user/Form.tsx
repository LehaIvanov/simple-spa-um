import { MenuItem, RaisedButton, SelectField, TextField } from "material-ui";
import * as React from "react";
import { Gender, IUser } from "../../models";

interface IFormProps {
    user: IUser;
    handleSaveUser(user: IUser): void;
}

export class Form extends React.Component<IFormProps, IUser> {
    public constructor(props: IFormProps) {
        super(props);
        this.state = { ...this.props.user };
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

    private componentWillReceiveProps(nextProps: IFormProps): void {
        const user: IUser = { ...nextProps.user };
        this.setState({ ...user });
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
        this.props.handleSaveUser(user);
    }
}
