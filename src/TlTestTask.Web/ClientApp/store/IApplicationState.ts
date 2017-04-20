import { IUser } from "../models/IUser";
import { IUserState } from "./IUserState";

export interface IApplicationState {
    user: IUserState;
}
