import { browserHistory } from "react-router";
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
                type: constants.SAVE_USER_REQUEST,
            });

            if (user.id) {
                return dataSourceUser.update(user).then(() => {
                    dispatch({
                        payload: user,
                        type: constants.SAVE_USER_SUCCESS,
                    });
                });
            }

            return dataSourceUser.add(user).then((data: IUser) => {
                dispatch({
                    payload: data,
                    type: constants.SAVE_USER_SUCCESS,
                });
                browserHistory.push(`/users/${data.id}`);
            });
        };

export const getUser: (id: number) => (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =
    (id: number): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =>
        (dispatch: Redux.Dispatch<IApplicationState>): Promise<void> => {
            dispatch({
                payload: id,
                type: constants.GET_USERS_REQUEST,
            });

            return dataSourceUser.get(id).then((data: IUser) => {
                dispatch({
                    payload: data,
                    type: constants.GET_USER_SUCCESS,
                });
            });
        };

export const deleteUser: (id: number) => (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =
    (id: number): (dispatch: Redux.Dispatch<IApplicationState>) => Promise<void> =>
        (dispatch: Redux.Dispatch<IApplicationState>): Promise<void> => {
            dispatch({
                payload: id,
                type: constants.DELETE_USER_REQUEST,
            });

            return dataSourceUser.deleteUser(id).then(() => {
                dispatch({
                    payload: id,
                    type: constants.DELETE_USER_SUCCESS,
                });
            });
        };
