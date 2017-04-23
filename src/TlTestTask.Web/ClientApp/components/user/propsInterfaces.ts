import { IActionsUser } from "../../actions/user/IActionsUser";
import { IApplicationState, IUserState } from "../../store";

export interface IUserStatesProps {
    userState: IUserState;
}

export interface IUserActionsProps {
    userActions: IActionsUser;
}

export interface IUserProps extends IUserActionsProps, IUserStatesProps {}

/*
export interface IUsersProps {
    user: IUserState;
    getUsers(): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
}
*/
