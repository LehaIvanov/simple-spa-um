import { AppBar, DatePicker, FlatButton, MenuItem, RaisedButton, SelectField, TextField } from "material-ui";
import * as React from "react";
import { browserHistory } from "react-router";
import { Gender, IUser } from "../../models";
import { Form } from "./Form";
import { IUserGetByIdProps } from "./propsInterfaces";

const handleGoToUserListBtnClick: () => void = (): void  => {
    browserHistory.push("/users");
};

const handleEditBtnClick: (id: number) => void = (id: number): void => {
    browserHistory.push(`/users/${id}/edit`);
};

export class Show extends React.Component<IUserGetByIdProps, IUser> {
    public constructor(props: IUserGetByIdProps) {
        super(props);
        this.state = {
            birthDate: new Date(),
            firstName: "",
            gender: Gender.Unknown,
            lastName: "",
         };
    }

    public render(): JSX.Element {
        // tslint:disable-next-line:no-inferrable-types
        const zDepth: number = 2;

        return (
            <div>
                <AppBar title="Show user" showMenuIconButton={false} />
                <div>
                    <TextField
                        name="firstName"
                        hintText="First Name"
                        value={this.state.firstName}
                        disabled={true} /><br />
                    <TextField
                        name="lastName"
                        hintText="Last Name"
                        value={this.state.lastName}
                        disabled={true} /><br />
                    <SelectField
                        floatingLabelText="Gender"
                        value={this.state.gender}
                        disabled={true}
                    >
                        <MenuItem value={Gender.Male} primaryText="Male" />
                        <MenuItem value={Gender.Female} primaryText="Female" />
                    </SelectField><br />
                    <DatePicker
                        autoOk={true}
                        hintText="Birth date"
                        value={this.state.birthDate}
                        disabled={true}/><br />
                    <RaisedButton
                        label="Edit"
                        secondary={true}
                        onTouchTap={handleEditBtnClick.bind(undefined, this.props.params.id)} />
                    <FlatButton label="Go to user list" onTouchTap={handleGoToUserListBtnClick}/>
                </div>
            </div>
        );
    }

    private componentDidMount(): void {
        this.props.userActions.getUser(this.props.params.id);
    }

     private componentWillReceiveProps(nextProps: IUserGetByIdProps): void {
        const user: IUser = { ...nextProps.userState.user };
        this.setState({ ...user });
    }
}
