import * as Redux from "redux";
import { IUser } from "../../models";
import { IApplicationState } from "../../store";

export interface IActionsUser extends Redux.ActionCreatorsMapObject {
    deleteUser(id: number): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
    getUser(id: number): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
    getUsers(): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
    saveUser(user: IUser): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void>;
}
