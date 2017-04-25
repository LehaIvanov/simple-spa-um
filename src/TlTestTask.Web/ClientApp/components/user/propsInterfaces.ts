import { IActionsUser } from "../../actions/user/IActionsUser";
import { IApplicationState, IUserState } from "../../store";

export interface IUserStatesProps {
    userState: IUserState;
}

export interface IUserActionsProps {
    userActions: IActionsUser;
}

export interface IUserProps extends IUserActionsProps, IUserStatesProps {}

interface IParamsGetByIdRoute {
    id: number;
}

export interface IUserGetByIdProps extends IUserProps {
    params: IParamsGetByIdRoute;
}
