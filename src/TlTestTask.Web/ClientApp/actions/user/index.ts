import * as Redux from "redux";
import * as dataSourceUser from "../../data/user";
import { IUser } from "../../models";
import { IApplicationState } from "../../store";
import { IAction } from "../IAction";
import * as constants from "./constants";

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

export const saveUser: (user: IUser) => (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =
    (user: IUser): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =>
        (dispatch: Redux.Dispatch<IApplicationState>): Promise<void> => {
            dispatch({
                payload: user,
                type: constants.CREAT_USER_REQUEST,
            });

            return dataSourceUser.add(user).then((data: IUser) => {
                dispatch({
                    payload: data,
                    type: constants.CREAT_USER_SUCCESS,
                });
            });
        };
