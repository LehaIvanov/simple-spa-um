import * as Redux from "redux";
import { IUser } from "../../models";
import { IApplicationState } from "../../store";

export interface IActionsUser extends Redux.ActionCreatorsMapObject {
    getUsers(): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
    saveUser(user: IUser): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
}
