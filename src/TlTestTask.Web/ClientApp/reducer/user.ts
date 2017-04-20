import * as constants from "../actions/constants";
import { IAction } from "../actions/IAction";
import { IUser } from "../models";
import { IApplicationState, IUserState } from "../store";

const initialState: IUserState = {
    list: [],
};

export const user: (state: IUserState, action: IAction) => IUserState =
    (state: IUserState = initialState, action: IAction): IUserState => {
        switch (action.type) {
            case constants.GET_USERS_REQUEST: {
                return Object.assign({}, state);
            }
            case constants.GET_USERS_SUCCESS: {
                return {
                    ...state,
                    list: action.payload,
                };
            }
            default: {
                return Object.assign({}, state);
            }
        }
    };
