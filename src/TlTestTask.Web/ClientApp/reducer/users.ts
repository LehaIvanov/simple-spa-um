import * as constants from "../actions/constants";
import { IAction } from "../actions/IAction";
import { IUser } from "../models";
import { IApplicationState } from "../store";

export const userReduce: (state: IApplicationState, action: IAction) => IApplicationState =
    (state: IApplicationState = { users: [] } , action: IAction): IApplicationState => {
        switch (action.type) {
            case constants.GET_USERS_REQUEST: {
                return state;
            }
            case constants.GET_USERS_SUCCESS: {
                return {
                    users: action.payload,
                };
            }
            default: {
                return state;
            }
        }
    };
