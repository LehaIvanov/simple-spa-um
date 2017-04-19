import { IAction } from "./IAction";

class Action implements IAction {
    // tslint:disable-next-line:no-any
    public payload: any;
    public type: string;

    // tslint:disable-next-line:no-any
    public constructor(payload: any, type: string) {
        this.payload = payload;
        this.type = type;
    }
}
