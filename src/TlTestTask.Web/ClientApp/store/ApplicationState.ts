import { IUser } from "../models";
import { IApplicationState } from "./IApplicationState";

class ApplicationState implements IApplicationState {
    public users: IUser[];

    public constructor(users: IUser[]) {
        this.users = users;
    }
}
