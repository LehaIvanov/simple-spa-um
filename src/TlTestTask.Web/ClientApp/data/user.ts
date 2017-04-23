import { IUser } from "../models";

// tslint:disable-next-line:no-inferrable-types
const apiPrefix: string = "/api/user";

export const getAll: () => Promise<IUser[]> = (): Promise<IUser[]> =>
    fetch(apiPrefix).then((res: Response) => res.json() as Promise<IUser[]>);

export const get: (id: number) => Promise<IUser> = (id: number): Promise<IUser> =>
    fetch(`${apiPrefix}/${id}`).then((res: Response) => res.json() as Promise<IUser>);

export const add: (user: IUser) => Promise<IUser> = (user: IUser): Promise<IUser> => {
    const reqInit: RequestInit = {
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    } as RequestInit;

    return fetch(apiPrefix, reqInit).then((res: Response) => res.json() as Promise<IUser>);
};

/*
export const update: (user: IUser) => Promise<void> = (user: IUser): Promise<void> => {
    const reqInit: RequestInit = {
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    } as RequestInit;

    return fetch(apiPrefix, reqInit).then((res: Response) => res);
};
*/