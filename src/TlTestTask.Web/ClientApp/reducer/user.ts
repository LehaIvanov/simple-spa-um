import { IAction } from "../actions/IAction";
import * as constants from "../actions/user/constants";
import { IUser } from "../models";
import { IApplicationState, IUserState } from "../store";

const initialState: IUserState = {
    list: [],
    user: undefined,
};

export const user: (state: IUserState, action: IAction) => IUserState =
    (state: IUserState = initialState, action: IAction): IUserState => {
        switch (action.type) {
            case constants.GET_USERS_REQUEST: {
                return { ...state };
            }
            case constants.GET_USERS_SUCCESS: {
                return {
                    ...state,
                    list: action.payload,
                };
            }
            case constants.CREAT_USER_REQUEST: {
                return { ...state };
            }
            case constants.CREAT_USER_SUCCESS: {
                return {
                    ...state,
                    user: action.payload,
                };
            }
            default: {
                return { ...state };
            }
        }
    };
