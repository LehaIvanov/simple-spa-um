import * as Redux from "redux";
import * as dataSourceUser from "../data/user";
import { IUser } from "../models";
import { IApplicationState } from "../store";
import * as constants from "./constants";
import { IAction } from "./IAction";

export const getUsers: () => (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =
    (): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =>
        (dispatch: Redux.Dispatch<IApplicationState>): Promise<void> => {
            dispatch({
                payload: [],
                type: constants.GET_USERS_REQUEST,
            });

            return dataSourceUser.getAll().then((data: IUser[]): void => {
                dispatch({
                    payload: data,
                    type: constants.GET_USERS_SUCCESS,
                });
            });
        };
