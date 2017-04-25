import { DatePicker, FlatButton, MenuItem, RaisedButton, SelectField, TextField, TouchTapEvent } from "material-ui";
import * as React from "react";
import { browserHistory } from "react-router";
import { Gender, IUser } from "../../models";

interface IFormProps {
    user: IUser;
    handleSaveUser(user: IUser): void;
}

const handleGoToUserListBtnClick: () => void = (): void  => {
    browserHistory.push("/users");
};

export class Form extends React.Component<IFormProps, IUser> {
    public constructor(props: IFormProps) {
        super(props);
        this.state = {
            ...this.props.user,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSaveUser = this.handleSaveUser.bind(this);
        this.handleChangeBirthDate = this.handleChangeBirthDate.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div>
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
                <DatePicker
                    autoOk={true}
                    hintText="Birth date"
                    value={this.state.birthDate}
                    onChange={this.handleChangeBirthDate} /><br />
                <RaisedButton label="Save" secondary={true} onTouchTap={this.handleSaveUser} />
                <FlatButton label="Go to user list" onTouchTap={handleGoToUserListBtnClick}/>
            </div>
        );
    }

    private componentWillReceiveProps(nextProps: IFormProps): void {
        const user: IUser = { ...nextProps.user };
        this.setState({ ...user });
    }

    private handleChangeBirthDate(event: TouchTapEvent, value: Date): void {
        this.setState({
            ...this.state,
            birthDate: value,
        });
    }

    private handleGenderChange(event: TouchTapEvent, index: number, value: Gender): void {
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
