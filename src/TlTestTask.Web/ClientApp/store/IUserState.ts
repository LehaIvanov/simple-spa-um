import { IUser } from "../models/IUser";

export interface IUserState {
    list: IUser[];
    user?: IUser;
}
